import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Контакти" };

export default function ContactsPage() {
  return (
    <>
      <Breadcrumbs items={[["Контакти"]]} />
      <main id="main" style={{ display: "flex", flexDirection: "column" }}>
        <section
          className="ct-hero"
          aria-labelledby="contacts-title"
          style={{ display: "flex", flexWrap: "wrap", gap: 16 }}
        >
          <div
            style={{
              flex: "1 1 520px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "clamp(28px, 3.6vw, 52px)",
              display: "flex",
              flexDirection: "column",
              gap: 22,
              boxSizing: "border-box",
            }}
          >
            <h1
              id="contacts-title"
              style={{
                margin: 0,
                fontSize: "clamp(38px, 4vw, 54px)",
                lineHeight: 1.04,
                fontWeight: 800,
                letterSpacing: -2,
              }}
            >
              Контакти
            </h1>
            <p
              style={{ margin: 0, maxWidth: 520, fontSize: 17, lineHeight: 1.6, color: "#54585C", textWrap: "pretty" }}
            >
              Напишіть або зателефонуйте нам. Познайомитися зі школою наживо можна на екскурсії — ми на Новопечерських
              липках, у центрі Києва.
            </p>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ flex: "none", color: "#C8161C", paddingTop: 3 }}>
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
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span style={{ fontSize: 19, lineHeight: 1.5, fontWeight: 700 }}>
                01103, Київ,
                <br />
                вул. Андрія Верхогляда, 9-Б
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #EDEEEA" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "4px 20px",
                  padding: "10px 0",
                  borderBottom: "1px solid #EDEEEA",
                }}
              >
                <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.2,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    Рецепція
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.4, color: "#5F6366" }}>Щоденні питання батьків</span>
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "0 18px" }}>
                  <a
                    href="tel:+380501939393"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: 44,
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#16181A",
                    }}
                  >
                    +38 (050) 193-93-93
                  </a>
                  <a
                    href="tel:+380443590750"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: 44,
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#16181A",
                    }}
                  >
                    +38 (044) 359-07-50
                  </a>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "4px 20px",
                  padding: "10px 0",
                  borderBottom: "1px solid #EDEEEA",
                }}
              >
                <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.2,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    Вступ та екскурсії · Telegram
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.4, color: "#5F6366" }}>
                    Анкета, співбесіди, запис на екскурсію
                  </span>
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "0 18px" }}>
                  <a
                    href="tel:+380503733973"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: 44,
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#16181A",
                    }}
                  >
                    +38 (050) 373-39-73
                  </a>
                  <a
                    href="https://t.me/NovopecherskaShoolAdmission"
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      minHeight: 44,
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#5B3FA8",
                    }}
                  >
                    Telegram<span className="sr"> (відкриється в новій вкладці)</span>
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
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "4px 20px",
                  padding: "10px 0",
                  borderBottom: "1px solid #EDEEEA",
                }}
              >
                <span
                  style={{
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    color: "#5F6366",
                  }}
                >
                  Також
                </span>
                <a
                  href="tel:+380681939333"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: 44,
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#16181A",
                  }}
                >
                  +38 (068) 193-93-33
                </a>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 24px" }}>
              <a
                className="bp"
                href="#write"
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
                Написати нам
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
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </a>
              <a
                href="mailto:info@novoshkola.com.ua"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 44,
                  fontSize: 16.5,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                <span style={{ color: "#4E7A1F", display: "flex" }}>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                info@novoshkola.com.ua
              </a>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              <a
                className="sc"
                href="https://www.facebook.com/novoshkola"
                target="_blank"
                rel="noopener"
                aria-label="Facebook (відкриється в новій вкладці)"
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
              <a
                className="sc"
                href="https://www.youtube.com/user/novoshkola"
                target="_blank"
                rel="noopener"
                aria-label="YouTube (відкриється в новій вкладці)"
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
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a
                className="sc"
                href="https://www.instagram.com/novopecherska_school"
                target="_blank"
                rel="noopener"
                aria-label="Instagram (відкриється в новій вкладці)"
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                className="sc"
                href="https://t.me/NovopecherskaShoolAdmission"
                target="_blank"
                rel="noopener"
                aria-label="Telegram: питання про вступ (відкриється в новій вкладці)"
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
            </div>
          </div>
          <div
            className="ct-map"
            data-map="contacts"
            style={{
              flex: "1.15 1 560px",
              minWidth: 0,
              position: "relative",
              minHeight: 560,
              borderRadius: 28,
              overflow: "hidden",
              backgroundColor: "#E3E7DC",
              backgroundImage: "repeating-linear-gradient(135deg, rgba(22,24,26,0.035) 0 1px, transparent 1px 12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "72px 24px 40px",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.86)",
                fontSize: 12,
                fontWeight: 700,
                color: "#3A3E42",
              }}
            >
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
                <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
                <path d="M15 5.764v15" />
                <path d="M9 3.236v15" />
              </svg>
              Мапа Google — вбудовується на сайті
            </span>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: 24,
                  padding: "24px 26px",
                  boxShadow: "0 18px 40px rgba(22,24,26,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  maxWidth: 360,
                  boxSizing: "border-box",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      flex: "none",
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "#E31E24",
                      color: "#FFFFFF",
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3 }}>Новопечерська школа</span>
                    <span style={{ fontSize: 14, color: "#5F6366" }}>вул. Андрія Верхогляда, 9-Б, Київ</span>
                  </span>
                </span>
                <a
                  className="bp"
                  href="https://goo.gl/maps/Vx7FjUUhnmDor8Tc7"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    minHeight: 48,
                    padding: "0 22px",
                    borderRadius: 999,
                    background: "#5B3FA8",
                    color: "#FFFFFF",
                    fontSize: 14.5,
                    fontWeight: 700,
                  }}
                >
                  Відкрити в Google Maps<span className="sr"> (відкриється в новій вкладці)</span>
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
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
              <span
                aria-hidden="true"
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "#E31E24",
                  boxShadow: "0 0 0 9px rgba(227,30,36,0.18)",
                }}
              />
            </div>
          </div>
        </section>
        <section id="routes" aria-labelledby="routes-title" style={{ marginTop: 56 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 8px 22px" }}>
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
              Кому писати і дзвонити
            </span>
            <h2
              id="routes-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.4,
              }}
            >
              Куди звернутися
            </h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", gap: 16 }}
          >
            <div
              className="ct-wide"
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
              <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
                    <path d="M18 21a8 8 0 0 0-16 0" />
                    <circle cx="10" cy="8" r="5" />
                    <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                  </svg>
                </span>
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>Батькам учнів</h3>
              </span>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    padding: "12px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 700 }}>
                    Навчання, поведінка, домашні завдання
                  </span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#54585C" }}>
                    Класний вчитель: [канал, напр. повідомлення в School Today]
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    padding: "12px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 700 }}>Питання не вирішилося</span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#54585C" }}>
                    Керівниця ланки: Олена Шевченко (1–4 класи), Тетяна Ткаченко (5–11 класи) — [контакт; погодити зі
                    школою]
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    padding: "12px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 700 }}>Оплата, договір</span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#54585C" }}>
                    [Фінансово-юридичний департамент: контакт]
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    padding: "12px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 700 }}>
                    Сьогодні й терміново — запізнення, забрати раніше
                  </span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#54585C" }}>
                    Рецепція:{" "}
                    <a href="tel:+380501939393" style={{ fontWeight: 800, color: "#16181A" }}>
                      +38 (050) 193-93-93
                    </a>
                  </span>
                </li>
                <li style={{ display: "flex", flexDirection: "column", gap: 3, padding: "12px 0 0" }}>
                  <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 700 }}>Скарга чи пропозиція</span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#54585C" }}>
                    Форма «Напишіть нам», тип «Скарга» —{" "}
                    <a href="#write" style={{ fontWeight: 800 }}>
                      перейти до форми
                    </a>
                  </span>
                </li>
              </ul>
            </div>
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
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>
                Вступ та екскурсії
              </h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                Анкета, співбесіди та запис на екскурсію школою.
              </span>
              <span style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
                <a
                  href="tel:+380503733973"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    minHeight: 44,
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#16181A",
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
                  href="https://t.me/NovopecherskaShoolAdmission"
                  target="_blank"
                  rel="noopener"
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
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                  Написати в Telegram<span className="sr"> (відкриється в новій вкладці)</span>
                </a>
                <a
                  href="https://forms.gle/tfUm17FznhabyiYv7"
                  target="_blank"
                  rel="noopener"
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
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                  Записатися на екскурсію<span className="sr"> (відкриється в новій вкладці)</span>
                </a>
              </span>
            </div>
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
                  <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
                  <path d="M12 17v4" />
                  <path d="M8 21h8" />
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                </svg>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>
                Дистанційна школа
              </h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                Онлайн-навчання для 1–11 класів, екстернат і підготовка до НМТ.
              </span>
              <span style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
                <a
                  href="tel:+380503733973"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    minHeight: 44,
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#16181A",
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
                  href="https://online.novoshkola.com.ua"
                  target="_blank"
                  rel="noopener"
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
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                  online.novoshkola.com.ua<span className="sr"> (відкриється в новій вкладці)</span>
                </a>
                <a
                  href="https://www.instagram.com/novoshkola_online/"
                  target="_blank"
                  rel="noopener"
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  @novoshkola_online<span className="sr"> (відкриється в новій вкладці)</span>
                </a>
              </span>
            </div>
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
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>
                Загальні питання
              </h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                З усіх питань, що не стосуються класного вчителя, — відповідаємо протягом двох робочих днів.
              </span>
              <span style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
                <a
                  href="mailto:info@novoshkola.com.ua"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    minHeight: 44,
                    fontSize: 16,
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
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  info@novoshkola.com.ua
                </a>
                <a
                  href="#write"
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
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                  Написати через форму
                </a>
              </span>
            </div>
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>Вакансії</h3>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5F6366" }}>
                Резюме та анкету кандидата приймаємо протягом усього року.
              </span>
              <span style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
                <a
                  href="mailto:cv@novoshkola.com.ua"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    minHeight: 44,
                    fontSize: 16,
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
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  cv@novoshkola.com.ua
                </a>
                <a
                  href="http://bit.ly/2UIG9db"
                  target="_blank"
                  rel="noopener"
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
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                  Анкета кандидата<span className="sr"> (відкриється в новій вкладці)</span>
                </a>
              </span>
            </div>
          </div>
        </section>
        <ContactForm />
        <section
          className="ct-info"
          aria-label="Корисно знати"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: 16,
          }}
        >
          <div
            style={{
              borderRadius: 28,
              background: "#8CC63F",
              color: "#16181A",
              padding: 30,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 190,
              boxSizing: "border-box",
            }}
          >
            <span style={{ color: "rgba(22,24,26,0.72)" }}>
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
            <h2 style={{ margin: "auto 0 0", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>
              Навчальний день <span className="nw">9:00–18:00</span>
            </h2>
            <span style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(22,24,26,0.78)" }}>
              Учителі зустрічають учнів біля школи з 8:30.
            </span>
          </div>
          <div
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              padding: 30,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 190,
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
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <h2 style={{ margin: "auto 0 0", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>
              Адреса для навігатора
            </h2>
            <span style={{ fontSize: 15, lineHeight: 1.55, color: "#5F6366" }}>Київ, вул. Андрія Верхогляда, 9-Б</span>
            <a
              href="https://goo.gl/maps/Vx7FjUUhnmDor8Tc7"
              target="_blank"
              rel="noopener"
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
              Прокласти маршрут<span className="sr"> (відкриється в новій вкладці)</span>
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
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
          <div
            style={{
              borderRadius: 28,
              background: "#FFFFFF",
              padding: 30,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minHeight: 190,
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
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </span>
            <h2 style={{ margin: "auto 0 0", fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>Соцмережі</h2>
            <span style={{ fontSize: 15, lineHeight: 1.55, color: "#5F6366" }}>
              Анонси Днів відкритих дверей і життя школи щодня.
            </span>
            <span style={{ display: "flex", flexWrap: "wrap", gap: "0 16px" }}>
              <a
                href="https://www.instagram.com/novopecherska_school"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                Instagram<span className="sr"> (відкриється в новій вкладці)</span>
              </a>
              <a
                href="https://www.facebook.com/novoshkola"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                Facebook<span className="sr"> (відкриється в новій вкладці)</span>
              </a>
              <a
                href="https://www.youtube.com/user/novoshkola"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                YouTube<span className="sr"> (відкриється в новій вкладці)</span>
              </a>
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
