/*!
 * dc-lite.js — tiny runtime for the concept's template syntax (≈200 lines, no dependencies).
 *
 * The pages keep the exact markup of the design canvas artboards. This runtime renders the
 * <template id="dc-tpl"> of a page into <div id="dc-root"> and supports exactly what the
 * artboards use:
 *   {{ path }}                         dotted lookups in text and attributes (no expressions)
 *   onClick="{{ fn }}"                 event handlers (any on* attribute, delegated)
 *   <sc-for list="{{ xs }}" as="x">    loops — {{ x.field }} and {{ $index }} in scope
 *   <sc-if value="{{ cond }}">         conditionals
 *   class Component extends DCLogic { renderVals() { return {...}; } }
 *     with this.props, this.state, this.setState(patch), this.forceUpdate(),
 *     componentDidMount() and componentDidUpdate(prevProps, prevState)
 *
 * Re-renders patch the live DOM in place, so focus, scroll and typed input survive.
 * It is a prototyping aid: for production, port each page's template + renderVals() logic to
 * your stack (Astro / Next / Vue / plain JS) — the mapping is 1:1.
 */
(function () {
  'use strict';

  var HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
  var WHOLE = /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/;
  var EVENT_ALIAS = { doubleclick: 'dblclick', focus: 'focusin', blur: 'focusout' };

  class DCLogic {
    constructor(props) {
      this.props = props || {};
      this.state = {};
      this.__render = null;
    }
    setState(patch) {
      var prev = this.state;
      var next = typeof patch === 'function' ? patch(this.state, this.props) : patch;
      this.state = Object.assign({}, this.state, next || {});
      if (this.__render) {
        this.__render();
        if (typeof this.componentDidUpdate === 'function') this.componentDidUpdate(this.props, prev);
      }
    }
    forceUpdate() {
      if (this.__render) this.__render();
    }
  }

  function lookup(scope, path) {
    if (path === 'true') return true;
    if (path === 'false') return false;
    if (path === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(path)) return parseFloat(path);
    var parts = path.split('.');
    var v = scope;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }

  function interpolate(str, scope) {
    return str.replace(HOLE, function (_, p) {
      var v = lookup(scope, p);
      return v == null ? '' : String(v);
    });
  }

  // A node is "dynamic" when it (or anything inside it) needs the scope. Static subtrees are
  // cloned in one go, which keeps rendering fast on long pages.
  var dynCache = new WeakMap();
  function isDynamic(node) {
    if (dynCache.has(node)) return dynCache.get(node);
    var dyn = false;
    if (node.nodeType === 3) {
      dyn = node.nodeValue.indexOf('{{') !== -1;
    } else if (node.nodeType === 1) {
      var ln = node.localName;
      if (ln === 'sc-for' || ln === 'sc-if') {
        dyn = true;
      } else {
        for (var i = 0; i < node.attributes.length && !dyn; i++) {
          if (node.attributes[i].value.indexOf('{{') !== -1) dyn = true;
        }
        for (var c = node.firstChild; c && !dyn; c = c.nextSibling) {
          if (isDynamic(c)) dyn = true;
        }
      }
    }
    dynCache.set(node, dyn);
    return dyn;
  }

  function renderChildren(src, out, scope, events) {
    for (var n = src.firstChild; n; n = n.nextSibling) renderNode(n, out, scope, events);
  }

  function renderNode(n, out, scope, events) {
    if (n.nodeType !== 1 && n.nodeType !== 3) return; // comments etc.
    if (!isDynamic(n)) {
      out.appendChild(document.importNode(n, true));
      return;
    }
    if (n.nodeType === 3) {
      out.appendChild(document.createTextNode(interpolate(n.nodeValue, scope)));
      return;
    }
    var ln = n.localName;
    if (ln === 'sc-for') {
      var m = WHOLE.exec(n.getAttribute('list') || '');
      var list = m ? lookup(scope, m[1]) : null;
      var as = n.getAttribute('as') || 'item';
      if (list && list.length) {
        for (var i = 0; i < list.length; i++) {
          var s = Object.create(scope);
          s[as] = list[i];
          s.$index = i;
          renderChildren(n, out, s, events);
        }
      }
      return;
    }
    if (ln === 'sc-if') {
      var mv = WHOLE.exec(n.getAttribute('value') || '');
      if (mv && lookup(scope, mv[1])) renderChildren(n, out, scope, events);
      return;
    }

    var el = document.createElementNS(n.namespaceURI, n.localName);
    for (var a = 0; a < n.attributes.length; a++) {
      var name = n.attributes[a].name;
      var val = n.attributes[a].value;
      if (val.indexOf('{{') === -1) {
        el.setAttribute(name, val);
        continue;
      }
      var w = WHOLE.exec(val);
      if (w) {
        var v = lookup(scope, w[1]);
        if (name.slice(0, 2) === 'on') {
          if (typeof v === 'function') {
            var type = name.slice(2);
            type = EVENT_ALIAS[type] || type;
            (el.__dc || (el.__dc = {}))[type] = v;
            events[type] = true;
          }
          continue;
        }
        if (typeof v === 'boolean' && name.slice(0, 5) !== 'aria-') {
          if (v) el.setAttribute(name, '');
          continue;
        }
        if (v == null) continue;
        el.setAttribute(name, String(v));
        continue;
      }
      el.setAttribute(name, interpolate(val, scope));
    }
    renderChildren(n, el, scope, events);
    out.appendChild(el);
  }

  // Minimal in-place DOM patcher (positional): keeps element identity where the shape matches.
  function morphChildren(from, to) {
    var f = from.firstChild;
    var t = to.firstChild;
    while (t) {
      var tNext = t.nextSibling;
      if (!f) {
        from.appendChild(t);
      } else {
        var fNext = f.nextSibling;
        morph(f, t);
        f = fNext;
      }
      t = tNext;
    }
    while (f) {
      var nx = f.nextSibling;
      from.removeChild(f);
      f = nx;
    }
  }

  function morph(f, t) {
    if (f.nodeType !== t.nodeType || f.nodeName !== t.nodeName || f.namespaceURI !== t.namespaceURI) {
      f.parentNode.replaceChild(t, f);
      return;
    }
    if (f.nodeType === 3) {
      if (f.nodeValue !== t.nodeValue) f.nodeValue = t.nodeValue;
      return;
    }
    if (f.nodeType !== 1) return;
    var i, nm;
    for (i = f.attributes.length - 1; i >= 0; i--) {
      nm = f.attributes[i].name;
      // keep state the user changed in the browser (an opened <details>)
      if (nm === 'open' && f.localName === 'details') continue;
      if (!t.hasAttribute(nm)) f.removeAttribute(nm);
    }
    for (i = 0; i < t.attributes.length; i++) {
      nm = t.attributes[i].name;
      var v = t.attributes[i].value;
      if (f.getAttribute(nm) !== v) f.setAttribute(nm, v);
    }
    f.__dc = t.__dc;
    var tag = f.localName;
    if ((tag === 'input' || tag === 'select') && t.hasAttribute('value') &&
        f.value !== t.getAttribute('value') && document.activeElement !== f) {
      f.value = t.getAttribute('value');
    }
    morphChildren(f, t);
  }

  function delegate(root, type) {
    root.addEventListener(type, function (e) {
      for (var n = e.target; n && n !== root; n = n.parentNode) {
        if (n.__dc && n.__dc[type]) {
          if (type === 'click' && n.localName === 'a' && n.getAttribute('href') === '#') e.preventDefault();
          n.__dc[type].call(null, e);
          return;
        }
      }
    });
  }

  function mount(Comp, props) {
    var tpl = document.getElementById('dc-tpl');
    var root = document.getElementById('dc-root');
    if (!tpl || !root) throw new Error('dc-lite: #dc-tpl or #dc-root missing');
    var inst = new Comp(props || {});
    if (!inst.state) inst.state = {};
    var bound = {};
    var mounted = false;

    function render() {
      var vals = typeof inst.renderVals === 'function' ? (inst.renderVals() || {}) : {};
      var events = {};
      var box = document.createElement('div');
      renderChildren(tpl.content, box, vals, events);
      if (!mounted) {
        while (box.firstChild) root.appendChild(box.firstChild);
        mounted = true;
      } else {
        morphChildren(root, box);
      }
      Object.keys(events).forEach(function (type) {
        if (!bound[type]) {
          bound[type] = true;
          delegate(root, type);
        }
      });
      document.dispatchEvent(new CustomEvent('dc:render', { detail: { root: root } }));
    }

    inst.__render = render;
    render();
    if (typeof inst.componentDidMount === 'function') inst.componentDidMount();
    return inst;
  }

  window.DCLogic = DCLogic;
  window.DC = { mount: mount, version: '1.0.0' };
})();
