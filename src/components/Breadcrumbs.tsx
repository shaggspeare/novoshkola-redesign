import Link from "next/link";
import { Fragment } from "react";

// Items without href = the current page. `touch`: News/Article variant with 44 px tap targets.
export default function Breadcrumbs({ items, touch }: { items: [label: string, href?: string][]; touch?: boolean }) {
  const item = touch ? { display: "inline-flex", alignItems: "center", padding: "12px 4px" } : {};
  return (
    <nav
      aria-label="Навігаційний ланцюжок"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: touch ? "0 6px" : 10,
        padding: touch ? "0 4px 8px" : "6px 8px 18px",
        fontSize: 13,
        fontWeight: 700,
        color: "#5F6366",
      }}
    >
      {[["Головна", "/"] as [string, string?], ...items].map(([label, href], i) => (
        <Fragment key={label}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {href ? (
            <Link className="lk" href={href} style={{ ...item, color: "#5F6366" }}>
              {label}
            </Link>
          ) : (
            <span aria-current="page" style={{ ...item, color: "#16181A" }}>
              {label}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
