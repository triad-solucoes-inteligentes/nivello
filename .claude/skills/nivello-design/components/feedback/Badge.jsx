import React from "react";
import { Icon } from "../shared/Icon.jsx";

/** Nivello Badge — compact label/count. Semantic tones + optional dot/icon. */
export function Badge({ children, tone = "neutral", size = "md", dot = false, icon, style, ...rest }) {
  const tones = {
    neutral: { bg: "var(--neutral-100)", fg: "var(--neutral-700)", bd: "var(--neutral-200)" },
    brand: { bg: "var(--brand-subtle)", fg: "var(--text-brand)", bd: "var(--brand-border)" },
    accent: { bg: "var(--accent-subtle)", fg: "var(--terra-700)", bd: "var(--accent-border)" },
    success: { bg: "var(--success-bg)", fg: "var(--success)", bd: "var(--success-border)" },
    warning: { bg: "var(--warning-bg)", fg: "var(--warning)", bd: "var(--warning-border)" },
    danger: { bg: "var(--danger-bg)", fg: "var(--danger)", bd: "var(--danger-border)" },
    info: { bg: "var(--info-bg)", fg: "var(--info)", bd: "var(--info-border)" },
    solid: { bg: "var(--brand)", fg: "#fff", bd: "transparent" },
  };
  const t = tones[tone] || tones.neutral;
  const s = size === "sm" ? { fontSize: "11px", padding: "1px 7px", gap: 4 } : { fontSize: "12px", padding: "3px 9px", gap: 5 };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: s.gap, fontFamily: "var(--font-sans)", fontWeight: "var(--fw-semibold)", fontSize: s.fontSize, lineHeight: 1.3, color: t.fg, background: t.bg, border: `1px solid ${t.bd}`, borderRadius: "var(--radius-full)", padding: s.padding, whiteSpace: "nowrap", ...style }} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", flexShrink: 0 }} />}
      {icon && <Icon name={icon} style={{ width: 13, height: 13 }} />}
      {children}
    </span>
  );
}
