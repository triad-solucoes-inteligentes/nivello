import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello Input — labelled text field with optional icon, states, hint.
 */
export function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  suffix,
  hint,
  error,
  disabled = false,
  required = false,
  size = "md",
  id,
  style,
  ...rest
}) {
  const height = { sm: "var(--control-sm)", md: "var(--control-md)", lg: "var(--control-lg)" }[size];
  const invalid = Boolean(error);
  const inputId = id || (label ? `nv-inp-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label htmlFor={inputId} className="nv-label" style={{ fontSize: "12px", fontWeight: "var(--fw-semibold)", color: "var(--text-body)", letterSpacing: "0.01em", textTransform: "none" }}>
          {label}{required && <span style={{ color: "var(--danger)", marginLeft: 2 }}>*</span>}
        </label>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {icon && <Icon name={icon} style={{ position: "absolute", left: 12, width: 17, height: 17, color: "var(--text-subtle)", pointerEvents: "none" }} />}
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="nv-focusable"
          style={{
            width: "100%", height, fontFamily: "var(--font-sans)", fontSize: size === "sm" ? "13px" : "14px",
            color: "var(--text-strong)", background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
            border: `1px solid ${invalid ? "var(--danger)" : "var(--border-default)"}`, borderRadius: "var(--radius-md)",
            padding: `0 ${suffix ? 44 : 12}px 0 ${icon ? 36 : 12}px`, outline: "none",
            transition: "border-color var(--dur-base), box-shadow var(--dur-base)",
            cursor: disabled ? "not-allowed" : "text",
          }}
          {...rest}
        />
        {suffix && <span style={{ position: "absolute", right: 12, fontSize: "13px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{suffix}</span>}
      </div>
      {(hint || error) && (
        <span style={{ fontSize: "12px", color: invalid ? "var(--danger)" : "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          {invalid && <Icon name="alert-circle" style={{ width: 13, height: 13 }} />}
          {error || hint}
        </span>
      )}
    </div>
  );
}
