import React from "react";
import { Icon } from "../shared/Icon.jsx";

const STATUS = {
  rascunho:  { label: "Rascunho", tone: "neutral", icon: "file-pen-line", fg: "var(--status-draft)", bg: "var(--status-draft-bg)" },
  enviado:   { label: "Enviado", tone: "info", icon: "send", fg: "var(--status-sent)", bg: "var(--status-sent-bg)" },
  aprovado:  { label: "Aprovado", tone: "success", icon: "check-circle-2", fg: "var(--status-approved)", bg: "var(--status-approved-bg)" },
  recusado:  { label: "Recusado", tone: "danger", icon: "x-circle", fg: "var(--status-rejected)", bg: "var(--status-rejected-bg)" },
  expirado:  { label: "Expirado", tone: "warning", icon: "clock-alert", fg: "var(--status-expired)", bg: "var(--status-expired-bg)" },
};

/** Nivello QuoteStatusBadge — orçamento lifecycle status. */
export function QuoteStatusBadge({ status = "rascunho", size = "md", showIcon = true, style, ...rest }) {
  const s = STATUS[status] || STATUS.rascunho;
  const dims = size === "sm" ? { fontSize: "11px", padding: "2px 8px", gap: 4, icon: 12 } : { fontSize: "12px", padding: "4px 10px", gap: 5, icon: 14 };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: dims.gap, fontFamily: "var(--font-sans)", fontWeight: "var(--fw-semibold)", fontSize: dims.fontSize, lineHeight: 1.3, color: s.fg, background: s.bg, borderRadius: "var(--radius-full)", padding: dims.padding, whiteSpace: "nowrap", ...style }} {...rest}>
      {showIcon && <Icon name={s.icon} style={{ width: dims.icon, height: dims.icon }} />}
      {s.label}
    </span>
  );
}
