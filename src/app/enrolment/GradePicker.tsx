"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";

const young =
  "Співбесіда проходить у дві частини. Спершу — міні-екскурсія школою для всієї родини, де можна поставити запитання. Потім діти й батьки працюють окремо, у групах: діти грають і спілкуються з однолітками в супроводі педагога й психолога, батьки — з педагогами й психологами.";
const older =
  "Спілкування з батьками і дітьми відбувається одночасно й триває 1,5–2 години. Спершу дитина працює в міні-групі з однолітками під наглядом психолога, потім — співбесіди з педагогами, які виявляють рівень академічних знань. Батьків запрошуємо на групову інтерактивну співбесіду.";
const pass =
  "Копії паспортів (1–2 сторінки й сторінка з реєстрацією місця проживання; для ID-картки — обидва боки й витяг про реєстрацію [уточнити]) та ідентифікаційних кодів обох батьків";
const docsBase = [
  "Заява про зарахування від одного з батьків",
  "Копія свідоцтва про народження дитини (українське або нотаріально завірений переклад)",
  pass,
  "Копія картки профілактичних щеплень (форма 063/о)",
];
const docsKdp = docsBase.concat(["Медична довідка про стан здоров’я дитини"]);
const docs1 = docsBase.concat(["Медична довідка про результати обов’язкового профілактичного огляду (форма 086-1/о)"]);
const before = [
  "Заява від одного з батьків (надається разом із договором)",
  "Копія свідоцтва про народження дитини (українське або нотаріально завірений переклад)",
  "Копія паспорта та ідентифікаційного коду того з батьків, хто підписує договір",
];
const after = [
  "Медична картка дитини (форма 026/о)",
  "Картка профілактичних щеплень (форма 063/о)",
  "Медична довідка з дозволом на відвідування басейну (форма 086-1/о)",
  "Особова справа з попереднього місця навчання",
];
const both = "Присутність обох батьків на співбесіді обов’язкова (якщо родина повна).";
const ukrMid =
  "Володіння українською мовою — обов’язкова умова вступу. Приєднатися посеред навчального року можна, якщо в класі є вільні місця, — уточніть наявність: +38 (050) 373-39-73.";
