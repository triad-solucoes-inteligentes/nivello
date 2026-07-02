import React from "react";
import { Icon } from "../shared/Icon.jsx";

/** Nivello SearchBar — search input with icon and optional clear button. */
export function SearchBar({ value, onChange, onClear, placeholder = "Buscar…", size = "md", fullWidth = true, style, ...rest }) {
  const height = { sm: "var(--control-sm)", md: "var(--control-md)", lg: "var(--control-lg)" }[size];
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", width: fullWidth ? "100%" : "auto", ...style }}>
      <Icon name="search" style={{ position: "absolute", left: 12, width: 17, height: 17, color: "var(--text-subtle)", pointerEvents: "none" }} />
      <input
        type="search" value={value} onChange={onChange} placeholder={placeholder} className="nv-focusable"
        style={{
          width: "100%", height, fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--text-strong)",
          background: "var(--surface-card)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-md)",
          padding: `0 ${value ? 36 : 12}px 0 36px`, outline: "none",
          transition: "border-color var(--dur-base), box-shadow var(--dur-base)",
        }}
        {...rest}
      />
      {value && (
        <button type="button" onClick={onClear} aria-label="Limpar"
          style={{ position: "absolute", right: 8, width: 24, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center", border: "none", background: "transparent", cursor: "pointer", color: "var(--text-muted)", borderRadius: "var(--radius-sm)" }}>
          <Icon name="x" style={{ width: 15, height: 15 }} />
        </button>
      )}
    </div>
  );
}
