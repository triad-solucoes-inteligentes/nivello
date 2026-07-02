import React from "react";
import { Icon } from "../shared/Icon.jsx";

/** Nivello Tabs — underline or pill tab bar. items: [{value,label,icon,count}]. */
export function Tabs({ items = [], value, onChange, variant = "underline", style, ...rest }) {
  const isPill = variant === "pill";
  return (
    <div role="tablist" style={{ display: "flex", gap: isPill ? 6 : 4, borderBottom: isPill ? "none" : "1px solid var(--border-subtle)", background: isPill ? "var(--surface-sunken)" : "transparent", padding: isPill ? 4 : 0, borderRadius: isPill ? "var(--radius-md)" : 0, ...style }} {...rest}>
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button key={it.value} role="tab" aria-selected={active} onClick={() => onChange && onChange(it.value)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 7, border: "none", cursor: "pointer",
              fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: "var(--fw-semibold)", whiteSpace: "nowrap",
              padding: isPill ? "7px 14px" : "10px 4px", marginBottom: isPill ? 0 : -1,
              background: isPill ? (active ? "var(--surface-card)" : "transparent") : "transparent",
              color: active ? (isPill ? "var(--text-strong)" : "var(--text-brand)") : "var(--text-muted)",
              borderRadius: isPill ? "var(--radius-sm)" : 0,
              borderBottom: isPill ? "none" : `2px solid ${active ? "var(--brand)" : "transparent"}`,
              boxShadow: isPill && active ? "var(--shadow-xs)" : "none",
              transition: "color var(--dur-fast), background var(--dur-fast)",
            }}>
            {it.icon && <Icon name={it.icon} style={{ width: 16, height: 16 }} />}
            {it.label}
            {it.count != null && <span style={{ fontSize: "11px", fontWeight: "var(--fw-semibold)", padding: "1px 7px", borderRadius: "var(--radius-full)", background: active ? "var(--brand-subtle)" : "var(--neutral-100)", color: active ? "var(--text-brand)" : "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
