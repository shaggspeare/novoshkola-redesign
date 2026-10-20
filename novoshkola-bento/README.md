# Новопечерська школа — «Модульний бенто» · HTML concept

Static, code-ready export of the redesign concept from the design canvas. Every page renders exactly like its canvas artboard, works without a build step, and keeps all interactions (menu, tabs, filters, forms).

## Quick start
- Open `overview.html` (all pages) or `index.html` (Home) directly in a browser — no server needed.
- Or run a dev server: `npm install && npm run dev` (Vite), or `npx serve .`, or `python3 -m http.server`.
- `npm run build` makes a static `dist/` (the config copies `assets/` as-is).

Online resources: Manrope from Google Fonts, and photos hotlinked from novoshkola.com.ua (the same images the v2 POC uses). Offline, pages fall back to system fonts and styled photo placeholders.

## Structure
```
index.html              Головна
about.html              Про школу
programs.html           Навчання та U-CAN
enrolment.html          Вступ
news.html               Новини            (rubric filter; ?rubric=sport deep link)
article.html            Новина — шаблон статті
parents.html            Батькам
contacts.html           Контакти          (validated form)
styleguide.html         Дизайн-система
mobile-home.html        Phone mock-up 390 px — Головна
mobile-menu.html        Phone mock-up 390 px — Меню
mobile-enrolment.html   Phone mock-up 390 px — Вступ
overview.html           Index of all pages
assets/css/base.css     Shared tokens, components, responsive header/menu rules
assets/css/export.css   Export-only rules (photo slots, phone mock-up framing)
assets/js/dc-lite.js    Tiny template runtime (see below)
assets/js/photos.js     Fills photo slots
design-source/          Original canvas artboards (*.dc.html) + canvas.json
photo-slots.json        Every photo slot: page, slot id, intended shot, mapped photo
ux-review.md            UX review findings and what was fixed
```
The desktop pages are fully responsive (1440 → 390). The `mobile-*.html` files are fixed 390 px design references for the phone layouts and menu.

## How a page works
Each page holds its markup in `<template id="dc-tpl">` and a small `Component` class; `dc-lite.js` renders it into `#dc-root`. Static parts are plain HTML with inline styles (same convention as the v2 POC). Template syntax:

| Syntax | Meaning | Port to |
|---|---|---|
| `{{ path.to.value }}` | value from `renderVals()` | `{value}` / `{{ value }}` |
| `<sc-for list="{{ items }}" as="it">` | loop, `{{ $index }}` available | `items.map(...)` / `v-for` / `{#each}` |
| `<sc-if value="{{ flag }}">` | conditional | `{flag && ...}` / `v-if` / `{#if}` |
| `onClick="{{ handler }}"` | event handler | `onClick={handler}` / `@click` |
| `class Component extends DCLogic { renderVals() {...} }` | state via `this.state` / `this.setState()` | component state |

Shared parts repeated on every desktop page — skip link, header, menu sheet (`#site-menu`), footer, mobile action bar (`.mbar`) — are the first candidates to become components. Deep links are plain hrefs in the canvas (`data-deep` attribute) and are resolved here (`programs.html#ucan`, `enrolment.html#grade-1`, `news.html?rubric=sport`).

Interactive pieces: menu sheet (Esc, focus return), day-schedule tabs (Home, Programs), reviews carousel, clubs filter by grade + direction, news rubric filter, grade selector + FAQ on Enrolment (hash preselect: `#grade-kdp4`, `#grade-kdp5`, `#grade-1`, `#grade-2-4`, `#grade-5-10`, `#grade-11`, `#grade-ucan`), contact form validation, article share/copy.

## Design system (see styleguide.html for the full board)
- **Colour:** ground `#F1F2EE` · surface `#FFFFFF` · ink `#16181A` / `#3A3E42` · body `#54585C` · article text `#22262A` · muted `#5F6366` · purple `#5B3FA8` (hover `#4A3190`, tint `#EFEAFA`) · green `#8CC63F` (hover `#7CB733`, tint `#F3F6EE`, text `#4E7A1F`) · red `#E31E24` graphic only, red text `#C8161C`, tint `#FDECEC` · dividers `#E7E8E4` / `#EDEEEA` · field border `#8A8F93` · placeholder `#6B6F73` · on ink `#C9CDD1` / `#9AA0A4` · small text on purple tint `rgba(255,255,255,.9)` · dates on purple `#E2F3C9`.
- **News categories:** Події `#FDECEC/#C8161C` · Навчання `#F3F6EE/#4E7A1F` · Спорт `#EFEAFA/#5B3FA8` · Творчість `#F3EEE4/#6E5A2E` · Випускники, Табір `#F1F2EE/#3A3E42`. Solid ink fill = active filter/tab only.
- **Type:** Manrope 400–800. Display 68/1.02 · H1 56/1.05 · H2 40/1.1 · H3 22/1.2 · card title 19/1.3 · lead 18/1.6 · body 15.5/1.6 · article 18/1.75 (max 68ch) · label 12.5/800 caps +1.4 px · numbers 44–48/1.
- **Shape and space:** tiles radius 28 (media 18–20, chips 999, icon chips 14) · gap 16 · 56 between sections · container 1440, side padding `clamp(16px, 2vw, 28px)`.
- **Breakpoints:** ≥1100 full header · 600–1099 logo + «Кабінет» + burger · <600 compact 56 px header, sticky «Записатися на екскурсію» bar, page-specific mobile rules.
- **Interaction:** focus = 3 px purple outline + 2 px white inner ring (visible on every surface) · hover effects only on hover-capable devices · → internal link, ↗ external (opens a new tab, announced to screen readers), ↓ anchor on the page · tap targets ≥ 44 px.

## Photos
Slots are `[data-photo]` elements. `photos.js` puts the photo from `data-photo-src` (the matching image from the current site / POC) under the slot's content; slots without one borrow a stand-in from the POC pool. Each slot's caption names the intended shot (see `photo-slots.json`). For launch, host your own optimised images and set `data-photo-src` (or replace the slot with an `<img>`).

## Content
All facts come from novoshkola.com.ua (October 2026): prices 2026/2027, campus figures, team, programmes, U-CAN, enrolment steps, news, reviews. Anything unknown is a visible [placeholder] — search the pages for «[». To confirm with the school:
- Cabinet login URL (assumed https://school-today.com/), privacy-policy URL, photo credits.
- U-CAN: price and whether it is part of «Наживо», entry in grade 9, dates, weekly hours, key subjects.
- 1st-grade age rule, application deadline, whether the tour is required before the form, mid-year price, 2027/2028 price date, 2026/2027 payment deadlines.
- Pick-up time for grades 5–11; channels for the class teacher and absences; contacts of division heads and the finance department; purpose of +38 (068) 193-93-33.
- «Вступ 2027/2028» label, W5H meaning, 3D-tour space names, team portraits, whether English-named clubs are taught in English, club count (37 unique; the site lists one twice).

## Next steps for production
Real logo and photo shoot · EN version · site search · news from a CMS (rubrics, pagination, gallery lightbox) · form backend (and spam protection) · Google Maps embed on Contacts · scroll-spy for section chips · analytics and cookie consent.
