# Nivello — UI Kit (app)

High-fidelity, click-through recreation of the Nivello product, composed
entirely from the design-system components (`window.NivelloDesignSystem_*`).

## Files
- `index.html` — **desktop app shell**: Sidebar + topbar, and routed screens
  (Dashboard, Clientes + client detail, Obras, Produtos, Orçamentos, the
  editable **quote builder**, and the **print/PDF preview** in a modal).
- `mobile.html` — **mobile app** in a phone frame: bottom navigation, tables
  rendered as cards, `CreateFAB` speed-dial, and the stepped
  `MobileQuoteBuilder`.
- `screens.jsx` — desktop screen components (`window.NivelloScreens`).
- `builder.jsx` — desktop editable quote builder (`window.NivelloBuilder`).
- `data.js` — shared mock data in the well-drilling domain (`window.NivelloData`).

## Notes
- Screens **compose** the primitives; they do not re-implement them.
- Money uses `--font-mono` + tabular-nums; currency `R$` (domain sample was
  Guaraníes — see `TotalPriceDisplay currency`).
- Lucide icons are refreshed on an interval since React re-renders the tree.
- Data is illustrative (based on the real presupuesto `002M`); not production logic.
