import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello PrintableQuoteHeader — the letterhead band for a printed/PDF quote.
 * Company identity (left) + quote meta (right). Deep-teal accent rule.
 */
export function PrintableQuoteHeader({ company = {}, quoteNumber, date, validity, logoSlot, style, ...rest }) {
  const { name = "Empresa", tagline, address, phone, email, taxId } = company;
  return (
    <div style={{ ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, paddingBottom: 18 }}>
        <div style={{ display: "flex", gap: 14, minWidth: 0 }}>
          {logoSlot || (
            <span style={{ width: 52, height: 52, borderRadius: "var(--radius-md)", background: "linear-gradient(160deg, var(--teal-500), var(--teal-700))", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="droplet" style={{ width: 28, height: 28, color: "#fff" }} />
            </span>
          )}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: "20px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", letterSpacing: "-0.01em" }}>{name}</div>
            {tagline && <div style={{ fontSize: "12px", color: "var(--text-brand)", fontWeight: "var(--fw-semibold)", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 2 }}>{tagline}</div>}
            <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: 6, lineHeight: 1.5 }}>
              {address && <div style={{ display: "flex", alignItems: "center", gap: 5 }}><Icon name="map-pin" style={{ width: 12, height: 12 }} />{address}</div>}
              {phone && <div style={{ display: "flex", alignItems: "center", gap: 5 }}><Icon name="phone" style={{ width: 12, height: 12 }} />{phone}</div>}
              {email && <div style={{ display: "flex", alignItems: "center", gap: 5 }}><Icon name="mail" style={{ width: 12, height: 12 }} />{email}</div>}
            </div>
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div className="nv-label" style={{ fontSize: "11px", color: "var(--text-muted)" }}>Orçamento</div>
          <div style={{ fontSize: "26px", fontWeight: "var(--fw-bold)", fontFamily: "var(--font-mono)", color: "var(--text-brand)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>Nº {quoteNumber}</div>
          <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: 6 }}>
            {date && <div>Data: <b style={{ color: "var(--text-body)" }}>{date}</b></div>}
            {validity && <div>Validade: <b style={{ color: "var(--text-body)" }}>{validity}</b></div>}
            {taxId && <div>RUC/CNPJ: <b style={{ color: "var(--text-body)" }}>{taxId}</b></div>}
          </div>
        </div>
      </div>
      <div style={{ height: 3, background: "linear-gradient(90deg, var(--teal-600), var(--teal-400) 60%, var(--terra-400))", borderRadius: 2 }} />
    </div>
  );
}
