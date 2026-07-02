import React from "react";
import { Icon } from "../shared/Icon.jsx";

/** Nivello Select — native-styled dropdown with label and chevron. */
export function Select({ label, value, onChange, options = [], placeholder = "Selecione…", hint, error, disabled = false, required = false, size = "md", id, style, ...rest }) {
  const height = { sm: "var(--control-sm)", md: "var(--control-md)", lg: "var(--control-lg)" }[size];
  const invalid = Boolean(error);
  const sid = id || (label ? `nv-sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const norm = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label htmlFor={sid} style={{ fontSize: "12px", fontWeight: "var(--fw-semibold)", color: "var(--text-body)" }}>
          {label}{required && <span style={{ color: "var(--danger)", marginLeft: 2 }}>*</span>}
        </label>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <select
          id={sid} value={value} onChange={onChange} disabled={disabled} className="nv-focusable"
          style={{
            width: "100%", height, appearance: "none", fontFamily: "var(--font-sans)", fontSize: "14px",
            color: value ? "var(--text-strong)" : "var(--text-subtle)",
            background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
            border: `1px solid ${invalid ? "var(--danger)" : "var(--border-default)"}`, borderRadius: "var(--radius-md)",
            padding: "0 36px 0 12px", outline: "none", cursor: disabled ? "not-allowed" : "pointer",
            transition: "border-color var(--dur-base), box-shadow var(--dur-base)",
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {norm.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <Icon name="chevron-down" style={{ position: "absolute", right: 12, width: 17, height: 17, color: "var(--text-muted)", pointerEvents: "none" }} />
      </div>
      {(hint || error) && <span style={{ fontSize: "12px", color: invalid ? "var(--danger)" : "var(--text-muted)" }}>{error || hint}</span>}
    </div>
  );
}
