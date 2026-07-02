import React from "react";
import { Icon } from "../shared/Icon.jsx";

/** Nivello BottomNav — mobile primary navigation. items: [{value,label,icon}]. */
export function BottomNav({ items = [], value, onSelect, style, ...rest }) {
  return (
    <nav style={{ display: "flex", height: "var(--bottomnav-h)", background: "var(--surface-card)", borderTop: "1px solid var(--border-subtle)", boxShadow: "0 -2px 10px rgba(16,23,28,0.05)", ...style }} {...rest}>
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button key={it.value} onClick={() => onSelect && onSelect(it.value)}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, border: "none", background: "transparent", cursor: "pointer", color: active ? "var(--brand)" : "var(--text-muted)", padding: "6px 4px", transition: "color var(--dur-fast)", position: "relative" }}>
            <Icon name={it.icon} style={{ width: 22, height: 22, strokeWidth: active ? 2.1 : 1.75 }} />
            <span style={{ fontSize: "11px", fontWeight: active ? "var(--fw-semibold)" : "var(--fw-medium)", fontFamily: "var(--font-sans)" }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
