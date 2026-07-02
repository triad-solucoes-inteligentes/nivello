# Nivello — Icon

React-owned wrapper around a Lucide glyph. Every Nivello component renders icons
through this — it keeps a stable `<span>` node and injects the SVG imperatively,
so Lucide's DOM swap never collides with React reconciliation (no `insertBefore`
crashes on re-render, no global `createIcons()` interval needed).

```jsx
<Icon name="hard-hat" style={{ width: 20, height: 20, color: "var(--brand)" }} />
<Icon name="wrench" size={16} />
```

- `name` = Lucide kebab-case name. Size via `size` (px) or `width`/`height` in `style`; color via `color` (SVG uses `currentColor`).
- Requires `lucide` loaded on the page (CDN script). Consumers building their own screens should use `Icon` instead of raw `<i data-lucide>` when the tree re-renders.
