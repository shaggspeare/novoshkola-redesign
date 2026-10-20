"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import MenuSheet from "./MenuSheet";

const NAV = [
  ["/about", "Про школу"],
  ["/programs", "Навчання"],
  ["/enrolment", "Вступ"],
  ["/parents", "Батькам"],
  ["/news", "Новини"],
  ["/contacts", "Контакти"],
] as const;

// Header + full-screen menu sheet (burger below 1100 px). Esc closes; focus moves in and back.
export default function SiteHeader() {
  const path = usePathname();
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === path; // navigating away (link, back button) closes the menu
  const burger = useRef<HTMLButtonElement>(null);
  const sheet = useRef<HTMLDivElement>(null);
  const current = (href: string) => (path === href ? "page" : path.startsWith(href + "/") ? "true" : undefined);

  const openMenu = () => {
    flushSync(() => setOpenAt(path));
    sheet.current?.querySelector<HTMLElement>("a,button")?.focus();
  };
  // Esc / ✕ return focus to the burger; following a link leaves it to the new page
  const closeMenu = (refocus: boolean) => {
    flushSync(() => setOpenAt(null));
    if (refocus) burger.current?.focus();
  };

  return (
    <>
      <header
        className="hdr"
        style={{
          position: "sticky",
          top: 16,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px 28px",
          margin: "16px 0 20px",
          padding: "10px 10px 10px 24px",
          background: "#FFFFFF",
          borderRadius: 999,
          boxShadow: "0 6px 24px rgba(22,24,26,0.07)",
        }}
      >
        <Link
          href="/"
          aria-label="Новопечерська школа — на головну"
          style={{ display: "flex", flexDirection: "column", gap: 4, lineHeight: 1, color: "#16181A" }}
        >
          <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.4 }}>Новопечерська</span>
          <span
            style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.6, textTransform: "uppercase", color: "#5F6366" }}
          >
            школа
          </span>
        </Link>
        <nav
          className="hdr-nav"
          aria-label="Головне меню"
          style={{ display: "flex", alignItems: "center", gap: 2, fontSize: 14, fontWeight: 600 }}
        >
          {NAV.map(([href, label]) => {
            const on = current(href);
            return (
              <Link
                key={href}
                className={on ? undefined : "nv"}
                href={href}
                aria-current={on}
                style={{
                  padding: "12px 14px",
                  borderRadius: 999,
                  background: on ? "#F1F2EE" : undefined,
                  color: on ? "#16181A" : "#3A3E42",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <nav
            className="hdr-lang"
            aria-label="Мова сайту"
            style={{ display: "flex", alignItems: "center", padding: 3, borderRadius: 999, background: "#F1F2EE" }}
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
                minHeight: 40,
                borderRadius: 999,
                background: "#FFFFFF",
                color: "#16181A",
                fontSize: 12.5,
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
                minHeight: 40,
                borderRadius: 999,
                color: "#5F6366",
                fontSize: 12.5,
                fontWeight: 800,
              }}
            >
              EN
            </a>
          </nav>
          <button
            className="ib hdr-search"
            type="button"
            aria-label="Пошук на сайті"
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
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <a
            className="bp"
            href="https://school-today.com/"
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              minHeight: 44,
              padding: "0 18px 0 16px",
              borderRadius: 999,
              background: "#5B3FA8",
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: 700,
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
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            Кабінет<span className="sr"> батьків у School Today (відкриється в новій вкладці)</span>
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
          <button
            className="ib hdr-burger"
            type="button"
            aria-label="Відкрити меню"
            aria-expanded={open}
            aria-controls="site-menu"
            ref={burger}
            onClick={openMenu}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: 0,
              background: "#F1F2EE",
              color: "#16181A",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
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
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>
      {open ? <MenuSheet ref={sheet} path={path} onClose={closeMenu} /> : null}
    </>
  );
}
