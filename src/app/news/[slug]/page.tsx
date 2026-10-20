import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { NEWS, RUBRICS } from "@/content/news";
import { CopiedText, ShareButton, ShareProvider } from "./share";
import Breadcrumbs from "@/components/Breadcrumbs";

const SITE = "https://novoshkola.com.ua";
const TINTS = ["#E3E7DC", "#ECE7DD", "#E2E5E8"];

// The design's showcase story as composed on the canvas: rich body, photo caption, sidebar facts, tags, picked
// related stories. Other stories render their text from the school site in the same template.
const DESIGNED: Record<
  string,
  { alt: string; caption: string; body: ReactNode; aside: ReactNode; tags: string[]; related: string[] }
> = {
  majorette: {
    alt: "команда мажорет на чемпіонаті світу",
    caption: "Учениці Новопечерської школи на чемпіонаті світу з мажорет-спорту. Фото: [автор фото]",
    body: (
      <>
        {" "}
        <p style={{ margin: 0, textWrap: "pretty" }}>
          Команда учениць Новопечерської школи представила Україну на чемпіонаті світу з мажорет-спорту та здобула
          високі результати одразу в кількох категоріях.
        </p>
        <h2>Результати</h2>
        <p style={{ margin: 0, textWrap: "pretty" }}>
          За підсумками змагань дівчата вибороли призові місця в обох програмах — сольній і груповій.
        </p>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
            gap: 12,
          }}
        >
          <li
            style={{
              borderRadius: 22,
              background: "#5B3FA8",
              color: "#FFFFFF",
              padding: "26px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
                <path d="M11 12 5.12 2.2" />
                <path d="m13 12 5.88-9.8" />
                <path d="M8 7h8" />
                <circle cx="12" cy="17" r="5" />
                <path d="M12 18v-2h-.5" />
              </svg>
              Соло
            </span>
            <span style={{ fontSize: 48, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}>1 та 3</span>
            <span style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(255,255,255,0.78)" }}>
              місця — сольні виступи
            </span>
          </li>
          <li
            style={{
              borderRadius: 22,
              background: "#8CC63F",
              color: "#16181A",
              padding: "26px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: "rgba(22,24,26,0.72)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Групи
            </span>
            <span style={{ fontSize: 48, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}>2, 3, 4 та 5</span>
            <span style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(22,24,26,0.78)" }}>місця — групові виступи</span>
          </li>
        </ul>
        <div
          className="art-callout"
          style={{
            borderRadius: 22,
            background: "#16181A",
            color: "#FFFFFF",
            padding: "26px 28px",
            display: "flex",
            gap: 18,
          }}
        >
          <span
            style={{
              flex: "none",
              width: 44,
              height: 44,
              borderRadius: 14,
              background: "rgba(140,198,63,0.16)",
              color: "#8CC63F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <h3
              style={{
                margin: 0,
                fontSize: 12.5,
                lineHeight: 1.5,
                fontWeight: 800,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: "#9AA0A4",
              }}
            >
              Тренування під час тривог
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.6,
                fontWeight: 600,
                color: "#FFFFFF",
                textWrap: "pretty",
              }}
            >
              Понад половину тренувань дівчата провели в шкільному укритті під час повітряних тривог — але не припиняли
              регулярних занять і вдосконалювали техніку та програми.
            </p>
          </div>
        </div>
        <p style={{ margin: 0, textWrap: "pretty" }}>
          Ці результати — підсумок наполегливої праці й витримки спортсменок і професійної підтримки тренерів. Про
          спортивні гуртки і секції школи — на сторінці <Link href="/programs#clubs">«Навчання»</Link>.
        </p>
        <figure
          className="art-quote"
          style={{
            margin: "6px 0 0",
            padding: "30px 32px",
            borderRadius: 22,
            background: "#F3F6EE",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <span style={{ color: "#4E7A1F" }}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            </svg>
          </span>
          <blockquote
            className="art-quote-text"
            style={{
              margin: 0,
              fontSize: "clamp(22px, 2vw, 27px)",
              lineHeight: 1.4,
              fontWeight: 700,
              letterSpacing: -0.5,
              color: "#16181A",
              textWrap: "pretty",
            }}
          >
            «Вітаємо наших учениць і&nbsp;тренерську команду з&nbsp;досягненнями та пишаємося їхніми успіхами!»
          </blockquote>
          <figcaption style={{ fontSize: 14, fontWeight: 700, color: "#4E7A1F" }}>— Новопечерська школа</figcaption>
        </figure>
      </>
    ),
    aside: (
      <>
        {" "}
        <div
          style={{
            borderRadius: 28,
            background: "#5B3FA8",
            color: "#FFFFFF",
            padding: 30,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 12.5,
              lineHeight: 1.5,
              fontWeight: 800,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.78)",
            }}
          >
            Про мажорет-спорт у школі
          </h2>
          <span style={{ fontSize: 64, lineHeight: 0.95, fontWeight: 800, letterSpacing: -3 }}>7</span>
          <span style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600 }}>
            золотих медалей чемпіонату світу з мажорет-спорту — у 2023 році
          </span>
          <span style={{ height: 1, background: "rgba(255,255,255,0.16)" }} />
          <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.78)" }}>
            2026 — призові місця в сольній і груповій програмах.
          </span>
          <Link
            className="bw"
            href="/news?rubric=sport"
            style={{
              alignSelf: "flex-start",
              marginTop: 6,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              minHeight: 44,
              padding: "0 20px",
              borderRadius: 999,
              background: "#FFFFFF",
              color: "#16181A",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            Спортивні новини
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
        <Link
          className="tl"
          href="/programs#clubs"
          style={{
            borderRadius: 28,
            background: "#FFFFFF",
            color: "#16181A",
            padding: 30,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minHeight: 230,
            boxSizing: "border-box",
          }}
        >
          <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 14,
                background: "#EFEAFA",
                color: "#5B3FA8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </span>
            <span
              className="ar"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#F1F2EE",
                color: "#16181A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </span>
          <h2 style={{ margin: "auto 0 0", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>Гуртки і секції</h2>
          <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
            15 спортивних гуртків і секцій — від баскетболу й шахів до художньої гімнастики та черлідингу. Заняття з
            16:00 до 18:00.
          </span>
        </Link>
      </>
    ),
    tags: ["мажорет-спорт", "наші перемоги", "чемпіонат світу"],
    related: ["azovstal", "novocamp", "talents"],
  },
};

export const dynamicParams = false;
export function generateStaticParams() {
  return NEWS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const story = NEWS.find((s) => s.slug === slug);
  return story ? { title: story.title, description: story.teaser } : {};
}

export default async function ArticlePage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const i = NEWS.findIndex((s) => s.slug === slug);
  if (i < 0) notFound();
  const story = NEWS[i];
  const d = DESIGNED[story.id];
  const rubric = RUBRICS[story.cat];
  const older = NEWS[i + 1];
  const newer = NEWS[i - 1];
  const related = d
    ? d.related.map((id) => NEWS.find((s) => s.id === id)!)
    : NEWS.filter((s) => s !== story && s !== older && s !== newer).slice(0, 3);
  const url = `${SITE}/news/${story.slug}`;
  const share = {
    viber: `viber://forward?text=${encodeURIComponent(`${story.title} ${url}`)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(story.title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  return (
    <>
      <Breadcrumbs
        items={[
          ["Новини", "/news"],
          [story.cat, `/news?rubric=${rubric.slug}`],
        ]}
        touch
      />
      <main id="main" style={{ display: "flex", flexDirection: "column" }}>
        <ShareProvider url={url} title={story.title}>
          <article style={{ display: "flex", flexDirection: "column" }}>
            <header
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: "clamp(28px, 4.4vw, 64px) clamp(20px, 4vw, 56px)",
                display: "flex",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            >
              <div
                className="art-head-in"
                style={{
                  width: "100%",
                  maxWidth: 920,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 22,
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px 14px",
                  }}
                >
                  <Link
                    href={`/news?rubric=${rubric.slug}`}
                    style={{
                      padding: "6px 12px",
                      borderRadius: 999,
                      background: rubric.bg,
                      fontSize: 12.5,
                      fontWeight: 800,
                      color: rubric.fg,
                    }}
                  >
                    {story.cat}
                  </Link>
                  <time dateTime={story.dt} style={{ fontSize: 13.5, fontWeight: 700, color: "#5F6366" }}>
                    {story.date}
                  </time>
                  <span
                    aria-hidden="true"
                    style={{ width: 4, height: 4, borderRadius: "50%", background: "#B9BDB6" }}
                  />
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: "#5F6366",
                    }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {story.read} хв читання
                  </span>
                </span>
                <h1
                  className="art-h1"
                  style={{
                    margin: 0,
                    fontSize: "clamp(32px, 3.9vw, 56px)",
                    lineHeight: 1.05,
                    fontWeight: 800,
                    letterSpacing: "-0.036em",
                    textWrap: "balance",
                  }}
                >
                  {story.title}
                </h1>
                <p
                  style={{
                    margin: 0,
                    maxWidth: 760,
                    fontSize: "clamp(18px, 1.6vw, 21px)",
                    lineHeight: 1.55,
                    fontWeight: 500,
                    color: "#54585C",
                    textWrap: "pretty",
                  }}
                >
                  {story.teaser}
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 8 }}
                >
                  <div
                    className="share-icons"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ marginRight: 4, fontSize: 13, fontWeight: 700, color: "#5F6366" }}>Поділитися</span>
                    <a
                      className="ib"
                      href={share.viber}
                      aria-label="Поділитися у Viber"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "#F1F2EE",
                        color: "#16181A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                    </a>
                    <a
                      className="ib"
                      href={share.telegram}
                      target="_blank"
                      rel="noopener"
                      aria-label="Поділитися в Telegram (відкриється в новій вкладці)"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "#F1F2EE",
                        color: "#16181A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                        <path d="m21.854 2.147-10.94 10.939" />
                      </svg>
                    </a>
                    <ShareButton
                      action="copy"
                      className="ib"
                      aria-label="Копіювати посилання"

                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: 0,
                        background: "#F1F2EE",
                        color: "#16181A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    </ShareButton>
                    <a
                      className="ib"
                      href={share.facebook}
                      target="_blank"
                      rel="noopener"
                      aria-label="Поділитися у Facebook (відкриється в новій вкладці)"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "#F1F2EE",
                        color: "#16181A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </div>
                  <ShareButton
                    action="share"
                    className="bl share-pill"

                    style={{
                      alignItems: "center",
                      gap: 8,
                      minHeight: 44,
                      padding: "0 20px",
                      borderRadius: 999,
                      border: "1.5px solid #E3E5E0",
                      background: "#FFFFFF",
                      color: "#16181A",
                      fontFamily: "inherit",
                      fontSize: 14.5,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                    </svg>
                    Поділитися
                  </ShareButton>
                  <span aria-live="polite" style={{ minWidth: 0, fontSize: 13, fontWeight: 700, color: "#4E7A1F" }}>
                    <CopiedText copied="Посилання скопійовано" />
                  </span>
                </div>
              </div>
            </header>
            {story.hero ? (
              <figure style={{ margin: "16px 0 0" }}>
                <div
                  className="art-hero"
                  data-photo="article-hero"
                  style={{
                    position: "relative",
                    aspectRatio: "21 / 9",
                    borderRadius: 28,
                    overflow: "hidden",
                    backgroundColor: "#E6E1F2",
                    backgroundImage:
                      "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 18,
                    boxSizing: "border-box",
                  }}
                >
                  <Image
                    className="dc-photo"
                    src={story.hero}
                    alt={d?.alt ?? ""}
                    fill
                    sizes="(max-width: 599px) 92vw, (max-width: 1099px) 96vw, 1384px"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                {d?.caption ? (
                  <figcaption style={{ padding: "12px 8px 0", fontSize: 13.5, lineHeight: 1.5, color: "#5F6366" }}>
                    {d.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
            <div
              className="art-row"
              style={{ marginTop: 16, display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 16 }}
            >
              <div
                className="art-body"
                style={{
                  flex: "1.7 1 640px",
                  minWidth: 0,
                  borderRadius: 28,
                  background: "#FFFFFF",
                  padding: "clamp(28px, 4.4vw, 64px)",
                  display: "flex",
                  justifyContent: "center",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="prose"
                  style={{
                    width: "100%",
                    maxWidth: 760,
                    display: "flex",
                    flexDirection: "column",
                    gap: 26,
                    fontSize: 18,
                    lineHeight: 1.75,
                    color: "#22262A",
                  }}
                >
                  {d
                    ? d.body
                    : story.body.map((p, k) => (
                        <p key={k} style={{ margin: 0, textWrap: "pretty" }}>
                          {p}
                        </p>
                      ))}
                </div>
              </div>
              <aside
                className="art-aside"
                aria-label="Додатково"
                style={{ flex: "1 1 340px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div
                  style={{
                    borderRadius: 28,
                    background: "#FFFFFF",
                    padding: 30,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    boxSizing: "border-box",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontSize: 12.5,
                      lineHeight: 1.5,
                      fontWeight: 800,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    Поділитися
                  </h2>
                  <a
                    className="ib"
                    href={share.viber}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      minHeight: 48,
                      padding: "0 16px",
                      borderRadius: 16,
                      background: "#F1F2EE",
                      color: "#16181A",
                      fontSize: 14.5,
                      fontWeight: 700,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    Viber
                  </a>
                  <a
                    className="ib"
                    href={share.telegram}
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      minHeight: 48,
                      padding: "0 16px",
                      borderRadius: 16,
                      background: "#F1F2EE",
                      color: "#16181A",
                      fontSize: 14.5,
                      fontWeight: 700,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                      <path d="m21.854 2.147-10.94 10.939" />
                    </svg>
                    Telegram<span className="sr"> (відкриється в новій вкладці)</span>
                  </a>
                  <ShareButton
                    action="copy"
                    className="ib"

                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      width: "100%",
                      minHeight: 48,
                      padding: "0 16px",
                      border: 0,
                      borderRadius: 16,
                      background: "#F1F2EE",
                      color: "#16181A",
                      fontFamily: "inherit",
                      fontSize: 14.5,
                      fontWeight: 700,
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <CopiedText copied="Посилання скопійовано" idle="Копіювати посилання" />
                  </ShareButton>
                  <a
                    className="ib"
                    href={share.facebook}
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      minHeight: 48,
                      padding: "0 16px",
                      borderRadius: 16,
                      background: "#F1F2EE",
                      color: "#16181A",
                      fontSize: 14.5,
                      fontWeight: 700,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook<span className="sr"> (відкриється в новій вкладці)</span>
                  </a>
                </div>
                {d?.aside}
                <div
                  style={{
                    borderRadius: 28,
                    background: "#16181A",
                    color: "#FFFFFF",
                    padding: 30,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "#9AA0A4",
                    }}
                  >
                    Вступ
                  </span>
                  <h2 style={{ margin: 0, fontSize: 22, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.6 }}>
                    Побачте школу наживо
                  </h2>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "#C9CDD1" }}>
                    Запишіться на екскурсію школою — онлайн або за телефоном{" "}
                    <a href="tel:+380503733973" style={{ color: "#FFFFFF", fontWeight: 700 }}>
                      +38 (050) 373-39-73
                    </a>
                    .
                  </p>
                  <a
                    className="bg2"
                    href="https://forms.gle/tfUm17FznhabyiYv7"
                    target="_blank"
                    rel="noopener"
                    style={{
                      alignSelf: "flex-start",
                      marginTop: 6,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      minHeight: 48,
                      padding: "0 22px",
                      borderRadius: 999,
                      background: "#8CC63F",
                      color: "#16181A",
                      fontSize: 14.5,
                      fontWeight: 700,
                    }}
                  >
                    Записатися на екскурсію<span className="sr"> (відкриється в новій вкладці)</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </div>
              </aside>
            </div>
            {story.gallery.length > 0 ? (
              <section className="art-gallery" aria-labelledby="gallery-title" style={{ marginTop: 56 }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: "16px 32px",
                    padding: "0 8px 22px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 12.5,
                        fontWeight: 800,
                        letterSpacing: 1.4,
                        textTransform: "uppercase",
                        color: "#5F6366",
                      }}
                    >
                      <span style={{ width: 26, height: 2, background: "#8CC63F" }} />
                      Галерея
                    </span>
                    <h2
                      id="gallery-title"
                      style={{
                        margin: 0,
                        fontSize: "clamp(30px, 3vw, 40px)",
                        lineHeight: 1.1,
                        fontWeight: 800,
                        letterSpacing: "-0.035em",
                      }}
                    >
                      Фото з події
                    </h2>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#5F6366" }}>{story.gallery.length} фото</span>
                </div>
                <div className="gal" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                  <div
                    className="gal-t"
                    data-photo="article-gallery-1"
                    style={{
                      flex: "1.5 1 560px",
                      minWidth: 0,
                      position: "relative",
                      minHeight: 520,
                      borderRadius: 28,
                      overflow: "hidden",
                      backgroundColor: "#E6E1F2",
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      gap: 8,
                      padding: 16,
                      boxSizing: "border-box",
                    }}
                  >
                    <Image
                      className="dc-photo"
                      src={story.gallery[0]}
                      alt=""
                      fill
                      sizes="(max-width: 599px) 78vw, (max-width: 1099px) 96vw, 829px"
                    />
                    <span
                      className="gal-n"
                      style={{
                        padding: "6px 10px",
                        borderRadius: 999,
                        background: "rgba(22,24,26,0.72)",
                        fontSize: 12,
                        fontWeight: 800,
                        color: "#FFFFFF",
                      }}
                    >
                      1 / {story.gallery.length}
                    </span>
                  </div>
                  <div
                    className="gal-col"
                    style={{ flex: "1 1 360px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}
                  >
                    {story.gallery.slice(1).map((src, k) => (
                      <div
                        key={src}
                        className="gal-t"
                        data-photo={`article-gallery-${k + 2}`}
                        style={{
                          flex: "1 1 160px",
                          position: "relative",
                          minHeight: 160,
                          borderRadius: 28,
                          overflow: "hidden",
                          backgroundColor: TINTS[k],
                          backgroundImage:
                            "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "space-between",
                          gap: 8,
                          padding: 14,
                          boxSizing: "border-box",
                        }}
                      >
                        <Image
                          className="dc-photo"
                          src={src}
                          alt=""
                          fill
                          sizes="(max-width: 599px) 78vw, (max-width: 1099px) 96vw, 539px"
                        />
                        <span
                          className="gal-n"
                          style={{
                            padding: "6px 10px",
                            borderRadius: 999,
                            background: "rgba(22,24,26,0.72)",
                            fontSize: 12,
                            fontWeight: 800,
                            color: "#FFFFFF",
                          }}
                        >
                          {k + 2} / {story.gallery.length}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ) : null}
            <section
              className="art-tags"
              aria-label="Теги та сусідні новини"
              style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 16 }}
            >
              {d ? (
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, padding: "0 8px" }}>
                  <span
                    style={{
                      marginRight: 6,
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    Теги
                  </span>
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "5px 11px",
                        borderRadius: 999,
                        background: "#FFFFFF",
                        fontSize: 12.5,
                        fontWeight: 700,
                        color: "#3A3E42",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
              <nav aria-label="Сусідні новини" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                {older ? (
                  <Link
                    className="tl"
                    href={`/news/${older.slug}`}
                    style={{
                      flex: "1 1 420px",
                      minWidth: 0,
                      borderRadius: 28,
                      background: "#FFFFFF",
                      color: "#16181A",
                      padding: "26px 30px",
                      display: "flex",
                      alignItems: "center",
                      gap: 18,
                      boxSizing: "border-box",
                    }}
                  >
                    <span
                      className="ar"
                      style={{
                        flex: "none",
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "#F1F2EE",
                        color: "#16181A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                      </svg>
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
                      <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 10px" }}>
                        <span
                          style={{
                            fontSize: 12.5,
                            fontWeight: 800,
                            letterSpacing: 1.4,
                            textTransform: "uppercase",
                            color: "#5F6366",
                          }}
                        >
                          Старіша новина
                        </span>
                        <time dateTime={older.dt} style={{ fontSize: 13, fontWeight: 700, color: "#5F6366" }}>
                          {older.date}
                        </time>
                      </span>
                      <span
                        className="clamp2"
                        style={{ fontSize: 17, lineHeight: 1.35, fontWeight: 800, letterSpacing: -0.3 }}
                      >
                        {older.title}
                      </span>
                    </span>
                  </Link>
                ) : null}
                {newer ? (
                  <Link
                    className="tl"
                    href={`/news/${newer.slug}`}
                    style={{
                      flex: "1 1 420px",
                      minWidth: 0,
                      borderRadius: 28,
                      background: "#FFFFFF",
                      color: "#16181A",
                      padding: "26px 30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: 18,
                      textAlign: "right",
                      boxSizing: "border-box",
                    }}
                  >
                    <span style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
                      <span
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "baseline",
                          justifyContent: "flex-end",
                          gap: "4px 10px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12.5,
                            fontWeight: 800,
                            letterSpacing: 1.4,
                            textTransform: "uppercase",
                            color: "#5F6366",
                          }}
                        >
                          Новіша новина
                        </span>
                        <time dateTime={newer.dt} style={{ fontSize: 13, fontWeight: 700, color: "#5F6366" }}>
                          {newer.date}
                        </time>
                      </span>
                      <span
                        className="clamp2"
                        style={{ fontSize: 17, lineHeight: 1.35, fontWeight: 800, letterSpacing: -0.3 }}
                      >
                        {newer.title}
                      </span>
                    </span>
                    <span
                      className="ar"
                      style={{
                        flex: "none",
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "#F1F2EE",
                        color: "#16181A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ) : null}
              </nav>
            </section>
          </article>
        </ShareProvider>
        <section aria-labelledby="related-title" style={{ marginTop: 56 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "16px 32px",
              padding: "0 8px 22px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#5F6366",
                }}
              >
                <span style={{ width: 26, height: 2, background: "#8CC63F" }} />
                Життя школи
              </span>
              <h2
                id="related-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                }}
              >
                Інші новини
              </h2>
            </div>
            <Link
              className="bl"
              href="/news"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                padding: "0 22px",
                borderRadius: 999,
                background: "#FFFFFF",
                color: "#16181A",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Усі новини
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 16 }}
          >
            {related.map((s) => (
              <article
                key={s.id}
                className="tl card"
                style={{
                  position: "relative",
                  borderRadius: 28,
                  background: "#FFFFFF",
                  color: "#16181A",
                  padding: "14px 14px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  boxSizing: "border-box",
                }}
              >
                <div
                  data-photo={`article-related-${s.id}`}
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 10",
                    borderRadius: 20,
                    overflow: "hidden",
                    backgroundColor: RUBRICS[s.cat].tint,
                    backgroundImage:
                      "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 14,
                    boxSizing: "border-box",
                  }}
                >
                  <Image
                    className="dc-photo"
                    src={s.cover}
                    alt=""
                    fill
                    sizes="(max-width: 599px) 85vw, (max-width: 1099px) 44vw, 423px"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 12px" }}>
                  <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        padding: "5px 11px",
                        borderRadius: 999,
                        background: RUBRICS[s.cat].bg,
                        fontSize: 12.5,
                        fontWeight: 800,
                        color: RUBRICS[s.cat].fg,
                      }}
                    >
                      {s.cat}
                    </span>
                    <time dateTime={s.dt} style={{ fontSize: 13, fontWeight: 700, color: "#5F6366" }}>
                      {s.date}
                    </time>
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 19,
                      lineHeight: 1.3,
                      fontWeight: 800,
                      letterSpacing: -0.4,
                      textWrap: "pretty",
                    }}
                  >
                    <Link className="card-link" href={`/news/${s.slug}`} style={{ color: "#16181A" }}>
                      {s.title}
                    </Link>
                  </h3>
                  <span className="clamp3" style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                    {s.teaser}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
