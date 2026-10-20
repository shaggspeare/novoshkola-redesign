"use client";

import { useState } from "react";

const Q: [question: string, answer: string][] = [
  ["Скільки років має бути дитині для вступу до 1 класу?", "[6 повних років на 1 вересня 2027 р. — уточнити]"],
  [
    "До якого терміну подати анкету на 2027/2028?",
    "[До … 2027 р. — уточнити]. Анкета подається на певний навчальний рік, кількість місць обмежена.",
  ],
  [
    "Чи потрібно відвідати екскурсію до того, як заповнити анкету?",
    "[Екскурсія не обов’язкова для подання анкети — уточнити]. Записатися на екскурсію можна онлайн-формою або за телефоном +38 (050) 373-39-73.",
  ],
  [
    "Чи можна приєднатися посеред навчального року?",
    "Так, за наявності вільних місць. Заяву про приєднання до договору та оплату рахунку потрібно оформити безпосередньо перед виходом на навчання.",
  ],
  [
    "Скільки коштує вступ посеред року?",
    "[Вартість при вступі посеред року — уточнити]. Уточніть наявність місць і умови: +38 (050) 373-39-73.",
  ],
  [
    "Що оцінюють на співбесіді?",
    "КДП і 1 клас — готовність до навчання: групові ігри та спілкування з педагогом і психологом. 2–4 класи — математика, українська й англійська мови; 5–10 класи — математика, українська мова та література, англійська мова. Академічна підготовка — один із критеріїв прийому, але не вирішальний.",
  ],
  [
    "Чи обов’язково приходити обом батькам?",
    "Так, якщо родина повна. Участь родини в навчально-виховному процесі відіграє значну роль, тому на співбесіді ми очікуємо обох батьків.",
  ],
  [
    "Ми вже заповнювали анкету минулого року. Що робити?",
    "Анкета подається на певний навчальний рік. Якщо ви не приєдналися протягом вказаного року, оновіть анкету, зазначивши новий навчальний рік.",
  ],
];

export default function Faq() {
  // independent accordion: any number of answers can be open
  const [open, setOpen] = useState(() => Q.map(() => false));

  return (
    <>
      <section id="faq" aria-labelledby="faq-title" style={{ marginTop: 56 }}>
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
              Запитання і відповіді
            </span>
            <h2
              id="faq-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.4,
                textWrap: "balance",
              }}
            >
              Часті запитання про вступ
            </h2>
          </div>
        </div>
        <div
          style={{
            borderRadius: 28,
            background: "#FFFFFF",
            padding: "14px clamp(20px, 2.6vw, 38px) 20px",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          {Q.map(([question, answer], i) => (
            <div key={i} style={{ borderBottom: "1px solid #EDEEEA" }}>
              <h3 style={{ margin: 0, fontSize: 17, lineHeight: 1.4, fontWeight: 700 }}>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={!!open[i]}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen((o) => o.map((v, k) => (k === i ? !v : v)))}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 20,
                    minHeight: 68,
                    padding: "16px 0",
                    border: 0,
                    background: "transparent",
                    color: "#16181A",
                    textAlign: "left",
                    fontFamily: "inherit",
                    fontSize: 17,
                    lineHeight: 1.4,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  <span>{question}</span>
                  <span
                    aria-hidden="true"
                    style={{
                      flex: "none",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: open[i] ? "#16181A" : "#F1F2EE",
                      color: open[i] ? "#FFFFFF" : "#16181A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: `rotate(${open[i] ? 45 : 0}deg)`,
                      transition: "transform .2s ease",
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
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!open[i]}>
                <p
                  style={{
                    margin: 0,
                    maxWidth: 820,
                    padding: "0 56px 22px 0",
                    fontSize: 15.5,
                    lineHeight: 1.65,
                    color: "#54585C",
                    textWrap: "pretty",
                  }}
                >
                  {answer}
                </p>
              </div>
            </div>
          ))}
          <p style={{ margin: 0, padding: "18px 0 4px", fontSize: 15, lineHeight: 1.6, color: "#54585C" }}>
            Не знайшли відповідь? Напишіть на{" "}
            <a
              className="lk"
              href="mailto:info@novoshkola.com.ua"
              style={{ display: "inline-flex", alignItems: "center", minHeight: 44, fontWeight: 800, color: "#5B3FA8" }}
            >
              info@novoshkola.com.ua
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
