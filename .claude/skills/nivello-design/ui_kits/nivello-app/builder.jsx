/* Nivello UI kit — desktop quote builder screen (editable) */
(function () {
  const NS = window.NivelloDesignSystem_c06109;
  const { Stepper, Select, Button, QuoteLineItem, ProductServiceItem, TotalPriceDisplay, Tabs, Card, Breadcrumb, SearchBar } = NS;
  const D = window.NivelloData;
  const money = D.money;

  function QuoteBuilder({ onBack, onGenerate }) {
    const [step, setStep] = React.useState(1);
    const [tab, setTab] = React.useState("servicos");
    const [lines, setLines] = React.useState(D.quoteItems.map(i => ({ ...i })));
    const setLine = (idx, v) => setLines(ls => ls.map((l, i) => i === idx ? v : l));
    const remove = (idx) => setLines(ls => ls.filter((_, i) => i !== idx));
    const shown = lines.map((l, i) => ({ l, i })).filter(({ l }) => tab === "servicos" ? (l.type || "servico") === "servico" : l.type === "material");
    const total = lines.reduce((s, l) => s + (l.quantity || 0) * (l.unitPrice || 0), 0);
    const servTotal = lines.filter(l => (l.type || "servico") === "servico").reduce((s, l) => s + l.quantity * l.unitPrice, 0);
    const matTotal = lines.filter(l => l.type === "material").reduce((s, l) => s + l.quantity * l.unitPrice, 0);

    return React.createElement("div", null,
      React.createElement(Breadcrumb, { style: { marginBottom: 14 }, items: [{ label: "Orçamentos", icon: "file-text" }, { label: "Novo orçamento" }], onNavigate: onBack }),
      React.createElement("div", { style: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "18px 22px", marginBottom: 18, boxShadow: "var(--shadow-sm)" } },
        React.createElement(Stepper, { steps: [{ label: "Cliente & Obra" }, { label: "Itens" }, { label: "Resumo" }, { label: "Enviar" }], current: step, onStepClick: setStep })),

      step === 0 && React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 640 } },
        React.createElement(Select, { label: "Cliente", value: "c1", options: D.clients.map(c => ({ value: c.id, label: c.name })) }),
        React.createElement(Select, { label: "Obra", value: "w1", options: D.works.map(w => ({ value: w.id, label: w.name })) })),

      step === 1 && React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 300px", gap: 18, alignItems: "start" } },
        React.createElement("div", null,
          React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 } },
            React.createElement(Tabs, { variant: "pill", value: tab, onChange: setTab, items: [{ value: "servicos", label: "Serviços", count: lines.filter(l => (l.type || "servico") === "servico").length }, { value: "materiais", label: "Materiais", count: lines.filter(l => l.type === "material").length }] }),
            React.createElement(Button, { variant: "secondary", size: "sm", icon: "plus" }, "Adicionar item")),
          React.createElement("div", { style: { border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--surface-card)" } },
            React.createElement("div", { style: { display: "flex", gap: 12, padding: "9px 14px", background: "var(--surface-sunken)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--text-muted)" } },
              React.createElement("span", { style: { flex: 1, marginLeft: 40 } }, "Descrição"),
              React.createElement("span", { style: { width: 62, textAlign: "right" } }, "Qtd"),
              React.createElement("span", { style: { width: 52, textAlign: "center" } }, "Un"),
              React.createElement("span", { style: { width: 96, textAlign: "right" } }, "P. Unit."),
              React.createElement("span", { style: { width: 110, textAlign: "right" } }, "Total"),
              React.createElement("span", { style: { width: 24 } })),
            shown.map(({ l, i }) => React.createElement(QuoteLineItem, { key: i, item: l, editable: true, onChange: v => setLine(i, v), onRemove: () => remove(i) })))),
        React.createElement(Card, { title: "Resumo" },
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 13 } }, React.createElement("span", { style: { color: "var(--text-muted)" } }, "Subtotal serviços"), React.createElement("b", { style: { fontFamily: "var(--font-mono)", color: "var(--type-service)" } }, "R$ " + money(servTotal))),
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 13 } }, React.createElement("span", { style: { color: "var(--text-muted)" } }, "Subtotal materiais"), React.createElement("b", { style: { fontFamily: "var(--font-mono)", color: "var(--type-material)" } }, "R$ " + money(matTotal))),
            React.createElement("div", { style: { height: 1, background: "var(--border-subtle)" } }),
            React.createElement(TotalPriceDisplay, { value: total, label: "Total geral", size: "lg", tone: "brand" }),
            React.createElement(Button, { variant: "primary", fullWidth: true, icon: "file-check", onClick: onGenerate }, "Gerar orçamento"))))
      ,
      step >= 2 && React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: 40 } },
        React.createElement(Button, { variant: "primary", icon: "file-text", onClick: onGenerate }, "Visualizar orçamento gerado")));
  }
  window.NivelloBuilder = { QuoteBuilder };
})();
