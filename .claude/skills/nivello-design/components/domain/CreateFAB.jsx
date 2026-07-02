import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello CreateFAB — floating action button (mobile) to create a new
 * orçamento / obra / cliente. Optional speed-dial actions.
 */
export function CreateFAB({ icon = "plus", label, actions, open = false, onToggle, onClick, style, ...rest }) {
  const hasMenu = actions && actions.length > 0;
  return (
    <div style={{ position: "fixed", right: 20, bottom: "calc(var(--bottomnav-h) + 16px)", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, zIndex: "var(--z-fab)", ...style }} {...rest}>
      {hasMenu && open && actions.map((a, i) => (
        <button key={i} onClick={a.onClick}
          style={{ display: "flex", alignItems: "center", gap: 10, border: "none", cursor: "pointer", background: "transparent", animation: "nv-slide-up var(--dur-base) var(--ease-out)" }}>
          <span style={{ fontSize: "13px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", background: "var(--surface-card)", padding: "5px 10px", borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-sm)" }}>{a.label}</span>
          <span style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-md)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name={a.icon} style={{ width: 20, height: 20, color: "var(--brand)" }} />
          </span>
        </button>
      ))}
      <button type="button" aria-label={label || "Criar"} onClick={hasMenu ? onToggle : onClick}
        style={{ width: 56, height: 56, borderRadius: "50%", border: "none", cursor: "pointer", background: "var(--brand)", color: "#fff", boxShadow: "var(--shadow-lg)", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "transform var(--dur-base) var(--ease-spring), background var(--dur-base)" }}>
        <Icon name={hasMenu && open ? "x" : icon} style={{ width: 26, height: 26, transition: "transform var(--dur-base)", transform: hasMenu && open ? "rotate(90deg)" : "none" }} />
      </button>
    </div>
  );
}
