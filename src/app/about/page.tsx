import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Про школу" };

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[["Про школу"]]} />
      <main id="main" style={{ display: "flex", flexDirection: "column" }}>
        <section aria-labelledby="about-title" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <div
            className="ts pad-m"
            style={{
              flex: "1.25 1 620px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "clamp(28px, 4vw, 56px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 26,
              minHeight: 520,
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
                color: "#5F6366",
              }}
            >
              <span style={{ width: 26, height: 2, background: "#8CC63F" }} />
              Про школу
            </span>
            <h1
              id="about-title"
              style={{
                margin: 0,
                fontSize: "clamp(34px, 4vw, 56px)",
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: -2,
                textWrap: "balance",
              }}
            >
              Ми виховуємо архітекторів змін з глобальним мисленням та{" "}
              <span style={{ color: "#5B3FA8" }}>українським серцем</span>
            </h1>
            <p
              style={{ margin: 0, maxWidth: 580, fontSize: 18, lineHeight: 1.65, color: "#54585C", textWrap: "pretty" }}
            >
              Сучасний заклад освіти в центрі Києва на Новопечерських липках. До 550 дітей з 1 по 11 клас за українською
              програмою та групи дошкільної підготовки (КДП). Навчання — наживо і дистанційно.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                className="bp"
                href="https://forms.gle/tfUm17FznhabyiYv7"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 52,
                  padding: "0 26px",
                  borderRadius: 999,
                  background: "#5B3FA8",
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Записатися на екскурсію<span className="sr"> (відкриється в новій вкладці)</span>
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
                className="bl"
                href="/enrolment"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 52,
                  padding: "0 26px",
                  borderRadius: 999,
                  border: "1.5px solid #E3E5E0",
                  background: "#FFFFFF",
                  color: "#16181A",
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
          <div
            className="ph-m"
            data-photo="about-hero"
            style={{
              flex: "1 1 420px",
              minWidth: 0,
              position: "relative",
              minHeight: 520,
              borderRadius: 28,
              overflow: "hidden",
              backgroundColor: "#2B3034",
              backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 14px)",
              boxSizing: "border-box",
            }}
          >
            <Image
              className="dc-photo"
              src="/photos/first-day.jpg"
              alt="учні Новопечерської школи"
              fill
              sizes="(max-width: 599px) 92vw, (max-width: 1099px) 96vw, 566px"
              loading="eager"
              fetchPriority="high"
            />{" "}
          </div>
        </section>
        <nav
          className="secnav"
          aria-label="Розділи сторінки"
          style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 8, padding: "10px 0" }}
        >
          <a
            className="bl"
            href="#mission"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              minHeight: 44,
              padding: "0 16px",
              borderRadius: 999,
              border: "1.5px solid #E3E5E0",
              background: "#FFFFFF",
              color: "#16181A",
              fontSize: 14,
              fontWeight: 700,
              boxSizing: "border-box",
            }}
          >
            Місія і цінності
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
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
          <a
            className="bl"
            href="#leader"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              minHeight: 44,
              padding: "0 16px",
              borderRadius: 999,
              border: "1.5px solid #E3E5E0",
              background: "#FFFFFF",
              color: "#16181A",
              fontSize: 14,
              fontWeight: 700,
              boxSizing: "border-box",
            }}
          >
            Лідер у мені
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
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
          <a
            className="bl"
            href="#team"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              minHeight: 44,
              padding: "0 16px",
              borderRadius: 999,
              border: "1.5px solid #E3E5E0",
              background: "#FFFFFF",
              color: "#16181A",
              fontSize: 14,
              fontWeight: 700,
              boxSizing: "border-box",
            }}
          >
            Команда
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
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
          <a
            className="bl"
            href="#campus"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              minHeight: 44,
              padding: "0 16px",
              borderRadius: 999,
              border: "1.5px solid #E3E5E0",
              background: "#FFFFFF",
              color: "#16181A",
              fontSize: 14,
              fontWeight: 700,
              boxSizing: "border-box",
            }}
          >
            Кампус і безпека
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
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
          <a
            className="bl"
            href="#traditions"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              minHeight: 44,
              padding: "0 16px",
              borderRadius: 999,
              border: "1.5px solid #E3E5E0",
              background: "#FFFFFF",
              color: "#16181A",
              fontSize: 14,
              fontWeight: 700,
              boxSizing: "border-box",
            }}
          >
            Традиції
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
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
          <a
            className="bl"
            href="#reviews"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              minHeight: 44,
              padding: "0 16px",
              borderRadius: 999,
              border: "1.5px solid #E3E5E0",
              background: "#FFFFFF",
              color: "#16181A",
              fontSize: 14,
              fontWeight: 700,
              boxSizing: "border-box",
            }}
          >
            Річні огляди
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
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
          <a
            className="bl"
            href="#jobs"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              minHeight: 44,
              padding: "0 16px",
              borderRadius: 999,
              border: "1.5px solid #E3E5E0",
              background: "#FFFFFF",
              color: "#16181A",
              fontSize: 14,
              fontWeight: 700,
              boxSizing: "border-box",
            }}
          >
            Вакансії
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
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </nav>
        <section
          aria-label="Школа в цифрах"
          className="g2m"
          style={{
            marginTop: 8,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
            gap: 16,
          }}
        >
          <div
            className="ts"
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 170,
              boxSizing: "border-box",
            }}
          >
            <span
              className="num"
              style={{ marginTop: "auto", fontSize: 48, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}
            >
              до 550
            </span>
            <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#5F6366" }}>
              учнів з 1 по 11 клас і групи дошкільної підготовки
            </span>
          </div>
          <div
            className="ts"
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 170,
              boxSizing: "border-box",
            }}
          >
            <span
              className="num"
              style={{ marginTop: "auto", fontSize: 48, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}
            >
              13-й
            </span>
            <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#5F6366" }}>навчальний рік — з вересня 2026</span>
          </div>
          <div
            className="ts"
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 170,
              boxSizing: "border-box",
            }}
          >
            <span
              className="num"
              style={{ marginTop: "auto", fontSize: 48, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}
            >
              11
            </span>
            <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#5F6366" }}>випусків з року заснування школи</span>
          </div>
        </section>
        <section aria-labelledby="diff-title" style={{ marginTop: 56 }}>
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
                Наші відмінності
              </span>
              <h2
                id="diff-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  textWrap: "balance",
                }}
              >
                Чим ми відрізняємось
              </h2>
            </div>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", gap: 16 }}
          >
            <Link
              className="tl"
              href="/programs#ucan"
              style={{
                borderRadius: 28,
                background: "#5B3FA8",
                color: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 190,
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
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  U-CAN
                </span>
                <span
                  className="ar"
                  style={{
                    flex: "none",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.14)",
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
              <h3
                style={{
                  margin: "auto 0 0",
                  fontSize: 21,
                  lineHeight: 1.28,
                  fontWeight: 800,
                  letterSpacing: -0.5,
                  textWrap: "balance",
                }}
              >
                Перша в Україні ліцензія на українсько-канадську програму <span className="nw">U-CAN</span>
              </h3>
            </Link>
            <a
              className="tl"
              href="#leader"
              style={{
                borderRadius: 28,
                background: "#8CC63F",
                color: "#16181A",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 190,
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
                  Лідерство
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
              <h3
                style={{
                  margin: "auto 0 0",
                  fontSize: 21,
                  lineHeight: 1.28,
                  fontWeight: 800,
                  letterSpacing: -0.5,
                  textWrap: "balance",
                }}
              >
                Перша школа в Україні з програмою «Лідер у мені»
              </h3>
            </a>
            <Link
              className="tl"
              href="/programs#primary"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                color: "#16181A",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 190,
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
                    color: "#5F6366",
                  }}
                >
                  Початкова школа
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
              <h3
                style={{
                  margin: "auto 0 0",
                  fontSize: 21,
                  lineHeight: 1.28,
                  fontWeight: 800,
                  letterSpacing: -0.5,
                  textWrap: "balance",
                }}
              >
                Монтессорі, Дальтон-план і вальдорфська педагогіка в 1–4 класах
              </h3>
            </Link>
            <Link
              className="tl"
              href="/programs#secondary"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                color: "#16181A",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 190,
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
                    color: "#5F6366",
                  }}
                >
                  Учителі
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
              <h3
                style={{
                  margin: "auto 0 0",
                  fontSize: 21,
                  lineHeight: 1.28,
                  fontWeight: 800,
                  letterSpacing: -0.5,
                  textWrap: "balance",
                }}
              >
                Учителям заборонено приватне репетиторство з учнями
              </h3>
            </Link>
            <a
              className="tl"
              href="#campus"
              style={{
                borderRadius: 28,
                background: "#16181A",
                color: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 190,
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
                    color: "#9AA0A4",
                  }}
                >
                  Безпека
                </span>
                <span
                  className="ar"
                  style={{
                    flex: "none",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
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
              <h3
                style={{
                  margin: "auto 0 0",
                  fontSize: 21,
                  lineHeight: 1.28,
                  fontWeight: 800,
                  letterSpacing: -0.5,
                  textWrap: "balance",
                }}
              >
                Сертифіковане укриття <span className="nw">500&nbsp;м²</span> для всіх дітей
              </h3>
            </a>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                color: "#16181A",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 190,
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
                    color: "#5F6366",
                  }}
                >
                  Відзнака
                </span>
                <span style={{ flex: "none", color: "#5B3FA8" }}>
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
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                </span>
              </span>
              <h3 style={{ margin: "auto 0 0", fontSize: 21, lineHeight: 1.28, fontWeight: 800, letterSpacing: -0.5 }}>
                <span lang="en">Microsoft Showcase School</span>
              </h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#5F6366" }}>
                Школа неодноразово входила до міжнародного рейтингу інноваційних шкіл.
              </span>
            </div>
          </div>
        </section>
        <section aria-label="Відео про школу" style={{ marginTop: 16 }}>
          <a
            className="tl vid"
            href="https://www.youtube.com/watch?v=1JWThkfSyeU"
            target="_blank"
            rel="noopener"
            data-photo="about-video"
            style={{
              position: "relative",
              minHeight: 360,
              borderRadius: 28,
              overflow: "hidden",
              backgroundColor: "#2B3034",
              backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 14px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              padding: "40px 24px",
              boxSizing: "border-box",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            <Image
              className="dc-photo"
              src="/photos/video.jpg"
              alt="кадр із відео про школу"
              fill
              sizes="(max-width: 599px) 92vw, (max-width: 1099px) 96vw, 1384px"
            />
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(12,14,16,0.1) 0%, rgba(12,14,16,0.6) 100%)",
              }}
            />
            <span
              className="ar"
              style={{
                position: "relative",
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "#FFFFFF",
                color: "#16181A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                style={{ marginLeft: 4 }}
              >
                <polygon points="6 3 20 12 6 21 6 3" fill="currentColor" />
              </svg>
            </span>
            <span
              className="vid-t"
              style={{
                position: "relative",
                fontSize: "clamp(24px, 2.6vw, 34px)",
                lineHeight: 1.15,
                fontWeight: 800,
                letterSpacing: -1,
              }}
            >
              Відео про Новопечерську школу
            </span>
            <span
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 15,
                fontWeight: 600,
                color: "rgba(255,255,255,0.86)",
              }}
            >
              YouTube · канал школи<span className="sr"> (відкриється в новій вкладці)</span>
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
            </span>
          </a>
        </section>
        <section
          id="mission"
          aria-labelledby="mission-title"
          style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 16 }}
        >
          <div
            className="pad-m"
            style={{
              flex: "1 1 520px",
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
            <h2
              id="mission-title"
              style={{
                margin: 0,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              <span style={{ width: 26, height: 2, background: "#8CC63F" }} />
              Місія
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(21px, 2vw, 26px)",
                lineHeight: 1.5,
                fontWeight: 600,
                letterSpacing: -0.4,
                textWrap: "pretty",
              }}
            >
              Новопечерська школа пропонує своїм учням освітній досвід, який максимально розкриває їхній навчальний
              потенціал: вони стануть незалежними громадянами з широким кругозором, навчаться критично мислити та легко
              вирішувати проблеми, а також віддано розвиватимуть свої таланти.
            </p>
            <p
              style={{
                margin: "auto 0 0",
                fontSize: 16,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.78)",
                textWrap: "pretty",
              }}
            >
              Для цього школа забезпечує довірливе, турботливе й співчутливе середовище, де учні розвивають
              морально-етичні якості та вміння розуміти інших.
            </p>
          </div>
          <div
            className="pad-m"
            style={{
              flex: "1.1 1 560px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "clamp(28px, 3.6vw, 52px)",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              boxSizing: "border-box",
            }}
          >
            <h2
              id="vision-title"
              style={{
                margin: 0,
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
              Візія школи
            </h2>
            <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5 }}>Новопечерська школа — це:</span>
            <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
              <li style={{ display: "flex", gap: 18, padding: "14px 0", borderBottom: "1px solid #EDEEEA" }}>
                <span
                  aria-hidden="true"
                  style={{ flex: "none", minWidth: 28, fontSize: 13, fontWeight: 800, color: "#4E7A1F", paddingTop: 2 }}
                >
                  01
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600 }}>
                  дитиноцентрична школа, де кожен учень розвивається і натхненно навчається для життя
                </span>
              </li>
              <li style={{ display: "flex", gap: 18, padding: "14px 0", borderBottom: "1px solid #EDEEEA" }}>
                <span
                  aria-hidden="true"
                  style={{ flex: "none", minWidth: 28, fontSize: 13, fontWeight: 800, color: "#4E7A1F", paddingTop: 2 }}
                >
                  02
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600 }}>
                  сучасний простір, що об’єднує однодумців (учнів, батьків, учителів) та надихає вдосконалювати себе і
                  світ
                </span>
              </li>
              <li style={{ display: "flex", gap: 18, padding: "14px 0", borderBottom: "1px solid #EDEEEA" }}>
                <span
                  aria-hidden="true"
                  style={{ flex: "none", minWidth: 28, fontSize: 13, fontWeight: 800, color: "#4E7A1F", paddingTop: 2 }}
                >
                  03
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600 }}>
                  місце, де зростають успішні учні — майбутні лідери, архітектори позитивних змін з великим українським
                  серцем
                </span>
              </li>
              <li style={{ display: "flex", gap: 18, padding: "14px 0", borderBottom: "1px solid #EDEEEA" }}>
                <span
                  aria-hidden="true"
                  style={{ flex: "none", minWidth: 28, fontSize: 13, fontWeight: 800, color: "#4E7A1F", paddingTop: 2 }}
                >
                  04
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600 }}>
                  територія довіри та можливостей для постійного розвитку учнів, батьків, учителів
                </span>
              </li>
              <li style={{ display: "flex", gap: 18, padding: "14px 0", borderBottom: "1px solid #EDEEEA" }}>
                <span
                  aria-hidden="true"
                  style={{ flex: "none", minWidth: 28, fontSize: 13, fontWeight: 800, color: "#4E7A1F", paddingTop: 2 }}
                >
                  05
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600 }}>
                  ефективні вчителі-новатори, що володіють сучасними методами навчання та втілюють прогресивні ідеї
                </span>
              </li>
              <li style={{ display: "flex", gap: 18, padding: "14px 0" }}>
                <span
                  aria-hidden="true"
                  style={{ flex: "none", minWidth: 28, fontSize: 13, fontWeight: 800, color: "#4E7A1F", paddingTop: 2 }}
                >
                  06
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600 }}>
                  флагман та рушій освітніх інновацій України
                </span>
              </li>
            </ol>
          </div>
        </section>
        <section id="values" aria-labelledby="values-title" style={{ marginTop: 56 }}>
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
                Цінності
              </span>
              <h2
                id="values-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  textWrap: "balance",
                }}
              >
                П’ять принципів, за якими живе Новопечерська родина
              </h2>
            </div>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 16 }}
          >
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 230,
                boxSizing: "border-box",
              }}
            >
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
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
              </span>
              <h3 style={{ margin: "6px 0 0", fontSize: 21, fontWeight: 800, letterSpacing: -0.5 }}>Довіра</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Я довіряю всім членам Новопечерської родини: учням, батькам, учителям та команді школи.
              </p>
            </div>
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 230,
                boxSizing: "border-box",
              }}
            >
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
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </span>
              <h3 style={{ margin: "6px 0 0", fontSize: 21, fontWeight: 800, letterSpacing: -0.5 }}>Розвиток</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Я розвиваюсь сам і допомагаю розвиватись іншим.
              </p>
            </div>
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 230,
                boxSizing: "border-box",
              }}
            >
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
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </span>
              <h3 style={{ margin: "6px 0 0", fontSize: 21, fontWeight: 800, letterSpacing: -0.5 }}>Повага</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>Я поважаю кожного.</p>
            </div>
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 230,
                boxSizing: "border-box",
              }}
            >
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
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <h3 style={{ margin: "6px 0 0", fontSize: 21, fontWeight: 800, letterSpacing: -0.5 }}>
                Відповідальність
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Я несу відповідальність за свій результат, свідомо ставлюсь до цінностей школи, правил, завдань та
                обов’язків.
              </p>
            </div>
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                minHeight: 230,
                boxSizing: "border-box",
              }}
            >
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
                  <path d="M18 21a8 8 0 0 0-16 0" />
                  <circle cx="10" cy="8" r="5" />
                  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                </svg>
              </span>
              <h3 style={{ margin: "6px 0 0", fontSize: 21, fontWeight: 800, letterSpacing: -0.5 }}>Командність</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Я є частиною успіху шкільної спільноти: працюю, надихаю, ділюсь, допомагаю.
              </p>
            </div>
          </div>
        </section>
        <section id="leader" aria-labelledby="leader-title" style={{ marginTop: 56 }}>
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
                Лідер у мені
              </span>
              <h2
                id="leader-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  textWrap: "balance",
                }}
              >
                Сім звичок, які стають характером
              </h2>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <ol
              className="g2m"
              style={{
                flex: "2 1 720px",
                minWidth: 0,
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
                gap: 16,
              }}
            >
              <li
                className="ts"
                style={{
                  borderRadius: 28,
                  background: "#FFFFFF",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 150,
                  boxSizing: "border-box",
                }}
              >
                <span aria-hidden="true" style={{ fontSize: 13, fontWeight: 800, color: "#5B3FA8" }}>
                  01
                </span>
                <h3 style={{ margin: "auto 0 0", fontSize: 18, lineHeight: 1.3, fontWeight: 800, letterSpacing: -0.4 }}>
                  Я проактивний
                </h3>
              </li>
              <li
                className="ts"
                style={{
                  borderRadius: 28,
                  background: "#FFFFFF",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 150,
                  boxSizing: "border-box",
                }}
              >
                <span aria-hidden="true" style={{ fontSize: 13, fontWeight: 800, color: "#5B3FA8" }}>
                  02
                </span>
                <h3 style={{ margin: "auto 0 0", fontSize: 18, lineHeight: 1.3, fontWeight: 800, letterSpacing: -0.4 }}>
                  Я знаю свою мету
                </h3>
              </li>
              <li
                className="ts"
                style={{
                  borderRadius: 28,
                  background: "#FFFFFF",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 150,
                  boxSizing: "border-box",
                }}
              >
                <span aria-hidden="true" style={{ fontSize: 13, fontWeight: 800, color: "#5B3FA8" }}>
                  03
                </span>
                <h3 style={{ margin: "auto 0 0", fontSize: 18, lineHeight: 1.3, fontWeight: 800, letterSpacing: -0.4 }}>
                  Я роблю спочатку важливе, а потім термінове
                </h3>
              </li>
              <li
                className="ts"
                style={{
                  borderRadius: 28,
                  background: "#FFFFFF",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 150,
                  boxSizing: "border-box",
                }}
              >
                <span aria-hidden="true" style={{ fontSize: 13, fontWeight: 800, color: "#5B3FA8" }}>
                  04
                </span>
                <h3 style={{ margin: "auto 0 0", fontSize: 18, lineHeight: 1.3, fontWeight: 800, letterSpacing: -0.4 }}>
                  Я думаю в стилі «win-win»
                </h3>
              </li>
              <li
                className="ts"
                style={{
                  borderRadius: 28,
                  background: "#FFFFFF",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 150,
                  boxSizing: "border-box",
                }}
              >
                <span aria-hidden="true" style={{ fontSize: 13, fontWeight: 800, color: "#5B3FA8" }}>
                  05
                </span>
                <h3 style={{ margin: "auto 0 0", fontSize: 18, lineHeight: 1.3, fontWeight: 800, letterSpacing: -0.4 }}>
                  Я спочатку слухаю іншого, а потім пояснюю своє
                </h3>
              </li>
              <li
                className="ts"
                style={{
                  borderRadius: 28,
                  background: "#FFFFFF",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 150,
                  boxSizing: "border-box",
                }}
              >
                <span aria-hidden="true" style={{ fontSize: 13, fontWeight: 800, color: "#5B3FA8" }}>
                  06
                </span>
                <h3 style={{ margin: "auto 0 0", fontSize: 18, lineHeight: 1.3, fontWeight: 800, letterSpacing: -0.4 }}>
                  Я створюю синергію
                </h3>
              </li>
              <li
                className="ts span2"
                style={{
                  borderRadius: 28,
                  background: "#FFFFFF",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 150,
                  boxSizing: "border-box",
                }}
              >
                <span aria-hidden="true" style={{ fontSize: 13, fontWeight: 800, color: "#5B3FA8" }}>
                  07
                </span>
                <h3 style={{ margin: "auto 0 0", fontSize: 18, lineHeight: 1.3, fontWeight: 800, letterSpacing: -0.4 }}>
                  Я вчасно загострюю пилку
                </h3>
              </li>
            </ol>
            <div
              className="pad-m"
              style={{
                flex: "1 1 340px",
                minWidth: 0,
                borderRadius: 28,
                background: "#8CC63F",
                color: "#16181A",
                padding: 34,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "rgba(22,24,26,0.72)",
                }}
              >
                Лідер у мені (<span lang="en">Leader in Me</span>)
              </span>
              <h3
                style={{
                  margin: 0,
                  fontSize: 24,
                  lineHeight: 1.22,
                  fontWeight: 800,
                  letterSpacing: -0.7,
                  textWrap: "balance",
                }}
              >
                Перша школа в Україні, що працює за цією програмою
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "rgba(22,24,26,0.8)" }}>
                Ми працюємо за програмою «Лідер у мені» з моменту заснування школи. Це адаптація «Семи звичок
                високоефективних людей» Стівена Кові до шкільного життя.
              </p>
              <ul
                style={{
                  margin: "auto 0 0",
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <li style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.45, fontWeight: 700 }}>
                  <span style={{ flex: "none", paddingTop: 1 }}>
                    <svg
                      width="17"
                      height="17"
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
                  День Лідерства — двічі на рік
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.45, fontWeight: 700 }}>
                  <span style={{ flex: "none", paddingTop: 1 }}>
                    <svg
                      width="17"
                      height="17"
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
                  Майстер-класи «Лідер у мені» для батьків
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.45, fontWeight: 700 }}>
                  <span style={{ flex: "none", paddingTop: 1 }}>
                    <svg
                      width="17"
                      height="17"
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
                  Старшокласники — наставники п’ятикласників
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.45, fontWeight: 700 }}>
                  <span style={{ flex: "none", paddingTop: 1 }}>
                    <svg
                      width="17"
                      height="17"
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
                  Щомісячні теми звичок і лідерська крамничка
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="skills" aria-labelledby="skills-title" style={{ marginTop: 56 }}>
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
                Навички XXI століття
              </span>
              <h2
                id="skills-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  textWrap: "balance",
                }}
              >
                Те, що потрібно для успіху в глобалізованому інформаційному світі
              </h2>
            </div>
            <span style={{ maxWidth: 420, fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
              Перелік навичок запропонували понад 200 організацій та провідних компаній світу.
            </span>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 16 }}
          >
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                boxSizing: "border-box",
              }}
            >
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
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </span>
              <h3 style={{ margin: 0, fontSize: 21, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.5 }}>
                Навчальні та інноваційні навички
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
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
                  Творчість та інноваційність
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
                  Критичне мислення і вміння вирішувати проблеми
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
                  Комунікація та співробітництво
                </span>
              </div>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                boxSizing: "border-box",
              }}
            >
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
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                  <line x1="12" x2="12.01" y1="18" y2="18" />
                </svg>
              </span>
              <h3 style={{ margin: 0, fontSize: 21, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.5 }}>
                Інформація, медіа й технології
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
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
                  Інформаційна грамотність
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
                  Медіаграмотність
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
                  ІКТ-грамотність
                </span>
              </div>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                boxSizing: "border-box",
              }}
            >
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
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <h3 style={{ margin: 0, fontSize: 21, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.5 }}>
                Життєві та кар’єрні навички
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
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
                  Гнучкість та пристосовуваність
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
                  Ініціатива та самоспрямованість
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
                  Соціальні та міжкультурні навички
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
                  Продуктивність
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
                  Лідерство та відповідальність
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="team" aria-labelledby="team-title" style={{ marginTop: 56 }}>
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
                Команда
              </span>
              <h2
                id="team-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  textWrap: "balance",
                }}
              >
                Люди, які створюють школу щодня
              </h2>
            </div>
            <span
              data-photo-cap=""
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13.5,
                fontWeight: 700,
                color: "#5F6366",
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
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
              Фото команди — [додати портрети]
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <div
              className="ts pad-m"
              style={{
                flex: "1 1 340px",
                minWidth: 0,
                borderRadius: 28,
                background: "#5B3FA8",
                color: "#FFFFFF",
                padding: 36,
                display: "flex",
                flexDirection: "column",
                gap: 18,
                minHeight: 360,
                boxSizing: "border-box",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 104,
                  height: 104,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 34,
                  fontWeight: 800,
                  letterSpacing: -1,
                }}
              >
                ЗЛ
              </span>
              <span
                style={{
                  marginTop: "auto",
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                Засновниця
              </span>
              <h3 style={{ margin: 0, fontSize: 30, lineHeight: 1.1, fontWeight: 800, letterSpacing: -1 }}>
                Зоя Литвин
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.78)" }}>
                Засновниця Новопечерської школи, голова ГС «Освіторія»
              </p>
            </div>
            <ul
              style={{
                flex: "3 1 760px",
                minWidth: 0,
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
                gap: 16,
              }}
            >
              <li
                style={{
                  borderRadius: 24,
                  background: "#FFFFFF",
                  padding: 22,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxSizing: "border-box",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#EFEAFA",
                    color: "#5B3FA8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  ПК
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3 }}>Поліна Комарова</h3>
                  <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "#5F6366" }}>Освітня директорка</span>
                </div>
              </li>
              <li
                style={{
                  borderRadius: 24,
                  background: "#FFFFFF",
                  padding: 22,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxSizing: "border-box",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#F3F6EE",
                    color: "#4E7A1F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  РГ
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3 }}>Роман Горошко</h3>
                  <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "#5F6366" }}>
                    <span lang="en">CEO</span>
                  </span>
                </div>
              </li>
              <li
                style={{
                  borderRadius: 24,
                  background: "#FFFFFF",
                  padding: 22,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxSizing: "border-box",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#FDECEC",
                    color: "#C8161C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  ОШ
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3 }}>Олена Шевченко</h3>
                  <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "#5F6366" }}>Керівниця початкової школи</span>
                </div>
              </li>
              <li
                style={{
                  borderRadius: 24,
                  background: "#FFFFFF",
                  padding: 22,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxSizing: "border-box",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#F1F2EE",
                    color: "#16181A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  ТТ
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3 }}>Тетяна Ткаченко</h3>
                  <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "#5F6366" }}>
                    Керівниця середньої та старшої школи
                  </span>
                </div>
              </li>
              <li
                style={{
                  borderRadius: 24,
                  background: "#FFFFFF",
                  padding: 22,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxSizing: "border-box",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#EFEAFA",
                    color: "#5B3FA8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  ВК
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3 }}>Вікторія Когутюк</h3>
                  <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "#5F6366" }}>Керівниця HR-департаменту</span>
                </div>
              </li>
              <li
                style={{
                  borderRadius: 24,
                  background: "#FFFFFF",
                  padding: 22,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxSizing: "border-box",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#F3F6EE",
                    color: "#4E7A1F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  ТХ
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3 }}>Тетяна Хаустова</h3>
                  <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "#5F6366" }}>
                    Керівниця фінансово-юридичного департаменту
                  </span>
                </div>
              </li>
              <li
                style={{
                  borderRadius: 24,
                  background: "#FFFFFF",
                  padding: 22,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxSizing: "border-box",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#FDECEC",
                    color: "#C8161C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  НХ
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3 }}>Надія Храновська</h3>
                  <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "#5F6366" }}>
                    Керівниця департаменту маркетингу та комунікацій
                  </span>
                </div>
              </li>
              <li
                style={{
                  borderRadius: 24,
                  background: "#FFFFFF",
                  padding: 22,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxSizing: "border-box",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#F1F2EE",
                    color: "#16181A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  ТС
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3 }}>Тетяна Сунак</h3>
                  <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "#5F6366" }}>
                    Координаторка програми <span className="nw">U-CAN</span>
                  </span>
                </div>
              </li>
              <li
                style={{
                  borderRadius: 24,
                  background: "#FFFFFF",
                  padding: 22,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  boxSizing: "border-box",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#EFEAFA",
                    color: "#5B3FA8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  ОН
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3 }}>Ольга Наумчук</h3>
                  <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "#5F6366" }}>
                    Керівниця дистанційної школи
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section id="campus" aria-labelledby="campus-title" style={{ marginTop: 56 }}>
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
                Кампус і безпека
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
                Простір для навчання, спорту й творчості на Новопечерських липках
              </h2>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <div
              className="pad-m"
              style={{
                flex: "1 1 400px",
                minWidth: 0,
                borderRadius: 28,
                background: "#16181A",
                color: "#FFFFFF",
                padding: "clamp(28px, 3vw, 40px)",
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
                <span style={{ color: "#8CC63F", display: "flex" }}>
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
                Безпека
              </span>
              <h3
                style={{
                  margin: 0,
                  fontSize: "clamp(28px, 2.6vw, 36px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.2,
                }}
              >
                Укриття —{" "}
                <span className="nw" style={{ color: "#8CC63F" }}>
                  500&nbsp;м²
                </span>
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
                <li
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    fontSize: 15.5,
                    lineHeight: 1.5,
                    color: "#E4E6E1",
                  }}
                >
                  <span style={{ flex: "none", color: "#8CC63F", paddingTop: 2 }}>
                    <svg
                      width="17"
                      height="17"
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
                  Сертифіковане укриття для всіх дітей — від дошкільнят до старшокласників
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    fontSize: 15.5,
                    lineHeight: 1.5,
                    color: "#E4E6E1",
                  }}
                >
                  <span style={{ flex: "none", color: "#8CC63F", paddingTop: 2 }}>
                    <svg
                      width="17"
                      height="17"
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
                  Завжди є світло, тепло та інтернет для навчання і зв’язку
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    fontSize: 15.5,
                    lineHeight: 1.5,
                    color: "#E4E6E1",
                  }}
                >
                  <span style={{ flex: "none", color: "#8CC63F", paddingTop: 2 }}>
                    <svg
                      width="17"
                      height="17"
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
                  Територія охороняється по всьому периметру
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 0 0",
                    fontSize: 15.5,
                    lineHeight: 1.5,
                    color: "#E4E6E1",
                  }}
                >
                  <span style={{ flex: "none", color: "#8CC63F", paddingTop: 2 }}>
                    <svg
                      width="17"
                      height="17"
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
                  Медичний блок у школі
                </li>
              </ul>
            </div>
            <div
              className="ph-m"
              data-photo="about-campus"
              style={{
                flex: "1.4 1 560px",
                minWidth: 0,
                position: "relative",
                minHeight: 480,
                borderRadius: 28,
                overflow: "hidden",
                backgroundColor: "#2B3034",
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 14px)",
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
                alt="будівля школи, вигляд з подвір’я"
                fill
                sizes="(max-width: 599px) 92vw, (max-width: 1099px) 96vw, 798px"
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(12,14,16,0) 35%, rgba(12,14,16,0.85) 100%)",
                }}
              />
              <div
                style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12, color: "#FFFFFF" }}
              >
                <span
                  className="num"
                  style={{ fontSize: "clamp(56px, 6vw, 88px)", lineHeight: 0.95, fontWeight: 800, letterSpacing: -4 }}
                >
                  9585&nbsp;м²
                </span>
                <span style={{ maxWidth: 460, fontSize: 18, lineHeight: 1.5, color: "rgba(255,255,255,0.88)" }}>
                  Сучасна будівля, спроєктована зарубіжними архітекторами.
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}>
                  <a
                    className="bw"
                    href="https://my.matterport.com/show/?m=hb9i8JMQQMh"
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      minHeight: 48,
                      padding: "0 22px",
                      borderRadius: 999,
                      background: "#FFFFFF",
                      color: "#16181A",
                      fontSize: 14.5,
                      fontWeight: 700,
                    }}
                  >
                    3D-тур: [простір 1]<span className="sr"> (відкриється в новій вкладці)</span>
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
                    href="https://my.matterport.com/show/?m=wXn9boz3Acv"
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      minHeight: 48,
                      padding: "0 22px",
                      borderRadius: 999,
                      border: "1.5px solid rgba(255,255,255,0.5)",
                      color: "#FFFFFF",
                      fontSize: 14.5,
                      fontWeight: 700,
                      boxSizing: "border-box",
                    }}
                  >
                    3D-тур: [простір 2]<span className="sr"> (відкриється в новій вкладці)</span>
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
            </div>
          </div>
          <div
            className="g2m"
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
              gap: 16,
            }}
          >
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 220,
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
              <span
                className="num"
                style={{ marginTop: "auto", fontSize: 44, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}
              >
                3426,5&nbsp;м²
              </span>
              <h3 style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, fontWeight: 500, color: "#5F6366" }}>
                Зелена територія школи
              </h3>
            </div>
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 220,
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
              <span
                className="num"
                style={{ marginTop: "auto", fontSize: 44, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}
              >
                1280&nbsp;м²
              </span>
              <h3 style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, fontWeight: 500, color: "#5F6366" }}>
                Відкритий стадіон: 5 бігових доріжок і футбольне поле
              </h3>
            </div>
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 220,
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
                  <path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4" />
                  <path d="M12 12a12.6 12.6 0 0 1-8.7 5" />
                  <path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5" />
                  <path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" />
                  <path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <span
                className="num"
                style={{ marginTop: "auto", fontSize: 44, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}
              >
                450&nbsp;м²
              </span>
              <h3 style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, fontWeight: 500, color: "#5F6366" }}>
                Баскетбольний майданчик з професійним антитравматичним покриттям
              </h3>
            </div>
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 220,
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#16181A" }}>
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
              <span
                className="num"
                style={{ marginTop: "auto", fontSize: 44, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}
              >
                649&nbsp;м²
              </span>
              <h3 style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, fontWeight: 500, color: "#5F6366" }}>
                Мультифункціональна спортзала зі скеледромом і трибуною
              </h3>
            </div>
          </div>
          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
              gap: 16,
            }}
          >
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
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
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: -0.4 }}>Студії</h3>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                  Хореографічна студія з паркетом, станками й дзеркалами, музична студія з професійною акустикою,
                  гончарна майстерня та художня студія.
                </span>
              </div>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
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
                  background: "#E8F0FA",
                  color: "#2D5B8C",
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
                  <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                  <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                  <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: -0.4 }}>
                  Басейн — 25&nbsp;м, 5 доріжок
                </h3>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                  Плавання — частина щотижневих занять спортом у початковій школі.
                </span>
              </div>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
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
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: -0.4 }}>Бібліотека</h3>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                  Підручники, англомовні книжки та зустрічі з письменниками.
                </span>
              </div>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
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
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: -0.4 }}>Їдальня</h3>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                  Власне виробництво для збалансованої здорової їжі, шеф спеціалізується на дитячому харчуванні.
                  Повноцінний обід — у вартості навчання.
                </span>
              </div>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
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
                  <path d="M11 2v2" />
                  <path d="M5 2v2" />
                  <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                  <path d="M8 15a6 6 0 0 0 12 0v-3" />
                  <circle cx="20" cy="10" r="2" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: -0.4 }}>
                  Медичний блок і доступність
                </h3>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                  Повноцінний медичний блок. Пандуси та ліфт — для людей, які пересуваються на кріслі колісному, а також
                  спеціальний туалет.
                </span>
              </div>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
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
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                  <line x1="12" x2="12.01" y1="18" y2="18" />
                </svg>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: -0.4 }}>
                  Технології в кожному класі
                </h3>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                  Інтерактивні дошки, індивідуальні електронні планшети в кожного учня та система{" "}
                  <span lang="en">SMLS</span>.
                </span>
              </div>
            </div>
          </div>
          <div
            className="pad-m"
            style={{
              marginTop: 16,
              borderRadius: 28,
              background: "#8CC63F",
              color: "#16181A",
              padding: "clamp(24px, 3vw, 40px)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "20px 40px",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                flex: "none",
                width: 56,
                height: 56,
                borderRadius: 18,
                background: "rgba(255,255,255,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx="12" cy="8" r="6" />
              </svg>
            </span>
            <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: 6 }}>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "rgba(22,24,26,0.72)",
                }}
              >
                Нагороди за простір
              </span>
              <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.6 }}>
                Будівля школи відзначена міжнародними конкурсами дизайну
              </h3>
            </div>
            <span
              style={{
                flex: "1 1 260px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "16px 20px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.5)",
              }}
            >
              <span lang="en" style={{ fontSize: 16, fontWeight: 800 }}>
                IIDA Global Excellence Awards
              </span>
              <span style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(22,24,26,0.8)" }}>
                Категорія «Освіта», 2014 — виставка Maison&amp;Objet, Париж
              </span>
            </span>
            <span
              style={{
                flex: "1 1 220px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "16px 20px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.5)",
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 800 }}>Inter’year 2015</span>
              <span style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(22,24,26,0.8)" }}>Гран-прі конкурсу</span>
            </span>
          </div>
        </section>
        <section
          id="parents"
          aria-labelledby="parents-title"
          style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 16 }}
        >
          <div
            className="pad-m"
            style={{
              flex: "1 1 420px",
              minWidth: 0,
              borderRadius: 28,
              background: "#8CC63F",
              color: "#16181A",
              padding: "clamp(28px, 3.4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <span style={{ color: "rgba(22,24,26,0.72)" }}>
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <h2
              id="parents-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 38px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.3,
              }}
            >
              Участь батьків
            </h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: "rgba(22,24,26,0.8)", textWrap: "pretty" }}>
              Ми приймаємо до школи не лише дитину, а й найближчих для неї людей — усю сім’ю, і бачимо батьків активними
              учасниками навчально-виховного процесу нарівні з учнями та вчителями.
            </p>
          </div>
          <div
            className="pad-m"
            style={{
              flex: "1.3 1 560px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "clamp(28px, 3.4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: "#5F6366",
              }}
            >
              Ми чекаємо від батьків
            </h3>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
                gap: "14px 32px",
              }}
            >
              <li style={{ display: "flex", gap: 11, fontSize: 15.5, lineHeight: 1.55 }}>
                <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                  <svg
                    width="17"
                    height="17"
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
                Віри у свою дитину та прийняття її сильних і слабких сторін
              </li>
              <li style={{ display: "flex", gap: 11, fontSize: 15.5, lineHeight: 1.55 }}>
                <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                  <svg
                    width="17"
                    height="17"
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
                Бажання розвивати творчі здібності й заохочувати ініціативу
              </li>
              <li style={{ display: "flex", gap: 11, fontSize: 15.5, lineHeight: 1.55 }}>
                <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                  <svg
                    width="17"
                    height="17"
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
                Довіри до всіх, хто працюватиме з дитиною
              </li>
              <li style={{ display: "flex", gap: 11, fontSize: 15.5, lineHeight: 1.55 }}>
                <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                  <svg
                    width="17"
                    height="17"
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
                Інтересу до шкільних справ дитини та відкритого діалогу
              </li>
              <li style={{ display: "flex", gap: 11, fontSize: 15.5, lineHeight: 1.55 }}>
                <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                  <svg
                    width="17"
                    height="17"
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
                Толерантності до думок, традицій і статків інших родин
              </li>
              <li style={{ display: "flex", gap: 11, fontSize: 15.5, lineHeight: 1.55 }}>
                <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                  <svg
                    width="17"
                    height="17"
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
                Підтримки здорового способу життя
              </li>
              <li style={{ display: "flex", gap: 11, fontSize: 15.5, lineHeight: 1.55 }}>
                <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                  <svg
                    width="17"
                    height="17"
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
                Поваги до української мови, культури та традицій
              </li>
            </ul>
          </div>
        </section>
        <section id="traditions" aria-labelledby="traditions-title" style={{ marginTop: 56 }}>
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
                Спільнота
              </span>
              <h2
                id="traditions-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                }}
              >
                Шкільні традиції
              </h2>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <div
              className="pad-m"
              style={{
                flex: "1 1 380px",
                minWidth: 0,
                borderRadius: 28,
                background: "#16181A",
                color: "#FFFFFF",
                padding: "clamp(28px, 3vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#8CC63F" }}>
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
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </span>
              <p
                style={{
                  margin: "auto 0 0",
                  fontSize: "clamp(20px, 1.8vw, 24px)",
                  lineHeight: 1.4,
                  fontWeight: 700,
                  letterSpacing: -0.4,
                  textWrap: "pretty",
                }}
              >
                Щопонеділка перед першим уроком ми збираємось у шкільних коридорах та разом виконуємо Гімн України.
              </p>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#9AA0A4" }}>
                А 1 квітня школа святкує свій день народження
              </span>
            </div>
            <div
              className="pad-m"
              style={{
                flex: "2 1 600px",
                minWidth: 0,
                borderRadius: 28,
                background: "#FFFFFF",
                padding: "clamp(28px, 3vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                boxSizing: "border-box",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#5F6366",
                }}
              >
                Щороку в календарі
              </h3>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
                  gap: "0 28px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                    fontSize: 15.5,
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: "#8CC63F" }}
                  />
                  Гімн України щопонеділка
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                    fontSize: 15.5,
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: "#8CC63F" }}
                  />
                  День народження школи — 1 квітня
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                    fontSize: 15.5,
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: "#8CC63F" }}
                  />
                  День Лідерства — двічі на рік
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                    fontSize: 15.5,
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: "#8CC63F" }}
                  />
                  Дні вільної форми
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                    fontSize: 15.5,
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: "#8CC63F" }}
                  />
                  Туристичний зліт
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                    fontSize: 15.5,
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: "#8CC63F" }}
                  />
                  <span>
                    Перший дзвоник та <span lang="en">Play Day</span>
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                    fontSize: 15.5,
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: "#8CC63F" }}
                  />
                  <span>
                    <span lang="en">W5H</span> — [пояснення від школи]
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                    fontSize: 15.5,
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: "#8CC63F" }}
                  />
                  Прощання з випускниками
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                    fontSize: 15.5,
                    lineHeight: 1.45,
                    fontWeight: 600,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ flex: "none", width: 8, height: 8, borderRadius: "50%", background: "#8CC63F" }}
                  />
                  Політика турботи про довкілля
                </li>
              </ul>
              <p style={{ margin: "auto 0 0", fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Детальніше про кожну традицію — у розділі «Шкільні традиції»{" "}
                <Link href="/parents#handbook" style={{ fontWeight: 800 }}>
                  довідника для батьків
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
        <section id="reviews" aria-labelledby="reviews-title" style={{ marginTop: 56 }}>
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
                Звітність
              </span>
              <h2
                id="reviews-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                }}
              >
                Річні огляди
              </h2>
            </div>
            <span style={{ maxWidth: 420, fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
              Підсумки кожного навчального року — у річному журналі школи.
            </span>
          </div>
          <ul
            className="g2m"
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: 16,
            }}
          >
            <li style={{ display: "flex" }}>
              <a
                className="tl ts rv"
                href="https://novoshkola.com.ua/annual-school-review-2024-2025"
                target="_blank"
                rel="noopener"
                style={{
                  flex: "1 1 auto",
                  borderRadius: 28,
                  background: "#5B3FA8",
                  color: "#FFFFFF",
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 190,
                  boxSizing: "border-box",
                }}
              >
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <span
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    Річний журнал
                  </span>
                  <span
                    className="ar"
                    style={{
                      flex: "none",
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.14)",
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
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </span>
                <span
                  className="num"
                  style={{ marginTop: "auto", fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}
                >
                  2024/2025
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.86)" }}>
                  Читати онлайн<span className="sr"> (відкриється в новій вкладці)</span>
                </span>
              </a>
            </li>
            <li style={{ display: "flex" }}>
              <a
                className="tl ts rv"
                href="https://novoshkola.com.ua/annual-school-review-2023-2024"
                target="_blank"
                rel="noopener"
                style={{
                  flex: "1 1 auto",
                  borderRadius: 28,
                  background: "#FFFFFF",
                  color: "#16181A",
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 190,
                  boxSizing: "border-box",
                }}
              >
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <span
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    Річний журнал
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
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </span>
                <span
                  className="num"
                  style={{ marginTop: "auto", fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}
                >
                  2023/2024
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#5F6366" }}>
                  Читати онлайн<span className="sr"> (відкриється в новій вкладці)</span>
                </span>
              </a>
            </li>
            <li style={{ display: "flex" }}>
              <a
                className="tl ts rv"
                href="https://novoshkola.com.ua/annual-school-review-2022"
                target="_blank"
                rel="noopener"
                style={{
                  flex: "1 1 auto",
                  borderRadius: 28,
                  background: "#FFFFFF",
                  color: "#16181A",
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 190,
                  boxSizing: "border-box",
                }}
              >
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <span
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    Річний журнал
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
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </span>
                <span
                  className="num"
                  style={{ marginTop: "auto", fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}
                >
                  2022/2023
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#5F6366" }}>
                  Читати онлайн<span className="sr"> (відкриється в новій вкладці)</span>
                </span>
              </a>
            </li>
            <li style={{ display: "flex" }}>
              <a
                className="tl ts rv"
                href="https://novoshkola.com.ua/annual-school-review-2021"
                target="_blank"
                rel="noopener"
                style={{
                  flex: "1 1 auto",
                  borderRadius: 28,
                  background: "#FFFFFF",
                  color: "#16181A",
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  minHeight: 190,
                  boxSizing: "border-box",
                }}
              >
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <span
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    Річний журнал
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
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </span>
                <span
                  className="num"
                  style={{ marginTop: "auto", fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}
                >
                  2020/2021
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#5F6366" }}>
                  Читати онлайн<span className="sr"> (відкриється в новій вкладці)</span>
                </span>
              </a>
            </li>
          </ul>
        </section>
        <section aria-labelledby="visit-title" style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 16 }}>
          <div
            className="pad-m"
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
              Знайомство
            </span>
            <h2
              id="visit-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3.4vw, 46px)",
                lineHeight: 1.06,
                fontWeight: 800,
                letterSpacing: -1.6,
                textWrap: "balance",
              }}
            >
              Побачте школу наживо
            </h2>
            <p style={{ margin: 0, maxWidth: 620, fontSize: 17, lineHeight: 1.6, color: "#9AA0A4" }}>
              Запишіться на екскурсію в поточному навчальному році — онлайн або за телефоном{" "}
              <a className="fl" href="tel:+380503733973" style={{ color: "#FFFFFF", fontWeight: 700 }}>
                +38 (050) 373-39-73
              </a>
              .
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
              <a
                className="bg2"
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
                  background: "#8CC63F",
                  color: "#16181A",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Записатися на екскурсію<span className="sr"> (відкриється в новій вкладці)</span>
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
                href="/enrolment"
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
          <div
            id="jobs"
            className="pad-m"
            style={{
              flex: "1 1 380px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: 34,
              display: "flex",
              flexDirection: "column",
              gap: 14,
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
                color: "#5F6366",
              }}
            >
              <span style={{ width: 26, height: 2, background: "#8CC63F" }} />
              Вакансії
            </span>
            <h2
              id="jobs-title"
              style={{ margin: 0, fontSize: 26, lineHeight: 1.15, fontWeight: 800, letterSpacing: -0.8 }}
            >
              Долучитися до команди
            </h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#54585C" }}>
              Заповнюйте анкету чи надсилайте резюме на{" "}
              <a href="mailto:cv@novoshkola.com.ua" style={{ fontWeight: 800 }}>
                cv@novoshkola.com.ua
              </a>{" "}
              протягом усього року.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
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
                Офіційне працевлаштування
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
                Соціальні гарантії
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
                Медичний супровід
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
                Заняття спортом
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
                Уроки англійської
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
                Підвищення кваліфікації
              </span>
            </div>
            <a
              className="bl"
              href="http://bit.ly/2UIG9db"
              target="_blank"
              rel="noopener"
              style={{
                marginTop: "auto",
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                padding: "0 20px",
                borderRadius: 999,
                border: "1.5px solid #E3E5E0",
                background: "#FFFFFF",
                color: "#16181A",
                fontSize: 14,
                fontWeight: 700,
                boxSizing: "border-box",
              }}
            >
              Анкета кандидата<span className="sr"> (відкриється в новій вкладці)</span>
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
        </section>
      </main>
    </>
  );
}
