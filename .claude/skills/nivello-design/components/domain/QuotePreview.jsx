import React from "react";
import { Icon } from "../shared/Icon.jsx";
import { PrintableQuoteHeader } from "./PrintableQuoteHeader.jsx";
import { PaymentConditionBlock } from "./PaymentConditionBlock.jsx";

const money = (n) => Number(n || 0).toLocaleString("pt-BR");

function ItemTable({ title, icon, color, items }) {
  const subtotal = items.reduce((s, it) => s + (it.quantity || 0) * (it.unitPrice || 0), 0);
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <span style={{ width: 24, height: 24, borderRadius: "var(--radius-sm)", background: color.bg, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name={icon} style={{ width: 14, height: 14, color: color.fg }} />
        </span>
        <span style={{ fontSize: "13px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{title}</span>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "7px 10px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", borderBottom: "1.5px solid var(--border-default)" }}>Descrição</th>
            <th style={{ textAlign: "right", padding: "7px 10px", width: 60, fontSize: "10px", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1.5px solid var(--border-default)" }}>Qtd</th>
            <th style={{ textAlign: "center", padding: "7px 10px", width: 50, fontSize: "10px", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1.5px solid var(--border-default)" }}>Un</th>
            <th style={{ textAlign: "right", padding: "7px 10px", width: 110, fontSize: "10px", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1.5px solid var(--border-default)" }}>P. Unit.</th>
            <th style={{ textAlign: "right", padding: "7px 10px", width: 120, fontSize: "10px", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1.5px solid var(--border-default)" }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it, i) => (
            <tr key={i}>
              <td style={{ padding: "8px 10px", color: "var(--text-body)", borderBottom: "1px solid var(--border-subtle)" }}>
                <div style={{ fontWeight: "var(--fw-medium)", color: "var(--text-strong)" }}>{it.name}</div>
                {it.description && <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{it.description}</div>}
              </td>
              <td style={{ padding: "8px 10px", textAlign: "right", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", color: "var(--text-body)", borderBottom: "1px solid var(--border-subtle)" }}>{it.quantity}</td>
              <td style={{ padding: "8px 10px", textAlign: "center", color: "var(--text-muted)", borderBottom: "1px solid var(--border-subtle)" }}>{it.unit}</td>
              <td style={{ padding: "8px 10px", textAlign: "right", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", color: "var(--text-body)", borderBottom: "1px solid var(--border-subtle)" }}>{money(it.unitPrice)}</td>
              <td style={{ padding: "8px 10px", textAlign: "right", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", borderBottom: "1px solid var(--border-subtle)" }}>{money(it.quantity * it.unitPrice)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={4} style={{ padding: "8px 10px", textAlign: "right", fontSize: "12px", fontWeight: "var(--fw-semibold)", color: "var(--text-muted)" }}>Subtotal {title.toLowerCase()}</td>
            <td style={{ padding: "8px 10px", textAlign: "right", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontWeight: "var(--fw-bold)", color: color.fg }}>R$ {money(subtotal)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/**
 * Nivello QuotePreview — the elegant, print-ready orçamento document.
 * Composes header, client/obra blocks, serviços & materiais tables,
 * grand total, and payment conditions. Feed items with { type }.
 */
export function QuotePreview({ company = {}, client = {}, work = {}, quoteNumber, date, validity, items = [], paymentTerms, deliveryTerm, observations, currency = "R$", style, ...rest }) {
  const services = items.filter((i) => (i.type || "servico") === "servico");
  const materials = items.filter((i) => i.type === "material");
  const total = items.reduce((s, it) => s + (it.quantity || 0) * (it.unitPrice || 0), 0);
  const InfoBlock = ({ label, icon, lines }) => (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div className="nv-label" style={{ fontSize: "10px", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5, marginBottom: 6 }}>
        <Icon name={icon} style={{ width: 13, height: 13 }} />{label}
      </div>
      {lines.filter(Boolean).map((l, i) => <div key={i} style={{ fontSize: "13px", color: i === 0 ? "var(--text-strong)" : "var(--text-body)", fontWeight: i === 0 ? "var(--fw-semibold)" : "var(--fw-regular)", lineHeight: 1.5 }}>{l}</div>)}
    </div>
  );
  return (
    <div style={{ background: "#fff", padding: "36px 40px", maxWidth: 820, margin: "0 auto", fontFamily: "var(--font-sans)", color: "var(--text-body)", ...style }} {...rest}>
      <PrintableQuoteHeader company={company} quoteNumber={quoteNumber} date={date} validity={validity} />
      <div style={{ display: "flex", gap: 24, padding: "18px 0", borderBottom: "1px solid var(--border-subtle)", marginBottom: 22 }}>
        <InfoBlock label="Cliente" icon="user" lines={[client.name, client.address, client.cellphone]} />
        <InfoBlock label="Obra" icon="hard-hat" lines={[work.name, work.address, work.description]} />
      </div>
      {services.length > 0 && <ItemTable title="Serviços" icon="wrench" color={{ fg: "var(--type-service)", bg: "var(--type-service-bg)" }} items={services} />}
      {materials.length > 0 && <ItemTable title="Materiais" icon="package" color={{ fg: "var(--type-material)", bg: "var(--type-material-bg)" }} items={materials} />}
      {/* Grand total */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8, marginBottom: 24 }}>
        <div style={{ minWidth: 300, background: "var(--surface-deep)", borderRadius: "var(--radius-lg)", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "13px", fontWeight: "var(--fw-semibold)", color: "#a9cdd6", textTransform: "uppercase", letterSpacing: "0.05em" }}>Total geral</span>
          <span style={{ fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", color: "#fff", fontSize: "26px", fontWeight: "var(--fw-bold)", letterSpacing: "-0.01em" }}>
            <span style={{ fontSize: "16px", color: "#7fbecb", marginRight: 4 }}>{currency}</span>{money(total)}
          </span>
        </div>
      </div>
      <PaymentConditionBlock paymentTerms={paymentTerms} deliveryTerm={deliveryTerm} validity={validity} observations={observations} />
    </div>
  );
}
