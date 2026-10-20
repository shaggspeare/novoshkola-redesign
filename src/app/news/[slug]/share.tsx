"use client";

import { createContext, use, useState, type ComponentProps, type ReactNode } from "react";

const Share = createContext({ copied: false, copy: () => {}, share: () => {} });

// One "copied" state for the share buttons in the article header and the sidebar.
export function ShareProvider({ url, title, children }: { url: string; title: string; children: ReactNode }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(url).catch(() => {});
    setCopied(true);
  };
  const share = () => {
    if (navigator.share) navigator.share({ title, text: title, url }).catch(() => {});
    else copy();
  };
  return <Share value={{ copied, copy, share }}>{children}</Share>;
}

export function ShareButton({ action, ...props }: { action: "copy" | "share" } & ComponentProps<"button">) {
  const s = use(Share);
  return <button type="button" {...props} onClick={s[action]} />;
}

export function CopiedText({ copied, idle = "" }: { copied: string; idle?: string }) {
  return use(Share).copied ? copied : idle;
}
