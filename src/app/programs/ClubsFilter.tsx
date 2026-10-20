"use client";

import { useRef, useState } from "react";

const CAT = {
  art: { label: "Творчі", dot: "#5B3FA8" },
  lang: { label: "Мови й дебати", dot: "#E31E24" },
  tech: { label: "Технології", dot: "#16181A" },
  sport: { label: "Спорт", dot: "#8CC63F" },
};
type Cat = keyof typeof CAT;
/* [назва, від класу, до класу, напрям, англійська назва] */
const R: [name: string, from: number, to: number, cat: Cat, en?: boolean][] = [
  ["Валяння", 1, 11, "art"],
  ["Живопис", 1, 11, "art"],
  ["Кулінарія", 1, 11, "art"],
  ["Настільні ігри", 1, 11, "art"],
  ["Гончарство", 1, 4, "art"],
  ["Акторська майстерність", 1, 4, "art"],
  ["Театральна імпровізація", 1, 4, "art"],
  ["Паперові фантазії", 1, 4, "art"],
  ["Бери й роби", 1, 4, "art"],
  ["HandMade", 1, 4, "art", true],
  ["Fashion Studio", 1, 4, "art", true],
  ["Бісероплетіння", 1, 4, "art"],
  ["Художня фотографія", 5, 11, "art"],
  ["Вокал", 5, 11, "art"],
  ["Гітара", 5, 11, "art"],
  ["Speaking Club", 1, 4, "lang", true],
  ["Літературний клуб", 5, 11, "lang"],
  ["Дебати", 8, 11, "lang"],
  ["3D-ручка", 3, 4, "tech"],
  ["Технокартон", 3, 4, "tech"],
  ["Моделювання", 5, 11, "tech"],
  ["Робототехніка (LEGO Mindstorms EV3)", 5, 6, "tech"],
  ["Туризм", 2, 4, "sport"],
  ["Баскетбол", 2, 11, "sport"],
  ["Wrestling", 1, 4, "sport", true],
  ["Moving Games", 1, 4, "sport", true],
  ["Сучасні танці", 1, 4, "sport"],
  ["Бальні танці", 1, 4, "sport"],
  ["Рухливі ігри", 1, 4, "sport"],
  ["Футбол", 1, 4, "sport"],
  ["Художня гімнастика", 1, 4, "sport"],
  ["Черлідинг", 1, 4, "sport"],
  ["Настільний теніс", 3, 11, "sport"],
  ["GYM", 5, 11, "sport", true],
  ["Бадмінтон", 5, 11, "sport"],
  ["Хіп-хоп", 3, 4, "sport"],
  ["Шахи", 1, 11, "sport"],
];
const TABS: [Cat | "all", string][] = [
  ["all", "Усі"],
  ["art", "Творчі"],
  ["lang", "Мови й дебати"],
  ["tech", "Технології"],
  ["sport", "Спорт"],
];
const GRADES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const plural = (n: number) => {
  const a = n % 10,
    b = n % 100;
  if (a === 1 && b !== 11) return "гурток";
  if (a >= 2 && a <= 4 && (b < 12 || b > 14)) return "гуртки";
  return "гуртків";
};

