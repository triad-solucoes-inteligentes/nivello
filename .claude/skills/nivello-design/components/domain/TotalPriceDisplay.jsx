import React from "react";

/** Format a number as BRL. Pass currency="Gs" prefix to override. */
function fmt(value, currency, decimals) {
  const n = Number(value || 0);
  const s = n.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return { prefix: currency, number: s };
}

/**
 * Nivello TotalPriceDisplay — emphasized money value.
 * Used for subtotais, total geral, item totals.
 */
export function TotalPriceDisplay({ value = 0, currency = "R$", label, size = "md", tone = "strong", decimals = 0, align = "left", style, ...rest }) {
  const { prefix, number } = fmt(value, currency, decimals);
  const sizes = { sm: 15, md: 20, lg: 26, xl: 34 }[size];
  const tones = { strong: "var(--text-strong)", brand: "var(--text-brand)", accent: "var(--terra-700)", muted: "var(--text-muted)" };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: align === "right" ? "flex-end" : "flex-start", ...style }} {...rest}>
      {label && <span className="nv-label" style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: 2 }}>{label}</span>}
      <span style={{ display: "inline-flex", alignItems: "baseline", gap: 4, fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", color: tones[tone], letterSpacing: "-0.01em" }}>
        <span style={{ fontSize: sizes * 0.62, fontWeight: "var(--fw-medium)", color: "var(--text-muted)" }}>{prefix}</span>
        <span style={{ fontSize: sizes, fontWeight: "var(--fw-bold)", lineHeight: 1 }}>{number}</span>
      </span>
    </div>
  );
}
