# Nivello — Forms

Input primitives for every Nivello form (cadastro de cliente, obra, produto, orçamento).

```jsx
<Button variant="primary" icon="plus">Novo orçamento</Button>
<Input label="Profundidade" suffix="m" icon="ruler" />
<Select label="Tipo" options={[{value:"servico",label:"Serviço"},{value:"material",label:"Material"}]} />
<DatePicker label="Prazo" value="2026-04-16" />
<SearchBar value={q} onChange={...} onClear={...} />
```

- **Button** variants: primary · secondary · accent (materiais) · ghost · danger · link. Sizes sm/md/lg (lg = 48px, mobile touch). `loading`, `disabled`, `icon`/`iconRight` (Lucide names), `fullWidth`.
- **IconButton** variants: ghost · solid · outline · danger. Always pass `label` for a11y.
- **Input/Textarea/Select/DatePicker** share label + hint + error states; `suffix` on Input for units (m, un, pol). Use `size="lg"` on mobile.
- Icons render as `<i data-lucide="…">`; the host must call `lucide.createIcons()` after render.
