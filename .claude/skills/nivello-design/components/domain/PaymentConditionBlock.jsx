import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello PaymentConditionBlock — condições de pagamento, prazo, validade.
 * Mirrors the "CONDICIONES DE PAGO / PLAZO / VALIDEZ" block of a quote.
 */
export function PaymentConditionBlock({ paymentTerms, deliveryTerm, validity, observations, layout = "grid", style, ...rest }) {
  const rows = [
    { icon: "credit-card", label: "Condições de pagamento", value: paymentTerms },
    { icon: "truck", label: "Prazo de entrega", value: deliveryTerm },
    { icon: "calendar-check", label: "Validade do orçamento", value: validity },
  ].filter((r) => r.value);
  return (
    <div style={{ ...style }} {...rest}>
      <div style={{ display: layout === "grid" ? "grid" : "flex", gridTemplateColumns: layout === "grid" ? "repeat(auto-fit, minmax(180px, 1fr))" : undefined, flexDirection: layout === "stack" ? "column" : undefined, gap: 12 }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: 12, background: "var(--surface-sunken)", borderRadius: "var(--radius-md)" }}>
            <span style={{ width: 32, height: 32, borderRadius: "var(--radius-sm)", background: "var(--brand-subtle)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name={r.icon} style={{ width: 16, height: 16, color: "var(--brand)" }} />
            </span>
            <div style={{ minWidth: 0 }}>
              <div className="nv-label" style={{ fontSize: "10px", color: "var(--text-muted)" }}>{r.label}</div>
              <div style={{ fontSize: "13px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", marginTop: 2 }}>{r.value}</div>
            </div>
          </div>
        ))}
      </div>
      {observations && (
        <div style={{ display: "flex", gap: 8, marginTop: 12, padding: "10px 12px", background: "var(--warning-bg)", border: "1px solid var(--warning-border)", borderRadius: "var(--radius-md)" }}>
          <Icon name="info" style={{ width: 15, height: 15, color: "var(--warning)", flexShrink: 0, marginTop: 1 }} />
          <div style={{ fontSize: "12px", color: "var(--text-body)", lineHeight: 1.5 }}><b>Obs:</b> {observations}</div>
        </div>
      )}
    </div>
  );
}