const live = "Чинна вартість «Наживо», 2026/2027";
const next = "Ціна на 2027/2028 — [дата].";
const midWhen = "На новий навчальний рік — з травня 2027 р. Посеред року — за наявності вільних місць";
const mid = " [Вартість при вступі посеред року — уточнити]";
const L: Level[] = [
  {
    id: "kdp4",
    label: "КДП-4",
    title: "Дошкільна підготовка · КДП-4",
    tags: ["з 4 років", "Дворічна програма"],
    when: "З травня 2027 р.",
    who: "Дитина та обоє батьків",
    format: young,
    subjects: [],
    note: both,
    price: "$11 000",
    per: "за рік",
    priceLabel: live,
    priceNote: "Повний день 9:00–18:00, чотириразове харчування, гуртки й секції. " + next,
    aTitle: "Документи для зарахування",
    a: docsKdp,
    bTitle: "",
    b: [],
    cta: "apply",
  },
  {
    id: "kdp5",
    label: "КДП-5",
    title: "Дошкільна підготовка · КДП-5",
    tags: ["з 5 років", "Дошкільна підготовка"],
    when: "З травня 2027 р.",
    who: "Дитина та обоє батьків",
    format: young,
    subjects: [],
    note: both,
    price: "$13 150",
    per: "за рік",
    priceLabel: live,
    priceNote: "Повний день 9:00–18:00, чотириразове харчування, гуртки й секції. " + next,
    aTitle: "Документи для зарахування",
    a: docsKdp,
    bTitle: "",
    b: [],
    cta: "apply",
  },
  {
    id: "g1",
    label: "1 клас",
    title: "Перший клас",
    tags: ["Початкова школа", "Уроки по 40 хвилин"],
    when: "З лютого 2027 р.",
    who: "Дитина та обоє батьків",
    format: young,
    subjects: [],
    note: both,
    price: "$13 750",
    per: "за рік",
    priceLabel: live,
    priceNote: "Повний день 9:00–18:00, триразове харчування, гуртки й секції. " + next,
    aTitle: "Документи для зарахування",
    a: docs1,
    bTitle: "",
    b: [],
    cta: "apply",
  },
  {
    id: "g24",
    label: "2–4 класи",
    title: "2–4 класи",
    tags: ["Початкова школа", "За наявності місць", "Можна посеред року"],
    when: midWhen,
    who: "Дитина та обоє батьків",
    format: older,
    subjects: ["Математика", "Українська мова", "Англійська мова"],
    note: ukrMid,
    price: "$13 750",
    per: "за рік",
    priceLabel: live,
    priceNote: "Повний день 9:00–18:00, триразове харчування, гуртки й секції. " + next + mid,
    aTitle: "До підписання договору",
    a: before,
    bTitle: "Після підписання договору",
    b: after,
    cta: "apply",
  },
  {
    id: "g510",
    label: "5–10 класи",
    title: "5–10 класи",
    tags: ["Середня і старша школа", "За наявності місць", "Можна посеред року"],
    when: midWhen,
    who: "Дитина та обоє батьків",
    format: older,
    subjects: ["Математика", "Українська мова та література", "Англійська мова"],
    note: ukrMid,
    price: "$13 750",
    per: "за рік",
    priceLabel: live,
    priceNote: "Повний день 9:00–18:00, дворазове харчування, гуртки й секції. " + next + mid,
    aTitle: "До підписання договору",
    a: before,
    bTitle: "Після підписання договору",
    b: after,
    cta: "apply",
  },
  {
    id: "g11",
    label: "11 клас",
    title: "11 клас",
    tags: ["Старша школа", "Стипендіальна програма"],
    when: "[Терміни — на сайті Стипендіальної програми]",
    who: "Учасники Стипендіальної програми",
    format:
      "Вступ до 11 класу відкритий лише через Стипендіальну програму — грант від ГС «Освіторія» та Новопечерської школи на безоплатне навчання.",
    subjects: [],
    note: "Вступ до 11 класу — тільки через Стипендіальну програму.",
    price: "Грант",
    per: "безоплатне навчання",
    priceLabel: "Стипендіальна програма",
    priceNote: "Грант від ГС «Освіторія» та Новопечерської школи.",
    aTitle: "Як вступити",
    a: [
      "Ознайомтеся з умовами Стипендіальної програми",
      "Етапи відбору й терміни — [деталі на scholarship.novoshkola.com.ua]",
    ],
    bTitle: "",
    b: [],
    cta: "scholar",
  },
  {
    id: "ucan",
    label: "U-CAN 8–11",
    title: "U-CAN — українсько-канадська програма",
    tags: ["8–11 класи", "Manitoba High School Diploma"],
    when: "[Терміни вступу на 2027/2028]",
    who: "Вступники до 8–11 класів",
    format:
      "Додаткова програма на 4 роки: 10 предметів канадської програми винятково англійською, 1100 додаткових годин і Manitoba High School Diploma разом з українським свідоцтвом.",
    subjects: [],
    note: "Учні інших шкіл можуть вступити на U-CAN, навчаючись за українською програмою наживо або в екстернаті.",
    price: "[ціна U-CAN]",
    per: "",
    priceLabel: "Вартість U-CAN",
    priceNote: "[Вартість програми на 2027/2028 н. р.]",
    aTitle: "Вимоги до вступу",
    a: ["Есе", "Не нижче 8 балів (65% знань) з ключових предметів", "Англійська мова — не нижче 10 балів"],
    bTitle: "",
    b: [],
    cta: "ucan",
  },
];
type Level = {
  id: string;
  label: string;
  title: string;
  tags: string[];
  when: string;
  who: string;
  format: string;
  subjects: string[];
  note: string;
  price: string;
  per: string;
  priceLabel: string;
  priceNote: string;
  aTitle: string;
  a: string[];
  bTitle: string;
  b: string[];
  cta: "apply" | "scholar" | "ucan";
};
// deep links: /enrolment#grade-1 preselects the class
const HASH: Record<string, string> = {
  "grade-kdp4": "kdp4",
  "grade-kdp5": "kdp5",
  "grade-1": "g1",
  "grade-2-4": "g24",
  "grade-5-10": "g510",
  "grade-11": "g11",
  "grade-ucan": "ucan",
};
const onHashChange = (cb: () => void) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};

