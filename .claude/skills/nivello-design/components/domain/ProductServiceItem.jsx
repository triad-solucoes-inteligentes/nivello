import React from "react";
import { Icon } from "../shared/Icon.jsx";
import { ProductTypeBadge } from "./ProductTypeBadge.jsx";

const money = (n) => "R$ " + Number(n || 0).toLocaleString("pt-BR");

/**
 * Nivello ProductServiceItem — a product/serviço/material row in a catalog
 * or picker. Shows type, name, description, unit, and total.
 */
export function ProductServiceItem({ product = {}, onClick, selected = false, action, compact = false, style, ...rest }) {
  const { name, description, quantity, unit, total, type = "servico" } = product;
  return (
    <div onClick={onClick} className={onClick ? "nv-listitem" : undefined}
      style={{ display: "flex", alignItems: "center", gap: 12, padding: compact ? "10px 12px" : "14px", background: selected ? "var(--brand-subtle)" : "var(--surface-card)", border: `1px solid ${selected ? "var(--brand-border)" : "var(--border-subtle)"}`, borderRadius: "var(--radius-md)", cursor: onClick ? "pointer" : "default", transition: "background var(--dur-fast), border-color var(--dur-fast)", ...style }} {...rest}>
      <span style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", background: type === "servico" ? "var(--type-service-bg)" : "var(--type-material-bg)" }}>
        <Icon name={type === "servico" ? "wrench" : "package"} style={{ width: 19, height: 19, color: type === "servico" ? "var(--type-service)" : "var(--type-material)" }} />
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "14px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
          {!compact && <ProductTypeBadge type={type} size="sm" />}
        </div>
        {description && <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{description}</div>}
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        {(quantity != null || unit) && <div style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{quantity} {unit}</div>}
        {total != null && <div style={{ fontSize: "14px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", marginTop: 2 }}>{money(total)}</div>}
      </div>
      {action}
    </div>
  );
}
