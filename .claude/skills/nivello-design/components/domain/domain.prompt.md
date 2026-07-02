# Nivello — Domínio (well-drilling)

Domain components tuned to the Nivello quote/obra vocabulary (derived from a real presupuesto de perfuração).

```jsx
<ProductTypeBadge type="servico" />   {/* teal */}   <ProductTypeBadge type="material" /> {/* ocre */}
<QuoteStatusBadge status="aprovado" />
<DeadlineIndicator date="2026-04-16" label="Prazo" />
<ClientCard client={{name,address,cellphone}} worksCount quotesCount onClick />
<WorkCard work={{name,address,deadline}} clientName status="andamento" progress={68} />
<QuoteSummaryCard quote={{number,clientName,total,status,date}} />
<QuoteLineItem item={line} editable onChange onRemove />
<TotalPriceDisplay value={33000000} label="Total geral" size="lg" />
<WorkTimeline events={[…]} />
<PaymentConditionBlock paymentTerms deliveryTerm validity observations />
<QuotePreview company client work items paymentTerms … />  {/* print/PDF */}
<MobileQuoteBuilder client work items onAddItem />          {/* stepped mobile flow */}
<CreateFAB actions={[{label:"Orçamento",icon:"file-text"}, …]} />
```

- **Serviço vs Material** is the core visual distinction: serviço=teal+wrench, material=ocre+package. Every item component honors `type`.
- **QuoteStatusBadge**: rascunho · enviado · aprovado · recusado · expirado.
- **QuotePreview** is the elegant, print-ready document (letterhead + client/obra blocks + separated serviços/materiais tables + dark total band + condições). Feed items with `{type}`; it groups & subtotals automatically.
- **MobileQuoteBuilder** implements the recommended 3-step mobile UX (Cliente&Obra → Itens → Resumo) with sticky total + advance bar.
- Money renders in `--font-mono` with `tabular-nums`; default currency `R$` (pass `currency` to override, e.g. `Gs`).
