# Nivello — Feedback

States & messaging: `Badge`, `Alert`, `Toast`, `EmptyState`, `ProgressIndicator`, `Skeleton`.

```jsx
<Badge tone="success" icon="check">Aprovado</Badge>
<Alert variant="warning" title="Prazo próximo">A obra vence em 3 dias.</Alert>
<Toast variant="success" title="Salvo" description="Há 2s" onClose={...} />
<EmptyState icon="file-plus-2" title="Nenhum orçamento" action={<Button…/>} />
<ProgressIndicator value={68} showLabel />
<ProgressIndicator variant="circular" value={82} />
```

- **Badge** tones map to domain semantics (brand=serviço, accent=material, success=aprovado, warning=expirado, danger=atrasada, info=enviado, neutral=rascunho).
- **Alert** for inline page-level messages; **Toast** for transient float (render in a fixed top-right stack, z-index `--z-toast`).
- **EmptyState** every empty list — always give an action.
- **ProgressIndicator** linear (obra progress) or circular (compact). **Skeleton** for loading.
