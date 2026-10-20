# UX review — findings and fixes

Four reviewers checked every page at 1440 px and 390 px (and the header at 1024/768), walking parent scenarios: choosing a school, enrolling a 6-year-old, joining mid-year, U-CAN for a teenager, paying and contacting the school as a current parent. 72 findings; all P1 and P2 issues were fixed on the design canvas, then re-checked in a browser (no console errors, no horizontal scroll at 390, menu/keyboard/form flows click-tested).

Severity: **P1** blocks a task or breaks accessibility/responsiveness · **P2** noticeable friction · **P3** polish.

## Global and Home (H)
| ID | Sev | Finding | Status |
|---|---|---|---|
| H-01 | P1 | Header wrapped into a 2–3-row "stadium" below ~1060 px and covered 27% of a phone screen | Done — burger + menu sheet below 1100 px, compact 56 px header below 600 px, Esc/focus handling |
| H-02 | P1 | Purple focus ring invisible on purple and dark tiles | Done — two-tone ring (3 px purple + 2 px white) works on every surface |
| H-03 | P2 | Shortcuts (Кабінет, Оплата, U-CAN…) landed on page tops; «Кабінет» reloaded the Parents page | Done — deep links to sections; «Кабінет» opens School Today |
| H-04 | P2 | Home at 390 px was 2.4× longer than the phone mock-up | Done — 2×2 quick tiles, swipe row for programmes, compact stats; 11 634 px (was 14 908) |
| H-05 | P2 | Both hero buttons went to the same page; no way to book a tour early | Done — «Записатися на екскурсію» + «Умови вступу»; one funnel order everywhere |
| H-06 | P2 | Mobile menu mixed links and accordions; no quick tasks for current parents | Done — accordion sections, search, Оплатити / Розклад дня / Кабінет |
| H-07 | P2 | Phone numbers without labels; the call button dialled admissions | Done — Рецепція / Вступ та екскурсії / Також labels everywhere |
| H-08 | P2 | Pick-up and club times contradicted each other | Done — one schedule source, pick-up line per age group |
| H-09 | P2 | Dates tile said only "when", not "what now" or "how much" | Done — Зараз / З лютого / З травня / Вартість + «Заповнити анкету» |
| H-10 | P2 | U-CAN repeated three times without requirements or next step | Done — «Як вступити на U-CAN» + apply / programme buttons |
| H-11 | P3 | Small text on purple tint at 4.4:1 | Done — 90 % white (5.3:1) |
| H-12 | P3 | Tabs, carousel and news not announced to screen readers | Done — tablist, live region, h3 titles, `<time>`, skip link, `lang="en"` |
| H-13 | P3 | Six names for U-CAN; two claims that would not survive a fact-check | Done — glossary applied, claims corrected |
| H-14 | P3 | Mixed phone/time formats and calques | Done |
| H-15 | P3 | ↗ arrow used for internal links; hover stuck on touch | Done — → internal, ↗ external (+ new tab), hover only on hover devices |
| H-16 | P3 | UA/EN built as toggle buttons | Done — language links with `hreflang` |

## About and Programs (A)
| ID | Sev | Finding | Status |
|---|---|---|---|
| A-01 | P1 | Clubs could not be filtered by grade | Done — «Клас» filter combined with direction, recounts, А–Я, empty state |
| A-02 | P1 | U-CAN page had no cost, eligibility or next step; CTAs looped | Done — «Вартість і вступ на U-CAN» tile (school to fill the [placeholders]), apply/tour buttons |
| A-03 | P1 | No in-page navigation on long pages; anchors hidden under the header | Partly — section chips + ids on both pages, sticky from 900 px; scroll-spy and a phone «Розділи» button left for the build |
| A-04 | P1 | Shelter (decisive for Kyiv families) buried as «500 м²» | Done — first campus tile «Укриття — 500 м²» with facts |
| A-05 | P2 | Day schedule only on Home; times differed between pages | Done — day widget on Programs, times unified |
| A-06 | P2 | Contradictory English/second-language statements | Done |
| A-07 | P2 | About didn't answer "how are you different" | Done — «Чим ми відрізняємось» (6 linked differentiators) |
| A-08 | P2 | Pages ended without a next step; CTAs dropped the chosen class | Done — closing tour block; class preselected on Enrolment |
| A-09 | P2 | Desktop tile heights carried over to phones | Partly — mobile rules applied; About 17 545 px and Programs 17 877 px at 390 (were 19 871 / 21 313) |
| A-10 | P2 | U-CAN dates and captions under 4.5:1 | Done |
| A-11 | P2 | Key facts were not headings; clubs not a list | Done |
| A-12 | P2 | «U-» / «CAN» and time ranges split across lines | Done |
| A-13 | P2 | Filter not announced; duplicate clubs | Done — 37 unique clubs (the site lists «Настільні ігри» twice) |
| A-14 | P2 | Static labels looked clickable | Done — separate info and anchor chip styles |
| A-15 | P2 | 3–4 names for the same programme | Done |
| A-16 | P3 | Orphan tiles in grids | Done |
| A-17 | P3 | Outdated vision years; "PDF" label on web pages | Done |
| A-18 | P3 | Small copy inaccuracies | Done |

