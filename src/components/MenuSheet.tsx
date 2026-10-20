"use client";

import Link from "next/link";
import { useState, type ComponentProps, type CSSProperties, type ReactNode, type Ref } from "react";

// Phone menu (design: mobile-menu.html). Sections open one at a time; the search field filters these links.
type Item = [label: string, href: string];
const SECTIONS: { id: string; label: string; badge?: string; href: string; links: Item[] }[] = [
  {
    id: "about",
    label: "Про школу",
    href: "/about",
    links: [
      ["Філософія й цінності", "/about#mission"],
      ["Команда", "/about#team"],
      ["Кампус і безпека", "/about#campus"],
      ["Лідер у мені", "/about#leader"],
      ["Річні огляди", "/about#reviews"],
      ["Вакансії", "/about#jobs"],
    ],
  },
  {
    id: "learn",
    label: "Навчання",
    href: "/programs",
    links: [
      ["Дошкільна підготовка", "/programs#kdp"],
      ["Початкова 1–4", "/programs#primary"],
      ["Середня і старша 5–11", "/programs#secondary"],
      ["U-CAN", "/programs#ucan"],
      ["Гуртки", "/programs#clubs"],
      ["Дистанційна школа", "/programs#online"],
    ],
  },
  {
    id: "vstup",
    label: "Вступ",
    badge: "2027/2028",
    href: "/enrolment",
    links: [
      ["Процес вступу", "/enrolment#steps"],
      ["Вартість", "/enrolment#cost"],
      ["Стипендіальна програма", "https://scholarship.novoshkola.com.ua"],
      ["Екскурсія", "https://forms.gle/tfUm17FznhabyiYv7"],
      ["Анкета", "https://school-today.com/Forms/Client/104-14b1c2e2-0c89-4138-90ae-d2ad5d47578e"],
    ],
  },
  {
    id: "parents",
    label: "Батькам",
    href: "/parents",
    links: [
      ["Оплата онлайн", "/parents#pay"],
      ["Договір", "/parents#contract"],
      ["Довідник", "/parents#handbook"],
      ["Кабінет School Today", "https://school-today.com/"],
    ],
  },
];
const ROWS: Item[] = [
  ["Новини", "/news"],
  ["Контакти", "/contacts"],
];
// [label, href, section] — every link above, for the search field
const INDEX: [string, string, string][] = [
  ...SECTIONS.flatMap(
    (s) => [[s.label, s.href, ""], ...s.links.map(([l, h]) => [l, h, s.label])] as [string, string, string][],
  ),
  ["Розклад дня", "/parents#day", "Батькам"],
  ...ROWS.map(([l, h]) => [l, h, ""] as [string, string, string]),
];

const ext = (href: string) => href.startsWith("http");
// "School Today" is read in English
const en = (label: string) =>
  label.split(/(School Today)/).map((p, i) =>
    i % 2 ? (
      <span key={i} lang="en">
        {p}
      </span>
    ) : (
      p
    ),
  );

function Go({ href, children, ...rest }: { href: string; children: ReactNode } & Omit<ComponentProps<"a">, "href">) {
  return ext(href) ? (
    <a href={href} target="_blank" rel="noopener" {...rest}>
      {children}
      <span className="sr"> (відкриється в новій вкладці)</span>
    </a>
  ) : (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

const ROW: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  minHeight: 46,
  padding: "0 14px",
  borderRadius: 16,
  color: "#16181A",
  fontSize: 18,
  fontWeight: 800,
  letterSpacing: -0.4,
};
const TILE: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 16,
  background: "#FFFFFF",
  color: "#16181A",
  fontSize: 13,
  fontWeight: 700,
};
const icon = (stroke: string, size = 18, width = "2") => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke,
  strokeWidth: width,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});
