/*!
 * photos.js — fills the concept's photo slots ([data-photo]) with real photos.
 *
 * Every slot carries an <img class="dc-photo"> (added at export). Its source is:
 *   1. data-photo-src on the slot — the matching photo from the current site / the v2 POC, or
 *   2. a stand-in from the POC photo pool below, until the new photo shoot is in.
 * If a photo cannot load (offline, hotlinking blocked) the styled, captioned placeholder stays.
 * Replace the URLs with your own hosted files before launch.
 */
(function () {
  'use strict';

  var POOL = [
    'https://novoshkola.com.ua/resources/images/news/2355-IMG_8538%20(1).jpg',
    'https://novoshkola.com.ua/resources/images/news/1216-0.63949500%201767099361.JPG',
    'https://novoshkola.com.ua/resources/images/news/4182-3%20(3).jpg',
    'https://novoshkola.com.ua/resources/images/news/1216-0.32631300%201767099375.jpg',
    'https://novoshkola.com.ua/resources/images/news/1217-0.28943300%201767100758.jpg',
    'https://novoshkola.com.ua/resources/images/114608301.jpg'
  ];
  var failed = {};

  function apply() {
    var slots = document.querySelectorAll('[data-photo]');
    for (var i = 0; i < slots.length; i++) {
      var slot = slots[i];
      var img = null;
      for (var c = slot.firstElementChild; c; c = c.nextElementSibling) {
        if (c.classList && c.classList.contains('dc-photo')) { img = c; break; }
      }
      if (!img) continue;
      var src = slot.getAttribute('data-photo-src') || POOL[i % POOL.length];
      if (failed[src]) { img.hidden = true; continue; }
      if (img.getAttribute('src') !== src) {
        img.onerror = (function (u, el) {
          return function () { failed[u] = true; el.hidden = true; };
        })(src, img);
        img.setAttribute('src', src);
      }
    }
  }

  document.addEventListener('dc:render', apply);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
