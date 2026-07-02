import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello ProductTypeBadge — distinguishes Serviço vs Material.
 * Serviço = teal (água/mão de obra) · Material = ocre (terra/insumo).
 */
export function ProductTypeBadge({ type = "servico", size = "md", style, ...rest }) {
  const isService = type === "servico";
  const cfg = isService
    ? { label: "Serviço", icon: "wrench", fg: "var(--type-service)", bg: "var(--type-service-bg)", bd: "var(--type-service-border)" }
    : { label: "Material", icon: "package", fg: "var(--type-material)", bg: "var(--type-material-bg)", bd: "var(--type-material-border)" };
  const dims = size === "sm" ? { fontSize: "11px", padding: "1px 8px", gap: 4, icon: 12 } : { fontSize: "12px", padding: "3px 10px", gap: 5, icon: 14 };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: dims.gap, fontFamily: "var(--font-sans)", fontWeight: "var(--fw-semibold)", fontSize: dims.fontSize, lineHeight: 1.3, color: cfg.fg, background: cfg.bg, border: `1px solid ${cfg.bd}`, borderRadius: "var(--radius-full)", padding: dims.padding, whiteSpace: "nowrap", ...style }} {...rest}>
      <Icon name={cfg.icon} style={{ width: dims.icon, height: dims.icon }} />
      {cfg.label}
    </span>
  );
}
