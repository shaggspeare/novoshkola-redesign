"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NEWS, RUBRICS, type Rubric } from "@/content/news";

const FILTERS: [Rubric | "all", string][] = [
  ["all", "Усі"],
  ...Object.keys(RUBRICS).map((r) => [r, r] as [Rubric, string]),
];
const FEATURED = ["majorette", "biology", "azovstal"];
const plural = (k: number) => {
  const a = k % 10,
    b = k % 100;
  if (a === 1 && b !== 11) return "матеріал";
  if (a >= 2 && a <= 4 && (b < 12 || b > 14)) return "матеріали";
  return "матеріалів";
};

// rubric lives in the URL (/news?rubric=sport), so links back from a story keep it
export default function NewsFeed({ initial }: { initial: Rubric | "all" }) {
  const [f, setF] = useState(initial);
  const pick = (key: Rubric | "all") => {
    setF(key);
    const u = new URL(location.href);
    if (key === "all") u.searchParams.delete("rubric");
    else u.searchParams.set("rubric", RUBRICS[key].slug);
    history.replaceState(history.state, "", u);
  };
  const matched = f === "all" ? NEWS : NEWS.filter((x) => x.cat === f);
  const shown = f === "all" ? NEWS.filter((x) => !FEATURED.includes(x.id)) : matched;
  const count = `${matched.length} ${plural(matched.length)}`;

  return (
    <>
      <section
        aria-labelledby="news-h1"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "24px 40px",
          padding: "8px 8px 28px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720 }}>
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
          <h1
            id="news-h1"
            style={{
              margin: 0,
              fontSize: "clamp(44px, 5vw, 68px)",
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-0.038em",
            }}
          >
            Новини
          </h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "#54585C" }}>
            Події, перемоги й будні Новопечерської
          </p>
        </div>
        <fieldset id="rubric" style={{ margin: 0, padding: 0, border: 0, minWidth: 0, maxWidth: "100%" }}>
          <legend
            style={{
              padding: 0,
              margin: "0 0 10px",
              fontSize: 12.5,
              fontWeight: 800,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              color: "#5F6366",
            }}
          >
            Рубрика
          </legend>
          <div className="chips" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {FILTERS.map(([key, label]) => (
              <button
                key={key}
                className="fchip"
                type="button"
                onClick={() => pick(key)}
                aria-pressed={key === f}
                aria-controls="feed"
                style={{
                  minHeight: 44,
                  padding: "0 18px",
                  borderRadius: 999,
                  border: `1.5px solid ${key === f ? "#16181A" : "#E3E5E0"}`,
                  background: key === f ? "#16181A" : "#FFFFFF",
                  color: key === f ? "#FFFFFF" : "#3A3E42",
                  fontFamily: "inherit",
                  fontSize: 14.5,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>
      </section>
      {f === "all" ? (
        <section aria-labelledby="top-news" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h2
            id="top-news"
            style={{
              margin: 0,
              padding: "0 8px",
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
            Головне
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <article
              className="tl card"
              style={{
                flex: "1.4 1 600px",
                minWidth: 0,
                position: "relative",
                borderRadius: 28,
                background: "#FFFFFF",
                color: "#16181A",
                padding: "14px 14px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 22,
                boxSizing: "border-box",
              }}
            >
              <div
                data-photo="news-featured-majorette"
                style={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  borderRadius: 20,
                  overflow: "hidden",
                  backgroundColor: "#E6E1F2",
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
                  src="/photos/news/majorette.jpg"
                  alt="команда мажорет на чемпіонаті світу"
                  fill
                  sizes="(max-width: 599px) 85vw, (max-width: 1099px) 93vw, 775px"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 16px" }}>
                <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "#EFEAFA",
                      fontSize: 12.5,
                      fontWeight: 800,
                      color: "#5B3FA8",
                    }}
                  >
                    Спорт
                  </span>
                  <time dateTime="2026-10-09" style={{ fontSize: 13, fontWeight: 700, color: "#5F6366" }}>
                    09.10.2026
                  </time>
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "clamp(24px, 2.4vw, 34px)",
                    lineHeight: 1.18,
                    fontWeight: 800,
                    letterSpacing: -1,
                    textWrap: "balance",
                  }}
                >
                  <Link className="card-link" href="/news/tournament_majorette_sports" style={{ color: "#16181A" }}>
                    Учениці Новопечерської здобули призові місця на чемпіонаті світу з&nbsp;мажорет-спорту
                  </Link>
                </h3>
                <span className="clamp3" style={{ maxWidth: 680, fontSize: 16.5, lineHeight: 1.6, color: "#54585C" }}>
                  Учениці Новопечерської школи представили Україну на чемпіонаті світу з мажорет-спорту та вибороли
                  призові місця.
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    marginTop: 4,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#5B3FA8",
                  }}
                >
                  Читати новину
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
                </span>
              </div>
            </article>
            <div style={{ flex: "1 1 420px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              <article
                className="tl card"
                style={{
                  flex: "1 1 auto",
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
                  data-photo="news-featured-biology"
                  style={{
                    position: "relative",
                    aspectRatio: "2 / 1",
                    borderRadius: 20,
                    overflow: "hidden",
                    backgroundColor: "#E3E7DC",
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
                    src="/photos/news/biology.jpg"
                    alt="зустріч з біологом Тарасом Перетятком"
                    fill
                    sizes="(max-width: 599px) 85vw, (max-width: 1099px) 93vw, 537px"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 12px" }}>
                  <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        padding: "5px 11px",
                        borderRadius: 999,
                        background: "#F3F6EE",
                        fontSize: 12.5,
                        fontWeight: 800,
                        color: "#4E7A1F",
                      }}
                    >
                      Навчання
                    </span>
                    <time dateTime="2026-10-09" style={{ fontSize: 13, fontWeight: 700, color: "#5F6366" }}>
                      09.10.2026
                    </time>
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 20,
                      lineHeight: 1.3,
                      fontWeight: 800,
                      letterSpacing: -0.4,
                      textWrap: "pretty",
                    }}
                  >
                    <Link className="card-link" href="/news/biology" style={{ color: "#16181A" }}>
                      Від Антарктики до шкільної аудиторії: зустріч восьмикласників із біологом Тарасом Перетятком
                    </Link>
                  </h3>
                </div>
              </article>
              <article
                className="tl card"
                style={{
                  flex: "1 1 auto",
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
                  data-photo="news-featured-azovstal"
                  style={{
                    position: "relative",
                    aspectRatio: "2 / 1",
                    borderRadius: 20,
                    overflow: "hidden",
                    backgroundColor: "#ECE7DD",
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
                    src="/photos/news/azovstal.jpg"
                    alt="зустріч із Дмитром Козацьким"
                    fill
                    sizes="(max-width: 599px) 85vw, (max-width: 1099px) 93vw, 537px"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 12px" }}>
                  <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        padding: "5px 11px",
                        borderRadius: 999,
                        background: "#FDECEC",
                        fontSize: 12.5,
                        fontWeight: 800,
                        color: "#C8161C",
                      }}
                    >
                      Події
                    </span>
                    <time dateTime="2026-10-09" style={{ fontSize: 13, fontWeight: 700, color: "#5F6366" }}>
                      09.10.2026
                    </time>
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 20,
                      lineHeight: 1.3,
                      fontWeight: 800,
                      letterSpacing: -0.4,
                      textWrap: "pretty",
                    }}
                  >
                    <Link className="card-link" href="/news/news_novoshkola" style={{ color: "#16181A" }}>
                      Історії з «Азовсталі»: зустріч учнів із захисником Маріуполя Дмитром Козацьким
                    </Link>
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </section>
      ) : null}
      <section id="feed" aria-labelledby="all-news" style={{ marginTop: 56 }}>
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
              Стрічка новин
            </span>
            <h2
              id="all-news"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: "-0.035em",
              }}
            >
              {f === "all" ? "Усі новини" : f}
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
            {f !== "all" ? (
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 36,
                  padding: "0 14px",
                  borderRadius: 999,
                  background: "#FFFFFF",
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: "#3A3E42",
                }}
              >
                {count}
              </span>
            ) : null}
            <a
              className="bl m-only"
              href="#rubric"
              style={{
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                padding: "0 18px",
                borderRadius: 999,
                border: "1.5px solid #E3E5E0",
                background: "#FFFFFF",
                color: "#16181A",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Змінити рубрику
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
        <p role="status" aria-live="polite" className="sr">
          {f === "all" ? `Показано всі новини: ${count}` : `Рубрика «${f}»: ${count}`}
        </p>
        {shown.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
              gap: 16,
            }}
          >
            {shown.map((it, k) => (
              <article
                key={it.id}
                className="tl card ncard"
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
                  className="ncard-ph"
                  data-photo={`news-${it.id}`}
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 10",
                    borderRadius: 20,
                    overflow: "hidden",
                    backgroundColor: RUBRICS[it.cat].tint,
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
                    src={it.cover}
                    alt=""
                    fill
                    sizes="(max-width: 599px) 27vw, (max-width: 1099px) 44vw, 306px"
                    loading={f !== "all" && k === 0 ? "eager" : undefined} // first photo on screen when the featured block is hidden
                  />
                </div>
                <div
                  className="ncard-tx"
                  style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 12px" }}
                >
                  <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        padding: "5px 11px",
                        borderRadius: 999,
                        background: RUBRICS[it.cat].bg,
                        fontSize: 12.5,
                        fontWeight: 800,
                        color: RUBRICS[it.cat].fg,
                      }}
                    >
                      {it.cat}
                    </span>
                    <time dateTime={it.dt} style={{ fontSize: 13, fontWeight: 700, color: "#5F6366" }}>
                      {it.date}
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
                    <Link className="card-link" href={`/news/${it.slug}`} style={{ color: "#16181A" }}>
                      {it.title}
                    </Link>
                  </h3>
                  <span className="clamp3 ncard-teaser" style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                    {it.teaser}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : null}
        {shown.length === 0 ? (
          <div
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "clamp(28px, 4vw, 52px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 14,
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: "#F1F2EE",
                color: "#5F6366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>
            </span>
            <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.6 }}>
              У цій рубриці поки немає матеріалів
            </h3>
            <span style={{ fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
              Оберіть іншу рубрику або перегляньте всю стрічку.
            </span>
            <button
              className="bl"
              type="button"
              onClick={() => pick("all")}
              style={{
                marginTop: 6,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 48,
                padding: "0 24px",
                borderRadius: 999,
                border: 0,
                background: "#F1F2EE",
                color: "#16181A",
                fontFamily: "inherit",
                fontSize: 14.5,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Усі новини
            </button>
          </div>
        ) : null}
      </section>
    </>
  );
}
