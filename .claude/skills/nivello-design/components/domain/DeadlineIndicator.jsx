import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello DeadlineIndicator — prazo/vencimento with urgency color.
 * Computes days remaining from `date` (ISO) unless `daysLeft` is given.
 */
export function DeadlineIndicator({ date, daysLeft, label, size = "md", style, ...rest }) {
  let days = daysLeft;
  if (days == null && date) {
    const d = new Date(date); const now = new Date();
    days = Math.ceil((d - now) / 86400000);
  }
  const overdue = days != null && days < 0;
  const urgent = days != null && days >= 0 && days <= 3;
  const cfg = overdue
    ? { fg: "var(--danger)", bg: "var(--danger-bg)", icon: "alert-circle", text: `${Math.abs(days)}d em atraso` }
    : urgent
    ? { fg: "var(--warning)", bg: "var(--warning-bg)", icon: "clock-alert", text: days === 0 ? "Vence hoje" : `${days}d restantes` }
    : { fg: "var(--text-body)", bg: "var(--neutral-100)", icon: "calendar-clock", text: days != null ? `${days}d restantes` : (date || "—") };
  const dims = size === "sm" ? { fontSize: "11px", padding: "2px 8px", icon: 12 } : { fontSize: "12px", padding: "4px 10px", icon: 14 };
  const dateStr = date ? new Date(date).toLocaleDateString("pt-BR") : null;
  return (
    <span title={dateStr || undefined} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-sans)", fontWeight: "var(--fw-semibold)", fontSize: dims.fontSize, color: cfg.fg, background: cfg.bg, borderRadius: "var(--radius-full)", padding: dims.padding, whiteSpace: "nowrap", ...style }} {...rest}>
      <Icon name={cfg.icon} style={{ width: dims.icon, height: dims.icon }} />
      {label ? `${label}: ${cfg.text}` : cfg.text}
    </span>
  );
}
