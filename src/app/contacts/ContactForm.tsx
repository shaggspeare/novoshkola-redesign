"use client";

import { useRef, useState, type FormEvent } from "react";
import { flushSync } from "react-dom";

const TYPES = ["Запит", "Побажання", "Відгук", "Скарга"];
const OK = "#8A8F93";
const BAD = "#C8161C";
const FIELDS = ["name", "email", "message"] as const;
type Errors = Partial<Record<(typeof FIELDS)[number], boolean>>;

export default function ContactForm() {
  const [type, setType] = useState(0);
  const [errs, setErrs] = useState<Errors>({});
  const [sentTo, setSentTo] = useState<string | null>(null);
  const sentTitle = useRef<HTMLHeadingElement>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const found: Errors = {
      name: !get("name"),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")),
      message: !get("message"),
    };
    const first = FIELDS.find((k) => found[k]);
    // render the errors first so the focused field is announced with its message
    flushSync(() => setErrs(found));
    if (first) {
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    // ponytail: no backend yet — the design only shows the success state; send via a Server Action here
    flushSync(() => setSentTo(get("email")));
    sentTitle.current?.focus();
  };

  return (
    <>
      <section
        id="write"
        aria-labelledby="form-title"
        style={{ marginTop: 56, display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start" }}
      >
        <div
          style={{
            flex: "1 1 360px",
            minWidth: 0,
            borderRadius: 28,
            background: "#5B3FA8",
            color: "#FFFFFF",
            padding: "clamp(28px, 3.4vw, 48px)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            boxSizing: "border-box",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.6)" }}>
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
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </span>
          <h2
            id="form-title"
            style={{
              margin: 0,
              fontSize: "clamp(30px, 3vw, 38px)",
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: -1.3,
            }}
          >
            Напишіть нам
          </h2>
          <p
            style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: "rgba(255,255,255,0.86)", textWrap: "pretty" }}
          >
            Оберіть категорію та тип звернення — так лист одразу потрапить до потрібного відділу.
          </p>
          <span
            style={{
              display: "flex",
              gap: 12,
              paddingTop: 18,
              borderTop: "1px solid rgba(255,255,255,0.18)",
              fontSize: 14.5,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.86)",
            }}
          >
            <span style={{ flex: "none", paddingTop: 1 }}>
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
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </span>
            Відповідаємо протягом двох робочих днів. Термінове питання — телефонуйте на рецепцію.
          </span>
        </div>
        <div
          style={{
            flex: "1.6 1 600px",
            minWidth: 0,
            borderRadius: 28,
            background: "#FFFFFF",
            padding: "clamp(24px, 3.4vw, 48px)",
            boxSizing: "border-box",
          }}
        >
          {sentTo === null ? (
            <form
              noValidate
              aria-labelledby="form-title"
              onSubmit={submit}
              style={{ display: "flex", flexDirection: "column", gap: 22 }}
            >
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "#5F6366" }}>
                Поля з <span style={{ color: "#C8161C", fontWeight: 800 }}>*</span> обов’язкові
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  <label
                    htmlFor="f-name"
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.2,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    Ім’я{" "}
                    <span aria-hidden="true" style={{ color: "#C8161C" }}>
                      *
                    </span>
                  </label>
                  <input
                    id="f-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errs.name}
                    aria-describedby={errs.name ? "f-name-err" : undefined}
                    placeholder="Ваше ім’я та прізвище"
                    style={{
                      minHeight: 52,
                      padding: "0 18px",
                      borderRadius: 16,
                      border: `1.5px solid ${errs.name ? BAD : OK}`,
                      background: "#FBFBF9",
                      fontFamily: "inherit",
                      fontSize: 15.5,
                      color: "#16181A",
                      boxSizing: "border-box",
                    }}
                  />
                  {errs.name ? (
                    <span
                      id="f-name-err"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13.5,
                        lineHeight: 1.4,
                        fontWeight: 600,
                        color: "#C8161C",
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
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="12" />
                        <line x1="12" x2="12.01" y1="16" y2="16" />
                      </svg>
                      Вкажіть ваше ім’я
                    </span>
                  ) : null}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  <label
                    htmlFor="f-email"
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.2,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    E-mail{" "}
                    <span aria-hidden="true" style={{ color: "#C8161C" }}>
                      *
                    </span>
                  </label>
                  <input
                    id="f-email"
                    type="text"
                    inputMode="email"
                    name="email"
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={!!errs.email}
                    aria-describedby={errs.email ? "f-email-err" : undefined}
                    placeholder="name@example.com"
                    style={{
                      minHeight: 52,
                      padding: "0 18px",
                      borderRadius: 16,
                      border: `1.5px solid ${errs.email ? BAD : OK}`,
                      background: "#FBFBF9",
                      fontFamily: "inherit",
                      fontSize: 15.5,
                      color: "#16181A",
                      boxSizing: "border-box",
                    }}
                  />
                  {errs.email ? (
                    <span
                      id="f-email-err"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 13.5,
                        lineHeight: 1.4,
                        fontWeight: 600,
                        color: "#C8161C",
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
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="12" />
                        <line x1="12" x2="12.01" y1="16" y2="16" />
                      </svg>
                      Вкажіть e-mail у форматі name@example.com
                    </span>
                  ) : null}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  <label
                    htmlFor="f-phone"
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.2,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    Телефон (необов’язково)
                  </label>
                  <input
                    id="f-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+38 (0__) ___-__-__"
                    style={{
                      minHeight: 52,
                      padding: "0 18px",
                      borderRadius: 16,
                      border: "1.5px solid #8A8F93",
                      background: "#FBFBF9",
                      fontFamily: "inherit",
                      fontSize: 15.5,
                      color: "#16181A",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  <label
                    htmlFor="f-category"
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.2,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    Категорія повідомлення
                  </label>
                  <span style={{ position: "relative", display: "block" }}>
                    <select
                      id="f-category"
                      name="category"
                      style={{
                        width: "100%",
                        minHeight: 52,
                        padding: "0 46px 0 18px",
                        borderRadius: 16,
                        border: "1.5px solid #8A8F93",
                        background: "#FBFBF9",
                        fontFamily: "inherit",
                        fontSize: 15.5,
                        fontWeight: 600,
                        color: "#16181A",
                        appearance: "none",
                        WebkitAppearance: "none",
                        cursor: "pointer",
                        boxSizing: "border-box",
                      }}
                    >
                      <option>Загальні питання</option>
                      <option>Вступ</option>
                      <option>Гуртки</option>
                      <option>Заходи</option>
                      <option>ІКТ</option>
                      <option>Навчання</option>
                      <option>Приватні питання</option>
                      <option>Технічні питання</option>
                      <option>Фінансові питання</option>
                      <option>Харчування</option>
                      <option>Довідка</option>
                    </select>
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        right: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                        color: "#5F6366",
                        display: "flex",
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
              <fieldset style={{ margin: 0, padding: 0, border: 0, minWidth: 0 }}>
                <legend
                  style={{
                    padding: 0,
                    margin: "0 0 11px",
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    color: "#5F6366",
                  }}
                >
                  Тип звернення
                </legend>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                  {TYPES.map((label, i) => (
                    <label
                      key={label}
                      className="chip"
                      style={{
                        position: "relative",
                        display: "inline-flex",
                        alignItems: "center",
                        minHeight: 44,
                        padding: "0 22px",
                        borderRadius: 999,
                        border: `1.5px solid ${i === type ? "#16181A" : OK}`,
                        background: i === type ? "#16181A" : "#FFFFFF",
                        color: i === type ? "#FFFFFF" : "#3A3E42",
                        fontSize: 14.5,
                        fontWeight: 700,
                        cursor: "pointer",
                        boxSizing: "border-box",
                      }}
                    >
                      <input
                        className="sr"
                        type="radio"
                        name="type"
                        value={label}
                        checked={i === type}
                        onChange={() => setType(i)}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <label
                  htmlFor="f-message"
                  style={{
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    color: "#5F6366",
                  }}
                >
                  Повідомлення{" "}
                  <span aria-hidden="true" style={{ color: "#C8161C" }}>
                    *
                  </span>
                </label>
                <textarea
                  id="f-message"
                  name="message"
                  rows={5}
                  aria-required="true"
                  aria-invalid={!!errs.message}
                  aria-describedby={errs.message ? "f-message-err" : undefined}
                  placeholder="Опишіть ваше запитання"
                  style={{
                    padding: "15px 18px",
                    borderRadius: 16,
                    border: `1.5px solid ${errs.message ? BAD : OK}`,
                    background: "#FBFBF9",
                    fontFamily: "inherit",
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: "#16181A",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
                {errs.message ? (
                  <span
                    id="f-message-err"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13.5,
                      lineHeight: 1.4,
                      fontWeight: 600,
                      color: "#C8161C",
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
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                    Напишіть ваше запитання
                  </span>
                ) : null}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px 24px",
                }}
              >
                <p style={{ margin: 0, maxWidth: 460, fontSize: 13.5, lineHeight: 1.6, color: "#5F6366" }}>
                  Натискаючи «Надіслати», ви погоджуєтеся на обробку персональних даних відповідно до{" "}
                  <a href="#" style={{ fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>
                    Політики конфіденційності
                  </a>{" "}
                  ТОВ «Новопечерська школа». [URL політики]
                </p>
                <button
                  className="bp"
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    minHeight: 54,
                    padding: "0 32px",
                    borderRadius: 999,
                    border: 0,
                    background: "#5B3FA8",
                    color: "#FFFFFF",
                    fontFamily: "inherit",
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Надіслати
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
                </button>
              </div>
            </form>
          ) : null}
          {sentTo !== null ? (
            <div
              role="status"
              style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16, padding: "40px 0" }}
            >
              <span
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#F3F6EE",
                  color: "#4E7A1F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="30"
                  height="30"
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
              <h3
                ref={sentTitle}
                id="sent-title"
                tabIndex={-1}
                style={{ margin: 0, fontSize: 30, lineHeight: 1.15, fontWeight: 800, letterSpacing: -1 }}
              >
                Дякуємо! Ми отримали ваше звернення
              </h3>
              <p style={{ margin: 0, maxWidth: 520, fontSize: 16, lineHeight: 1.6, color: "#54585C" }}>
                Відповімо на {sentTo} протягом двох робочих днів. Термінове питання — телефонуйте на рецепцію:{" "}
                <a href="tel:+380501939393" style={{ fontWeight: 800, color: "#16181A" }}>
                  +38 (050) 193-93-93
                </a>
                .
              </p>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "#5F6366" }}>Тип звернення: {TYPES[type]}</p>
              <button
                className="bl"
                type="button"
                onClick={() => {
                  setSentTo(null);
                  setErrs({});
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
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
                Надіслати ще одне
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
