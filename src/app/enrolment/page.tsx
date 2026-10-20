import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GradePicker from "./GradePicker";
import Faq from "./Faq";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Вступ" };

export default function EnrolmentPage() {
  return (
    <>
      <Breadcrumbs items={[["Вступ"]]} />
      <main id="main" style={{ display: "flex", flexDirection: "column" }}>
        <section aria-labelledby="hero-title" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <div
            className="hero-photo"
            data-photo="enrol-hero"
            style={{
              flex: "1.6 1 620px",
              minWidth: 0,
              position: "relative",
              minHeight: 600,
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
              src="/photos/first-grader.jpg"
              alt="учні Новопечерської школи"
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
                Вступ 2027/2028
              </span>
              <h1
                id="hero-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(40px, 5vw, 66px)",
                  lineHeight: 1.02,
                  fontWeight: 800,
                  letterSpacing: -2.6,
                  color: "#FFFFFF",
                  textWrap: "balance",
                }}
              >
                Вступ до Новопечерської школи
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
                Ласкаво просимо! Від знайомства й екскурсії — до анкети, співбесід і підтвердження місця. Усе, що
                потрібно знати родині, — на одній сторінці.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
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
                    padding: "0 24px 0 28px",
                    borderRadius: 999,
                    background: "#8CC63F",
                    color: "#16181A",
                    fontSize: 15,
                    fontWeight: 700,
                  }}
                >
                  Заповнити анкету<span className="sr"> (School Today, відкриється в новій вкладці)</span>
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
                    minHeight: 52,
                    padding: "0 24px 0 28px",
                    borderRadius: 999,
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    color: "#FFFFFF",
                    fontSize: 15,
                    fontWeight: 700,
                    boxSizing: "border-box",
                  }}
                >
                  Записатися на екскурсію<span className="sr"> (Google Форма, відкриється в новій вкладці)</span>
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
          </div>
          <div style={{ flex: "1 1 380px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              id="dates"
              style={{
                flex: "1 1 auto",
                borderRadius: 28,
                background: "#FFFFFF",
                padding: "30px 34px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
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
                Терміни вступу 2027/2028
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 14,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: 128,
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 0.8,
                      textTransform: "uppercase",
                      color: "#C8161C",
                    }}
                  >
                    Лютий 2027
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.45, fontWeight: 600 }}>Співбесіди до 1 класу</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 14,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: 128,
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 0.8,
                      textTransform: "uppercase",
                      color: "#C8161C",
                    }}
                  >
                    Травень 2027
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.45, fontWeight: 600 }}>
                    Дошкільна підготовка, <span className="nw">КДП-4</span> і <span className="nw">КДП-5</span>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 14,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: 128,
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 0.8,
                      textTransform: "uppercase",
                      color: "#C8161C",
                    }}
                  >
                    Травень 2027
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.45, fontWeight: 600 }}>
                    2–10 класи — за наявності вільних місць
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 14,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: 128,
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 0.8,
                      textTransform: "uppercase",
                      color: "#C8161C",
                    }}
                  >
                    Протягом року
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.45, fontWeight: 600 }}>
                    2–10 класи, за наявності місць
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 14,
                    padding: "11px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: 128,
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 0.8,
                      textTransform: "uppercase",
                      color: "#5B3FA8",
                    }}
                  >
                    11 клас
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.45, fontWeight: 600 }}>
                    Лише через Стипендіальну програму
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, padding: "11px 0 0" }}>
                  <span
                    style={{
                      flex: "none",
                      width: 128,
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 0.8,
                      textTransform: "uppercase",
                      color: "#5B3FA8",
                    }}
                  >
                    Анкети
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.45, fontWeight: 600 }}>Прийом анкет — [до … 2027]</span>
                </div>
              </div>
            </div>
            <div
              className="hero-help"
              style={{
                flex: "1 1 auto",
                borderRadius: 28,
                background: "#5B3FA8",
                color: "#FFFFFF",
                padding: "30px 34px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
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
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                Залишилися запитання?
              </span>
              <span style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(255,255,255,0.86)" }}>
                Про вступ і екскурсії — телефонуйте або пишіть нам у Telegram.
              </span>
              <a
                href="tel:+380503733973"
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  fontSize: 28,
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1,
                  color: "#FFFFFF",
                }}
              >
                +38 (050) 373-39-73
              </a>
              <a
                className="bw"
                href="https://t.me/NovopecherskaShoolAdmission"
                target="_blank"
                rel="noopener"
                style={{
                  marginTop: "auto",
                  alignSelf: "flex-start",
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
                Написати в Telegram<span className="sr"> (відкриється в новій вкладці)</span>
              </a>
            </div>
          </div>
        </section>
        <GradePicker />
        <section id="steps" aria-labelledby="steps-title" style={{ marginTop: 56 }}>
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
                Процес вступу
              </span>
              <h2
                id="steps-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  textWrap: "balance",
                }}
              >
                Шість кроків до Новопечерської
              </h2>
            </div>
            <span style={{ maxWidth: 440, fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
              Порядок кроків не є обов’язковим і може змінюватися — звертайтеся до нас, ми радо допоможемо.
            </span>
          </div>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(360px, 100%), 1fr))",
              gap: 16,
            }}
          >
            <li
              className="step"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 34,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 300,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#F1F2EE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  01
                </span>
                <span style={{ color: "#5F6366" }}>
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
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </span>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 22, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.6 }}>
                Дізнайтеся більше про школу
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
                Прочитайте інформацію на сайті. Якщо у вас залишаються запитання — зателефонуйте нам.
              </p>
              <a
                className="lk"
                href="tel:+380503733973"
                style={{
                  marginTop: "auto",
                  alignSelf: "flex-start",
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
                +38 (050) 373-39-73
              </a>
            </li>
            <li
              className="step"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 34,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 300,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#F1F2EE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  02
                </span>
                <span style={{ color: "#5F6366" }}>
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
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
                    <path d="M15 5.764v15" />
                    <path d="M9 3.236v15" />
                  </svg>
                </span>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 22, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.6 }}>
                Відвідайте День відкритих дверей або екскурсію
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
                Щороку ми зустрічаємося з родинами, що цікавляться вступом: знайомимо з цінностями школи та методиками
                викладання. За анонсами стежте в соцмережах.
              </p>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, fontWeight: 600, color: "#5F6366" }}>
                [Екскурсія не обов’язкова для подання анкети — уточнити]
              </p>
              <a
                className="lk"
                href="https://forms.gle/tfUm17FznhabyiYv7"
                target="_blank"
                rel="noopener"
                style={{
                  marginTop: "auto",
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                Записатися на екскурсію<span className="sr"> (Google Форма, відкриється в новій вкладці)</span>
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
            </li>
            <li
              className="step"
              style={{
                borderRadius: 28,
                background: "#5B3FA8",
                color: "#FFFFFF",
                padding: 34,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 300,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  03
                </span>
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.16)",
                    fontSize: 12.5,
                    fontWeight: 800,
                  }}
                >
                  І етап відбору
                </span>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 22, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.6 }}>
                Заповніть анкету
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.86)" }}>
                Ваші відповіді — перший етап зарахування. Якщо заявку підтвердять, ви отримаєте запрошення на другий
                етап. Анкета подається на певний навчальний рік, кількість місць обмежена.
              </p>
              <a
                className="bg2"
                href="https://school-today.com/Forms/Client/104-14b1c2e2-0c89-4138-90ae-d2ad5d47578e"
                target="_blank"
                rel="noopener"
                style={{
                  marginTop: "auto",
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 48,
                  padding: "0 20px 0 22px",
                  borderRadius: 999,
                  background: "#8CC63F",
                  color: "#16181A",
                  fontSize: 14.5,
                  fontWeight: 700,
                }}
              >
                Заповнити анкету<span className="sr"> (School Today, відкриється в новій вкладці)</span>
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
            </li>
            <li
              className="step"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 34,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 300,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#F1F2EE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  04
                </span>
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: "#EFEAFA",
                    fontSize: 12.5,
                    fontWeight: 800,
                    color: "#5B3FA8",
                  }}
                >
                  ІІ етап відбору
                </span>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 22, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.6 }}>
                Співбесіда з дитиною
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
                Діти груп дошкільної підготовки та 1 класу — групові співбесіди або взаємодії з педагогами та
                психологом. Вступники до 2–10 класів — співбесіди на виявлення академічних знань зі шкільних предметів.
              </p>
            </li>
            <li
              className="step"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 34,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 300,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#F1F2EE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  05
                </span>
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: "#EFEAFA",
                    fontSize: 12.5,
                    fontWeight: 800,
                    color: "#5B3FA8",
                  }}
                >
                  ІІ етап відбору
                </span>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 22, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.6 }}>
                Співбесіда з батьками
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
                Участь родини в навчально-виховному процесі відіграє значну роль. Ми запросимо вас на групову взаємодію
                з іншими батьками та представниками адміністрації, щоб відповісти на ваші запитання.
              </p>
            </li>
            <li
              className="step"
              style={{
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
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(22,24,26,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  06
                </span>
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
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </span>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 22, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.6 }}>
                Підтвердіть запрошення на навчання!
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "rgba(22,24,26,0.78)" }}>
                Підтвердіть намір навчатися протягом 1 дня, подайте заяву про приєднання до договору протягом 7 днів і
                сплатіть рахунок протягом 7 днів після отримання.
              </p>
            </li>
          </ol>
          <div
            style={{
              marginTop: 16,
              display: "flex",
              gap: 18,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "30px 34px",
              boxSizing: "border-box",
            }}
          >
            <span style={{ flex: "none", color: "#5B3FA8", paddingTop: 2 }}>
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
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </span>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "#54585C", textWrap: "pretty" }}>
              Основна мета співбесід — визначити готовність дитини до навчання та зрозуміти, чи відповідає Новопечерська
              школа очікуванням батьків. Рівень академічної підготовки — один із критеріїв прийому, але не вирішальний.
              Комісія не коментує результати співбесід.
            </p>
          </div>
        </section>
        <section id="cost" aria-labelledby="cost-title" style={{ marginTop: 56 }}>
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
                Вартість навчання
              </span>
              <h2
                id="cost-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 3vw, 40px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  textWrap: "balance",
                }}
              >
                Вартість на 2026/2027 навчальний рік
              </h2>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "#54585C" }}>
                Вартість на 2027/2028 н. р. оголосимо [дата]. Ціни нижче діють у 2026/2027 н. р., зокрема для вступу
                посеред року.
              </p>
            </div>
            <Link
              className="bl"
              href="/parents#contract"
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
              Договір приєднання
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
              style={{
                flex: "1.5 1 600px",
                minWidth: 0,
                borderRadius: 28,
                background: "#FFFFFF",
                padding: "clamp(24px, 3.4vw, 48px)",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: -0.6,
                  }}
                >
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#8CC63F" }} />
                  «Наживо»
                </h3>
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
                  Повний день 9:00–18:00
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "8px 20px",
                    padding: "16px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span style={{ fontSize: 17, fontWeight: 700 }}>
                    <span className="lg">Дошкільна підготовка, </span>
                    <span className="nw">КДП-4</span>
                  </span>
                  <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontSize: 34, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}>$11 000</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#16181A" }}>за рік</span>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "8px 20px",
                    padding: "16px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span style={{ fontSize: 17, fontWeight: 700 }}>
                    <span className="lg">Дошкільна підготовка, </span>
                    <span className="nw">КДП-5</span>
                  </span>
                  <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontSize: 34, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}>$13 150</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#16181A" }}>за рік</span>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "8px 20px",
                    padding: "16px 0",
                  }}
                >
                  <span style={{ fontSize: 17, fontWeight: 700 }}>1–11 класи</span>
                  <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontSize: 34, lineHeight: 1, fontWeight: 800, letterSpacing: -1.4 }}>$13 750</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#16181A" }}>за рік</span>
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
                <span
                  style={{
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 1.4,
                    textTransform: "uppercase",
                    color: "#5F6366",
                  }}
                >
                  Що входить у вартість
                </span>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
                    gap: "12px 28px",
                  }}
                >
                  <li style={{ display: "flex", gap: 11, fontSize: 15, lineHeight: 1.5, fontWeight: 600 }}>
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
                    Освітній процес і навчальні матеріали
                  </li>
                  <li style={{ display: "flex", gap: 11, fontSize: 15, lineHeight: 1.5, fontWeight: 600 }}>
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
                    Персональний планшет у користування (власність школи)
                  </li>
                  <li style={{ display: "flex", gap: 11, fontSize: 15, lineHeight: 1.5, fontWeight: 600 }}>
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
                    Шкільна форма
                  </li>
                  <li style={{ display: "flex", gap: 11, fontSize: 15, lineHeight: 1.5, fontWeight: 600 }}>
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
                    Харчування: КДП — чотириразове, 1–4 — триразове, 5–11 — дворазове
                  </li>
                  <li style={{ display: "flex", gap: 11, fontSize: 15, lineHeight: 1.5, fontWeight: 600 }}>
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
                    Творчі гуртки та спортивні секції на вибір
                  </li>
                  <li style={{ display: "flex", gap: 11, fontSize: 15, lineHeight: 1.5, fontWeight: 600 }}>
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
                    Щорічний медичний огляд
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ flex: "1 1 380px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  flex: "1 1 auto",
                  borderRadius: 28,
                  background: "#EFEAFA",
                  color: "#16181A",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  boxSizing: "border-box",
                }}
              >
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <h3
                    style={{
                      margin: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 22,
                      fontWeight: 800,
                      letterSpacing: -0.6,
                    }}
                  >
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#5B3FA8" }} />
                    «Дистанційний»
                  </h3>
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
                      <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
                      <path d="M12 17v4" />
                      <path d="M8 21h8" />
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                    </svg>
                  </span>
                </span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: "6px 16px",
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(91,63,168,0.18)",
                    }}
                  >
                    <span style={{ fontSize: 16, fontWeight: 700 }}>1–4 класи</span>
                    <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontSize: 28, lineHeight: 1, fontWeight: 800, letterSpacing: -1 }}>$650</span>
                      <span style={{ fontSize: 16, fontWeight: 700, color: "#16181A" }}>за семестр</span>
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: "6px 16px",
                      padding: "12px 0",
                    }}
                  >
                    <span style={{ fontSize: 16, fontWeight: 700 }}>5–11 класи</span>
                    <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontSize: 28, lineHeight: 1, fontWeight: 800, letterSpacing: -1 }}>$850</span>
                      <span style={{ fontSize: 16, fontWeight: 700, color: "#16181A" }}>за семестр</span>
                    </span>
                  </div>
                </div>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#54585C" }}>
                  Групові онлайн-заняття за розкладом у вечірній час і в суботу, індивідуальне планування та
                  онлайн-платформа. Навчальний рік — 2 семестри.
                </span>
                <Link
                  className="lk"
                  href="/programs#online"
                  style={{
                    marginTop: "auto",
                    alignSelf: "flex-start",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    minHeight: 44,
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#5B3FA8",
                  }}
                >
                  Дистанційна школа
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
                style={{
                  flex: "1 1 auto",
                  borderRadius: 28,
                  background: "#FFFFFF",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  boxSizing: "border-box",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: -0.6,
                  }}
                >
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#E31E24" }} />
                  «Екстернат»
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "6px 16px",
                    padding: "4px 0",
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700 }}>5–11 класи</span>
                  <span style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontSize: 28, lineHeight: 1, fontWeight: 800, letterSpacing: -1 }}>$375</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#16181A" }}>за семестр</span>
                  </span>
                </div>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                  До 12 консультацій у Zoom на місяць, проміжне та семестрове оцінювання. Навчальний рік — 2 семестри.
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: 16,
            }}
          >
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: "28px 30px",
                display: "flex",
                gap: 16,
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
                  <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 17.5v-11" />
                </svg>
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Оплата в гривнях</span>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                  За курсом продажу долара США у відділеннях АТ «Ощадбанк».
                </span>
              </span>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: "28px 30px",
                display: "flex",
                gap: 16,
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
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Графік оплати</span>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                  Посеместрово (за договором 2024/2025: до 15 травня та до 30 листопада) [уточнити для 2026/2027].
                </span>
              </span>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: "28px 30px",
                display: "flex",
                gap: 16,
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Знижка 5%</span>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                  Для родин, де у школі навчаються двоє і більше дітей.
                </span>
              </span>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: "28px 30px",
                display: "flex",
                gap: 16,
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
              <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Додаткове харчування</span>
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                  З 1 класу: сніданок або підвечірок — 3240 грн на місяць.
                </span>
              </span>
            </div>
          </div>
        </section>
        <section
          id="scholarship"
          aria-label="Стипендіальна програма і вступ на U-CAN"
          style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 16 }}
        >
          <div
            style={{
              flex: "1.2 1 520px",
              minWidth: 0,
              borderRadius: 28,
              background: "#8CC63F",
              color: "#16181A",
              padding: "clamp(24px, 3.4vw, 48px)",
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
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx="12" cy="8" r="6" />
              </svg>
              Стипендіальна програма
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
              Грант на безоплатне навчання
            </h3>
            <p style={{ margin: 0, maxWidth: 560, fontSize: 16.5, lineHeight: 1.6, color: "rgba(22,24,26,0.78)" }}>
              Стипендіальна програма — грант від ГС «Освіторія» та Новопечерської школи на безоплатне навчання. Вступ до
              11 класу — лише через неї.
            </p>
            <span style={{ fontSize: 14.5, lineHeight: 1.55, fontWeight: 600, color: "rgba(22,24,26,0.78)" }}>
              Умови, етапи відбору й терміни — [деталі на scholarship.novoshkola.com.ua]
            </span>
            <a
              href="https://scholarship.novoshkola.com.ua"
              target="_blank"
              rel="noopener"
              style={{
                marginTop: "auto",
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                minHeight: 50,
                padding: "0 22px 0 24px",
                borderRadius: 999,
                background: "#16181A",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              Про стипендію<span className="sr"> (відкриється в новій вкладці)</span>
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
          </div>
          <div
            style={{
              flex: "1 1 420px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "clamp(24px, 3.4vw, 48px)",
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
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
              Вступ на<span className="nw">U-CAN</span>
            </span>
            <h3 style={{ margin: 0, fontSize: 26, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.8 }}>
              <span className="nw">U-CAN</span> — українсько-канадська програма, 8–11 класи
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
              <li style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: "1px solid #EDEEEA" }}>
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
                <span style={{ fontSize: 15, lineHeight: 1.5, fontWeight: 600 }}>Есе</span>
              </li>
              <li style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: "1px solid #EDEEEA" }}>
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
                <span style={{ fontSize: 15, lineHeight: 1.5, fontWeight: 600 }}>
                  Не нижче 8 балів (65% знань) з ключових предметів
                </span>
              </li>
              <li style={{ display: "flex", gap: 12, padding: "12px 0" }}>
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
                <span style={{ fontSize: 15, lineHeight: 1.5, fontWeight: 600 }}>
                  Англійська мова — не нижче 10 балів
                </span>
              </li>
            </ul>
            <Link
              className="lk"
              href="/programs#ucan"
              style={{
                marginTop: "auto",
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                fontSize: 15,
                fontWeight: 800,
                color: "#5B3FA8",
              }}
            >
              Про програму U-CAN
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
        </section>
        <Faq />
        <section
          aria-labelledby="cta-title"
          style={{
            marginTop: 56,
            borderRadius: 28,
            background: "#16181A",
            color: "#FFFFFF",
            padding: "clamp(28px, 4vw, 56px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "28px 48px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{ flex: "1 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: 14, maxWidth: 720 }}
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
                fontSize: "clamp(30px, 3.2vw, 44px)",
                lineHeight: 1.08,
                fontWeight: 800,
                letterSpacing: -1.5,
                textWrap: "balance",
              }}
            >
              Готові познайомитися зі школою?
            </h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#9AA0A4" }}>
              Заповніть анкету — ми зателефонуємо, щоб домовитися про зустріч та екскурсію школою. Або спершу запишіться
              на екскурсію.
            </p>
          </div>
          <div style={{ flex: "0 1 auto", minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                className="bg2"
                href="https://school-today.com/Forms/Client/104-14b1c2e2-0c89-4138-90ae-d2ad5d47578e"
                target="_blank"
                rel="noopener"
                style={{
                  flex: "1 1 auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  minHeight: 54,
                  padding: "0 26px 0 30px",
                  borderRadius: 999,
                  background: "#8CC63F",
                  color: "#16181A",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Заповнити анкету<span className="sr"> (School Today, відкриється в новій вкладці)</span>
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
                  flex: "1 1 auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  minHeight: 54,
                  padding: "0 24px 0 28px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontWeight: 700,
                  boxSizing: "border-box",
                }}
              >
                Записатися на екскурсію<span className="sr"> (Google Форма, відкриється в новій вкладці)</span>
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
            <p
              style={{
                margin: 0,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0 12px",
                fontSize: 15,
                lineHeight: 1.5,
                color: "#9AA0A4",
              }}
            >
              <span>Або телефонуйте:</span>
              <a
                className="fl"
                href="tel:+380503733973"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  fontWeight: 800,
                  color: "#FFFFFF",
                }}
              >
                +38 (050) 373-39-73
              </a>
              <span aria-hidden="true">·</span>
              <a
                className="fl"
                href="https://t.me/NovopecherskaShoolAdmission"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  fontWeight: 800,
                  color: "#FFFFFF",
                }}
              >
                Telegram<span className="sr"> (відкриється в новій вкладці)</span>
              </a>
              <span aria-hidden="true">·</span>
              <Link
                className="fl"
                href="/contacts#write"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  fontWeight: 800,
                  color: "#FFFFFF",
                }}
              >
                Написати нам
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
