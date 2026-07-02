---
name: nivello-design
description: Use this skill to generate well-branded interfaces and assets for Nivello — a B2B SaaS for managing well-drilling works and technical quotes (obras e orçamentos de perfuração de poços artesianos). Contains essential design guidelines, colors, type, fonts, iconography, tokens, and UI kit components for prototyping or production.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. If working on
production code, copy assets and read the rules here to become an expert in
designing with the Nivello brand.

If the user invokes this skill without other guidance, ask what they want to
build or design, ask a few focused questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.

## Quick facts
- **Product:** Nivello — gestão de obras e orçamentos para perfuração de poços artesianos.
- **Voice:** pt-BR, técnico, direto, sentence case, sem emoji. Money in `R$` (mono/tabular).
- **Brand color:** teal `--brand #0C7C93` (água); accent ocre `--accent #C97A22` (terra).
  **Serviço = teal + `wrench`, Material = ocre + `package`.**
- **Type:** Geist + Geist Mono. **Icons:** Lucide (stroke 1.75), `<i data-lucide="…">` + `lucide.createIcons()`.

## How to use the components
1. Link `styles.css` for tokens/fonts.
2. Load `_ds_bundle.js`; read components from `window.NivelloDesignSystem_c06109`
   (run the design-system check to confirm the exact namespace).
3. Load Lucide, and call `lucide.createIcons()` after render (interval for React apps).

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script type="text/babel">
  const { Button, MetricCard, QuotePreview } = window.NivelloDesignSystem_c06109;
</script>
```

## Files
- `readme.md` — full brand guide: content, visual foundations, iconography, component index.
- `tokens/` — colors, typography, layout, components, fonts (CSS custom properties).
- `guidelines/` — foundation specimen cards (Brand, Colors, Type, Spacing).
- `components/{forms,feedback,data,navigation,overlay,domain}/` — reusable + domain components.
- `ui_kits/nivello-app/` — desktop (`index.html`) and mobile (`mobile.html`) product screens.

## Domain vocabulary
Obra · Orçamento · Cliente · Serviço · Material · Prazo · Validade · Condições
de pagamento · Total geral · Subtotal · Poço · Perfuração (solo/rocha) ·
Revestimento/camisa · Filtros · Selo sanitário · Conjunto motobomba · Translado.
