import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DaySchedule from "@/components/DaySchedule";
import ClubsFilter from "./ClubsFilter";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Навчання" };

export default function ProgramsPage() {
  return (
    <>
      <Breadcrumbs items={[["Навчання"]]} />
      <main id="main" style={{ display: "flex", flexDirection: "column" }}>
        <section aria-labelledby="programs-title" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <div
            className="pad-m"
            style={{
              flex: "1.3 1 620px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "clamp(28px, 4vw, 56px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 24,
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
              Навчання
            </span>
            <h1
              id="programs-title"
              style={{
                margin: 0,
                fontSize: "clamp(36px, 4.4vw, 60px)",
                lineHeight: 1.03,
                fontWeight: 800,
                letterSpacing: -2.2,
                textWrap: "balance",
              }}
            >
              Від перших кроків у 4 роки — до двох документів про освіту
            </h1>
            <p
              style={{ margin: 0, maxWidth: 640, fontSize: 18, lineHeight: 1.65, color: "#54585C", textWrap: "pretty" }}
            >
              Дошкільна підготовка (КДП), початкова, середня і старша школа за українською програмою. Для 8–11 класів є
              ще й <span className="nw">U-CAN</span> — українсько-канадська програма з дипломом Манітоби. Навчання —
              наживо або дистанційно.
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
            data-photo="programs-hero"
            style={{
              flex: "1 1 420px",
              minWidth: 0,
              position: "relative",
              minHeight: 500,
              borderRadius: 28,
              overflow: "hidden",
              backgroundColor: "#E3E7DC",
              backgroundImage: "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
              display: "flex",
              alignItems: "flex-end",
              padding: 18,
              boxSizing: "border-box",
            }}
          >
            <Image
              className="dc-photo"
              src="/photos/lesson-computers.jpg"
              alt="учні на занятті"
              fill
              sizes="(max-width: 599px) 92vw, (max-width: 1099px) 96vw, 563px"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </section>
        <nav
          className="secnav"
          aria-label="Розділи сторінки"
          style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 8, padding: "10px 0" }}
        >
          <a
            className="bl"
            href="#day"
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
            Розклад дня
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
            href="#kdp"
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
            Дошкільна підготовка (КДП)
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
            href="#primary"
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
            1–4 класи
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
            href="#secondary"
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
            5–11 класи
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
            href="#ucan"
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
            U-CAN
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
            href="#clubs"
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
            Гуртки
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
            href="#online"
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
            Дистанційна школа
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
          id="levels"
          className="hide-m"
          aria-labelledby="levels-title"
          style={{
            marginTop: 8,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
            gap: 16,
          }}
        >
          <h2 id="levels-title" className="sr">
            Рівні навчання
          </h2>
          <a
            className="tl"
            href="#kdp"
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              color: "#16181A",
              padding: 26,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 190,
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
              Дошкільна підготовка (КДП)
            </h3>
            <span style={{ marginTop: "auto", fontSize: 34, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}>
              з 4 років
            </span>
            <span style={{ minHeight: "4.5em", fontSize: 14.5, lineHeight: 1.5, color: "#5F6366" }}>
              <span className="nw">КДП-4</span> і <span className="nw">КДП-5</span>: дворічна програма,{" "}
              <span className="nw">9:00–18:00</span>
            </span>
          </a>
          <a
            className="tl"
            href="#primary"
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              color: "#16181A",
              padding: 26,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 190,
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
              Початкова
            </h3>
            <span style={{ marginTop: "auto", fontSize: 34, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}>
              1–4
            </span>
            <span style={{ minHeight: "4.5em", fontSize: 14.5, lineHeight: 1.5, color: "#5F6366" }}>
              Монтессорі, Дальтон-план і елементи вальдорфської педагогіки
            </span>
          </a>
          <a
            className="tl"
            href="#secondary"
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              color: "#16181A",
              padding: 26,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 190,
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
              Середня
            </h3>
            <span style={{ marginTop: "auto", fontSize: 34, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}>
              5–7
            </span>
            <span style={{ minHeight: "4.5em", fontSize: 14.5, lineHeight: 1.5, color: "#5F6366" }}>
              Проєктна методика і друга іноземна мова з 5 класу
            </span>
          </a>
          <a
            className="tl"
            href="#secondary"
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              color: "#16181A",
              padding: 26,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 190,
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
              Старша
            </h3>
            <span style={{ marginTop: "auto", fontSize: 34, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}>
              8–11
            </span>
            <span style={{ minHeight: "4.5em", fontSize: 14.5, lineHeight: 1.5, color: "#5F6366" }}>
              Профілі з 10 класу, профорієнтація з 8-го, підготовка до НМТ
            </span>
          </a>
          <a
            className="tl"
            href="#ucan"
            style={{
              borderRadius: 28,
              background: "#5B3FA8",
              color: "#FFFFFF",
              padding: 26,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 190,
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
                color: "rgba(255,255,255,0.86)",
              }}
            >
              U-CAN
            </h3>
            <span style={{ marginTop: "auto", fontSize: 34, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}>
              8–11
            </span>
            <span style={{ minHeight: "4.5em", fontSize: 14.5, lineHeight: 1.5, color: "rgba(255,255,255,0.86)" }}>
              <span lang="en">Manitoba High School Diploma</span> разом з українським свідоцтвом
            </span>
          </a>
        </section>
        <DaySchedule id="day" eyebrow="Розклад дня" title="Як минає день у кожному віці" />
        <section id="kdp" aria-labelledby="kdp-title" style={{ marginTop: 56 }}>
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
                Дошкільна підготовка (КДП)
              </span>
              <h2
                id="kdp-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  textWrap: "balance",
                }}
              >
                Перші кроки в навчанні — вже у 4 роки
              </h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#54585C" }}>
                <span className="nw">КДП-4</span> і <span className="nw">КДП-5</span> — групи дошкільної підготовки для
                дітей 4 і 5 років.
              </p>
            </div>
            <Link
              className="bl"
              href="/enrolment#grade-kdp4"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                padding: "0 22px",
                borderRadius: 999,
                border: "1.5px solid #E3E5E0",
                background: "#FFFFFF",
                color: "#16181A",
                fontSize: 14,
                fontWeight: 700,
                boxSizing: "border-box",
              }}
            >
              Співбесіди — з травня
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
              className="ph-m"
              data-photo="programs-kdp"
              style={{
                flex: "1.1 1 520px",
                minWidth: 0,
                position: "relative",
                minHeight: 460,
                borderRadius: 28,
                overflow: "hidden",
                backgroundColor: "#E3E7DC",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                display: "flex",
                alignItems: "flex-end",
                padding: 18,
                boxSizing: "border-box",
              }}
            >
              <Image
                className="dc-photo"
                src="/photos/kdp.jpg"
                alt="КДП, робота в навчальних осередках"
                fill
                sizes="(max-width: 599px) 92vw, (max-width: 1099px) 96vw, 723px"
              />
            </div>
            <div style={{ flex: "1 1 460px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                className="pad-m"
                style={{
                  borderRadius: 28,
                  background: "#FFFFFF",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  boxSizing: "border-box",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    paddingBottom: 8,
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 1.4,
                    textTransform: "uppercase",
                    color: "#5F6366",
                  }}
                >
                  Щодня в КДП
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
                  <li style={{ display: "flex", gap: 14, padding: "12px 0", borderBottom: "1px solid #EDEEEA" }}>
                    <span
                      style={{
                        flex: "none",
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: "#F3F6EE",
                        color: "#4E7A1F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
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
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <span style={{ fontSize: 16, fontWeight: 800 }}>9:00–18:00</span>
                      <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                        Дворічна програма з повним днем у школі.
                      </span>
                    </span>
                  </li>
                  <li style={{ display: "flex", gap: 14, padding: "12px 0", borderBottom: "1px solid #EDEEEA" }}>
                    <span
                      style={{
                        flex: "none",
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: "#EFEAFA",
                        color: "#5B3FA8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 2v8" />
                        <path d="m4.93 10.93 1.41 1.41" />
                        <path d="M2 18h2" />
                        <path d="M20 18h2" />
                        <path d="m19.07 10.93-1.41 1.41" />
                        <path d="M22 22H2" />
                        <path d="m8 6 4-4 4 4" />
                        <path d="M16 18a4 4 0 0 0-8 0" />
                      </svg>
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <span style={{ fontSize: 16, fontWeight: 800 }}>Ранкове коло</span>
                      <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                        Кожний день починається в колі — для позитивного налаштування та планування дня.
                      </span>
                    </span>
                  </li>
                  <li style={{ display: "flex", gap: 14, padding: "12px 0", borderBottom: "1px solid #EDEEEA" }}>
                    <span
                      style={{
                        flex: "none",
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: "#FDECEC",
                        color: "#C8161C",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m5 8 6 6" />
                        <path d="m4 14 6-6 2-3" />
                        <path d="M2 5h12" />
                        <path d="M7 2h1" />
                        <path d="m22 22-5-10-5 10" />
                        <path d="M14 18h6" />
                      </svg>
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <span style={{ fontSize: 16, fontWeight: 800 }}>Англійська щодня</span>
                      <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                        Півтори години на день діти розмовляють, співають і грають англійською, а також займаються з
                        носієм мови.
                      </span>
                    </span>
                  </li>
                  <li style={{ display: "flex", gap: 14, padding: "12px 0 0" }}>
                    <span
                      style={{
                        flex: "none",
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: "#F1F2EE",
                        color: "#16181A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
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
                    <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <span style={{ fontSize: 16, fontWeight: 800 }}>Чотириразове харчування</span>
                      <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                        Включено у вартість навчання.
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="pad-m"
                style={{
                  flex: "1 1 auto",
                  borderRadius: 28,
                  background: "#8CC63F",
                  color: "#16181A",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
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
                    color: "rgba(22,24,26,0.75)",
                  }}
                >
                  6 напрямів розвитку
                </h3>
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
                    Особистісний та соціальний розвиток
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
                    Мова
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
                    Математика
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
                    Наука і технології
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
                    Здоров’я і фізична активність
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
                    Мистецтво
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div
            className="pad-m"
            style={{
              marginTop: 16,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "clamp(26px, 3vw, 40px)",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              boxSizing: "border-box",
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
              Навчальні осередки
            </span>
            <h3 style={{ margin: 0, fontSize: 24, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.7 }}>
              Навчання через осередки, гру і тематичні дні
            </h3>
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
                Читання
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
                Письмо
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
                Математика
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
                Дослідження
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
                Творчість
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
                Гра
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
                Драма
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
                Конструювання
              </span>
            </span>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
                gap: "12px 24px",
              }}
            >
              <li style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.5 }}>
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
                Сенсорний куточок у класі
              </li>
              <li style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.5 }}>
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
                Кожен день має тематичне спрямування
              </li>
              <li style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.5 }}>
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
                Читання разом з першокласниками і загальношкільні події
              </li>
            </ul>
          </div>
        </section>
        <section id="primary" aria-labelledby="primary-title" style={{ marginTop: 56 }}>
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
                Початкова школа · 1–4 класи
              </span>
              <h2
                id="primary-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  textWrap: "balance",
                }}
              >
                Кожна дитина розвивається за особистим планом
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <Link
                className="bl"
                href="/enrolment#grade-1"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  padding: "0 22px",
                  borderRadius: 999,
                  border: "1.5px solid #E3E5E0",
                  background: "#FFFFFF",
                  color: "#16181A",
                  fontSize: 14,
                  fontWeight: 700,
                  boxSizing: "border-box",
                }}
              >
                Співбесіди до 1 класу — з лютого
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
              <Link
                className="bl"
                href="/enrolment#grade-2-4"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  padding: "0 22px",
                  borderRadius: 999,
                  border: "1.5px solid #E3E5E0",
                  background: "#FFFFFF",
                  color: "#16181A",
                  fontSize: 14,
                  fontWeight: 700,
                  boxSizing: "border-box",
                }}
              >
                Вступ до 2–4 класів
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
          <div
            className="hscroll"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 16 }}
          >
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 210,
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
                  <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
                </svg>
              </span>
              <h3 style={{ margin: "8px 0 0", fontSize: 21, fontWeight: 800, letterSpacing: -0.5 }}>Монтессорі</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
                Кожна дитина унікальна і розвивається за особистим планом.
              </p>
            </div>
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 210,
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
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <h3 style={{ margin: "8px 0 0", fontSize: 21, fontWeight: 800, letterSpacing: -0.5 }}>Дальтон-план</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
                Навчання на трьох принципах: свобода, самостійність, співробітництво.
              </p>
            </div>
            <div
              className="ts"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 210,
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
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
              </span>
              <h3 style={{ margin: "8px 0 0", fontSize: 21, fontWeight: 800, letterSpacing: -0.5 }}>
                Вальдорфська педагогіка
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
                Елементи вальдорфської педагогіки в щоденних заняттях. Уся команда початкової школи пройшла спеціальне
                навчання.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 16 }}>
            <div
              className="pad-m"
              style={{
                flex: "1.2 1 460px",
                minWidth: 0,
                borderRadius: 28,
                background: "#5B3FA8",
                color: "#FFFFFF",
                padding: "clamp(26px, 3vw, 40px)",
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
                  color: "rgba(255,255,255,0.86)",
                }}
              >
                Англійська з першого класу
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.1)",
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <span className="num" style={{ fontSize: 44, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}>
                    3&nbsp;год
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.9)" }}>
                    на тиждень з україномовним учителем — клас ділиться на дві групи
                  </span>
                </div>
                <div
                  style={{
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.1)",
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <span className="num" style={{ fontSize: 44, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}>
                    4&nbsp;год
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.9)" }}>
                    на тиждень з носієм англійської мови для всього класу
                  </span>
                </div>
              </div>
              <p style={{ margin: "auto 0 0", fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.9)" }}>
                На уроках з україномовним учителем клас ділиться на дві групи, з носієм мови займається весь клас. Друга
                іноземна мова — з 5 класу.
              </p>
            </div>
            <div
              className="ph-m"
              data-photo="programs-primary"
              style={{
                flex: "1 1 340px",
                minWidth: 0,
                position: "relative",
                minHeight: 340,
                borderRadius: 28,
                overflow: "hidden",
                backgroundColor: "#E6E1F2",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                display: "flex",
                alignItems: "flex-end",
                padding: 18,
                boxSizing: "border-box",
              }}
            >
              <Image
                className="dc-photo"
                src="/photos/lesson-screen.jpg"
                alt="урок англійської в групі"
                fill
                sizes="(max-width: 599px) 92vw, (max-width: 1099px) 41vw, 413px"
              />
            </div>
            <div
              className="pad-m"
              style={{
                flex: "1 1 320px",
                minWidth: 0,
                borderRadius: 28,
                background: "#8CC63F",
                color: "#16181A",
                padding: "clamp(26px, 3vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
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
                  color: "rgba(22,24,26,0.75)",
                }}
              >
                Спорт щотижня
              </h3>
              <span className="num nw" style={{ fontSize: 56, lineHeight: 1, fontWeight: 800, letterSpacing: -2.6 }}>
                5+ год
              </span>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "rgba(22,24,26,0.8)" }}>
                Кожна дитина займається спортом щонайменше 5 годин на тиждень.
              </p>
              <span style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 6 }}>
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
                  Футбол
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
                  Плавання — басейн 25 м
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
                  Гімнастика
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
                  Легка атлетика
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
                  Дзюдо
                </span>
              </span>
            </div>
          </div>
          <div
            className="hscroll"
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: 16,
            }}
          >
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                boxSizing: "border-box",
              }}
            >
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Класи, що ростуть</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Парти й стільці «ростуть» разом з учнем, а в класах є куточки відпочинку з м’якими меблями та ігровим
                обладнанням.
              </p>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                boxSizing: "border-box",
              }}
            >
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Нові класи щороку</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Кожного навчального року ми групуємо учнів у класи по-новому.
              </p>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                boxSizing: "border-box",
              }}
            >
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Клас підтримки</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                З 2018/2019 навчального року — клас для дітей 6–9 років з особливими освітніми потребами.
              </p>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                boxSizing: "border-box",
              }}
            >
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Гнучкий кінець дня</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Забрати дитину можна о 16:00 або о 17:00, гуртки — <span className="nw">16:10–18:00</span>. Триразове
                харчування.
              </p>
            </div>
          </div>
        </section>
        <section id="secondary" aria-labelledby="secondary-title" style={{ marginTop: 56 }}>
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
                Середня 5–7 і старша школа 8–11
              </span>
              <h2
                id="secondary-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  textWrap: "balance",
                }}
              >
                Проєкти, мови і профіль — крок за кроком до професії
              </h2>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "#54585C" }}>
                Вступ до 5–10 класів — з травня на новий навчальний рік, посеред року — за наявності вільних місць.{" "}
                <span className="nw">11 клас</span> — лише через{" "}
                <a
                  href="https://scholarship.novoshkola.com.ua"
                  target="_blank"
                  rel="noopener"
                  style={{ fontWeight: 800 }}
                >
                  Стипендіальну програму<span className="sr"> (відкриється в новій вкладці)</span>
                </a>
                .
              </p>
            </div>
            <Link
              className="bl"
              href="/enrolment#grade-5-10"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                padding: "0 22px",
                borderRadius: 999,
                border: "1.5px solid #E3E5E0",
                background: "#FFFFFF",
                color: "#16181A",
                fontSize: 14,
                fontWeight: 700,
                boxSizing: "border-box",
              }}
            >
              Вступ до 5–10 класів
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
              className="ph-m"
              data-photo="programs-secondary"
              style={{
                flex: "1 1 440px",
                minWidth: 0,
                position: "relative",
                minHeight: 420,
                borderRadius: 28,
                overflow: "hidden",
                backgroundColor: "#ECE7DD",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
                display: "flex",
                alignItems: "flex-end",
                padding: 18,
                boxSizing: "border-box",
              }}
            >
              <Image
                className="dc-photo"
                src="/photos/chemistry-lab.jpg"
                alt="проєктна робота, 9 клас"
                fill
                sizes="(max-width: 599px) 92vw, (max-width: 1099px) 96vw, 600px"
              />
            </div>
            <div
              className="pad-m"
              style={{
                flex: "1.3 1 560px",
                minWidth: 0,
                borderRadius: 28,
                background: "#5B3FA8",
                color: "#FFFFFF",
                padding: "clamp(26px, 3.4vw, 48px)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
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
                  color: "rgba(255,255,255,0.86)",
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
                  <path d="m5 8 6 6" />
                  <path d="m4 14 6-6 2-3" />
                  <path d="M2 5h12" />
                  <path d="M7 2h1" />
                  <path d="m22 22-5-10-5 10" />
                  <path d="M14 18h6" />
                </svg>
                Іноземні мови
              </span>
              <h3
                style={{
                  margin: 0,
                  fontSize: "clamp(26px, 2.4vw, 32px)",
                  lineHeight: 1.15,
                  fontWeight: 800,
                  letterSpacing: -1,
                  textWrap: "balance",
                }}
              >
                Англійська — основна, друга мова — з 5 класу
              </h3>
              <span style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span
                  style={{
                    padding: "5px 11px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.14)",
                    fontSize: 12.5,
                    fontWeight: 700,
                  }}
                >
                  Німецька
                </span>
                <span
                  style={{
                    padding: "5px 11px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.14)",
                    fontSize: 12.5,
                    fontWeight: 700,
                  }}
                >
                  Французька
                </span>
                <span
                  style={{
                    padding: "5px 11px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.14)",
                    fontSize: 12.5,
                    fontWeight: 700,
                  }}
                >
                  Іспанська
                </span>
                <span
                  style={{
                    padding: "5px 11px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.14)",
                    fontSize: 12.5,
                    fontWeight: 700,
                  }}
                >
                  Китайська
                </span>
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
                <li
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.14)",
                    fontSize: 15.5,
                    lineHeight: 1.5,
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
                  Іноземні мови викладають носії у парі з українським викладачем
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.14)",
                    fontSize: 15.5,
                    lineHeight: 1.5,
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
                  Англійська: 3 год на тиждень з україномовним учителем у двох групах і 3 год з носієм
                </li>
                <li style={{ display: "flex", gap: 12, padding: "12px 0 0", fontSize: 15.5, lineHeight: 1.5 }}>
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
                  З 9 класу уроки іноземних мов проводить лише носій
                </li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 16 }}>
            <div
              className="pad-m"
              style={{
                flex: "1.3 1 560px",
                minWidth: 0,
                borderRadius: 28,
                background: "#FFFFFF",
                padding: "clamp(26px, 3vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                boxSizing: "border-box",
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
                Профілі з 10 класу
              </span>
              <h3 style={{ margin: 0, fontSize: 24, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.7 }}>
                Чотири профілі на вибір
              </h3>
              <ul
                className="g2m"
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 100%), 1fr))",
                  gap: 12,
                }}
              >
                <li
                  style={{
                    borderRadius: 20,
                    background: "#F1F2EE",
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "#5B3FA8" }}>
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
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </span>
                  <h4 style={{ margin: 0, fontSize: 16.5, lineHeight: 1.3, fontWeight: 800 }}>Фізико-математичний</h4>
                </li>
                <li
                  style={{
                    borderRadius: 20,
                    background: "#F1F2EE",
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "#4E7A1F" }}>
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
                  <h4 style={{ margin: 0, fontSize: 16.5, lineHeight: 1.3, fontWeight: 800 }}>Економічний</h4>
                </li>
                <li
                  style={{
                    borderRadius: 20,
                    background: "#F1F2EE",
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "#C8161C" }}>
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
                  <h4 style={{ margin: 0, fontSize: 16.5, lineHeight: 1.3, fontWeight: 800 }}>Гуманітарний</h4>
                </li>
                <li
                  style={{
                    borderRadius: 20,
                    background: "#F1F2EE",
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "#16181A" }}>
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
                      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                      <path d="M8.5 2h7" />
                      <path d="M7 16h10" />
                    </svg>
                  </span>
                  <h4 style={{ margin: 0, fontSize: 16.5, lineHeight: 1.3, fontWeight: 800 }}>Хіміко-біологічний</h4>
                </li>
              </ul>
            </div>
            <div
              className="pad-m"
              style={{
                flex: "1 1 400px",
                minWidth: 0,
                borderRadius: 28,
                background: "#8CC63F",
                color: "#16181A",
                padding: "clamp(26px, 3vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "rgba(22,24,26,0.75)",
                }}
              >
                Профорієнтація
              </span>
              <h3 style={{ margin: 0, fontSize: 24, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.7 }}>
                Від тесту — до стажування
              </h3>
              <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
                <li
                  style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: "1px solid rgba(22,24,26,0.14)" }}
                >
                  <span
                    style={{
                      flex: "none",
                      minWidth: 88,
                      fontSize: 13,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 0.6,
                    }}
                  >
                    8 клас
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.5, fontWeight: 600 }}>Старт профорієнтації</span>
                </li>
                <li
                  style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: "1px solid rgba(22,24,26,0.14)" }}
                >
                  <span
                    style={{
                      flex: "none",
                      minWidth: 88,
                      fontSize: 13,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 0.6,
                    }}
                  >
                    9 клас
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.5, fontWeight: 600 }}>
                    Тест <span lang="en">Magellano</span>
                  </span>
                </li>
                <li
                  style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: "1px solid rgba(22,24,26,0.14)" }}
                >
                  <span
                    style={{
                      flex: "none",
                      minWidth: 88,
                      fontSize: 13,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 0.6,
                    }}
                  >
                    9–10 класи
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.5, fontWeight: 600 }}>
                    Стажування у провідних українських та міжнародних компаніях
                  </span>
                </li>
                <li style={{ display: "flex", gap: 16, padding: "12px 0 0" }}>
                  <span
                    style={{
                      flex: "none",
                      minWidth: 88,
                      fontSize: 13,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 0.6,
                    }}
                  >
                    Випуск
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.5, fontWeight: 600 }}>Повноцінна підготовка до НМТ</span>
                </li>
              </ol>
            </div>
          </div>
          <div
            className="hscroll"
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: 16,
            }}
          >
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#5B3FA8" }}>
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
                  <path d="M2 3h20" />
                  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                  <path d="m7 21 5-5 5 5" />
                </svg>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>
                Проєктна методика
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                У середній школі ми запровадили проєктну методику навчання.
              </p>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#4E7A1F" }}>
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>
                Індивідуально з учителем
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Учителі займаються з учнями індивідуально, консультують і готують до олімпіад.
              </p>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#C8161C" }}>
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
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>
                Без приватного репетиторства
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Нашим учителям не дозволено займатися приватним репетиторством з учнями на комерційній основі.
              </p>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#16181A" }}>
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>День до 18:00</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#5F6366" }}>
                Сім уроків по 45 хвилин, діяльність за вибором і дворазове харчування.
              </p>
            </div>
          </div>
        </section>
        <section
          id="ucan"
          aria-labelledby="ucan-title"
          style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div
            className="pad-m"
            style={{
              borderRadius: 28,
              background: "#5B3FA8",
              color: "#FFFFFF",
              padding: "clamp(28px, 4vw, 56px)",
              display: "flex",
              flexWrap: "wrap",
              gap: "32px 48px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ flex: "1.3 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: 22 }}>
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
                <span style={{ flex: "none", width: 26, height: 2, background: "#8CC63F" }} />
                <span>
                  <span className="nw">U-CAN</span> · українсько-канадська програма
                </span>
              </span>
              <h2
                id="ucan-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3.4vw, 48px)",
                  lineHeight: 1.06,
                  fontWeight: 800,
                  letterSpacing: -1.8,
                  textWrap: "balance",
                }}
              >
                Українське свідоцтво і <span lang="en">Manitoba High School Diploma</span> — за 4 роки
              </h2>
              <p
                style={{
                  margin: 0,
                  maxWidth: 660,
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.9)",
                  textWrap: "pretty",
                }}
              >
                <span lang="en">Manitoba High School Diploma</span> — атестат про середню освіту канадської провінції
                Манітоба. Додаткова програма для 8–11 класів: 10 предметів канадської програми і 1100 додаткових
                навчальних годин. Усі уроки канадської програми — винятково англійською.
              </p>
              <div
                className="g2m"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 100%), 1fr))",
                  gap: 12,
                }}
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
                    className="num nw"
                    style={{ fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}
                  >
                    4 роки
                  </span>
                  <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "rgba(255,255,255,0.9)" }}>
                    з 8 по 11 клас
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
                  <span className="num" style={{ fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}>
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
                  <span className="num" style={{ fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}>
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
                  <span className="num" style={{ fontSize: 36, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}>
                    1-ша
                  </span>
                  <span style={{ fontSize: 13.5, lineHeight: 1.45, color: "rgba(255,255,255,0.9)" }}>
                    школа в Україні з ліцензією на програму
                  </span>
                </div>
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
                <a
                  className="bo"
                  href="https://forms.gle/tfUm17FznhabyiYv7"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    minHeight: 50,
                    padding: "0 24px",
                    borderRadius: 999,
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    color: "#FFFFFF",
                    fontSize: 15,
                    fontWeight: 700,
                    boxSizing: "border-box",
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
              </div>
            </div>
            <div style={{ flex: "1 1 380px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  borderRadius: 22,
                  background: "rgba(255,255,255,0.1)",
                  padding: 26,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    paddingBottom: 8,
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 1.4,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  Історія програми
                </h3>
                <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
                  <li
                    style={{
                      display: "flex",
                      gap: 16,
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    <span
                      style={{
                        flex: "none",
                        minWidth: 108,
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#E2F3C9",
                        textTransform: "uppercase",
                        letterSpacing: 0.6,
                      }}
                    >
                      Вересень 2018
                    </span>
                    <span style={{ fontSize: 15.5, lineHeight: 1.5 }}>Старт програми</span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      gap: 16,
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    <span
                      style={{
                        flex: "none",
                        minWidth: 108,
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#E2F3C9",
                        textTransform: "uppercase",
                        letterSpacing: 0.6,
                      }}
                    >
                      Весна 2019
                    </span>
                    <span style={{ fontSize: 15.5, lineHeight: 1.5 }}>
                      Меморандум про взаєморозуміння з урядом Манітоби
                    </span>
                  </li>
                  <li style={{ display: "flex", gap: 16, padding: "12px 0 0" }}>
                    <span
                      style={{
                        flex: "none",
                        minWidth: 108,
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#E2F3C9",
                        textTransform: "uppercase",
                        letterSpacing: 0.6,
                      }}
                    >
                      Червень 2022
                    </span>
                    <span style={{ fontSize: 15.5, lineHeight: 1.5 }}>
                      Перші 10 випускників отримали обидва документи
                    </span>
                  </li>
                </ol>
              </div>
              <div
                className="ph-m"
                data-photo="programs-ucan"
                style={{
                  flex: "1 1 auto",
                  position: "relative",
                  minHeight: 220,
                  borderRadius: 22,
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
                  sizes="(max-width: 599px) 82vw, (max-width: 1099px) 88vw, 521px"
                />
              </div>
            </div>
          </div>
          <div
            className="uc-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 16 }}
          >
            <div
              className="pad-m uc-cost"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 9, color: "#5B3FA8" }}>
                <svg
                  width="20"
                  height="20"
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
              <h3 style={{ margin: 0, fontSize: 20, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.5 }}>
                Вартість і вступ на <span className="nw">U-CAN</span>
              </h3>
              <dl style={{ margin: 0, display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "10px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <dt style={{ fontSize: 12.5, fontWeight: 800, color: "#5F6366" }}>Вартість</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>
                    [ціна <span className="nw">U-CAN</span> на 2026/2027; чи входить у $13&nbsp;750 «Наживо»]
                  </dd>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "10px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <dt style={{ fontSize: 12.5, fontWeight: 800, color: "#5F6366" }}>Хто може вступити</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>
                    Учні нашої та інших шкіл, які навчаються за українською програмою наживо або в екстернаті
                  </dd>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "10px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <dt style={{ fontSize: 12.5, fontWeight: 800, color: "#5F6366" }}>Коли подавати</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>[терміни]</dd>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "10px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <dt style={{ fontSize: 12.5, fontWeight: 800, color: "#5F6366" }}>Навантаження</dt>
                  <dd style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>
                    1100 год за 4 роки ≈ [X] год на тиждень, [у межах дня до 18:00 / додатково]
                  </dd>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "10px 0 0" }}>
                  <dt style={{ fontSize: 12.5, fontWeight: 800, color: "#5F6366" }}>
                    Ключові предмети (не нижче 8 балів)
                  </dt>
                  <dd style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>[перелік]</dd>
                </div>
              </dl>
              <Link
                className="lk"
                href="/enrolment#grade-ucan"
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                <span>
                  Умови вступу на <span className="nw">U-CAN</span>
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
            <div
              className="pad-m"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 9, color: "#5B3FA8" }}>
                <svg
                  width="20"
                  height="20"
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
              <h3 style={{ margin: 0, fontSize: 20, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.5 }}>
                Предмети канадської програми
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>Наприклад:</p>
              <span lang="en" style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
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
                  English Language Arts
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
                  Mathematics
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
                  Canada in the Contemporary World
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
                  Reading and Thinking
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
                  Health
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
                  Physical Education
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
                  Career Development
                </span>
              </span>
            </div>
            <div
              className="pad-m"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 9, color: "#5B3FA8" }}>
                <svg
                  width="20"
                  height="20"
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
              </span>
              <h3 style={{ margin: 0, fontSize: 20, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.5 }}>
                Визнання диплома
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, fontWeight: 600 }}>
                Кредити <span lang="en">Manitoba High School Diploma</span> зараховують іноземні заклади вищої освіти
                без додаткових підтверджень.
              </p>
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
                  Канада
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
                  США
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
                  Велика Британія
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
                  Ірландія
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
                  Австралія
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
                  Франція
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
                  Іспанія
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
                  Нідерланди
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
                  Японія
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
                  Гонконг
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
                  Філіппіни
                </span>
              </span>
            </div>
            <div
              className="pad-m uc-req"
              style={{
                borderRadius: 28,
                background: "#8CC63F",
                color: "#16181A",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                boxSizing: "border-box",
              }}
            >
              <h3 style={{ margin: 0, fontSize: 20, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.5 }}>
                Вимоги до вступу
              </h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
                <li
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(22,24,26,0.14)",
                    fontSize: 15.5,
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  <span style={{ flex: "none", paddingTop: 2 }}>
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
                  Есе
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(22,24,26,0.14)",
                    fontSize: 15.5,
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  <span style={{ flex: "none", paddingTop: 2 }}>
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
                  Не нижче 8 балів (65% знань) з ключових предметів
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 0 0",
                    fontSize: 15.5,
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  <span style={{ flex: "none", paddingTop: 2 }}>
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
                  Англійська мова — не нижче 10 балів
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <div
              className="pad-m"
              style={{
                flex: "1 1 420px",
                minWidth: 0,
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
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
                Оцінювання і викладачі
              </h3>
              <p style={{ margin: 0, display: "flex", gap: 12, fontSize: 15.5, lineHeight: 1.55 }}>
                <span style={{ flex: "none", color: "#5B3FA8", paddingTop: 2 }}>
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
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                </span>
                <span>Оцінювання — за знаннями та вміннями, а також за їх практичним застосуванням.</span>
              </p>
              <p style={{ margin: 0, display: "flex", gap: 12, fontSize: 15.5, lineHeight: 1.55 }}>
                <span style={{ flex: "none", color: "#5B3FA8", paddingTop: 2 }}>
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
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                </span>
                <span>Учителів обирають за критеріями кваліфікації згідно з вимогами канадської системи.</span>
              </p>
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  paddingTop: 16,
                  borderTop: "1px solid #EDEEEA",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    aria-hidden="true"
                    style={{
                      flex: "none",
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "#EFEAFA",
                      color: "#5B3FA8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 15,
                      fontWeight: 800,
                    }}
                  >
                    ТС
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontSize: 15.5, fontWeight: 800 }}>Тетяна Сунак</span>
                    <span style={{ fontSize: 13.5, color: "#5F6366" }}>
                      Координаторка програми <span className="nw">U-CAN</span>
                    </span>
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span style={{ fontSize: 14.5, fontWeight: 700, color: "#3A3E42" }}>
                    Запитання про <span className="nw">U-CAN</span>:
                  </span>
                  <span style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    <a
                      className="bl"
                      href="tel:+380503733973"
                      style={{
                        display: "inline-flex",
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
                        boxSizing: "border-box",
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      +38 (050) 373-39-73
                    </a>
                    <a
                      className="bl"
                      href="https://t.me/NovopecherskaShoolAdmission"
                      target="_blank"
                      rel="noopener"
                      style={{
                        display: "inline-flex",
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
                        boxSizing: "border-box",
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
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                        <path d="m21.854 2.147-10.94 10.939" />
                      </svg>
                      Telegram<span className="sr"> (відкриється в новій вкладці)</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <figure
              className="pad-m"
              style={{
                flex: "1.4 1 520px",
                minWidth: 0,
                margin: 0,
                borderRadius: 28,
                background: "#16181A",
                color: "#FFFFFF",
                padding: "clamp(28px, 3.4vw, 44px)",
                display: "flex",
                flexDirection: "column",
                gap: 22,
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#8CC63F" }}>
                <svg
                  width="30"
                  height="30"
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
                style={{
                  margin: 0,
                  fontSize: "clamp(20px, 2vw, 27px)",
                  lineHeight: 1.42,
                  fontWeight: 600,
                  letterSpacing: -0.5,
                  textWrap: "pretty",
                }}
              >
                «…мені вдалося вступити до двох найкращих університетів Канади:{" "}
                <span lang="en">University of Toronto</span> та{" "}
                <span lang="en">The University of British Columbia</span>
                .»
              </blockquote>
              <figcaption style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    fontWeight: 800,
                  }}
                >
                  ГО
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 15.5, fontWeight: 800 }}>Григорій Овчаренко</span>
                  <span style={{ fontSize: 13.5, color: "#9AA0A4" }}>
                    Випускник 2021/2022, програма <span className="nw">U-CAN</span>
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
        <ClubsFilter />
        <section id="online" aria-labelledby="online-title" style={{ marginTop: 56 }}>
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
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 800 }}>
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
                Дистанційна школа
              </span>
              <h2
                id="online-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  textWrap: "balance",
                }}
              >
                Новопечерська онлайн: вечірні уроки в Zoom і заняття в суботу
              </h2>
            </div>
            <a
              className="bl"
              href="https://online.novoshkola.com.ua"
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                padding: "0 22px",
                borderRadius: 999,
                border: "1.5px solid #E3E5E0",
                background: "#FFFFFF",
                color: "#16181A",
                fontSize: 14,
                fontWeight: 700,
                boxSizing: "border-box",
              }}
            >
              online.novoshkola.com.ua<span className="sr"> (відкриється в новій вкладці)</span>
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
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 16 }}
          >
            <div
              className="pad-m"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
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
                1–4 класи · Дистанційний
              </h3>
              <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 48, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}>$650</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#16181A" }}>за семестр</span>
              </span>
              <ul
                style={{
                  margin: 0,
                  padding: "14px 0 0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  borderTop: "1px solid #EDEEEA",
                }}
              >
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  До 10 уроків на тиждень по 40 хвилин
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  <span>
                    Будні <span className="nw">18:00–20:00</span>, субота <span className="nw">10:00–14:00</span> (за
                    київським часом)
                  </span>
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  Групові заняття в Zoom і навчальна платформа 24/7
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  Обов’язкові: Українська мова та читання, Я досліджую світ
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  На вибір: математика, шахи, англійська мова
                </li>
              </ul>
              <a
                className="lk"
                href="https://online.novoshkola.com.ua"
                target="_blank"
                rel="noopener"
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                Отримати демо-доступ на 3 дні<span className="sr"> (відкриється в новій вкладці)</span>
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
            <div
              className="pad-m"
              style={{
                borderRadius: 28,
                background: "#5B3FA8",
                color: "#FFFFFF",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
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
                  color: "rgba(255,255,255,0.86)",
                }}
              >
                5–11 класи · Дистанційний
              </h3>
              <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 48, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}>$850</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF" }}>за семестр</span>
              </span>
              <ul
                style={{
                  margin: 0,
                  padding: "14px 0 0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  borderTop: "1px solid rgba(255,255,255,0.16)",
                }}
              >
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#8CC63F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  Групові уроки та консультації в Zoom
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#8CC63F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  Індивідуальний навчальний план
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#8CC63F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  Постійний супровід виховника
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#8CC63F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  Зарахування результатів навчання з інших шкіл
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#8CC63F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  Вечірні заняття та уроки в суботу
                </li>
              </ul>
            </div>
            <div
              className="pad-m"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
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
                5–11 класи · Екстернат
              </h3>
              <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 48, lineHeight: 1, fontWeight: 800, letterSpacing: -2 }}>$375</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#16181A" }}>за семестр</span>
              </span>
              <ul
                style={{
                  margin: 0,
                  padding: "14px 0 0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  borderTop: "1px solid #EDEEEA",
                }}
              >
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  До 12 консультацій у Zoom на місяць
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  Проміжне та семестрове оцінювання
                </li>
                <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flex: "none", color: "#4E7A1F", paddingTop: 2 }}>
                    <svg
                      width="16"
                      height="16"
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
                  Можливість опанувати 2 навчальні роки за 1
                </li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 16 }}>
            <a
              className="tl pad-m"
              href="https://nmt.novoshkola.com.ua/"
              target="_blank"
              rel="noopener"
              style={{
                flex: "1 1 320px",
                minWidth: 0,
                borderRadius: 28,
                background: "#8CC63F",
                color: "#16181A",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
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
                    color: "rgba(22,24,26,0.75)",
                  }}
                >
                  Підготовка до НМТ
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
              <h3 style={{ margin: "auto 0 0", fontSize: 22, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.6 }}>
                2 заняття на тиждень <span className="nw">по 1,5 години</span>
              </h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(22,24,26,0.8)" }}>
                nmt.novoshkola.com.ua<span className="sr"> (відкриється в новій вкладці)</span>
              </span>
            </a>
            <div
              className="pad-m"
              style={{
                flex: "1 1 320px",
                minWidth: 0,
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                boxSizing: "border-box",
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
                Індивідуальний формат
              </span>
              <h3 style={{ margin: "auto 0 0", fontSize: 22, lineHeight: 1.25, fontWeight: 800, letterSpacing: -0.6 }}>
                Гнучкий розклад навчання
              </h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                Вартість розраховується індивідуально.
              </span>
              <a
                className="lk"
                href="tel:+380503733973"
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Дізнатися вартість<span className="sr">: +38 (050) 373-39-73</span>
              </a>
            </div>
            <div
              className="pad-m"
              style={{
                flex: "1.3 1 380px",
                minWidth: 0,
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "#F3F6EE",
                    color: "#4E7A1F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  ОН
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 16, fontWeight: 800 }}>Ольга Наумчук</span>
                  <span style={{ fontSize: 13.5, color: "#5F6366" }}>Керівниця дистанційної школи</span>
                </span>
              </span>
              <span style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 10 }}>
                <a
                  className="bl"
                  href="tel:+380503733973"
                  style={{
                    display: "inline-flex",
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
                    boxSizing: "border-box",
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +38 (050) 373-39-73
                </a>
                <a
                  className="bl"
                  href="https://www.instagram.com/novoshkola_online/"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: "inline-flex",
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
                    boxSizing: "border-box",
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  @novoshkola_online<span className="sr"> в Instagram (відкриється в новій вкладці)</span>
                </a>
              </span>
            </div>
          </div>
        </section>
        <section aria-labelledby="cta-title" style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 16 }}>
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
              Підбір програми
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
              Не впевнені, яка програма підходить?
            </h2>
            <p style={{ margin: 0, maxWidth: 620, fontSize: 17, lineHeight: 1.6, color: "#9AA0A4" }}>
              Приходьте на екскурсію або зателефонуйте — відповімо на запитання про програми, формати й вступ.
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
              <a
                className="bo"
                href="tel:+380503733973"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 52,
                  padding: "8px 26px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontWeight: 700,
                  whiteSpace: "normal",
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
                  style={{ flex: "none" }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>
                  Зателефонувати: <span className="nw">+38 (050) 373-39-73</span>
                </span>
              </a>
            </div>
            <Link
              className="fl"
              href="/enrolment"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                fontSize: 15,
                fontWeight: 800,
                color: "#C9CDD1",
              }}
            >
              Умови вступу
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
            className="pad-m"
            style={{
              flex: "1 1 360px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              color: "#16181A",
              padding: 34,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: "#F3F6EE",
                color: "#4E7A1F",
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
                <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <h3 style={{ margin: "auto 0 0", fontSize: 26, lineHeight: 1.15, fontWeight: 800, letterSpacing: -0.8 }}>
              3D-тури школою
            </h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#54585C" }}>
              Пройдіться класами школи у 3D — тури доступні онлайн, без запису.
            </p>
            <span style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a
                className="bl"
                href="https://my.matterport.com/show/?m=hb9i8JMQQMh"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
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
                  boxSizing: "border-box",
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
                className="bl"
                href="https://my.matterport.com/show/?m=wXn9boz3Acv"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
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
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
