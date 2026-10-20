import Link from "next/link";

export default function SiteFooter() {
  return (
    <>
      <footer
        style={{
          marginTop: 16,
          borderRadius: 28,
          background: "#16181A",
          color: "#FFFFFF",
          padding: "clamp(28px, 4vw, 56px)",
          display: "flex",
          flexDirection: "column",
          gap: 40,
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "40px 56px" }}>
          <div style={{ flex: "1 1 280px", maxWidth: 380, display: "flex", flexDirection: "column", gap: 20 }}>
            <Link
              href="/"
              aria-label="Новопечерська школа — на головну"
              style={{ display: "flex", flexDirection: "column", gap: 5, lineHeight: 1, color: "#FFFFFF" }}
            >
              <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>Новопечерська</span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#9AA0A4",
                }}
              >
                школа
              </span>
            </Link>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#9AA0A4" }}>
              Ми виховуємо архітекторів змін з глобальним мисленням та українським серцем.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
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
                  background: "rgba(255,255,255,0.08)",
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
                  background: "rgba(255,255,255,0.08)",
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
                  background: "rgba(255,255,255,0.08)",
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
                  background: "rgba(255,255,255,0.08)",
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
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </a>
            </div>
          </div>
          <nav
            className="ft-nav"
            aria-label="Карта сайту"
            style={{
              flex: "2 1 600px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))",
              gap: "32px 28px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#9AA0A4",
                }}
              >
                Школа
              </span>
              <Link className="fl" href="/about" style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}>
                Про школу
              </Link>
              <Link className="fl" href="/about#team" style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}>
                Команда
              </Link>
              <Link className="fl" href="/about#campus" style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}>
                Кампус і безпека
              </Link>
              <Link className="fl" href="/about#leader" style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}>
                Лідер у мені
              </Link>
              <Link className="fl" href="/about#reviews" style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}>
                Річні огляди
              </Link>
              <Link className="fl" href="/about#jobs" style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}>
                Вакансії
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#9AA0A4",
                }}
              >
                Навчання
              </span>
              <Link className="fl" href="/programs#kdp" style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}>
                Дошкільна підготовка
              </Link>
              <Link
                className="fl"
                href="/programs#primary"
                style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}
              >
                Початкова школа
              </Link>
              <Link
                className="fl"
                href="/programs#secondary"
                style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}
              >
                Середня і старша школа
              </Link>
              <Link className="fl" href="/programs#ucan" style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}>
                U-CAN
              </Link>
              <Link className="fl" href="/programs#clubs" style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}>
                Гуртки
              </Link>
              <Link
                className="fl"
                href="/programs#online"
                style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}
              >
                Дистанційна школа
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#9AA0A4",
                }}
              >
                Вступ і батькам
              </span>
              <Link
                className="fl"
                href="/enrolment#steps"
                style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}
              >
                Процес вступу
              </Link>
              <Link className="fl" href="/enrolment#cost" style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}>
                Вартість навчання
              </Link>
              <a
                className="fl"
                href="https://scholarship.novoshkola.com.ua"
                target="_blank"
                rel="noopener"
                style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}
              >
                Стипендіальна програма<span className="sr"> (відкриється в новій вкладці)</span>
              </a>
              <Link className="fl" href="/parents#pay" style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}>
                Оплата онлайн
              </Link>
              <Link
                className="fl"
                href="/parents#contract"
                style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}
              >
                Договір приєднання
              </Link>
              <Link
                className="fl"
                href="/parents#handbook"
                style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}
              >
                Довідник
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  color: "#9AA0A4",
                }}
              >
                Контакти
              </span>
              <span style={{ fontSize: 14.5, lineHeight: 1.55, fontWeight: 600, color: "#C9CDD1" }}>
                01103, Київ,
                <br />
                вул. Андрія Верхогляда, 9-Б
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#9AA0A4" }}>Рецепція</span>
                <a
                  className="fl"
                  href="tel:+380501939393"
                  style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}
                >
                  +38 (050) 193-93-93
                </a>
                <a
                  className="fl"
                  href="tel:+380443590750"
                  style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}
                >
                  +38 (044) 359-07-50
                </a>
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#9AA0A4" }}>Вступ та екскурсії</span>
                <a
                  className="fl"
                  href="tel:+380503733973"
                  style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}
                >
                  +38 (050) 373-39-73
                </a>
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#9AA0A4" }}>Також</span>
                <a
                  className="fl"
                  href="tel:+380681939333"
                  style={{ fontSize: 14.5, fontWeight: 600, color: "#C9CDD1" }}
                >
                  +38 (068) 193-93-33
                </a>
              </span>
              <a
                className="fl"
                href="mailto:info@novoshkola.com.ua"
                style={{ fontSize: 14.5, fontWeight: 700, color: "#FFFFFF", overflowWrap: "anywhere" }}
              >
                info@novoshkola.com.ua
              </a>
            </div>
          </nav>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "12px 24px",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            fontSize: 13,
            lineHeight: 1.5,
            color: "#9AA0A4",
          }}
        >
          <span>© 2026 «Новопечерська школа» · Проєкт ГС «Освіторія»</span>
          <span>При використанні матеріалів посилання на сайт обов’язкове</span>
        </div>
      </footer>
      <aside
        className="mbar"
        aria-label="Швидкий запис"
        style={{
          position: "sticky",
          bottom: 12,
          zIndex: 40,
          marginTop: 12,
          alignItems: "center",
          gap: 8,
          padding: 8,
          borderRadius: 999,
          background: "#16181A",
          boxShadow: "0 12px 32px rgba(22,24,26,0.25)",
        }}
      >
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
            minHeight: 48,
            padding: "0 18px",
            borderRadius: 999,
            background: "#8CC63F",
            color: "#16181A",
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          Записатися на екскурсію<span className="sr"> (відкриється в новій вкладці)</span>
        </a>
        <a
          href="tel:+380503733973"
          aria-label="Подзвонити щодо вступу: +38 (050) 373-39-73"
          style={{
            flex: "none",
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </aside>
    </>
  );
}
