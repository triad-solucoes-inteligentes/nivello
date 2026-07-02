import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello Alert — inline contextual message.
 * variants: info · success · warning · danger.
 */
export function Alert({ variant = "info", title, children, icon, onClose, style, ...rest }) {
  const map = {
    info: { bg: "var(--info-bg)", bd: "var(--info-border)", fg: "var(--info)", ic: "info" },
    success: { bg: "var(--success-bg)", bd: "var(--success-border)", fg: "var(--success)", ic: "check-circle-2" },
    warning: { bg: "var(--warning-bg)", bd: "var(--warning-border)", fg: "var(--warning)", ic: "alert-triangle" },
    danger: { bg: "var(--danger-bg)", bd: "var(--danger-border)", fg: "var(--danger)", ic: "alert-circle" },
  };
  const c = map[variant];
  return (
    <div role="alert" style={{ display: "flex", gap: 12, padding: "12px 14px", background: c.bg, border: `1px solid ${c.bd}`, borderRadius: "var(--radius-md)", ...style }} {...rest}>
      <Icon name={icon || c.ic} style={{ width: 18, height: 18, color: c.fg, flexShrink: 0, marginTop: 1 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontSize: "14px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", marginBottom: children ? 2 : 0 }}>{title}</div>}
        {children && <div style={{ fontSize: "13px", color: "var(--text-body)", lineHeight: 1.5 }}>{children}</div>}
      </div>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Fechar" style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-muted)", padding: 2, display: "inline-flex" }}>
          <Icon name="x" style={{ width: 16, height: 16 }} />
        </button>
      )}
    </div>
  );
}
