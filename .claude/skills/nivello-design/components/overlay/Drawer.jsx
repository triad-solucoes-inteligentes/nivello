import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello Drawer — side/bottom sliding panel.
 * side="right" for detail/edit; side="bottom" for mobile filters & sheets.
 */
export function Drawer({ open, onClose, title, children, footer, side = "right", size = 420, style, ...rest }) {
  if (!open) return null;
  const bottom = side === "bottom";
  const panel = bottom
    ? { width: "100%", maxHeight: "85vh", borderRadius: "var(--radius-xl) var(--radius-xl) 0 0", animation: "nv-slide-up var(--dur-slow) var(--ease-out)" }
    : { width: size, maxWidth: "92vw", height: "100%", borderRadius: 0, animation: "nv-slide-in-right var(--dur-slow) var(--ease-out)" };
  return (
    <div onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "var(--surface-overlay)", display: "flex", alignItems: bottom ? "flex-end" : "stretch", justifyContent: side === "left" ? "flex-start" : "flex-end", zIndex: "var(--z-drawer)", animation: "nv-fade-in var(--dur-base)" }}>
      <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true"
        style={{ display: "flex", flexDirection: "column", background: "var(--surface-card)", boxShadow: "var(--shadow-xl)", overflow: "hidden", ...panel, ...style }} {...rest}>
        {bottom && <div style={{ width: 40, height: 4, borderRadius: 4, background: "var(--neutral-300)", margin: "10px auto 2px" }} />}
        {title && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "16px 20px", borderBottom: "1px solid var(--border-subtle)" }}>
            <span style={{ fontSize: "16px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{title}</span>
            <button type="button" onClick={onClose} aria-label="Fechar" style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-muted)", padding: 4, display: "inline-flex" }}>
              <Icon name="x" style={{ width: 19, height: 19 }} />
            </button>
          </div>
        )}
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>{children}</div>
        {footer && <div style={{ display: "flex", gap: 10, padding: "14px 20px", borderTop: "1px solid var(--border-subtle)", background: "var(--surface-page)" }}>{footer}</div>}
      </div>
    </div>
  );
}
