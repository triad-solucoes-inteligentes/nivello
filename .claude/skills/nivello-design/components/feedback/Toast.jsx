import React from "react";
import { Icon } from "../shared/Icon.jsx";

/** Nivello Toast — floating transient notification. Render inside a fixed stack. */
export function Toast({ variant = "info", title, description, onClose, style, ...rest }) {
  const map = {
    info: { fg: "var(--info)", ic: "info" },
    success: { fg: "var(--success)", ic: "check-circle-2" },
    warning: { fg: "var(--warning)", ic: "alert-triangle" },
    danger: { fg: "var(--danger)", ic: "alert-circle" },
  };
  const c = map[variant];
  return (
    <div role="status" style={{ display: "flex", gap: 12, alignItems: "flex-start", width: 360, maxWidth: "calc(100vw - 32px)", padding: "13px 14px", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", animation: "nv-slide-up var(--dur-slow) var(--ease-out)", ...style }} {...rest}>
      <span style={{ width: 30, height: 30, borderRadius: "var(--radius-md)", display: "inline-flex", alignItems: "center", justifyContent: "center", background: `color-mix(in srgb, ${c.fg} 12%, transparent)`, flexShrink: 0 }}>
        <Icon name={c.ic} style={{ width: 17, height: 17, color: c.fg }} />
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontSize: "14px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{title}</div>}
        {description && <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: 2, lineHeight: 1.45 }}>{description}</div>}
      </div>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Fechar" style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-subtle)", padding: 2, display: "inline-flex" }}>
          <Icon name="x" style={{ width: 16, height: 16 }} />
        </button>
      )}
    </div>
  );
}
