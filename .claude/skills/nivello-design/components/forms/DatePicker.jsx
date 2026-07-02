import React from "react";
import { Icon } from "../shared/Icon.jsx";

/** Nivello DatePicker — date field styled to match Input, with calendar icon. */
export function DatePicker({ label, value, onChange, hint, error, disabled = false, required = false, size = "md", min, max, id, style, ...rest }) {
  const height = { sm: "var(--control-sm)", md: "var(--control-md)", lg: "var(--control-lg)" }[size];
  const invalid = Boolean(error);
  const did = id || (label ? `nv-dp-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label htmlFor={did} style={{ fontSize: "12px", fontWeight: "var(--fw-semibold)", color: "var(--text-body)" }}>
          {label}{required && <span style={{ color: "var(--danger)", marginLeft: 2 }}>*</span>}
        </label>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <Icon name="calendar" style={{ position: "absolute", left: 12, width: 17, height: 17, color: "var(--text-subtle)", pointerEvents: "none" }} />
        <input
          id={did} type="date" value={value} onChange={onChange} disabled={disabled} min={min} max={max} className="nv-focusable"
          style={{
            width: "100%", height, fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--text-strong)",
            background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
            border: `1px solid ${invalid ? "var(--danger)" : "var(--border-default)"}`, borderRadius: "var(--radius-md)",
            padding: "0 12px 0 36px", outline: "none", cursor: disabled ? "not-allowed" : "text",
            transition: "border-color var(--dur-base), box-shadow var(--dur-base)",
          }}
          {...rest}
        />
      </div>
      {(hint || error) && <span style={{ fontSize: "12px", color: invalid ? "var(--danger)" : "var(--text-muted)" }}>{error || hint}</span>}
    </div>
  );
}