## Enrolment, Contacts, Parents (E)
| ID | Sev | Finding | Status |
|---|---|---|---|
| E-01 | P1 | Contact form "sent" empty messages; no validation | Done — real form, inline errors, focus to first error, radio chips |
| E-02 | P2 | 2026/27 prices shown for the 2027/28 intake without caveat | Done — caveat, units, payment schedule tile |
| E-03 | P2 | Mid-year joining looked impossible | Done — «Можна посеред року» in the selector and timeline |
| E-04 | P2 | Phone mock-up hid 4 of 7 grade chips | Done — chips wrap |
| E-05 | P2 | Callers couldn't tell which number to use | Done — numbers labelled by task |
| E-06 | P2 | No escalation path for current parents | Done — «Куди звернутися» routes (contacts bracketed) |
| E-07 | P2 | «Написати нам» / contract links landed at page tops | Done — #write / #contract anchors, form before map on phones |
| E-08 | P2 | Parents hero duplicated pay/cabinet tiles | Done — direct links, merged row, `<details>` instructions |
| E-09 | P2 | Weekly tasks (menu, absence, pick-up) not actionable | Done |
| E-10 | P2 | Phone numbers broke mid-number; 22 px tap targets | Done |
| E-11 | P2 | Field borders 1.2:1 | Done — #8A8F93 (3.3:1) |
| E-12 | P2 | Grade selector and FAQ silent for screen readers | Done — tabs pattern, independent accordion |
| E-13 | P2 | Success copy contradicted the 2-day promise; no focus | Done |
| E-14 | P2 | Parents cards not headings, mixed title styles | Done |
| E-15 | P2 | «І етап» meant two different things | Done |
| E-16 | P2 | FAQ repeated page text, missed real questions | Done — new questions (answers bracketed for the school) |
| E-17 | P2 | Three "questions?" blocks; apply CTA in 3 styles | Done |
| E-18 | P2 | Enrolment at 390 diverged from the phone mock-up | Done — compact steps, hidden extras below 600 px |
| E-19 | P3 | Enrolment microcopy | Done |
| E-20 | P3 | Contacts/Parents microcopy and address format | Done |

## News, Article, Design system (N)
| ID | Sev | Finding | Status |
|---|---|---|---|
| N-01 | P1 | Every way back from a story lost the chosen rubric | Done — rubric kept in the URL (`news.html?rubric=sport`) |
| N-02 | P1 | Focus invisible on purple/ink tiles | Done (global ring) |
| N-03 | P1 | Category colours in the style guide didn't match the pages | Done — one token set |
| N-04 | P2 | Article header and callouts cramped on phones | Done |
| N-05 | P2 | Numbers looked unverified | No change — sourced from the school site (7 золотих медалей 2023, 15 спортивних гуртків, «сертифіковане укриття») |
| N-06 | P2 | No Viber / system share | Done |
| N-07 | P2 | News at 390 took ~10 screens; filter far away | Done — one-row chips, compact cards; 5 795 px (was 8 485) |
| N-08 | P2 | Count and «Показати ще» didn't match; long link names | Done |
| N-09 | P2 | «Наступна» pointed back in time; unrelated "related" | Done |
| N-10 | P2 | Gallery letterboxed and far below on phones | Done — swipe row (lightbox left for the build) |
| N-11 | P2 | No rich-text styles for real posts | Done |
| N-12 | P2 | Style guide lacked the type roles the pages use | Done |
| N-13 | P2 | Text colours and field border undocumented | Done |
| N-14 | P2 | Old vs new navigation not convincing | Done — tags + «Куди перейшло» |
| N-15 | P2 | No tour CTA on News/Article | Done |
| N-16 | P2 | Component states unlabelled | Done |
| N-17 | P2 | Style guide broke at 390 | Done |
| N-18 | P3 | Microcopy | Done |

## Found during verification
- Footer e-mail clipped at 390 px on three pages — fixed.
- Club count corrected to 37 everywhere.
- Style-guide tab label aligned with the pages («КДП · 4–5 років»).