export default function GradePicker() {
  const hash = useSyncExternalStore(
    onHashChange,
    () => location.hash.slice(1),
    () => "",
  );
  const [picked, setPicked] = useState<string | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const p = L.find((x) => x.id === (picked ?? HASH[hash])) ?? L[2];

  useEffect(() => {
    if (location.hash.startsWith("#grade-")) document.getElementById("grade")?.scrollIntoView();
  }, []);

  const onKey = (e: KeyboardEvent) => {
    const i = L.indexOf(p);
    const keys: Record<string, number> = {
      ArrowRight: (i + 1) % L.length,
      ArrowDown: (i + 1) % L.length,
      ArrowLeft: (i - 1 + L.length) % L.length,
      ArrowUp: (i - 1 + L.length) % L.length,
      Home: 0,
      End: L.length - 1,
    };
    const n = keys[e.key];
    if (n === undefined) return;
    e.preventDefault();
    setPicked(L[n].id);
    tabs.current[n]?.focus();
  };

  return (
    <>
      <section id="grade" aria-labelledby="path-title" style={{ marginTop: 56 }}>
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
              Ваш шлях до школи
            </span>
            <h2
              id="path-title"
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: -1.4,
                textWrap: "balance",
              }}
            >
              Оберіть клас вступу
            </h2>
          </div>
          <span style={{ maxWidth: 420, fontSize: 15, lineHeight: 1.6, color: "#5F6366" }}>
            Покажемо терміни, формат співбесід, документи й вартість саме для вашого класу.
          </span>
        </div>
        <div
          role="tablist"
          aria-label="Клас вступу"
          onKeyDown={onKey}
          style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "0 8px 20px" }}
        >
          {L.map((l, i) => (
            <button
              key={l.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${l.id}`}
              aria-selected={l.id === p.id}
              aria-controls="grade-panel"
              tabIndex={l.id === p.id ? 0 : -1}
              onClick={() => setPicked(l.id)}
              style={{
                minHeight: 48,
                padding: "0 22px",
                borderRadius: 999,
                border: `1.5px solid ${l.id === p.id ? "#16181A" : "#E3E5E0"}`,
                background: l.id === p.id ? "#16181A" : "#FFFFFF",
                color: l.id === p.id ? "#FFFFFF" : "#3A3E42",
                fontFamily: "inherit",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div
          id="grade-panel"
          role="tabpanel"
          aria-labelledby={`tab-${p.id}`}
          style={{ display: "flex", flexWrap: "wrap", gap: 16 }}
        >
          <div
            style={{
              flex: "1.35 1 560px",
              minWidth: 0,
              borderRadius: 28,
              background: "#FFFFFF",
              padding: "clamp(24px, 3.4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              gap: 26,
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#5F6366",
                }}
              >
                Обраний клас
              </span>
              <h3
                style={{
                  margin: 0,
                  fontSize: "clamp(28px, 2.6vw, 38px)",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: -1.3,
                  textWrap: "balance",
                }}
              >
                {p.title}
              </h3>
              <span style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map((tg, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "#F1F2EE",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: "#3A3E42",
                    }}
                  >
                    {tg}
                  </span>
                ))}
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
                gap: 12,
              }}
            >
              <div
                style={{
                  borderRadius: 20,
                  background: "#F1F2EE",
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
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
                  Коли співбесіди
                </span>
                <span style={{ fontSize: 18, lineHeight: 1.35, fontWeight: 800, letterSpacing: -0.3 }}>{p.when}</span>
              </div>
              <div
                style={{
                  borderRadius: 20,
                  background: "#F1F2EE",
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Хто бере участь
                </span>
                <span style={{ fontSize: 18, lineHeight: 1.35, fontWeight: 800, letterSpacing: -0.3 }}>{p.who}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#5F6366",
                }}
              >
                Формат
              </span>
              <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: "#3A3E42", textWrap: "pretty" }}>
                {p.format}
              </p>
            </div>
            {p.subjects.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span
                  style={{
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: 1.4,
                    textTransform: "uppercase",
                    color: "#5F6366",
                  }}
                >
                  Предмети на співбесіді
                </span>
                <span style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.subjects.map((sb, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "9px 15px",
                        borderRadius: 999,
                        background: "#EFEAFA",
                        fontSize: 14.5,
                        fontWeight: 700,
                        color: "#5B3FA8",
                      }}
                    >
                      {sb}
                    </span>
                  ))}
                </span>
              </div>
            ) : null}
            {p.note ? (
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  gap: 14,
                  padding: "18px 20px",
                  borderRadius: 20,
                  background: "#FDECEC",
                  color: "#16181A",
                }}
              >
                <span style={{ flex: "none", color: "#C8161C", paddingTop: 1 }}>
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
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </svg>
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 600 }}>{p.note}</span>
              </div>
            ) : null}
          </div>
          <div style={{ flex: "1 1 380px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
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
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                </svg>
                {p.priceLabel}
              </span>
              <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontSize: 48, lineHeight: 1.05, fontWeight: 800, letterSpacing: -2 }}>{p.price}</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF" }}>{p.per}</span>
              </span>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.86)" }}>{p.priceNote}</span>
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
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
                {p.aTitle}
              </span>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
                {p.a.map((d, i) => (
                  <li
                    key={i}
                    style={{ display: "flex", gap: 12, padding: "11px 0", borderBottom: "1px solid #EDEEEA" }}
                  >
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
                    <span style={{ fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>{d}</span>
                  </li>
                ))}
              </ul>
              {p.b.length > 0 ? (
                <>
                  <span
                    style={{
                      marginTop: 10,
                      fontSize: 12.5,
                      fontWeight: 800,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: "#5F6366",
                    }}
                  >
                    {p.bTitle}
                  </span>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
                    {p.b.map((d, i) => (
                      <li
                        key={i}
                        style={{ display: "flex", gap: 12, padding: "11px 0", borderBottom: "1px solid #EDEEEA" }}
                      >
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
                        <span style={{ fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
              {p.cta === "apply" ? (
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
                    minHeight: 50,
                    padding: "0 22px 0 24px",
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
              ) : null}
              {p.cta === "scholar" ? (
                <a
                  className="bp"
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
                    background: "#5B3FA8",
                    color: "#FFFFFF",
                    fontSize: 15,
                    fontWeight: 700,
                  }}
                >
                  Про Стипендіальну програму<span className="sr"> (відкриється в новій вкладці)</span>
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
              ) : null}
              {p.cta === "ucan" ? (
                <Link
                  className="bp"
                  href="/programs#ucan"
                  style={{
                    marginTop: "auto",
                    alignSelf: "flex-start",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    minHeight: 50,
                    padding: "0 24px",
                    borderRadius: 999,
                    background: "#5B3FA8",
                    color: "#FFFFFF",
                    fontSize: 15,
                    fontWeight: 700,
                  }}
                >
                  Про програму U-CAN
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
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
