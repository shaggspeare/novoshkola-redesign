import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const manrope = Manrope({ subsets: ["cyrillic", "latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://novoshkola.com.ua"),
  title: { template: "%s — Новопечерська школа", default: "Новопечерська школа" },
  description:
    "Новопечерська школа пропонує своїм учням освітній досвід, який максимально розкриває їхній навчальний потенціал.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={manrope.variable}>
      <body>
        <div
          style={{
            background: "#F1F2EE",
            color: "#16181A",
            fontFamily: "var(--font-manrope), system-ui, -apple-system, 'Segoe UI', sans-serif",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          <div
            style={{
              maxWidth: 1440,
              margin: "0 auto",
              padding: "0 clamp(16px, 2vw, 28px) 28px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a className="skip" href="#main">
              Перейти до змісту
            </a>
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
