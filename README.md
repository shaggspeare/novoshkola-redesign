# Новопечерська школа — сайт на Next.js

The «Модульний бенто» redesign built as a Next.js 16 site for novoshkola.com.ua, with the live site's content and photos. The design export it was built from lives in `novoshkola-bento/` (open its `overview.html`).

```bash
npm install
npm run dev               # http://localhost:3000
npm run build && npm start
```

## Pages

| Route | Design | Notes |
|---|---|---|
| `/` | `index.html` | |
| `/about` | `about.html` | |
| `/programs` | `programs.html` | |
| `/enrolment` | `enrolment.html` | `#grade-1`, `#grade-ucan`… preselect the class |
| `/news` | `news.html` | `?rubric=sport` etc. keeps the filter in the URL |
| `/news/[slug]` | `article.html` | one template for all 13 stories; slugs as on the live site |
| `/parents` | `parents.html` | |
| `/contacts` | `contacts.html` | |

Old live-site addresses (`/philosophy`, `/uk/infrastructure`, `/uk/news/<slug>`…) redirect to their new place — see `next.config.ts`.

## Where things are

- `src/app/**/page.tsx` — pages (server components). Markup and inline styles match the design 1:1.
- Interactive parts are small client components next to their page: `Voices`, `programs/ClubsFilter`, `enrolment/GradePicker`, `enrolment/Faq`, `news/NewsFeed`, `news/[slug]/share`, `contacts/ContactForm`; the day schedule (Home + Programs) is `components/DaySchedule`.
- `src/components` — `SiteHeader` (nav), `MenuSheet` (burger menu below 1100 px, from `mobile-menu.html`: sections + a search that filters the menu links), `SiteFooter` (+ phone action bar), `Breadcrumbs`.
- `src/content/news.ts` — the stories: text and photos from novoshkola.com.ua, titles and teasers as edited in the design.
- `src/app/globals.css` — what inline styles can't do: hover/focus, responsive overrides (design `base.css` + page styles).
- `public/photos` — photos from novoshkola.com.ua, resized; `next/image` serves optimised sizes.

## Not done yet

- The contact form validates and shows the success screen but sends nothing — wire a Server Action in `ContactForm.tsx`.
- Full-text site search and the EN version: no design yet. The desktop header search button and the EN link are placeholders; the phone menu search only finds menu links. News has no «Показати ще» yet — all 13 stories are listed.
- Text in `[square brackets]` is a placeholder to confirm with the school (list in the design README).
