import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello Modal — centered dialog with backdrop.
 * Use for confirmations, quick forms, quote-generated success.
 */
export function Modal({ open, onClose, title, description, children, footer, size = "md", icon, iconTone = "brand", closeOnBackdrop = true, style, ...rest }) {
  if (!open) return null;
  const width = { sm: 400, md: 520, lg: 680 }[size];
  const tones = { brand: { bg: "var(--brand-subtle)", fg: "var(--brand)" }, success: { bg: "var(--success-bg)", fg: "var(--success)" }, warning: { bg: "var(--warning-bg)", fg: "var(--warning)" }, danger: { bg: "var(--danger-bg)", fg: "var(--danger)" } };
  const t = tones[iconTone] || tones.brand;
  return (
    <div onClick={closeOnBackdrop ? onClose : undefined}
      style={{ position: "fixed", inset: 0, background: "var(--surface-overlay)", backdropFilter: "blur(2px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, zIndex: "var(--z-modal)", animation: "nv-fade-in var(--dur-base) var(--ease-out)" }}>
      <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true"
        style={{ width: "100%", maxWidth: width, maxHeight: "90vh", display: "flex", flexDirection: "column", background: "var(--surface-card)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-xl)", overflow: "hidden", animation: "nv-slide-up var(--dur-slow) var(--ease-out)", ...style }} {...rest}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "20px 22px 0" }}>
          {icon && (
            <span style={{ width: 42, height: 42, borderRadius: "var(--radius-md)", background: t.bg, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name={icon} style={{ width: 21, height: 21, color: t.fg }} />
            </span>
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            {title && <div style={{ fontSize: "18px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", letterSpacing: "-0.01em" }}>{title}</div>}
            {description && <div style={{ fontSize: "14px", color: "var(--text-muted)", marginTop: 4, lineHeight: 1.5 }}>{description}</div>}
          </div>
          <button type="button" onClick={onClose} aria-label="Fechar" style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-muted)", padding: 4, display: "inline-flex", borderRadius: "var(--radius-sm)", flexShrink: 0 }}>
            <Icon name="x" style={{ width: 19, height: 19 }} />
          </button>
        </div>
        {children && <div style={{ padding: "18px 22px", overflowY: "auto" }}>{children}</div>}
        {footer && <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, padding: "14px 22px", borderTop: "1px solid var(--border-subtle)", background: "var(--surface-page)" }}>{footer}</div>}
      </div>
    </div>
  );
}