const NorthEast = () => (
  <svg {...icon("#5F6366", 14, "2.2")} style={{ flex: "none" }}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export default function MenuSheet({
  ref,
  path,
  onClose,
}: {
  ref: Ref<HTMLDivElement>;
  path: string;
  onClose: (refocus: boolean) => void;
}) {
  // the current page's section starts open; elsewhere «Вступ», as in the design
  const [open, setOpen] = useState(() => SECTIONS.find((s) => path.startsWith(s.href))?.id ?? "vstup");
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const hits = query ? INDEX.filter(([l, , s]) => `${l} ${s}`.toLowerCase().includes(query)) : [];
  const current = (href: string) => (path === href ? "page" : undefined);

  return (
    <div
      ref={ref}
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Меню сайту"
      onKeyDown={(e) => e.key === "Escape" && onClose(true)}
      onClick={(e) => (e.target as HTMLElement).closest("a") && onClose(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        overflowY: "auto",
        background: "#F1F2EE",
        padding: 12,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{ maxWidth: 560, height: "100%", margin: "0 auto", display: "flex", flexDirection: "column", gap: 8 }}
      >
        <div
          style={{
            flex: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            padding: "6px 6px 6px 20px",
            background: "#FFFFFF",
            borderRadius: 999,
            boxShadow: "0 6px 24px rgba(22,24,26,0.07)",
          }}
        >
          <Link
            href="/"
            aria-label="Новопечерська школа — на головну"
            style={{ display: "flex", flexDirection: "column", gap: 3, lineHeight: 1, color: "#16181A" }}
          >
            <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.4 }}>Новопечерська</span>
            <span
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: 2.4,
                textTransform: "uppercase",
                color: "#5F6366",
              }}
            >
              школа
            </span>
          </Link>
          <button
            className="ib"
            type="button"
            aria-label="Закрити меню"
            onClick={() => onClose(true)}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: 0,
              background: "#F1F2EE",
              color: "#16181A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg {...icon("currentColor", 20)}>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div role="search" style={{ flex: "none", position: "relative", display: "flex", alignItems: "center" }}>
          <label htmlFor="m-search" className="sr">
            Пошук на сайті
          </label>
          <span aria-hidden="true" style={{ position: "absolute", left: 16, display: "flex", color: "#5F6366" }}>
            <svg {...icon("currentColor")}>
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </span>
          <input
            id="m-search"
            type="search"
            placeholder="Пошук на сайті"
            autoComplete="off"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{
              width: "100%",
              height: 46,
              padding: "0 16px 0 46px",
              border: "1.5px solid #8A8F93",
              borderRadius: 999,
              background: "#FFFFFF",
              fontFamily: "inherit",
              fontSize: 15,
              color: "#16181A",
              boxSizing: "border-box",
            }}
          />
        </div>
        <p role="status" className="sr">
          {query ? (hits.length ? `Знайдено: ${hits.length}` : "Нічого не знайдено") : ""}
        </p>

        <div style={{ flex: "none", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
          <Link className="mr" href="/parents#pay" style={{ ...TILE, gap: 4, minHeight: 60, borderRadius: 18 }}>
            <svg {...icon("#5B3FA8")}>
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
            </svg>
            Оплатити
          </Link>
          <Link className="mr" href="/parents#day" style={{ ...TILE, gap: 4, minHeight: 60, borderRadius: 18 }}>
            <svg {...icon("#5B3FA8")}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Розклад дня
          </Link>
          <a
            className="mr"
            href="https://school-today.com/"
            target="_blank"
            rel="noopener"
            style={{ ...TILE, gap: 4, minHeight: 60, borderRadius: 18 }}
          >
            <svg {...icon("#5B3FA8")}>
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            Кабінет<span className="sr"> батьків у School Today (відкриється в новій вкладці)</span>
          </a>
        </div>

        <nav
          aria-label="Меню сайту"
          style={{
            flex: "1 1 auto",
            minHeight: 140,
            overflowY: "auto",
            borderRadius: 24,
            background: "#FFFFFF",
            padding: 6,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            boxSizing: "border-box",
          }}
        >
          {query ? (
            hits.length ? (
              hits.map(([label, href, section]) => (
                <Go
                  key={href}
                  className="mr"
                  href={href}
                  style={{ ...ROW, fontSize: 16, fontWeight: 700, letterSpacing: 0 }}
                >
                  <span>{en(label)}</span>
                  <span
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "#5F6366" }}
                  >
                    {section}
                    {ext(href) ? <NorthEast /> : null}
                  </span>
                </Go>
              ))
            ) : (
              <p style={{ margin: 0, padding: 14, fontSize: 15, lineHeight: 1.5, color: "#5F6366" }}>
                Нічого не знайдено. Спробуйте інше слово.
              </p>
            )
          ) : (
            <>
              {SECTIONS.map((s) => {
                const on = open === s.id;
                return (
                  <div key={s.id} style={{ borderRadius: 18, background: on ? "#EFEAFA" : "transparent" }}>
                    <button
                      className="mr"
                      type="button"
                      aria-expanded={on}
                      aria-controls={`m-sub-${s.id}`}
                      onClick={() => setOpen(on ? "" : s.id)}
                      style={{
                        ...ROW,
                        width: "100%",
                        border: 0,
                        background: "transparent",
                        fontFamily: "inherit",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      {s.badge ? (
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                          {s.label}
                          <span
                            style={{
                              padding: "3px 8px",
                              borderRadius: 999,
                              background: "#5B3FA8",
                              color: "#FFFFFF",
                              fontSize: 11.5,
                              fontWeight: 800,
                              letterSpacing: 0.2,
                            }}
                          >
                            {s.badge}
                          </span>
                        </span>
                      ) : (
                        s.label
                      )}
                      <svg
                        {...icon("#5F6366", 18, "2.2")}
                        style={{ transform: `rotate(${on ? 180 : 0}deg)`, transition: "transform .2s" }}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {on ? (
                      <div
                        id={`m-sub-${s.id}`}
                        style={{ padding: "0 8px 8px", display: "flex", flexDirection: "column", gap: 6 }}
                      >
                        <Link
                          className="bp"
                          href={s.href}
                          aria-current={current(s.href)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 10,
                            minHeight: 44,
                            padding: "0 14px",
                            borderRadius: 12,
                            background: "#5B3FA8",
                            color: "#FFFFFF",
                            fontSize: 14,
                            fontWeight: 700,
                          }}
                        >
                          Усе про розділ «{s.label}»
                          <svg {...icon("currentColor", 16)}>
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </Link>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 6 }}>
                          {s.links.map(([label, href]) => (
                            <Go
                              key={href}
                              className="ms"
                              href={href}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 6,
                                minHeight: 44,
                                padding: "0 12px",
                                borderRadius: 12,
                                background: "#FFFFFF",
                                color: "#16181A",
                                fontSize: 13.5,
                                fontWeight: 700,
                                lineHeight: 1.2,
                              }}
                            >
                              <span>{en(label)}</span>
                              {ext(href) ? <NorthEast /> : null}
                            </Go>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
              {ROWS.map(([label, href]) => (
                <Link key={href} className="mr" href={href} aria-current={current(href)} style={ROW}>
                  {label}
                  <svg {...icon("#5F6366", 18, "2.2")}>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              ))}
            </>
          )}
        </nav>

        <div
          role="group"
          aria-label="Зв’язатися"
          style={{ flex: "none", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}
        >
          <a
            className="mr"
            href="tel:+380501939393"
            aria-label="Рецепція: +38 (050) 193-93-93"
            style={{ ...TILE, gap: 2, minHeight: 52 }}
          >
            <svg {...icon("#5B3FA8", 16)}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Рецепція
          </a>
          <a
            className="mr"
            href="tel:+380503733973"
            aria-label="Вступ та екскурсії: +38 (050) 373-39-73"
            style={{ ...TILE, gap: 2, minHeight: 52 }}
          >
            <svg {...icon("#5B3FA8", 16)}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Вступ
          </a>
          <a
            className="mr"
            href="https://t.me/NovopecherskaShoolAdmission"
            target="_blank"
            rel="noopener"
            aria-label="Telegram: питання про вступ (відкриється в новій вкладці)"
            style={{ ...TILE, gap: 2, minHeight: 52 }}
          >
            <svg {...icon("#5B3FA8", 16)}>
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
            Telegram
          </a>
        </div>

        <div style={{ flex: "none", display: "flex", gap: 8 }}>
          <a
            className="bg2"
            href="https://forms.gle/tfUm17FznhabyiYv7"
            target="_blank"
            rel="noopener"
            style={{
              flex: "1 1 auto",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              minHeight: 52,
              padding: "0 16px",
              borderRadius: 999,
              background: "#8CC63F",
              color: "#16181A",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            Записатися на екскурсію<span className="sr"> (відкриється в новій вкладці)</span>
          </a>
          <nav
            aria-label="Мова сайту"
            style={{
              flex: "none",
              display: "flex",
              alignItems: "center",
              padding: 4,
              borderRadius: 999,
              background: "#FFFFFF",
            }}
          >
            <Link
              href={path}
              hrefLang="uk"
              lang="uk"
              aria-current="true"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 44,
                minHeight: 44,
                borderRadius: 999,
                background: "#F1F2EE",
                color: "#16181A",
                fontSize: 13,
                fontWeight: 800,
              }}
            >
              UA
            </Link>
            <a
              href="#"
              hrefLang="en"
              lang="en"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 44,
                minHeight: 44,
                borderRadius: 999,
                color: "#5F6366",
                fontSize: 13,
                fontWeight: 800,
              }}
            >
              EN
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
