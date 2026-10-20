import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DaySchedule from "@/components/DaySchedule";
import Voices from "./Voices";

export const metadata: Metadata = { title: "Головна" };

export default function HomePage() {
  return (
    <main id="main" style={{ display: "flex", flexDirection: "column" }}>
      <section aria-labelledby="hero-title" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        <div
          className="h-hero"
          data-photo="home-hero"
          style={{
            flex: "1.6 1 620px",
            minWidth: 0,
            position: "relative",
            minHeight: 646,
            borderRadius: 28,
            overflow: "hidden",
            backgroundColor: "#2B3034",
            backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 14px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "clamp(24px, 3.4vw, 48px)",
            boxSizing: "border-box",
          }}
        >
          <Image
            className="dc-photo"
            src="/photos/lesson-imac.jpg"
            alt="учні на уроці, природне світло"
            fill
            sizes="(max-width: 599px) 92vw, (max-width: 1099px) 96vw, 846px"
            loading="eager"
            fetchPriority="high"
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(12,14,16,0) 35%, rgba(12,14,16,0.82) 100%)",
            }}
          />
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 22, maxWidth: 780 }}>
            <span
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 14px 8px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.14)",
                color: "#FFFFFF",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#8CC63F" }} />
              13-й навчальний рік · Новопечерські липки, Київ
            </span>
            <h1
              id="hero-title"
              style={{
                margin: 0,
                fontSize: "clamp(40px, 5vw, 68px)",
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: -2.6,
                color: "#FFFFFF",
                textWrap: "balance",
              }}
            >
              Школа, де дитина хоче знати більше
            </h1>
            <p
              style={{
                margin: 0,
                maxWidth: 580,
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.86)",
                textWrap: "pretty",
              }}
            >
              Українська програма, канадський диплом у старшій школі, 37 гуртків і секцій — і день до 18:00, де навчання
              чергується з рухом і творчістю.
            </p>
            <div className="h-hero-cta" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                className="bw"
                href="https://forms.gle/tfUm17FznhabyiYv7"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 52,
                  padding: "0 28px",
                  borderRadius: 999,
                  background: "#FFFFFF",
                  color: "#16181A",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Записатися на екскурсію<span className="sr"> (відкриється в новій вкладці)</span>
                <svg
                  width="17"
                  height="17"
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
              </a>
              <Link
                className="bo"
                href="/enrolment"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 52,
                  padding: "0 28px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(255,255,255,0.5)",
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontWeight: 700,
                  boxSizing: "border-box",
                }}
              >
                Умови вступу
                <svg
                  width="17"
                  height="17"
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
          </div>
        </div>
        <div
          className="h-side"
          style={{ flex: "1 1 380px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}
        >
          <Link
            className="tl"
            href="/programs#ucan"
            style={{
              flex: "1 1 auto",
              position: "relative",
              minHeight: 270,
              borderRadius: 28,
              background: "#8CC63F",
              color: "#16181A",
              padding: 34,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              boxSizing: "border-box",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "rgba(22,24,26,0.72)",
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                Програма U-CAN · 8–11 класи
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
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </span>
            <span
              style={{
                marginTop: "auto",
                fontSize: 28,
                lineHeight: 1.18,
                fontWeight: 800,
                letterSpacing: -1,
                textWrap: "balance",
              }}
            >
              Українське свідоцтво і канадський диплом — в одному розкладі
            </span>
            <span style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(22,24,26,0.78)" }}>
              <span className="nw">U-CAN</span> — українсько-канадська програма: 10 додаткових предметів англійською і{" "}
              <span lang="en">Manitoba High School Diploma</span>.
            </span>
          </Link>
          <div
            style={{
              flex: "1 1 auto",
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "30px 34px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: "#5F6366",
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
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              Вступ 2027/2028 · терміни
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  padding: "11px 0",
                  borderBottom: "1px solid #EDEEEA",
                }}
              >
                <span
                  style={{
                    flex: "none",
                    minWidth: 88,
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                    color: "#4E7A1F",
                  }}
                >
                  Зараз
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.45, fontWeight: 600 }}>
                  Екскурсії школою та анкета на вступ
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  padding: "11px 0",
                  borderBottom: "1px solid #EDEEEA",
                }}
              >
                <span
                  style={{
                    flex: "none",
                    minWidth: 88,
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                    color: "#C8161C",
                  }}
                >
                  З лютого
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.45, fontWeight: 600 }}>Співбесіди до 1 класу</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  padding: "11px 0",
                  borderBottom: "1px solid #EDEEEA",
                }}
              >
                <span
                  style={{
                    flex: "none",
                    minWidth: 88,
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                    color: "#C8161C",
                  }}
                >
                  З травня
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.45, fontWeight: 600 }}>
                  <span className="nw">КДП-4</span>, <span className="nw">КДП-5</span> і 2–10 класи (за наявності місць)
                </span>
              </div>
              <Link
                className="lk"
                href="/enrolment#cost"
                style={{ display: "flex", alignItems: "baseline", gap: 16, padding: "11px 0", color: "#16181A" }}
              >
                <span
                  style={{
                    flex: "none",
                    minWidth: 88,
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                    color: "#5B3FA8",
                  }}
                >
                  Вартість
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.45, fontWeight: 600 }}>
                  1–11 класи — $13&nbsp;750 на рік, КДП — від $11&nbsp;000{" "}
                  <span style={{ color: "#5F6366", fontWeight: 500 }}>(ціни 2026/2027)</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5B3FA8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ marginLeft: 6, verticalAlign: -2 }}
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            <div
              style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 18px" }}
            >
              <a
                className="bg2"
                href="https://school-today.com/Forms/Client/104-14b1c2e2-0c89-4138-90ae-d2ad5d47578e"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  minHeight: 48,
                  padding: "0 22px",
                  borderRadius: 999,
                  background: "#8CC63F",
                  color: "#16181A",
                  fontSize: 14.5,
                  fontWeight: 700,
                }}
              >
                Заповнити анкету<span className="sr"> (відкриється в новій вкладці)</span>
                <svg
                  width="15"
                  height="15"
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
              <Link
                className="lk"
                href="/enrolment#steps"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                Як проходить вступ
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
          </div>
        </div>
      </section>
      <section
        aria-label="Швидкий доступ"
        className="h-quick"
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
          gap: 16,
        }}
      >
        <Link
          className="tl"
          href="/programs#online"
          style={{
            borderRadius: 28,
            background: "#FFFFFF",
            color: "#16181A",
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minHeight: 200,
            boxSizing: "border-box",
          }}
        >
          <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 14,
                background: "#F3F6EE",
                color: "#4E7A1F",
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
                <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
                <path d="M12 17v4" />
                <path d="M8 21h8" />
                <rect x="2" y="3" width="20" height="14" rx="2" />
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
          <span className="h-qt" style={{ marginTop: "auto", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>
            Дистанційна школа
          </span>
          <span className="h-desc" style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
            1–4 класи — вечірні уроки в Zoom і субота; 5–11 — дистанційний формат і екстернат.
          </span>
        </Link>
        <a
          className="tl"
          href="https://school-today.com/"
          target="_blank"
          rel="noopener"
          style={{
            borderRadius: 28,
            background: "#FFFFFF",
            color: "#16181A",
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minHeight: 200,
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
                <path d="M18 21a8 8 0 0 0-16 0" />
                <circle cx="10" cy="8" r="5" />
                <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
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
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </span>
          </span>
          <span className="h-qt" style={{ marginTop: "auto", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>
            Кабінет батьків
          </span>
          <span className="h-desc" style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
            Вхід до <span lang="en">School Today</span> — шкільної системи управління навчанням.
          </span>
          <span className="sr"> (відкриється в новій вкладці)</span>
        </a>
        <Link
          className="tl"
          href="/parents#pay"
          style={{
            borderRadius: 28,
            background: "#FFFFFF",
            color: "#16181A",
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minHeight: 200,
            boxSizing: "border-box",
          }}
        >
          <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 14,
                background: "#FDECEC",
                color: "#C8161C",
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
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
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
          <span className="h-qt" style={{ marginTop: "auto", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>
            Оплата онлайн
          </span>
          <span className="h-desc" style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
            Навчання й додаткове харчування через Приват24. Комісія — 1 грн.
          </span>
        </Link>
        <Link
          className="tl"
          href="/parents#handbook"
          style={{
            borderRadius: 28,
            background: "#FFFFFF",
            color: "#16181A",
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minHeight: 200,
            boxSizing: "border-box",
          }}
        >
          <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: 14,
                background: "#F1F2EE",
                color: "#16181A",
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
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
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
          <span className="h-qt" style={{ marginTop: "auto", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>
            Довідник для батьків
          </span>
          <span className="h-desc" style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
            Розклад дня, харчування, безпека й традиції — в одному місці.
          </span>
        </Link>
      </section>
      <section aria-labelledby="programs-title" style={{ marginTop: 56 }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 760 }}>
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
              Освітні програми
            </span>
            <h2
              id="programs-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.4,
                textWrap: "balance",
              }}
            >
              Від перших кроків у 4 роки — до двох документів про освіту
            </h2>
          </div>
          <Link
            className="bl"
            href="/programs"
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
            Усі програми
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
          className="h-prog"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 16 }}
        >
          <Link
            className="tl"
            href="/programs#kdp"
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              color: "#16181A",
              padding: "14px 14px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              boxSizing: "border-box",
            }}
          >
            <div
              data-photo="home-kdp"
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: 20,
                overflow: "hidden",
                backgroundColor: "#E3E7DC",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                display: "flex",
                alignItems: "flex-end",
                padding: 14,
                boxSizing: "border-box",
              }}
            >
              <Image
                className="dc-photo"
                src="/photos/kdp.jpg"
                alt="КДП, навчальні осередки"
                fill
                sizes="(max-width: 599px) 65vw, (max-width: 1099px) 44vw, 306px"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 12px" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <span style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <span
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "#F1F2EE",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#3A3E42",
                    }}
                  >
                    КДП-4 · КДП-5
                  </span>
                  <span
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "#F1F2EE",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#3A3E42",
                    }}
                  >
                    з 4 років
                  </span>
                </span>
                <span
                  className="ar"
                  style={{
                    flex: "none",
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
              <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.6 }}>
                Дошкільна підготовка (КДП)
              </h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Дворічна програма для дітей 4 і 5 років: навчальні осередки, сенсорний куточок і півтори години
                англійської щодня.
              </span>
            </div>
          </Link>
          <Link
            className="tl"
            href="/programs#primary"
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              color: "#16181A",
              padding: "14px 14px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              boxSizing: "border-box",
            }}
          >
            <div
              data-photo="home-primary"
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: 20,
                overflow: "hidden",
                backgroundColor: "#E6E1F2",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                display: "flex",
                alignItems: "flex-end",
                padding: 14,
                boxSizing: "border-box",
              }}
            >
              <Image
                className="dc-photo"
                src="/photos/primary.jpg"
                alt="урок у міні-групі"
                fill
                sizes="(max-width: 599px) 65vw, (max-width: 1099px) 44vw, 306px"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 12px" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <span style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <span
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "#F1F2EE",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#3A3E42",
                    }}
                  >
                    1–4 класи
                  </span>
                  <span
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "#F1F2EE",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#3A3E42",
                    }}
                  >
                    Монтессорі · Дальтон-план
                  </span>
                </span>
                <span
                  className="ar"
                  style={{
                    flex: "none",
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
              <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.6 }}>
                Початкова школа
              </h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Власний темп кожної дитини, англійська з носіями в міні-групах і щонайменше 5 годин спорту на тиждень.
              </span>
            </div>
          </Link>
          <Link
            className="tl"
            href="/programs#secondary"
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              color: "#16181A",
              padding: "14px 14px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              boxSizing: "border-box",
            }}
          >
            <div
              data-photo="home-secondary"
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: 20,
                overflow: "hidden",
                backgroundColor: "#ECE7DD",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                display: "flex",
                alignItems: "flex-end",
                padding: 14,
                boxSizing: "border-box",
              }}
            >
              <Image
                className="dc-photo"
                src="/photos/secondary.jpg"
                alt="проєктна робота, 9 клас"
                fill
                sizes="(max-width: 599px) 65vw, (max-width: 1099px) 44vw, 306px"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 12px" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <span style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <span
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "#F1F2EE",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#3A3E42",
                    }}
                  >
                    5–11 класи
                  </span>
                  <span
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "#F1F2EE",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#3A3E42",
                    }}
                  >
                    4 профілі
                  </span>
                </span>
                <span
                  className="ar"
                  style={{
                    flex: "none",
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
              <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.6 }}>
                Середня і старша школа
              </h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Проєктне навчання, друга іноземна з 5 класу, профорієнтація з 8-го і профілі з 10-го.
              </span>
            </div>
          </Link>
          <Link
            className="tl"
            href="/programs#ucan"
            style={{
              borderRadius: 28,
              background: "#5B3FA8",
              color: "#FFFFFF",
              padding: "14px 14px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              boxSizing: "border-box",
            }}
          >
            <div
              data-photo="home-ucan"
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: 20,
                overflow: "hidden",
                backgroundColor: "#4C3392",
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 12px)",
                display: "flex",
                alignItems: "flex-end",
                padding: 14,
                boxSizing: "border-box",
              }}
            >
              <Image
                className="dc-photo"
                src="/photos/ucan.jpg"
                alt="урок англійською, U-CAN"
                fill
                sizes="(max-width: 599px) 65vw, (max-width: 1099px) 44vw, 306px"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 12px" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <span style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <span
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.14)",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    8–11 класи
                  </span>
                  <span
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.14)",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    Диплом Манітоби
                  </span>
                </span>
                <span
                  className="ar"
                  style={{
                    flex: "none",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.16)",
                    color: "#FFFFFF",
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
              <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.6 }}>
                <span className="nw">U-CAN</span>: канадський диплом
              </h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.86)" }}>
                10 додаткових предметів і 1100 годин англійською за 4 роки — паралельно з українською програмою.
              </span>
            </div>
          </Link>
        </div>
      </section>
      <DaySchedule eyebrow="Один день у школі" title="Розумове навантаження чергується з рухом і творчістю" />
      <section aria-labelledby="ucan-title" style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 16 }}>
        <div
          style={{
            flex: "1.5 1 620px",
            minWidth: 0,
            borderRadius: 28,
            background: "#5B3FA8",
            color: "#FFFFFF",
            padding: "clamp(28px, 3.6vw, 52px)",
            display: "flex",
            flexDirection: "column",
            gap: 22,
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
              color: "rgba(255,255,255,0.86)",
            }}
          >
            <span style={{ width: 26, height: 2, background: "#8CC63F" }} />
            U-CAN · українсько-канадська програма
          </span>
          <h2
            id="ucan-title"
            style={{
              margin: 0,
              fontSize: "clamp(30px, 3.2vw, 44px)",
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: -1.6,
              textWrap: "balance",
            }}
          >
            Українське свідоцтво і <span lang="en">Manitoba High School Diploma</span> — одночасно
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: 640,
              fontSize: 17,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.86)",
              textWrap: "pretty",
            }}
          >
            З 8 по 11 клас учні опановують 10 додаткових предметів канадської програми — винятково англійською. Кредити
            диплома зараховують іноземні університети без додаткових підтверджень.
          </p>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 100%), 1fr))", gap: 12 }}
          >
            <div
              style={{
                borderRadius: 20,
                background: "rgba(255,255,255,0.1)",
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                className="h-stat-num"
                style={{ fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4, whiteSpace: "nowrap" }}
              >
                4&nbsp;роки
              </span>
              <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "rgba(255,255,255,0.9)" }}>з 8 по 11 клас</span>
            </div>
            <div
              style={{
                borderRadius: 20,
                background: "rgba(255,255,255,0.1)",
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                className="h-stat-num"
                style={{ fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4, whiteSpace: "nowrap" }}
              >
                10
              </span>
              <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "rgba(255,255,255,0.9)" }}>
                додаткових предметів
              </span>
            </div>
            <div
              style={{
                borderRadius: 20,
                background: "rgba(255,255,255,0.1)",
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                className="h-stat-num"
                style={{ fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4, whiteSpace: "nowrap" }}
              >
                1100
              </span>
              <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "rgba(255,255,255,0.9)" }}>
                додаткових навчальних годин
              </span>
            </div>
            <div
              style={{
                borderRadius: 20,
                background: "rgba(255,255,255,0.1)",
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                className="h-stat-num"
                style={{ fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4, whiteSpace: "nowrap" }}
              >
                2019
              </span>
              <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "rgba(255,255,255,0.9)" }}>
                меморандум з урядом Манітоби
              </span>
            </div>
          </div>
          <div
            style={{
              borderRadius: 20,
              background: "rgba(255,255,255,0.1)",
              padding: "20px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <h3 style={{ margin: 0, fontSize: 18, lineHeight: 1.3, fontWeight: 800, letterSpacing: -0.3 }}>
              Як вступити на <span className="nw">U-CAN</span>
            </h3>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
                gap: "8px 22px",
              }}
            >
              <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, color: "#FFFFFF" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B9E07F"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: "none", marginTop: 2 }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  Старт — у 8 класі <span style={{ color: "rgba(255,255,255,0.9)" }}>[вступ у 9 клас — уточнити]</span>
                </span>
              </li>
              <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, color: "#FFFFFF" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B9E07F"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: "none", marginTop: 2 }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Есе</span>
              </li>
              <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, color: "#FFFFFF" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B9E07F"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: "none", marginTop: 2 }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Не нижче 8 балів (65%) з ключових предметів</span>
              </li>
              <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, color: "#FFFFFF" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B9E07F"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: "none", marginTop: 2 }}
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Англійська — не нижче 10 балів</span>
              </li>
            </ul>
            <Link
              className="lw"
              href="/enrolment#grade-ucan"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                fontSize: 15,
                fontWeight: 800,
                color: "#FFFFFF",
              }}
            >
              Усі умови вступу
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: "auto" }}>
            <a
              className="bg2"
              href="https://school-today.com/Forms/Client/104-14b1c2e2-0c89-4138-90ae-d2ad5d47578e"
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                minHeight: 50,
                padding: "0 26px",
                borderRadius: 999,
                background: "#8CC63F",
                color: "#16181A",
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              Заповнити анкету<span className="sr"> (відкриється в новій вкладці)</span>
              <svg
                width="16"
                height="16"
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
            <Link
              className="bo"
              href="/programs#ucan"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                minHeight: 50,
                padding: "0 26px",
                borderRadius: 999,
                border: "1.5px solid rgba(255,255,255,0.5)",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 700,
                boxSizing: "border-box",
              }}
            >
              <span>
                Про програму <span className="nw">U-CAN</span>
              </span>
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
        </div>
        <div style={{ flex: "1 1 380px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              flex: "1 1 auto",
              borderRadius: 28,
              background: "#FFFFFF",
              padding: 34,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: "#5F6366",
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
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Чим пишаємося
            </span>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
              <li style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: "1px solid #EDEEEA" }}>
                <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.5, fontWeight: 600 }}>
                  Перша школа в Україні з ліцензією на українсько-канадську програму
                </span>
              </li>
              <li style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: "1px solid #EDEEEA" }}>
                <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.5, fontWeight: 600 }}>
                  Перша в Україні школа, що працює за програмою «Лідер у мені»
                </span>
              </li>
              <li style={{ display: "flex", gap: 14, padding: "14px 0" }}>
                <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span style={{ fontSize: 15.5, lineHeight: 1.5, fontWeight: 600 }}>
                  Перші 10 випускників <span className="nw">U-CAN</span> отримали два документи в червні 2022
                </span>
              </li>
            </ul>
          </div>
          <Link
            className="tl"
            href="/about#leader"
            style={{
              flex: "1 1 auto",
              borderRadius: 28,
              background: "#8CC63F",
              color: "#16181A",
              padding: 34,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              boxSizing: "border-box",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "rgba(22,24,26,0.72)",
                }}
              >
                Лідер у мені
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
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </span>
            <span style={{ fontSize: 22, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.6 }}>
              7 звичок високоефективних людей Стівена Кові — мовою шкільного життя
            </span>
            <span style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              <span
                style={{
                  padding: "5px 11px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.55)",
                  fontSize: 12.5,
                  fontWeight: 700,
                }}
              >
                Я проактивний
              </span>
              <span
                style={{
                  padding: "5px 11px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.55)",
                  fontSize: 12.5,
                  fontWeight: 700,
                }}
              >
                Я знаю свою мету
              </span>
              <span
                style={{
                  padding: "5px 11px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.55)",
                  fontSize: 12.5,
                  fontWeight: 700,
                }}
              >
                Спочатку важливе
              </span>
              <span
                lang="en"
                style={{
                  padding: "5px 11px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.55)",
                  fontSize: 12.5,
                  fontWeight: 700,
                }}
              >
                Win-win
              </span>
              <span
                style={{
                  padding: "5px 11px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.55)",
                  fontSize: 12.5,
                  fontWeight: 700,
                }}
              >
                +3 звички
              </span>
            </span>
          </Link>
        </div>
      </section>
      <section aria-labelledby="campus-title" style={{ marginTop: 56 }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 760 }}>
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
              Кампус
            </span>
            <h2
              id="campus-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.4,
                textWrap: "balance",
              }}
            >
              Простір для навчання, руху і безпеки — в центрі Києва
            </h2>
          </div>
          <Link
            className="bl"
            href="/about#campus"
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
            Кампус і безпека
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <div
            className="h-campus-hero"
            data-photo="home-campus"
            style={{
              flex: "1.3 1 560px",
              minWidth: 0,
              position: "relative",
              minHeight: 520,
              borderRadius: 28,
              overflow: "hidden",
              backgroundColor: "#2B3034",
              backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 14px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "clamp(24px, 3vw, 40px)",
              boxSizing: "border-box",
            }}
          >
            <Image
              className="dc-photo"
              src="/photos/building.jpg"
              alt="будівля і подвір’я школи"
              fill
              sizes="(max-width: 599px) 92vw, (max-width: 1099px) 96vw, 723px"
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(12,14,16,0) 40%, rgba(12,14,16,0.82) 100%)",
              }}
            />
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12, color: "#FFFFFF" }}>
              <span
                style={{
                  fontSize: "clamp(56px, 6vw, 88px)",
                  lineHeight: 0.95,
                  fontWeight: 800,
                  letterSpacing: -4,
                  whiteSpace: "nowrap",
                }}
              >
                9585&nbsp;м²
              </span>
              <span style={{ maxWidth: 460, fontSize: 18, lineHeight: 1.5, color: "rgba(255,255,255,0.86)" }}>
                Сучасна будівля, спроєктована зарубіжними архітекторами, на Новопечерських липках.
              </span>
              <a
                className="bw"
                href="https://my.matterport.com/show/?m=hb9i8JMQQMh"
                target="_blank"
                rel="noopener"
                style={{
                  alignSelf: "flex-start",
                  marginTop: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 48,
                  padding: "0 24px",
                  borderRadius: 999,
                  background: "#FFFFFF",
                  color: "#16181A",
                  fontSize: 14.5,
                  fontWeight: 700,
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                3D-тур класами<span className="sr"> (відкриється в новій вкладці)</span>
                <svg
                  width="15"
                  height="15"
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
          </div>
          <div
            className="h-campus-stats"
            style={{
              flex: "1 1 520px",
              minWidth: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
              gap: 16,
            }}
          >
            <div
              className="h-cstat"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 252,
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#4E7A1F" }}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
                  <path d="M7 16v6" />
                  <path d="M13 19v3" />
                  <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
                </svg>
              </span>
              <h3
                style={{
                  margin: "6px 0 0",
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#5F6366",
                }}
              >
                Зелена територія
              </h3>
              <span
                className="h-cnum"
                style={{
                  marginTop: "auto",
                  fontSize: 44,
                  lineHeight: 1,
                  fontWeight: 800,
                  letterSpacing: -2,
                  whiteSpace: "nowrap",
                }}
              >
                3426,5&nbsp;м²
              </span>
              <span className="h-cdesc" style={{ fontSize: 14.5, lineHeight: 1.5, color: "#5F6366" }}>
                Охороняється по всьому периметру
              </span>
            </div>
            <div
              className="h-cstat"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 252,
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#5B3FA8" }}>
                <svg
                  width="26"
                  height="26"
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
              <h3
                style={{
                  margin: "6px 0 0",
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#5F6366",
                }}
              >
                Стадіон
              </h3>
              <span
                className="h-cnum"
                style={{
                  marginTop: "auto",
                  fontSize: 44,
                  lineHeight: 1,
                  fontWeight: 800,
                  letterSpacing: -2,
                  whiteSpace: "nowrap",
                }}
              >
                1280&nbsp;м²
              </span>
              <span className="h-cdesc" style={{ fontSize: 14.5, lineHeight: 1.5, color: "#5F6366" }}>
                5 бігових доріжок і футбольне поле
              </span>
            </div>
            <div
              className="h-cstat"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 252,
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#C8161C" }}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14.4 14.4 9.6 9.6" />
                  <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
                  <path d="m21.5 21.5-1.4-1.4" />
                  <path d="M3.9 3.9 2.5 2.5" />
                  <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
                </svg>
              </span>
              <h3
                style={{
                  margin: "6px 0 0",
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#5F6366",
                }}
              >
                Спортивна зала
              </h3>
              <span
                className="h-cnum"
                style={{
                  marginTop: "auto",
                  fontSize: 44,
                  lineHeight: 1,
                  fontWeight: 800,
                  letterSpacing: -2,
                  whiteSpace: "nowrap",
                }}
              >
                649&nbsp;м²
              </span>
              <span className="h-cdesc" style={{ fontSize: 14.5, lineHeight: 1.5, color: "#5F6366" }}>
                Зі скеледромом і трибуною для вболівальників
              </span>
            </div>
            <div
              className="h-cstat"
              style={{
                borderRadius: 28,
                background: "#16181A",
                color: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 252,
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#8CC63F" }}>
                <svg
                  width="26"
                  height="26"
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
              <h3
                style={{
                  margin: "6px 0 0",
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#9AA0A4",
                }}
              >
                Укриття
              </h3>
              <span
                className="h-cnum"
                style={{
                  marginTop: "auto",
                  fontSize: 44,
                  lineHeight: 1,
                  fontWeight: 800,
                  letterSpacing: -2,
                  whiteSpace: "nowrap",
                  color: "#8CC63F",
                }}
              >
                500&nbsp;м²
              </span>
              <span className="h-cdesc" style={{ fontSize: 14.5, lineHeight: 1.5, color: "#C9CDD1" }}>
                Сертифіковане укриття для всіх дітей: завжди світло, тепло та інтернет
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
            gap: 16,
          }}
        >
          <div
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              padding: 30,
              display: "flex",
              gap: 18,
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                flex: "none",
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
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: -0.4 }}>Студії</h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                Хореографічна й музична студії, гончарна майстерня та художня студія.
              </span>
            </span>
          </div>
          <div
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              padding: 30,
              display: "flex",
              gap: 18,
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                flex: "none",
                width: 44,
                height: 44,
                borderRadius: 14,
                background: "#F3F6EE",
                color: "#4E7A1F",
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
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                <path d="M7 2v20" />
                <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: -0.4 }}>Їдальня</h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                Власне виробництво і шеф, що спеціалізується на дитячому харчуванні. Обід включено у вартість.
              </span>
            </span>
          </div>
          <div
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              padding: 30,
              display: "flex",
              gap: 18,
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                flex: "none",
                width: 44,
                height: 44,
                borderRadius: 14,
                background: "#FDECEC",
                color: "#C8161C",
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
                <path d="M11 2v2" />
                <path d="M5 2v2" />
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                <path d="M8 15a6 6 0 0 0 12 0v-3" />
                <circle cx="20" cy="10" r="2" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: -0.4 }}>
                Медичний блок і доступність
              </h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                Повноцінний медичний блок. Пандуси та ліфт — для людей, які пересуваються на кріслі колісному.
              </span>
            </span>
          </div>
        </div>
      </section>
      <section aria-labelledby="news-title" style={{ marginTop: 56 }}>
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
              id="news-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.4,
              }}
            >
              Новини
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <Link
            className="tl"
            href="/news/news_novoshkola"
            style={{
              flex: "1.25 1 560px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              color: "#16181A",
              padding: "14px 14px 30px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              boxSizing: "border-box",
            }}
          >
            <div
              data-photo="home-news-majorette"
              style={{
                position: "relative",
                aspectRatio: "16 / 9",
                borderRadius: 20,
                overflow: "hidden",
                backgroundColor: "#E6E1F2",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
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
                sizes="(max-width: 599px) 85vw, (max-width: 1099px) 93vw, 748px"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 14px" }}>
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
                  fontSize: "clamp(22px, 2vw, 28px)",
                  lineHeight: 1.22,
                  fontWeight: 800,
                  letterSpacing: -0.8,
                  textWrap: "balance",
                }}
              >
                Учениці Новопечерської здобули призові місця на Чемпіонаті світу з мажорет-спорту
              </h3>
              <span style={{ fontSize: 15.5, lineHeight: 1.6, color: "#5F6366" }}>
                1 і 3 місця в сольних виступах, 2–5 місця в групових — хоча понад половину тренувань дівчата провели в
                шкільному укритті.
              </span>
            </div>
          </Link>
          <div style={{ flex: "1 1 420px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            <Link
              className="tl h-ncard"
              href="/news/news_novoshkola"
              style={{
                flex: "1 1 auto",
                borderRadius: 28,
                background: "#FFFFFF",
                color: "#16181A",
                padding: "14px 24px 14px 14px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                boxSizing: "border-box",
              }}
            >
              <div
                className="h-nthumb"
                data-photo="home-news-biology"
                style={{
                  flex: "none",
                  width: 132,
                  height: 132,
                  borderRadius: 18,
                  backgroundColor: "#E3E7DC",
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6B735F",
                }}
              >
                <Image
                  className="dc-photo"
                  src="/photos/news/biology.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 599px) 23vw, (max-width: 1099px) 15vw, 132px"
                />
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 800, color: "#4E7A1F" }}>Навчання</span>
                  <time dateTime="2026-10-09" style={{ fontSize: 13, fontWeight: 700, color: "#5F6366" }}>
                    09.10.2026
                  </time>
                </span>
                <h3
                  className="h-ntitle"
                  style={{ margin: 0, fontSize: 17, lineHeight: 1.35, fontWeight: 800, letterSpacing: -0.3 }}
                >
                  Від Антарктики до шкільної аудиторії: восьмикласники зустрілися з біологом Тарасом Перетятком
                </h3>
              </span>
            </Link>
            <Link
              className="tl h-ncard"
              href="/news/news_novoshkola"
              style={{
                flex: "1 1 auto",
                borderRadius: 28,
                background: "#FFFFFF",
                color: "#16181A",
                padding: "14px 24px 14px 14px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                boxSizing: "border-box",
              }}
            >
              <div
                className="h-nthumb"
                data-photo="home-news-azovstal"
                style={{
                  flex: "none",
                  width: 132,
                  height: 132,
                  borderRadius: 18,
                  backgroundColor: "#ECE7DD",
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#77705F",
                }}
              >
                <Image
                  className="dc-photo"
                  src="/photos/news/azovstal.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 599px) 23vw, (max-width: 1099px) 15vw, 132px"
                />
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 800, color: "#C8161C" }}>Події</span>
                  <time dateTime="2026-10-09" style={{ fontSize: 13, fontWeight: 700, color: "#5F6366" }}>
                    09.10.2026
                  </time>
                </span>
                <h3
                  className="h-ntitle"
                  style={{ margin: 0, fontSize: 17, lineHeight: 1.35, fontWeight: 800, letterSpacing: -0.3 }}
                >
                  Історії з «Азовсталі»: зустріч учнів із захисником Маріуполя Дмитром Козацьким
                </h3>
              </span>
            </Link>
            <Link
              className="tl h-ncard"
              href="/news/news_novoshkola"
              style={{
                flex: "1 1 auto",
                borderRadius: 28,
                background: "#FFFFFF",
                color: "#16181A",
                padding: "14px 24px 14px 14px",
                display: "flex",
                alignItems: "center",
                gap: 20,
                boxSizing: "border-box",
              }}
            >
              <div
                className="h-nthumb"
                data-photo="home-news-sept1"
                style={{
                  flex: "none",
                  width: 132,
                  height: 132,
                  borderRadius: 18,
                  backgroundColor: "#E6E1F2",
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6A5F8A",
                }}
              >
                <Image
                  className="dc-photo"
                  src="/photos/news/sept1.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 599px) 23vw, (max-width: 1099px) 15vw, 132px"
                />
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 800, color: "#C8161C" }}>Події</span>
                  <time dateTime="2026-09-02" style={{ fontSize: 13, fontWeight: 700, color: "#5F6366" }}>
                    02.09.2026
                  </time>
                </span>
                <h3
                  className="h-ntitle"
                  style={{ margin: 0, fontSize: 17, lineHeight: 1.35, fontWeight: 800, letterSpacing: -0.3 }}
                >
                  Новопечерська розпочинає тринадцятий навчальний рік
                </h3>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Voices />
      <section aria-labelledby="cta-title" style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 16 }}>
        <div
          style={{
            flex: "1.6 1 620px",
            minWidth: 0,
            borderRadius: 28,
            background: "#16181A",
            color: "#FFFFFF",
            padding: "clamp(28px, 4vw, 56px)",
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
            Вступ 2027/2028
          </span>
          <h2
            id="cta-title"
            style={{
              margin: 0,
              fontSize: "clamp(30px, 3.4vw, 46px)",
              lineHeight: 1.06,
              fontWeight: 800,
              letterSpacing: -1.6,
              textWrap: "balance",
            }}
          >
            Почніть з анкети — ми зателефонуємо і запросимо на зустріч
          </h2>
          <p style={{ margin: 0, maxWidth: 620, fontSize: 17, lineHeight: 1.6, color: "#9AA0A4" }}>
            Заповніть анкету — ми зателефонуємо, щоб домовитися про зустріч та екскурсію школою. Анкета — перший етап
            відбору, кількість місць обмежена.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
            <a
              className="bg2"
              href="https://school-today.com/Forms/Client/104-14b1c2e2-0c89-4138-90ae-d2ad5d47578e"
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                minHeight: 52,
                padding: "0 28px",
                borderRadius: 999,
                background: "#8CC63F",
                color: "#16181A",
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                <path d="M8 18h1" />
              </svg>
              Заповнити анкету<span className="sr"> (відкриється в новій вкладці)</span>
              <svg
                width="15"
                height="15"
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
            <a
              className="bo"
              href="tel:+380503733973"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                minHeight: 52,
                padding: "0 26px",
                borderRadius: 999,
                border: "1.5px solid rgba(255,255,255,0.4)",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 700,
                boxSizing: "border-box",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +38 (050) 373-39-73
            </a>
            <a
              className="bo"
              href="https://t.me/NovopecherskaShoolAdmission"
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                minHeight: 52,
                padding: "0 26px",
                borderRadius: 999,
                border: "1.5px solid rgba(255,255,255,0.4)",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 700,
                boxSizing: "border-box",
              }}
            >
              <svg
                width="17"
                height="17"
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
          </div>
        </div>
        <a
          className="tl"
          href="https://forms.gle/tfUm17FznhabyiYv7"
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
            minHeight: 300,
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
                <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
                <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
                <path d="M16 17h4" />
                <path d="M4 13h4" />
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
          <span style={{ marginTop: "auto", fontSize: 28, lineHeight: 1.15, fontWeight: 800, letterSpacing: -1 }}>
            Записатися на екскурсію
          </span>
          <span style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(22,24,26,0.78)" }}>
            Познайомтеся зі школою наживо. Запис — онлайн-формою або за телефоном +38&nbsp;(050)&nbsp;373-39-73.
          </span>
          <span className="sr"> (відкриється в новій вкладці)</span>
        </a>
      </section>
    </main>
  );
}
