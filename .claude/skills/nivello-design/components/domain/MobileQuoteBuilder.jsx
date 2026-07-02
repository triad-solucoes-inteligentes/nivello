import React from "react";
import { Icon } from "../shared/Icon.jsx";
import { Stepper } from "../navigation/Stepper.jsx";
import { QuoteLineItem } from "./QuoteLineItem.jsx";
import { TotalPriceDisplay } from "./TotalPriceDisplay.jsx";
import { ProductTypeBadge } from "./ProductTypeBadge.jsx";

const STEPS = [
  { label: "Cliente & Obra" },
  { label: "Itens" },
  { label: "Resumo" },
];

/**
 * Nivello MobileQuoteBuilder — the mobile stepped flow for creating a quote.
 * Self-contained demo of the recommended UX: Stepper header, per-step body,
 * sticky total + advance bar. Wire real data via props for production use.
 */
export function MobileQuoteBuilder({ client, work, items = [], onAddItem, step: controlledStep, onStepChange, style, ...rest }) {
  const [internalStep, setInternalStep] = React.useState(0);
  const step = controlledStep != null ? controlledStep : internalStep;
  const setStep = (s) => { onStepChange ? onStepChange(s) : setInternalStep(s); };
  const total = items.reduce((s, it) => s + (it.quantity || 0) * (it.unitPrice || 0), 0);

  const Field = ({ label, value, icon, placeholder }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: "12px", fontWeight: "var(--fw-semibold)", color: "var(--text-body)" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 8, height: 48, padding: "0 14px", border: "1px solid var(--border-default)", borderRadius: "var(--radius-md)", background: "var(--surface-card)" }}>
        <Icon name={icon} style={{ width: 18, height: 18, color: "var(--text-subtle)" }} />
        <span style={{ fontSize: "15px", color: value ? "var(--text-strong)" : "var(--text-subtle)" }}>{value || placeholder}</span>
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--surface-page)", ...style }} {...rest}>
      {/* Header */}
      <div style={{ padding: "16px 16px 14px", background: "var(--surface-card)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div style={{ fontSize: "17px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", marginBottom: 14 }}>Novo orçamento</div>
        <Stepper steps={STEPS} current={step} onStepClick={setStep} />
      </div>
      {/* Body */}
      <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
        {step === 0 && (<>
          <Field label="Cliente" value={client?.name} icon="user" placeholder="Selecione o cliente" />
          <Field label="Obra" value={work?.name} icon="hard-hat" placeholder="Selecione a obra" />
          <Field label="Endereço da obra" value={work?.address} icon="map-pin" placeholder="—" />
        </>)}
        {step === 1 && (<>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "13px", fontWeight: "var(--fw-semibold)", color: "var(--text-muted)" }}>{items.length} itens adicionados</span>
            <button type="button" onClick={onAddItem} style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 36, padding: "0 12px", border: "1px dashed var(--brand)", borderRadius: "var(--radius-md)", background: "var(--brand-subtle)", color: "var(--text-brand)", fontSize: "13px", fontWeight: "var(--fw-semibold)", cursor: "pointer" }}>
              <Icon name="plus" style={{ width: 15, height: 15 }} />Adicionar
            </button>
          </div>
          <div style={{ border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden", background: "var(--surface-card)" }}>
            {items.map((it, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderBottom: i < items.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
                <span style={{ width: 32, height: 32, borderRadius: "var(--radius-sm)", flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", background: (it.type || "servico") === "servico" ? "var(--type-service-bg)" : "var(--type-material-bg)" }}>
                  <Icon name={(it.type || "servico") === "servico" ? "wrench" : "package"} style={{ width: 16, height: 16, color: (it.type || "servico") === "servico" ? "var(--type-service)" : "var(--type-material)" }} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "14px", fontWeight: "var(--fw-medium)", color: "var(--text-strong)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{it.quantity} {it.unit} × R$ {Number(it.unitPrice || 0).toLocaleString("pt-BR")}</div>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: "14px", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>R$ {Number((it.quantity || 0) * (it.unitPrice || 0)).toLocaleString("pt-BR")}</div>
              </div>
            ))}
          </div>
        </>)}
        {step === 2 && (<>
          <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><span style={{ color: "var(--text-muted)" }}>Cliente</span><b style={{ color: "var(--text-strong)" }}>{client?.name || "—"}</b></div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><span style={{ color: "var(--text-muted)" }}>Obra</span><b style={{ color: "var(--text-strong)" }}>{work?.name || "—"}</b></div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><span style={{ color: "var(--text-muted)" }}>Itens</span><b style={{ color: "var(--text-strong)" }}>{items.length}</b></div>
          </div>
        </>)}
      </div>
      {/* Sticky footer */}
      <div style={{ padding: "12px 16px", background: "var(--surface-card)", borderTop: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 12 }}>
        <TotalPriceDisplay value={total} label="Total" size="md" />
        <button type="button" onClick={() => setStep(Math.min(step + 1, STEPS.length - 1))}
          style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 8, height: 48, padding: "0 22px", border: "none", borderRadius: "var(--radius-md)", background: "var(--brand)", color: "#fff", fontSize: "15px", fontWeight: "var(--fw-semibold)", cursor: "pointer", boxShadow: "var(--shadow-sm)" }}>
          {step === STEPS.length - 1 ? "Gerar orçamento" : "Continuar"}
          <Icon name={step === STEPS.length - 1 ? "check" : "arrow-right"} style={{ width: 18, height: 18 }} />
        </button>
      </div>
    </div>
  );
}
