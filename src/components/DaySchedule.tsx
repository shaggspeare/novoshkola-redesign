"use client";

import { useRef, useState, type KeyboardEvent } from "react";

/* Розклад дня — одне джерело для головної та «Навчання» */
const C = { lesson: "#5B3FA8", meal: "#8CC63F", club: "#E31E24", rest: "#D5D8D2", gap: "transparent" };
type Row = [from: string, to: string, kind: keyof typeof C, label: string];

const DAYS: Record<Day, { title: string; note: string; club: string; pickup: string; rows: Row[] }> = {
  k: {
    title: "Дошкільна підготовка (КДП), 4–5 років",
    note: "Ранкове коло, робота в навчальних осередках, денний відпочинок і чотириразове харчування.",
    club: "Гуртки — з 14:15 (за розкладом групи)",
    pickup: "Забрати дитину: 17:45–18:00",
    rows: [
      ["8:30", "9:00", "rest", "Зустріч на вулиці й підготовка до дня"],
      ["9:00", "12:00", "lesson", "Активності, робота в осередках, прогулянка"],
      ["12:00", "12:30", "meal", "Обід"],
      ["12:30", "13:30", "rest", "Година відпочинку"],
      ["13:30", "14:00", "meal", "Активності на вулиці"],
      ["14:00", "14:15", "gap", ""],
      ["14:15", "15:00", "club", "Гуртки"],
      ["15:00", "15:30", "meal", "Підвечірок"],
      ["15:30", "17:00", "lesson", "Активності, проєкти, прогулянка"],
      ["17:00", "17:30", "meal", "Вечеря"],
      ["17:30", "17:45", "gap", ""],
      ["17:45", "18:00", "rest", "Діти йдуть додому"],
    ],
  },
  p: {
    title: "Початкова школа, 1–4 класи",
    note: "Шість уроків по 40 хвилин і три перерви на їжу й прогулянку.",
    club: "Гуртки — 16:10–18:00",
    pickup: "Забрати дитину: о 16:00 або о 17:00",
    rows: [
      ["8:30", "9:00", "rest", "Зустріч на вулиці, вхід до класів"],
      ["9:00", "9:40", "lesson", "1 урок"],
      ["9:40", "9:55", "gap", ""],
      ["9:55", "10:35", "lesson", "2 урок"],
      ["10:35", "11:10", "meal", "Прогулянка, бранч"],
      ["11:10", "11:50", "lesson", "3 урок"],
      ["11:50", "12:05", "gap", ""],
      ["12:05", "12:45", "lesson", "4 урок"],
      ["12:45", "13:40", "meal", "Обід, прогулянка"],
      ["13:40", "14:20", "lesson", "5 урок"],
      ["14:20", "14:30", "gap", ""],
      ["14:30", "15:10", "lesson", "6 урок"],
      ["15:10", "16:10", "meal", "Підвечірок, прогулянка"],
      ["16:10", "16:55", "club", "Гуртки"],
      ["16:55", "17:10", "gap", ""],
      ["17:10", "17:55", "club", "Гуртки"],
      ["17:55", "18:00", "gap", ""],
    ],
  },
  s: {
    title: "Середня і старша школа, 5–11 класи",
    note: "Сім уроків по 45 хвилин, легкий сніданок і обід з прогулянкою.",
    club: "Діяльність за вибором — 16:15–18:00",
    pickup: "Забрати дитину: [уточнити в школи]",
    rows: [
      ["8:30", "9:00", "gap", ""],
      ["9:00", "9:45", "lesson", "1 урок"],
      ["9:45", "9:55", "gap", ""],
      ["9:55", "10:40", "lesson", "2 урок"],
      ["10:40", "11:00", "meal", "Легкий сніданок, прогулянка"],
      ["11:00", "11:45", "lesson", "3 урок"],
      ["11:45", "11:55", "gap", ""],
      ["11:55", "12:40", "lesson", "4 урок"],
      ["12:40", "12:50", "gap", ""],
      ["12:50", "13:35", "lesson", "5 урок"],
      ["13:35", "14:20", "meal", "Обід, прогулянка"],
      ["14:20", "15:05", "lesson", "6 урок"],
      ["15:05", "15:15", "gap", ""],
      ["15:15", "16:00", "lesson", "7 урок"],
      ["16:00", "16:15", "gap", ""],
      ["16:15", "17:00", "club", "Діяльність за вибором"],
      ["17:00", "17:15", "meal", "Підвечірок"],
      ["17:15", "18:00", "club", "Діяльність за вибором"],
    ],
  },
};
const ORDER = ["k", "p", "s"] as const;
type Day = (typeof ORDER)[number];
const LABELS: Record<Day, string> = { k: "КДП · 4–5 років", p: "1–4 класи", s: "5–11 класи" };
const toMin = (t: string) => {
  const [h, m] = t.split(":");
  return Number(h) * 60 + Number(m);
};

