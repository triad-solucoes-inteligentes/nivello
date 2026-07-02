import React from "react";

/** Nivello Textarea — multi-line field with label, hint, error. */
export function Textarea({ label, value, onChange, placeholder, rows = 4, hint, error, disabled = false, required = false, id, style, ...rest }) {
  const invalid = Boolean(error);
  const tid = id || (label ? `nv-ta-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label htmlFor={tid} style={{ fontSize: "12px", fontWeight: "var(--fw-semibold)", color: "var(--text-body)" }}>
          {label}{required && <span style={{ color: "var(--danger)", marginLeft: 2 }}>*</span>}
        </label>
      )}
      <textarea
        id={tid} value={value} onChange={onChange} placeholder={placeholder} rows={rows} disabled={disabled}
        className="nv-focusable"
        style={{
          width: "100%", fontFamily: "var(--font-sans)", fontSize: "14px", lineHeight: "1.5", color: "var(--text-strong)",
          background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
          border: `1px solid ${invalid ? "var(--danger)" : "var(--border-default)"}`, borderRadius: "var(--radius-md)",
          padding: "10px 12px", outline: "none", resize: "vertical", transition: "border-color var(--dur-base), box-shadow var(--dur-base)",
        }}
        {...rest}
      />
      {(hint || error) && <span style={{ fontSize: "12px", color: invalid ? "var(--danger)" : "var(--text-muted)" }}>{error || hint}</span>}
    </div>
  );
}