/* Гуртки: фільтр за класом (від ≤ клас ≤ до) і напрямом, сортування А–Я */
export default function ClubsFilter() {
  const [cf, setCf] = useState<Cat | "all">("all");
  const [g, setG] = useState(0);
  const [more, setMore] = useState(false);
  const allTab = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const byGrade = R.filter((r) => g === 0 || (r[1] <= g && g <= r[2]));
  const list = byGrade.filter((r) => cf === "all" || r[3] === cf).sort((a, b) => a[0].localeCompare(b[0], "uk"));
  let counter = `Показано ${list.length} ${plural(list.length)}`;
  if (g > 0) counter += ` для ${g} класу`;
  if (cf !== "all") counter += ` · ${CAT[cf].label}`;
  const collapsed = !more && list.length > 12;
  const pickGrade = (n: number) => {
    setG(n);
    setMore(false);
  };

  return (
    <>
      <section id="clubs" aria-labelledby="clubs-title" style={{ marginTop: 56 }}>
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
              Гуртки і секції
            </span>
            <h2
              id="clubs-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.4,
                textWrap: "balance",
              }}
            >
              Від гончарства до робототехніки
            </h2>
          </div>
        </div>
        <div
          className="pad-m"
          style={{
            borderRadius: 28,
            background: "#FFFFFF",
            padding: "clamp(24px, 3vw, 40px)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              className="only-d"
              role="group"
              aria-label="Клас"
              style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 }}
            >
              <span
                aria-hidden="true"
                style={{
                  marginRight: 6,
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#5F6366",
                }}
              >
                Клас
              </span>
              {GRADES.map((n) => (
                <button
                  key={n}
                  type="button"
                  className="chipb"
                  onClick={() => pickGrade(n)}
                  aria-pressed={n === g}
                  aria-label={n === 0 ? "Усі класи" : `${n} клас`}
                  aria-controls="clubs-list"
                  style={{
                    minWidth: 44,
                    minHeight: 44,
                    padding: "0 14px",
                    borderRadius: 999,
                    border: `1.5px solid ${n === g ? "#16181A" : "#E3E5E0"}`,
                    background: n === g ? "#16181A" : "#FFFFFF",
                    color: n === g ? "#FFFFFF" : "#3A3E42",
                    fontFamily: "inherit",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {n === 0 ? "Усі класи" : n}
                </button>
              ))}
            </div>
            <label className="only-m" style={{ flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#5F6366",
                }}
              >
                Клас
              </span>
              <select
                onChange={(e) => pickGrade(Number(e.target.value))}
                value={g}
                aria-controls="clubs-list"
                style={{
                  minHeight: 48,
                  padding: "0 16px",
                  borderRadius: 16,
                  border: "1.5px solid #8A8F93",
                  background: "#FFFFFF",
                  fontFamily: "inherit",
                  fontSize: 15.5,
                  fontWeight: 600,
                  color: "#16181A",
                }}
              >
                <option value="0">Усі класи</option>
                <option value="1">1 клас</option>
                <option value="2">2 клас</option>
                <option value="3">3 клас</option>
                <option value="4">4 клас</option>
                <option value="5">5 клас</option>
                <option value="6">6 клас</option>
                <option value="7">7 клас</option>
                <option value="8">8 клас</option>
                <option value="9">9 клас</option>
                <option value="10">10 клас</option>
                <option value="11">11 клас</option>
              </select>
            </label>
            <div role="group" aria-label="Напрям гуртків" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {TABS.map(([key, label]) => (
                <button
                  key={key}
                  ref={key === "all" ? allTab : undefined}
                  type="button"
                  className="chipb"
                  id={`cat-${key}`}
                  onClick={() => {
                    setCf(key);
                    setMore(false);
                  }}
                  aria-pressed={key === cf}
                  aria-controls="clubs-list"
                  style={{
                    minHeight: 44,
                    padding: "0 18px",
                    borderRadius: 999,
                    border: `1.5px solid ${key === cf ? "#16181A" : "#E3E5E0"}`,
                    background: key === cf ? "#16181A" : "#FFFFFF",
                    color: key === cf ? "#FFFFFF" : "#3A3E42",
                    fontFamily: "inherit",
                    fontSize: 14.5,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {label} · {key === "all" ? byGrade.length : byGrade.filter((r) => r[3] === key).length}
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px 24px",
              paddingTop: 16,
              borderTop: "1px solid #EDEEEA",
            }}
          >
            <p aria-live="polite" style={{ margin: 0, fontSize: 15.5, fontWeight: 800 }}>
              {counter}
            </p>
            <p
              style={{
                margin: 0,
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                maxWidth: 780,
                fontSize: 14,
                lineHeight: 1.55,
                fontWeight: 600,
                color: "#54585C",
              }}
            >
              <span style={{ flex: "none", color: "#5B3FA8", paddingTop: 1 }}>
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
              <span>
                Гуртки — після уроків, до 18:00: у 1–4 класах з <span className="nw">16:10</span>, у 5–11 класах
                (діяльність за вибором) — з <span className="nw">16:15</span>. Для КДП гуртки — з{" "}
                <span className="nw">14:15</span>, за розкладом групи. Усі гуртки включені у вартість формату «Наживо».
              </span>
            </p>
          </div>
          <ul
            id="clubs-list"
            role="list"
            ref={listRef}
            tabIndex={-1}
            data-collapsed={collapsed}
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
              gap: 10,
            }}
          >
            {list.map(([name, from, to, cat, en]) => (
              <li
                key={name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  minHeight: 58,
                  padding: "10px 12px 10px 16px",
                  borderRadius: 16,
                  background: "#F7F8F5",
                  boxSizing: "border-box",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ flex: "none", width: 10, height: 10, borderRadius: "50%", background: CAT[cat].dot }}
                />
                <span style={{ flex: "1 1 auto", minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                  <span lang={en ? "en" : "uk"} style={{ fontSize: 15, lineHeight: 1.3, fontWeight: 700 }}>
                    {name}
                  </span>
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: "#5F6366" }}>{CAT[cat].label}</span>
                </span>
                <span
                  style={{
                    flex: "none",
                    padding: "5px 10px",
                    borderRadius: 999,
                    background: "#FFFFFF",
                    fontSize: 12.5,
                    fontWeight: 800,
                    color: "#3A3E42",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {from === to ? from : `${from}–${to}`} кл.
                </span>
              </li>
            ))}
          </ul>
          {list.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 14,
                padding: 28,
                borderRadius: 20,
                background: "#F7F8F5",
              }}
            >
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, fontWeight: 700 }}>
                {g > 0 && cf !== "all"
                  ? `Для ${g} класу в напрямі «${CAT[cf].label}» гуртків немає`
                  : "Гуртків за цими умовами немає"}
              </p>
              <button
                type="button"
                className="bl"
                onClick={() => {
                  setCf("all");
                  allTab.current?.focus();
                }}
                style={{
                  minHeight: 44,
                  padding: "0 20px",
                  borderRadius: 999,
                  border: "1.5px solid #E3E5E0",
                  background: "#FFFFFF",
                  color: "#16181A",
                  fontFamily: "inherit",
                  fontSize: 14.5,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Показати всі напрями
              </button>
            </div>
          ) : null}
          {collapsed ? (
            <button
              type="button"
              className="bl only-m"
              onClick={() => {
                setMore(true);
                listRef.current?.focus();
              }}
              aria-controls="clubs-list"
              style={{
                alignSelf: "flex-start",
                alignItems: "center",
                minHeight: 44,
                padding: "0 20px",
                borderRadius: 999,
                border: "1.5px solid #E3E5E0",
                background: "#FFFFFF",
                color: "#16181A",
                fontFamily: "inherit",
                fontSize: 14.5,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Показати всі ({list.length})
            </button>
          ) : null}
        </div>
      </section>
    </>
  );
}
