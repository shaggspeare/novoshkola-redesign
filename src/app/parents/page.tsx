import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "Батькам" };

export default function ParentsPage() {
  return (
    <>
      <Breadcrumbs items={[["Батькам"]]} />
      <main id="main" style={{ display: "flex", flexDirection: "column" }}>
        <section aria-labelledby="parents-title" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <div
            style={{
              flex: "1.6 1 620px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "clamp(28px, 4vw, 56px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
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
                color: "#5F6366",
              }}
            >
              <span style={{ width: 26, height: 2, background: "#8CC63F" }} />
              Батькам
            </span>
            <h1
              id="parents-title"
              style={{
                margin: 0,
                fontSize: "clamp(38px, 4.4vw, 60px)",
                lineHeight: 1.03,
                fontWeight: 800,
                letterSpacing: -2.2,
                textWrap: "balance",
              }}
            >
              Усе для батьків&nbsp;— в одному місці
            </h1>
            <p
              style={{ margin: 0, maxWidth: 620, fontSize: 18, lineHeight: 1.65, color: "#54585C", textWrap: "pretty" }}
            >
              Оплата, договір, довідник, розклад дня і контакти — сервіси, якими ви користуєтесь щотижня, зібрані на
              одній сторінці.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 680 }}>
              <label
                htmlFor="parents-search"
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                  color: "#5F6366",
                }}
              >
                Пошук у довіднику
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <input
                  id="parents-search"
                  type="search"
                  placeholder="Харчування, гуртки, картки…"
                  style={{
                    flex: "1 1 260px",
                    minWidth: 0,
                    minHeight: 52,
                    padding: "0 20px",
                    borderRadius: 999,
                    border: "1.5px solid #8A8F93",
                    background: "#FBFBF9",
                    fontFamily: "inherit",
                    fontSize: 15.5,
                    color: "#16181A",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  type="button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    minHeight: 52,
                    padding: "0 24px",
                    borderRadius: 999,
                    border: 0,
                    background: "#16181A",
                    color: "#FFFFFF",
                    fontFamily: "inherit",
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: "pointer",
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
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  Знайти
                </button>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 360px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            <a
              className="tl pa-quick"
              href="https://school-today.com/"
              target="_blank"
              rel="noopener"
              style={{
                flex: "1 1 auto",
                minHeight: 220,
                borderRadius: 28,
                background: "#5B3FA8",
                color: "#FFFFFF",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.14)",
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
                    <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
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
              <span style={{ marginTop: "auto", fontSize: 24, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.7 }}>
                Кабінет <span lang="en">School Today</span>
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.86)" }}>
                Вхід до шкільної системи управління навчанням.<span className="sr"> (відкриється в новій вкладці)</span>
              </span>
            </a>
            <a
              className="tl pa-quick"
              href="https://novoshkola.com.ua/payments"
              target="_blank"
              rel="noopener"
              style={{
                flex: "1 1 auto",
                minHeight: 220,
                borderRadius: 28,
                background: "#8CC63F",
                color: "#16181A",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.5)",
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
              <span style={{ marginTop: "auto", fontSize: 24, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.7 }}>
                Оплатити навчання
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(22,24,26,0.78)" }}>
                Приват24 · комісія сервісу — 1 гривня<span className="sr"> (відкриється в новій вкладці)</span>
              </span>
            </a>
          </div>
        </section>
        <section
          aria-label="Оплата, кабінет і документи"
          style={{
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: 16,
          }}
        >
          <div
            id="pay"
            style={{
              borderRadius: 28,
              background: "#8CC63F",
              color: "#16181A",
              padding: 30,
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
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              Оплата онлайн · Приват24
            </span>
            <h2 style={{ margin: 0, fontSize: 24, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.7 }}>
              Навчання і додаткове харчування
            </h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "rgba(22,24,26,0.78)" }}>
              Комісія сервісу — 1 гривня.
            </p>
            <details className="pd" style={{ borderRadius: 18, background: "rgba(255,255,255,0.55)" }}>
              <summary
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  minHeight: 52,
                  padding: "0 18px",
                  fontSize: 15,
                  fontWeight: 800,
                }}
              >
                Як оплатити через Приват24
                <svg
                  className="pd-chev"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "4px 18px 18px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800 }}>Для всіх</h3>
                  <ol
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>
                      <span
                        style={{
                          flex: "none",
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: "#16181A",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        1
                      </span>
                      Перейдіть за посиланням на сторінку оплати
                    </li>
                    <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>
                      <span
                        style={{
                          flex: "none",
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: "#16181A",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        2
                      </span>
                      Оберіть необхідну послугу
                    </li>
                    <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>
                      <span
                        style={{
                          flex: "none",
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: "#16181A",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        3
                      </span>
                      Заповніть необхідні дані
                    </li>
                  </ol>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800 }}>Для клієнтів ПриватБанку</h3>
                  <ol
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>
                      <span
                        style={{
                          flex: "none",
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: "#16181A",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        1
                      </span>
                      Авторизуйтесь у Приват24
                    </li>
                    <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>
                      <span
                        style={{
                          flex: "none",
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: "#16181A",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        2
                      </span>
                      Натисніть «Мої платежі»
                    </li>
                    <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>
                      <span
                        style={{
                          flex: "none",
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: "#16181A",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        3
                      </span>
                      Введіть у пошуку «Новопечерська Школа»
                    </li>
                    <li style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>
                      <span
                        style={{
                          flex: "none",
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: "#16181A",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        4
                      </span>
                      Оберіть необхідну послугу
                    </li>
                  </ol>
                </div>
              </div>
            </details>
            <a
              className="bp"
              href="https://novoshkola.com.ua/payments"
              target="_blank"
              rel="noopener"
              style={{
                marginTop: "auto",
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                minHeight: 52,
                padding: "0 24px",
                borderRadius: 999,
                background: "#16181A",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              Оплатити через Приват24<span className="sr"> (відкриється в новій вкладці)</span>
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
            id="cabinet"
            style={{
              borderRadius: 28,
              background: "#5B3FA8",
              color: "#FFFFFF",
              padding: 30,
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
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Особистий кабінет
            </span>
            <h2 style={{ margin: 0, fontSize: 24, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.7 }} lang="en">
              School Today
            </h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.86)" }}>
              Входьте зі шкільною електронною адресою — вона відкриває доступ до всіх шкільних систем.
            </p>
            <div
              style={{
                borderRadius: 18,
                background: "rgba(255,255,255,0.1)",
                padding: "16px 18px",
                display: "flex",
                gap: 12,
                fontSize: 14,
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              <span style={{ flex: "none", color: "#E2F3C9", paddingTop: 2 }}>
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
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </span>
              <span>
                Відновлення пароля через сайт — лише для батьків. Учневі пароль відновлює класний вчитель або тьютор.
              </span>
            </div>
            <div
              style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 20px" }}
            >
              <a
                className="bw"
                href="https://school-today.com/"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  minHeight: 52,
                  padding: "0 24px",
                  borderRadius: 999,
                  background: "#FFFFFF",
                  color: "#16181A",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Увійти<span className="sr"> до School Today (відкриється в новій вкладці)</span>
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
              <a
                className="fl"
                href="https://school-today.com/"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Забули пароль?<span className="sr"> (відкриється в новій вкладці)</span>
              </a>
            </div>
          </div>
          <div
            id="contract"
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
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
            </span>
            <h2 style={{ margin: 0, fontSize: 24, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.7 }}>
              Договір приєднання
            </h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#5F6366" }}>
              Публічний договір про надання освітніх послуг і послуг харчування. Приєднання — заявою за формою школи у
              трьох примірниках.
            </p>
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
              <a
                className="bl"
                href="https://novoshkola.com.ua/resources/documents/contract_2026-2027.pdf"
                target="_blank"
                rel="noopener"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  minHeight: 56,
                  padding: "0 16px",
                  borderRadius: 16,
                  background: "#F1F2EE",
                  color: "#16181A",
                  fontSize: 15,
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                <span style={{ flex: "1 1 auto" }}>Договір 2026/2027 (PDF)</span>
                <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 0.8 }}>чинний</span>
                <span className="sr"> (відкриється в новій вкладці)</span>
              </a>
              <a
                className="bl"
                href="https://novoshkola.com.ua/resources/documents/dogivir-2025-2026.pdf"
                target="_blank"
                rel="noopener"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  minHeight: 56,
                  padding: "0 16px",
                  borderRadius: 16,
                  background: "#F1F2EE",
                  color: "#16181A",
                  fontSize: 15,
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                <span style={{ flex: "1 1 auto" }}>Договір 2025/2026 (PDF)</span>
                <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 0.8 }}>архів</span>
                <span className="sr"> (відкриється в новій вкладці)</span>
              </a>
            </div>
          </div>
          <div
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
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
            </span>
            <h2 style={{ margin: 0, fontSize: 24, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.7 }}>
              Повідомити про відсутність
            </h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#5F6366" }}>
              Дитина захворіла, запізнюється чи піде раніше — попередьте школу до початку уроків.
            </p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, fontWeight: 700, color: "#16181A" }}>
              [Канал: School Today / класний вчитель — уточнити]
            </p>
            <a
              href="https://novoshkola.com.ua/uk/handbook-safety"
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
              Заяви на вхід, вихід і відсутність<span className="sr"> (довідник, відкриється в новій вкладці)</span>
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
        </section>
        <section
          id="handbook"
          aria-labelledby="handbook-title"
          style={{
            marginTop: 16,
            borderRadius: 28,
            background: "#FFFFFF",
            padding: "clamp(28px, 3.4vw, 40px)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "8px 24px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                  <path d="M10 2v8l3-3 3 3V2" />
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                </svg>
                Довідник для батьків
              </span>
              <h2
                id="handbook-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(24px, 2.4vw, 30px)",
                  lineHeight: 1.2,
                  fontWeight: 800,
                  letterSpacing: -0.8,
                }}
              >
                11 розділів — відповіді на щоденні запитання
              </h2>
            </div>
            <span style={{ fontSize: 14, lineHeight: 1.5, color: "#5F6366" }}>
              Розділи відкриваються на чинному сайті школи
            </span>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: 8 }}
          >
            <a
              className="bl"
              href="https://novoshkola.com.ua/uk/handbook-philosophy"
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 54,
                padding: "8px 14px",
                borderRadius: 16,
                background: "#F7F8F5",
                color: "#16181A",
                fontSize: 14.5,
                lineHeight: 1.35,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  color: "#5B3FA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                01
              </span>
              <span style={{ flex: "1 1 auto" }}>Філософія</span>
              <span className="sr"> (відкриється в новій вкладці)</span>
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
            <a
              className="bl"
              href="https://novoshkola.com.ua/uk/handbook-approach"
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 54,
                padding: "8px 14px",
                borderRadius: 16,
                background: "#F7F8F5",
                color: "#16181A",
                fontSize: 14.5,
                lineHeight: 1.35,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  color: "#5B3FA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                02
              </span>
              <span style={{ flex: "1 1 auto" }}>Навчальний підхід</span>
              <span className="sr"> (відкриється в новій вкладці)</span>
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
            <a
              className="bl"
              href="https://novoshkola.com.ua/uk/handbook-contact"
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 54,
                padding: "8px 14px",
                borderRadius: 16,
                background: "#F7F8F5",
                color: "#16181A",
                fontSize: 14.5,
                lineHeight: 1.35,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  color: "#5B3FA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                03
              </span>
              <span style={{ flex: "1 1 auto" }}>Зворотний зв’язок</span>
              <span className="sr"> (відкриється в новій вкладці)</span>
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
            <a
              className="bl"
              href="https://novoshkola.com.ua/uk/handbook-organisation"
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 54,
                padding: "8px 14px",
                borderRadius: 16,
                background: "#F7F8F5",
                color: "#16181A",
                fontSize: 14.5,
                lineHeight: 1.35,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  color: "#5B3FA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                04
              </span>
              <span style={{ flex: "1 1 auto" }}>Організація навчального процесу</span>
              <span className="sr"> (відкриється в новій вкладці)</span>
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
            <a
              className="bl"
              href="https://novoshkola.com.ua/uk/handbook-traditions"
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 54,
                padding: "8px 14px",
                borderRadius: 16,
                background: "#F7F8F5",
                color: "#16181A",
                fontSize: 14.5,
                lineHeight: 1.35,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  color: "#5B3FA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                05
              </span>
              <span style={{ flex: "1 1 auto" }}>Шкільні традиції</span>
              <span className="sr"> (відкриється в новій вкладці)</span>
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
            <a
              className="bl"
              href="https://novoshkola.com.ua/uk/handbook-ict"
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 54,
                padding: "8px 14px",
                borderRadius: 16,
                background: "#F7F8F5",
                color: "#16181A",
                fontSize: 14.5,
                lineHeight: 1.35,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  color: "#5B3FA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                06
              </span>
              <span style={{ flex: "1 1 auto" }}>ІКТ</span>
              <span className="sr"> (відкриється в новій вкладці)</span>
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
            <a
              className="bl"
              href="https://novoshkola.com.ua/uk/handbook-extracurriculum"
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 54,
                padding: "8px 14px",
                borderRadius: 16,
                background: "#F7F8F5",
                color: "#16181A",
                fontSize: 14.5,
                lineHeight: 1.35,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  color: "#5B3FA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                07
              </span>
              <span style={{ flex: "1 1 auto" }}>Позаурочна активність</span>
              <span className="sr"> (відкриється в новій вкладці)</span>
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
            <a
              className="bl"
              href="https://novoshkola.com.ua/uk/handbook-nutrition"
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 54,
                padding: "8px 14px",
                borderRadius: 16,
                background: "#F7F8F5",
                color: "#16181A",
                fontSize: 14.5,
                lineHeight: 1.35,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  color: "#5B3FA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                08
              </span>
              <span style={{ flex: "1 1 auto" }}>Харчування</span>
              <span className="sr"> (відкриється в новій вкладці)</span>
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
            <a
              className="bl"
              href="https://novoshkola.com.ua/uk/handbook-medicalservice"
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 54,
                padding: "8px 14px",
                borderRadius: 16,
                background: "#F7F8F5",
                color: "#16181A",
                fontSize: 14.5,
                lineHeight: 1.35,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  color: "#5B3FA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                09
              </span>
              <span style={{ flex: "1 1 auto" }}>Медичне обслуговування</span>
              <span className="sr"> (відкриється в новій вкладці)</span>
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
            <a
              className="bl"
              href="https://novoshkola.com.ua/uk/handbook-safety"
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 54,
                padding: "8px 14px",
                borderRadius: 16,
                background: "#F7F8F5",
                color: "#16181A",
                fontSize: 14.5,
                lineHeight: 1.35,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  color: "#5B3FA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                10
              </span>
              <span style={{ flex: "1 1 auto" }}>Безпека та вихід дітей зі школи</span>
              <span className="sr"> (відкриється в новій вкладці)</span>
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
            <a
              className="bl"
              href="https://novoshkola.com.ua/uk/handbook-info"
              target="_blank"
              rel="noopener"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                minHeight: 54,
                padding: "8px 14px",
                borderRadius: 16,
                background: "#F7F8F5",
                color: "#16181A",
                fontSize: 14.5,
                lineHeight: 1.35,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "#FFFFFF",
                  color: "#5B3FA8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                11
              </span>
              <span style={{ flex: "1 1 auto" }}>Прозорість та інформаційна відкритість</span>
              <span className="sr"> (відкриється в новій вкладці)</span>
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
        </section>
        <section aria-labelledby="daily-title" style={{ marginTop: 56 }}>
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
              Щодня
            </span>
            <h2
              id="daily-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.4,
              }}
            >
              Щоденне життя школи
            </h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", gap: 16 }}
          >
            <div
              id="day"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
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
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: -0.4 }}>Структура дня</h3>
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: "1px solid #EDEEEA" }}>
                  <span
                    style={{
                      flex: "none",
                      minWidth: 92,
                      fontSize: 13.5,
                      fontWeight: 800,
                      color: "#5B3FA8",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    8:30–8:45
                  </span>
                  <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 600 }}>
                    Учитель зустрічає учнів на вулиці
                  </span>
                </div>
                <div style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: "1px solid #EDEEEA" }}>
                  <span
                    style={{
                      flex: "none",
                      minWidth: 92,
                      fontSize: 13.5,
                      fontWeight: 800,
                      color: "#5B3FA8",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    9:00
                  </span>
                  <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 600 }}>Перший урок</span>
                </div>
                <div style={{ display: "flex", gap: 14, padding: "10px 0" }}>
                  <span
                    style={{
                      flex: "none",
                      minWidth: 92,
                      fontSize: 13.5,
                      fontWeight: 800,
                      color: "#5B3FA8",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    16:00–18:00
                  </span>
                  <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 600 }}>
                    Гуртки{" "}
                    <span style={{ fontWeight: 500, color: "#5F6366" }}>
                      (КДП — <span className="nw">14:00–16:00</span>)
                    </span>
                  </span>
                </div>
              </div>
              <div
                style={{
                  borderRadius: 18,
                  background: "#F7F8F5",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
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
                  Батьки забирають учнів
                </span>
                <span
                  style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15, lineHeight: 1.45 }}
                >
                  <span style={{ fontWeight: 600 }}>КДП</span>
                  <span className="nw" style={{ fontWeight: 800 }}>
                    17:45–18:00
                  </span>
                </span>
                <span
                  style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15, lineHeight: 1.45 }}
                >
                  <span style={{ fontWeight: 600 }}>1–4 класи</span>
                  <span style={{ fontWeight: 800, textAlign: "right" }}>о 16:00 або о 17:00</span>
                </span>
                <span
                  style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15, lineHeight: 1.45 }}
                >
                  <span style={{ fontWeight: 600 }}>5–11 класи</span>
                  <span style={{ fontWeight: 800 }}>[уточнити]</span>
                </span>
              </div>
              <a
                href="https://novoshkola.com.ua/uk/handbook-organisation"
                target="_blank"
                rel="noopener"
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  fontSize: 14.5,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                Організація дня — довідник, розділ 04<span className="sr"> (відкриється в новій вкладці)</span>
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
              id="meals"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
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
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: -0.4 }}>Харчування</h3>
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "10px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600 }}>КДП</span>
                  <span style={{ fontSize: 15, fontWeight: 800 }}>4 рази на день</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "10px 0",
                    borderBottom: "1px solid #EDEEEA",
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600 }}>1–4 класи</span>
                  <span style={{ fontSize: 15, fontWeight: 800 }}>3 рази на день</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "10px 0",
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600 }}>5–11 класи</span>
                  <span style={{ fontSize: 15, fontWeight: 800 }}>2 рази на день</span>
                </div>
              </div>
              <div
                style={{
                  borderRadius: 18,
                  background: "#F3F6EE",
                  padding: "14px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 800 }}>3240 грн на місяць</span>
                <span style={{ fontSize: 14, lineHeight: 1.5, color: "#3A3E42" }}>
                  Додатковий сніданок або підвечірок — з 1 класу
                </span>
              </div>
              <a
                href="https://novoshkola.com.ua/uk/handbook-nutrition"
                target="_blank"
                rel="noopener"
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  fontSize: 14.5,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                Меню і розклад харчування — довідник, розділ 08
                <span className="sr"> (відкриється в новій вкладці)</span>
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
              id="safety"
              style={{
                borderRadius: 28,
                background: "#16181A",
                color: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
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
                    background: "rgba(255,255,255,0.1)",
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
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: -0.4 }}>Безпека</h3>
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    fontSize: 15,
                    lineHeight: 1.5,
                  }}
                >
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
                  Вхід і вихід — лише за картками доступу
                </span>
                <span
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    fontSize: 15,
                    lineHeight: 1.5,
                  }}
                >
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
                  <span>
                    Заяви на вхід, вихід і відсутність —{" "}
                    <span style={{ color: "#C9CDD1" }}>[канал: School Today / класний вчитель — уточнити]</span>
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    fontSize: 15,
                    lineHeight: 1.5,
                  }}
                >
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
                  Батьки на території — лише у свята та під час заходів школи
                </span>
                <span style={{ display: "flex", gap: 12, padding: "10px 0 0", fontSize: 15, lineHeight: 1.5 }}>
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
                  Сертифіковане укриття 500&nbsp;м² — світло, тепло, інтернет
                </span>
              </div>
              <a
                href="https://novoshkola.com.ua/uk/handbook-safety"
                target="_blank"
                rel="noopener"
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  fontSize: 14.5,
                  fontWeight: 800,
                  color: "#FFFFFF",
                }}
              >
                Безпека та вихід дітей — довідник, розділ 10<span className="sr"> (відкриється в новій вкладці)</span>
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
              id="contact"
              className="pa-wide"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
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
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                </span>
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: -0.4 }}>
                  Куди звернутися з питанням
                </h3>
              </span>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
                  gap: "0 28px",
                }}
              >
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
                    </a>{" "}
                    ·{" "}
                    <a href="tel:+380443590750" style={{ fontWeight: 800, color: "#16181A" }}>
                      +38 (044) 359-07-50
                    </a>
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
                  <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 700 }}>Скарга чи пропозиція</span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#54585C" }}>
                    Форма «Напишіть нам», тип «Скарга» —{" "}
                    <Link href="/contacts#write" style={{ fontWeight: 800 }}>
                      перейти до форми
                    </Link>
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
                  <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 700 }}>Інші питання</span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#54585C" }}>
                    <a href="mailto:info@novoshkola.com.ua" style={{ fontWeight: 800 }}>
                      info@novoshkola.com.ua
                    </a>{" "}
                    — відповідаємо протягом двох робочих днів
                  </span>
                </li>
              </ul>
              <span style={{ marginTop: 4, fontSize: 14, lineHeight: 1.5, color: "#5F6366" }}>
                Батьківські зустрічі, e-mail- і SMS-розсилки — за графіком класу.
              </span>
            </div>
            <div
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
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
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: -0.4 }}>
                  Медичне обслуговування
                </h3>
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: "#3A3E42" }}>
                Повноцінний медичний блок у школі.
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: "#3A3E42" }}>
                Щорічний медичний огляд включено у вартість навчання.
              </span>
              <a
                href="https://novoshkola.com.ua/uk/handbook-medicalservice"
                target="_blank"
                rel="noopener"
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  fontSize: 14.5,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                Графік медблоку — довідник, розділ 09<span className="sr"> (відкриється в новій вкладці)</span>
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
                gap: 10,
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
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <line x1="12" x2="12.01" y1="18" y2="18" />
                  </svg>
                </span>
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: -0.4 }}>ІКТ і планшети</h3>
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: "#3A3E42" }}>
                Персональний планшет у користування — власність школи, включено у вартість формату «Наживо».
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: "#3A3E42" }}>
                Інтерактивні дошки — в кожному класі.
              </span>
              <a
                href="https://novoshkola.com.ua/uk/handbook-ict"
                target="_blank"
                rel="noopener"
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 44,
                  fontSize: 14.5,
                  fontWeight: 800,
                  color: "#5B3FA8",
                }}
              >
                ІКТ — довідник, розділ 06<span className="sr"> (відкриється в новій вкладці)</span>
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
            <Link
              className="tl"
              href="/programs#clubs"
              style={{
                borderRadius: 28,
                background: "#8CC63F",
                color: "#16181A",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 240,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    style={{
                      flex: "none",
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.5)",
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
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </svg>
                  </span>
                  <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: -0.4 }}>Гуртки і секції</h3>
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
              <span style={{ marginTop: "auto", fontSize: 30, lineHeight: 1.1, fontWeight: 800, letterSpacing: -1 }}>
                16:00–18:00
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(22,24,26,0.78)" }}>
                Для КДП — <span className="nw">14:00–16:00</span>. Включено у вартість формату «Наживо».
              </span>
            </Link>
            <Link
              className="tl"
              href="/programs#online"
              style={{
                borderRadius: 28,
                background: "#FFFFFF",
                color: "#16181A",
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 240,
                boxSizing: "border-box",
              }}
            >
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
                      <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
                      <path d="M12 17v4" />
                      <path d="M8 21h8" />
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                    </svg>
                  </span>
                  <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: -0.4 }}>Дистанційна школа</h3>
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
              <span style={{ marginTop: "auto", fontSize: 15, lineHeight: 1.55, color: "#5F6366" }}>
                1–11 класи онлайн, екстернат і підготовка до НМТ.
              </span>
            </Link>
          </div>
        </section>
        <section
          aria-labelledby="traditions-title"
          style={{
            marginTop: 16,
            borderRadius: 28,
            background: "#FFFFFF",
            padding: "clamp(28px, 3.6vw, 48px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px 48px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ flex: "1 1 320px", minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
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
              Шкільні традиції
            </span>
            <h2
              id="traditions-title"
              style={{
                margin: 0,
                fontSize: "clamp(26px, 2.6vw, 34px)",
                lineHeight: 1.12,
                fontWeight: 800,
                letterSpacing: -1.1,
                textWrap: "balance",
              }}
            >
              Те, що робить нас Новопечерською родиною
            </h2>
          </div>
          <ul
            style={{
              flex: "2 1 560px",
              minWidth: 0,
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
              gap: "10px 28px",
              alignContent: "start",
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              Гімн України щопонеділка
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              День народження школи — 1 квітня
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              День Лідерства
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              Дні вільної форми
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              Дні народження
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              Великий екран
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              Привітання вчителів
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              Перший дзвоник і Play Day
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              Туристичний зліт
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              W5H — [пояснення від школи]
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              День випускника
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              Прощання з випускниками
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                fontSize: 15,
                lineHeight: 1.45,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "none",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#8CC63F",
                  transform: "translateY(-2px)",
                }}
              />
              Турбота про довкілля
            </li>
          </ul>
        </section>
        <section
          aria-labelledby="help-title"
          style={{
            marginTop: 16,
            borderRadius: 28,
            background: "#16181A",
            color: "#FFFFFF",
            padding: "clamp(28px, 4vw, 56px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px 48px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ flex: "1 1 480px", minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            <h2
              id="help-title"
              style={{
                margin: 0,
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.4,
              }}
            >
              Не знайшли відповідь?
            </h2>
            <p style={{ margin: 0, maxWidth: 620, fontSize: 17, lineHeight: 1.6, color: "#9AA0A4" }}>
              Напишіть нам — відповідаємо протягом двох робочих днів. З питань класу звертайтеся до класного вчителя.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              className="bg2"
              href="/contacts#write"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                minHeight: 60,
                padding: "0 28px",
                borderRadius: 999,
                background: "#8CC63F",
                color: "#16181A",
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a
              className="bo"
              href="tel:+380501939393"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                minHeight: 60,
                padding: "8px 26px",
                borderRadius: 999,
                border: "1.5px solid rgba(255,255,255,0.4)",
                color: "#FFFFFF",
                boxSizing: "border-box",
                whiteSpace: "normal",
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 15, fontWeight: 700 }}>Подзвонити на рецепцію</span>
                <span className="nw" style={{ fontSize: 13.5, fontWeight: 600, color: "#C9CDD1" }}>
                  +38 (050) 193-93-93
                </span>
              </span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
