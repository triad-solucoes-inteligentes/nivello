import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello MobileListItem — the mobile substitute for a table row.
 * Leading icon/avatar, title, subtitle, meta rows, trailing value + chevron.
 */
export function MobileListItem({ icon, iconTone = "brand", avatar, title, subtitle, meta, trailing, badge, onClick, showChevron = true, style, ...rest }) {
  const tones = { brand: { bg: "var(--brand-subtle)", fg: "var(--brand)" }, accent: { bg: "var(--accent-subtle)", fg: "var(--accent)" }, neutral: { bg: "var(--neutral-100)", fg: "var(--neutral-600)" }, success: { bg: "var(--success-bg)", fg: "var(--success)" } };
  const t = tones[iconTone] || tones.brand;
  return (
    <div onClick={onClick} className="nv-listitem" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "var(--surface-card)", cursor: onClick ? "pointer" : "default", minHeight: 64, transition: "background var(--dur-fast)", ...style }} {...rest}>
      {avatar}
      {!avatar && icon && (
        <span style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: t.bg, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name={icon} style={{ width: 20, height: 20, color: t.fg }} />
        </span>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "15px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
          {badge}
        </div>
        {subtitle && <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{subtitle}</div>}
        {meta && <div style={{ fontSize: "12px", color: "var(--text-subtle)", marginTop: 4, display: "flex", gap: 12, flexWrap: "wrap" }}>{meta}</div>}
      </div>
      {trailing && <div style={{ flexShrink: 0, textAlign: "right" }}>{trailing}</div>}
      {showChevron && onClick && <Icon name="chevron-right" style={{ width: 18, height: 18, color: "var(--text-subtle)", flexShrink: 0 }} />}
    </div>
  );
}
