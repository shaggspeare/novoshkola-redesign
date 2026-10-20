"use client";

import { useState } from "react";

const T = [
  {
    name: "Григорій Овчаренко",
    role: "Випускник 2021/2022, програма U-\u2060CAN",
    quote:
      "…мені вдалося вступити до двох найкращих університетів Канади: University of Toronto та The University of British Columbia.",
  },
  {
    name: "Кирил Гіловянц",
    role: "Випускник 2019/2020",
    quote:
      "Новопечерська школа навчила мене того, що спільнота, в якій ти перебуваєш під час навчання, відіграє надважливу роль.",
  },
  {
    name: "Оксана Самусєва",
    role: "Мама учнів початкової, середньої школи та КДП",
    quote: "Я вдячна Школі за стійкі цінності, які не на папері, а в серцях і головах професійної команди.",
  },
  {
    name: "Дар’я Місенг",
    role: "Тьютор програми «Лідер у мені»",
    quote:
      "Новопечерська школа — це той сприятливий простір для особистісного зростання, якого нам, дорослим, у свій час так не вистачало.",
  },
  {
    name: "Марина Прокопенко",
    role: "Мама Івана",
    quote:
      "Ми обрали Новопечерську школу, тому що цілком поділяємо її філософію, яка базується на тому, що учні здобувають ґрунтовні академічні знання.",
  },
  {
    name: "Марина Нікіфорчук",
    role: "Мама Володимира",
    quote: "Для нашої родини Новопечерська школа — це відкритий, розумний, розуміючий партнер.",
  },
  {
    name: "Олена Ігнат’єва",
    role: "Мама випускників Марії та Олександра",
    quote: "В Школі прекрасна атмосфера, дуже доброзичлива і дружня. Уроки проходять дуже цікаво, творчо, інтенсивно.",
  },
  {
    name: "Камілла Ружанська",
    role: "Випускниця 2015/2016",
    quote: "Як би я могла назвати своє навчання в Новопечерській школі? Мабуть, другий шанс…",
  },
];
const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w.charAt(0))
    .join("")
    .slice(0, 2);

export default function Voices() {
  const [t, setT] = useState(0);
  const q = T[t];

  return (
    <>
      <section aria-labelledby="voices-title" style={{ marginTop: 56 }}>
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
              Голоси спільноти
            </span>
            <h2
              id="voices-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.4,
                textWrap: "balance",
              }}
            >
              Відгуки випускників, батьків і тьюторів
            </h2>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <div
            style={{
              flex: "1.5 1 560px",
              minWidth: 0,
              borderRadius: 28,
              background: "#5B3FA8",
              color: "#FFFFFF",
              padding: "clamp(28px, 3.6vw, 52px)",
              display: "flex",
              flexDirection: "column",
              gap: 26,
              minHeight: 440,
              boxSizing: "border-box",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.55)" }}>
              <svg
                width="32"
                height="32"
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
            <div aria-live="polite" style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              <blockquote
                style={{
                  margin: 0,
                  fontSize: "clamp(22px, 2.2vw, 30px)",
                  lineHeight: 1.42,
                  fontWeight: 600,
                  letterSpacing: -0.6,
                  textWrap: "pretty",
                }}
              >
                «{q.quote}»
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  {initials(q.name)}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>
                  <span style={{ fontSize: 16, fontWeight: 800 }}>{q.name}</span>
                  <span style={{ fontSize: 14, lineHeight: 1.4, color: "rgba(255,255,255,0.86)" }}>{q.role}</span>
                </span>
              </div>
            </div>
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>
                Відгук {t + 1} з {T.length}
              </span>
              <span style={{ display: "flex", gap: 8 }}>
                <button
                  type="button"
                  aria-label="Попередній відгук"
                  onClick={() => setT((t - 1 + T.length) % T.length)}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(255,255,255,0.45)",
                    background: "transparent",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Наступний відгук"
                  onClick={() => setT((t + 1) % T.length)}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: 0,
                    background: "#FFFFFF",
                    color: "#16181A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </span>
            </div>
          </div>
          <div
            className="h-picker"
            style={{
              flex: "1 1 360px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                padding: "6px 12px 10px",
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: "#5F6366",
              }}
            >
              Оберіть відгук
            </span>
            {T.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setT(i)}
                aria-pressed={i === t}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  width: "100%",
                  minHeight: 52,
                  padding: "8px 12px",
                  border: 0,
                  borderRadius: 16,
                  background: i === t ? "#F1F2EE" : "transparent",
                  color: "#16181A",
                  textAlign: "left",
                  fontFamily: "inherit",
                  cursor: "pointer",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: i === t ? "#5B3FA8" : "#EFEAFA",
                    color: i === t ? "#FFFFFF" : "#5B3FA8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  {initials(p.name)}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                  <span style={{ fontSize: 15, fontWeight: 700 }}>{p.name}</span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "#5F6366",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {p.role}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
