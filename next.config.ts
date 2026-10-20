import type { NextConfig } from "next";

// Old novoshkola.com.ua addresses → their place in the redesign (styleguide «Куди перейшло»),
// so bookmarks and search results keep working after launch.
const MOVED: [string, string][] = [
  ["/uk", "/"],
  ["/philosophy", "/about"],
  ["/uk/handbook-philosophy-values", "/about#values"],
  ["/uk/21st_century_skills", "/about#skills"],
  ["/uk/team", "/about#team"],
  ["/uk/infrastructure", "/about#campus"],
  ["/uk/work", "/about#jobs"],
  ["/uk/doshkilna_pidgotovka", "/programs#kdp"],
  ["/uk/primary_school", "/programs#primary"],
  ["/uk/secondary-high-school", "/programs#secondary"],
  ["/blended-program", "/programs#ucan"],
  ["/uk/electives", "/programs#clubs"],
  ["/uk/enrolment", "/enrolment"],
  ["/uk/entry-to-school-kdp", "/enrolment#grade-kdp4"],
  ["/uk/entry-to-school-1st", "/enrolment#grade-1"],
  ["/uk/entry-to-school-2-11", "/enrolment#grade-2-4"],
  ["/cost", "/enrolment#cost"],
  ["/uk/cost", "/enrolment#cost"],
  ["/payments", "/parents#pay"],
  ["/uk/dogovir23", "/parents#contract"],
  ["/uk/handbook", "/parents#handbook"],
  ["/uk/regulations-on-the-use-of-the-ukrainian-language", "/parents#handbook"],
  ["/uk/contacts", "/contacts"],
  ["/uk/news", "/news"],
  ["/uk/news/:slug", "/news/:slug"],
];

const nextConfig: NextConfig = {
  // No Cache Components: Activity would keep visited pages mounted (hidden) next to the current one,
  // and every page repeats ids such as #main and #day-tab-*, which the skip link and tab focus rely on.
  async redirects() {
    return MOVED.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
