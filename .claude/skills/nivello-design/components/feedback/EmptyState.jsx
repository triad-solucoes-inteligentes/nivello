import React from "react";
import { Icon } from "../shared/Icon.jsx";

/** Nivello EmptyState — friendly placeholder for empty lists/screens. */
export function EmptyState({ icon = "inbox", title, description, action, compact = false, style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: compact ? "28px 20px" : "48px 24px", ...style }} {...rest}>
      <span style={{ width: compact ? 44 : 56, height: compact ? 44 : 56, borderRadius: "var(--radius-lg)", background: "var(--brand-subtle)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
        <Icon name={icon} style={{ width: compact ? 22 : 26, height: compact ? 22 : 26, color: "var(--brand)" }} />
      </span>
      <div style={{ fontSize: compact ? "15px" : "16px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{title}</div>
      {description && <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: 6, maxWidth: 320, lineHeight: 1.5 }}>{description}</div>}
      {action && <div style={{ marginTop: 18 }}>{action}</div>}
    </div>
  );
}
