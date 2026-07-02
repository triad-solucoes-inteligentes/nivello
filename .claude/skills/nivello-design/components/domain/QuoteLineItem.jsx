import React from "react";
import { Icon } from "../shared/Icon.jsx";
import { ProductTypeBadge } from "./ProductTypeBadge.jsx";

const money = (n) => Number(n || 0).toLocaleString("pt-BR");

/**
 * Nivello QuoteLineItem — an editable line inside the quote builder.
 * Editable qty/unit/unit-price; computes line total. Read-only variant too.
 */
export function QuoteLineItem({ item = {}, editable = false, onChange, onRemove, index, style, ...rest }) {
  const { name, description, quantity = 0, unit = "un", unitPrice = 0, type = "servico" } = item;
  const total = quantity * unitPrice;
  const set = (patch) => onChange && onChange({ ...item, ...patch });
  const inputStyle = { width: "100%", height: 32, fontFamily: "var(--font-mono)", fontSize: "13px", textAlign: "right", color: "var(--text-strong)", background: "var(--surface-card)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-sm)", padding: "0 8px", outline: "none" };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "var(--surface-card)", borderBottom: "1px solid var(--border-subtle)", ...style }} {...rest}>
      <span style={{ width: 28, height: 28, borderRadius: "var(--radius-sm)", flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", background: type === "servico" ? "var(--type-service-bg)" : "var(--type-material-bg)" }}>
        <Icon name={type === "servico" ? "wrench" : "package"} style={{ width: 15, height: 15, color: type === "servico" ? "var(--type-service)" : "var(--type-material)" }} />
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: "14px", fontWeight: "var(--fw-medium)", color: "var(--text-strong)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</div>
        {description && <div style={{ fontSize: "12px", color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{description}</div>}
      </div>
      {editable ? (
        <>
          <input type="number" value={quantity} onChange={(e) => set({ quantity: Number(e.target.value) })} style={{ ...inputStyle, width: 62 }} aria-label="Quantidade" />
          <input value={unit} onChange={(e) => set({ unit: e.target.value })} style={{ ...inputStyle, width: 52, textAlign: "center" }} aria-label="Unidade" />
          <input type="number" value={unitPrice} onChange={(e) => set({ unitPrice: Number(e.target.value) })} style={{ ...inputStyle, width: 96 }} aria-label="Preço unitário" />
          <div style={{ width: 110, textAlign: "right", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: "14px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>R$ {money(total)}</div>
          {onRemove && <button type="button" onClick={onRemove} aria-label="Remover" style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-subtle)", padding: 4, display: "inline-flex" }}><Icon name="trash-2" style={{ width: 16, height: 16 }} /></button>}
        </>
      ) : (
        <>
          <div style={{ width: 70, textAlign: "right", fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--text-muted)" }}>{quantity} {unit}</div>
          <div style={{ width: 100, textAlign: "right", fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--text-muted)" }}>R$ {money(unitPrice)}</div>
          <div style={{ width: 120, textAlign: "right", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: "14px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>R$ {money(total)}</div>
        </>
      )}
    </div>
  );
}
