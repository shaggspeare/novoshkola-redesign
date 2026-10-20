import type { Metadata } from "next";
import { RUBRICS, type Rubric } from "@/content/news";
import NewsFeed from "./NewsFeed";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Новини" };

export default async function NewsPage({ searchParams }: PageProps<"/news">) {
  const { rubric } = await searchParams;
  const initial = (Object.keys(RUBRICS) as Rubric[]).find((r) => RUBRICS[r].slug === rubric) ?? "all";

  return (
    <>
      <Breadcrumbs items={[["Новини"]]} touch />
      <main id="main" style={{ display: "flex", flexDirection: "column" }}>
        <NewsFeed initial={initial} />
        <section aria-labelledby="follow-title" style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 16 }}>
          <div
            style={{
              flex: "1.6 1 620px",
              minWidth: 0,
              borderRadius: 28,
              background: "#16181A",
              color: "#FFFFFF",
              padding: "clamp(28px, 4vw, 52px)",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: "#9AA0A4",
              }}
            >
              <span style={{ width: 26, height: 2, background: "#8CC63F" }} />
              Соцмережі
            </span>
            <h2
              id="follow-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 42px)",
                lineHeight: 1.08,
                fontWeight: 800,
                letterSpacing: "-0.035em",
              }}
            >
              Стежте за школою
            </h2>
            <p style={{ margin: 0, maxWidth: 560, fontSize: 16.5, lineHeight: 1.6, color: "#9AA0A4" }}>
              Фото, відео й анонси подій — у соцмережах Новопечерської.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 6 }}>
              <a
                className="bo"
                href="https://www.instagram.com/novopecherska_school"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 50,
                  padding: "0 22px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "#FFFFFF",
                  fontSize: 14.5,
                  fontWeight: 700,
                  boxSizing: "border-box",
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                @novopecherska_school<span className="sr"> — Instagram (відкриється в новій вкладці)</span>
              </a>
              <a
                className="bo"
                href="https://www.facebook.com/novoshkola"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 50,
                  padding: "0 22px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "#FFFFFF",
                  fontSize: 14.5,
                  fontWeight: 700,
                  boxSizing: "border-box",
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
              <a
                className="bo"
                href="https://www.youtube.com/user/novoshkola"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 50,
                  padding: "0 22px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "#FFFFFF",
                  fontSize: 14.5,
                  fontWeight: 700,
                  boxSizing: "border-box",
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
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                YouTube<span className="sr"> (відкриється в новій вкладці)</span>
              </a>
            </div>
          </div>
          <a
            className="tl"
            href="https://t.me/NovopecherskaShoolAdmission"
            target="_blank"
            rel="noopener"
            style={{
              flex: "1 1 360px",
              minWidth: 0,
              borderRadius: 28,
              background: "#8CC63F",
              color: "#16181A",
              padding: 34,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              minHeight: 280,
              boxSizing: "border-box",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
              <span
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.5)",
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
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </span>
              <span
                className="ar"
                style={{
                  flex: "none",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(22,24,26,0.1)",
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
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </span>
            <span style={{ marginTop: "auto", fontSize: 26, lineHeight: 1.18, fontWeight: 800, letterSpacing: -0.9 }}>
              Питання про вступ — у&nbsp;Telegram
            </span>
            <span style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(22,24,26,0.78)" }}>
              Питання про анкету, співбесіди та екскурсії — пишіть нам напряму.
              <span className="sr"> (відкриється в новій вкладці)</span>
            </span>
          </a>
        </section>
      </main>
    </>
  );
}
