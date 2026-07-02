import React from "react";
import { Icon } from "../shared/Icon.jsx";
import { QuoteStatusBadge } from "./QuoteStatusBadge.jsx";
import { TotalPriceDisplay } from "./TotalPriceDisplay.jsx";

/**
 * Nivello QuoteSummaryCard — a quote at-a-glance in lists/dashboard.
 * Shows number, client, obra, total, status, date.
 */
export function QuoteSummaryCard({ quote = {}, onClick, style, ...rest }) {
  const { number, name, clientName, workName, total, status = "rascunho", date, itemCount } = quote;
  return (
    <div onClick={onClick} className={onClick ? "nv-card-hover" : undefined}
      style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: 16, cursor: onClick ? "pointer" : "default", transition: "box-shadow var(--dur-base), transform var(--dur-base), border-color var(--dur-base)", ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {number && <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: "var(--fw-bold)", color: "var(--text-brand)", background: "var(--brand-subtle)", padding: "1px 7px", borderRadius: "var(--radius-sm)" }}>{number}</span>}
            <span style={{ fontSize: "14px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name || clientName}</span>
          </div>
          <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: 5, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {clientName && <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="building-2" style={{ width: 13, height: 13 }} />{clientName}</span>}
            {workName && <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="hard-hat" style={{ width: 13, height: 13 }} />{workName}</span>}
          </div>
        </div>
        <QuoteStatusBadge status={status} size="sm" />
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--border-subtle)" }}>
        <div style={{ fontSize: "12px", color: "var(--text-subtle)", display: "flex", flexDirection: "column", gap: 3 }}>
          {date && <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="calendar" style={{ width: 13, height: 13 }} />{date}</span>}
          {itemCount != null && <span>{itemCount} itens</span>}
        </div>
        <TotalPriceDisplay value={total} size="md" align="right" />
      </div>
    </div>
  );
}
