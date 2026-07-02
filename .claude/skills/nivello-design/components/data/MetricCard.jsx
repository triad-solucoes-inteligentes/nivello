import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello MetricCard — dashboard KPI tile.
 * icon + value + label + optional delta trend.
 */
export function MetricCard({ label, value, unit, icon, tone = "brand", delta, deltaDirection, hint, style, ...rest }) {
  const tones = {
    brand: { bg: "var(--brand-subtle)", fg: "var(--brand)" },
    accent: { bg: "var(--accent-subtle)", fg: "var(--accent)" },
    success: { bg: "var(--success-bg)", fg: "var(--success)" },
    warning: { bg: "var(--warning-bg)", fg: "var(--warning)" },
    info: { bg: "var(--info-bg)", fg: "var(--info)" },
    neutral: { bg: "var(--neutral-100)", fg: "var(--neutral-600)" },
  };
  const t = tones[tone] || tones.brand;
  const up = deltaDirection === "up";
  const deltaColor = deltaDirection ? (up ? "var(--success)" : "var(--danger)") : "var(--text-muted)";
  return (
    <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: 18, ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {icon && (
          <span style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: t.bg, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name={icon} style={{ width: 20, height: 20, color: t.fg }} />
          </span>
        )}
        {delta != null && (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: "12px", fontWeight: "var(--fw-semibold)", color: deltaColor }}>
            {deltaDirection && <Icon name={up ? "trending-up" : "trending-down"} style={{ width: 14, height: 14 }} />}
            {delta}
          </span>
        )}
      </div>
      <div style={{ marginTop: 14, display: "flex", alignItems: "baseline", gap: 5 }}>
        <span style={{ fontSize: "28px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", fontFamily: "var(--font-mono)", letterSpacing: "-0.02em", lineHeight: 1 }}>{value}</span>
        {unit && <span style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: "var(--fw-medium)" }}>{unit}</span>}
      </div>
      <div style={{ marginTop: 5, fontSize: "13px", color: "var(--text-muted)" }}>{label}</div>
      {hint && <div style={{ marginTop: 2, fontSize: "12px", color: "var(--text-subtle)" }}>{hint}</div>}
    </div>
  );
}
