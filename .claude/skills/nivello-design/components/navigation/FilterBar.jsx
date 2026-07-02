import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello FilterBar — horizontal filter chips + count.
 * On mobile, pair with a Drawer for advanced filters.
 * filters: [{ value, label, icon, active }]
 */
export function FilterBar({ filters = [], onToggle, onOpenDrawer, resultCount, trailing, style, ...rest }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", ...style }} {...rest}>
      {onOpenDrawer && (
        <button type="button" onClick={onOpenDrawer}
          style={{ display: "inline-flex", alignItems: "center", gap: 7, height: 34, padding: "0 12px", border: "1px solid var(--border-default)", borderRadius: "var(--radius-md)", background: "var(--surface-card)", cursor: "pointer", fontSize: "13px", fontWeight: "var(--fw-semibold)", color: "var(--text-body)", fontFamily: "var(--font-sans)" }}>
          <Icon name="sliders-horizontal" style={{ width: 15, height: 15 }} />
          Filtros
        </button>
      )}
      {filters.map((f) => (
        <button key={f.value} type="button" onClick={() => onToggle && onToggle(f.value)}
          style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 34, padding: "0 12px", borderRadius: "var(--radius-full)", cursor: "pointer", fontSize: "13px", fontWeight: "var(--fw-medium)", fontFamily: "var(--font-sans)", transition: "all var(--dur-fast)", border: `1px solid ${f.active ? "var(--brand)" : "var(--border-default)"}`, background: f.active ? "var(--brand-subtle)" : "var(--surface-card)", color: f.active ? "var(--text-brand)" : "var(--text-body)" }}>
          {f.icon && <Icon name={f.icon} style={{ width: 14, height: 14 }} />}
          {f.label}
          {f.active && <Icon name="x" style={{ width: 13, height: 13 }} />}
        </button>
      ))}
      {(resultCount != null || trailing) && (
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          {resultCount != null && <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{resultCount} resultados</span>}
          {trailing}
        </div>
      )}
    </div>
  );
}