export default function DaySchedule({ id, eyebrow, title }: { id?: string; eyebrow: string; title: string }) {
  const [day, setDay] = useState<Day>("p");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const cd = DAYS[day];
  const segs = cd.rows.map(([from, to, kind, label]) => ({
    grow: toMin(to) - toMin(from),
    bg: C[kind],
    time: `${from}–${to}`,
    label: label || "Перерва",
    kind,
  }));
  const list = segs.filter((s) => s.kind !== "gap");

  // tabs pattern: arrows, Home, End move selection and focus
  const onKey = (e: KeyboardEvent) => {
    const i = ORDER.indexOf(day);
    const keys: Record<string, number> = {
      ArrowRight: (i + 1) % ORDER.length,
      ArrowLeft: (i - 1 + ORDER.length) % ORDER.length,
      Home: 0,
      End: ORDER.length - 1,
    };
    const n = keys[e.key];
    if (n === undefined) return;
    e.preventDefault();
    setDay(ORDER[n]);
    tabs.current[n]?.focus();
  };

  return (
    <section id={id} aria-labelledby="day-title" style={{ marginTop: 56 }}>
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
            {eyebrow}
          </span>
          <h2
            id="day-title"
            style={{
              margin: 0,
              fontSize: "clamp(30px, 3vw, 40px)",
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: -1.4,
              textWrap: "balance",
            }}
          >
            {title}
          </h2>
        </div>
        <div
          role="tablist"
          aria-label="Оберіть вік"
          onKeyDown={onKey}
          style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
        >
          {ORDER.map((k, i) => (
            <button
              key={k}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              className="chipb"
              id={`day-tab-${k}`}
              aria-selected={k === day}
              aria-controls="day-panel"
              tabIndex={k === day ? 0 : -1}
              onClick={() => setDay(k)}
              style={{
                minHeight: 44,
                padding: "0 20px",
                borderRadius: 999,
                border: `1.5px solid ${k === day ? "#16181A" : "#E3E5E0"}`,
                background: k === day ? "#16181A" : "#FFFFFF",
                color: k === day ? "#FFFFFF" : "#3A3E42",
                fontFamily: "inherit",
                fontSize: 14.5,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {LABELS[k]}
            </button>
          ))}
        </div>
      </div>
      <div
        id="day-panel"
        role="tabpanel"
        aria-labelledby={`day-tab-${day}`}
        className="pad-m"
        style={{
          borderRadius: 28,
          background: "#FFFFFF",
          padding: "clamp(24px, 3vw, 44px)",
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
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "12px 32px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 720 }}>
            <h3 style={{ margin: 0, fontSize: 26, lineHeight: 1.2, fontWeight: 800, letterSpacing: -0.8 }}>
              {cd.title}
            </h3>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "#54585C" }}>{cd.note}</p>
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
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
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            8:30–18:00
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              borderRadius: 999,
              background: "#F1F2EE",
              fontSize: 14,
              fontWeight: 700,
              color: "#3A3E42",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C8161C"
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
            {cd.club}
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              borderRadius: 999,
              background: "#F1F2EE",
              fontSize: 14,
              fontWeight: 700,
              color: "#3A3E42",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5B3FA8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            {cd.pickup}
          </span>
        </div>
        <div aria-hidden="true" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            className="h-hours"
            style={{
              display: "flex",
              fontSize: 12.5,
              fontWeight: 700,
              color: "#5F6366",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            <span style={{ flex: "90 1 0px" }}>8:30</span>
            <span style={{ flex: "120 1 0px" }}>10:00</span>
            <span style={{ flex: "120 1 0px" }}>12:00</span>
            <span style={{ flex: "120 1 0px" }}>14:00</span>
            <span style={{ flex: "120 1 0px" }}>16:00</span>
            <span style={{ flex: "0 0 auto" }}>18:00</span>
          </div>
          <div className="h-bar" style={{ display: "flex", gap: 3, height: 64 }}>
            {segs.map((s, i) => (
              <div
                key={i}
                title={`${s.time} · ${s.label}`}
                style={{ flex: `${s.grow} 1 0px`, minWidth: 0, borderRadius: 10, background: s.bg }}
              />
            ))}
          </div>
        </div>
        <div
          aria-hidden="true"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 22px",
            fontSize: 13.5,
            fontWeight: 600,
            color: "#3A3E42",
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: "#5B3FA8" }} />
            Навчання
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: "#8CC63F" }} />
            Їжа та прогулянка
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: "#E31E24" }} />
            Гуртки й діяльність за вибором
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: "#D5D8D2" }} />
            Зустріч і відпочинок
          </span>
        </div>
        <ol
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
            gap: "0 28px",
          }}
        >
          {list.map((s, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "11px 0",
                borderBottom: "1px solid #EDEEEA",
              }}
            >
              <span
                aria-hidden="true"
                style={{ flex: "none", width: 10, height: 10, borderRadius: 3, background: s.bg }}
              />
              <span
                style={{
                  flex: "none",
                  minWidth: 96,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#5F6366",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.time}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.4, fontWeight: 600 }}>{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
