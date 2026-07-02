# Nivello — Overlay

`Modal` (centered dialog) and `Drawer` (side/bottom sliding panel).

```jsx
<Modal open={open} onClose={close} icon="trash-2" iconTone="danger"
  title="Excluir orçamento?" description="Ação permanente."
  footer={<><Button variant="ghost">Cancelar</Button><Button variant="danger">Excluir</Button></>} />

<Drawer open={o} onClose={c} side="right" title="Detalhe do cliente">…</Drawer>
<Drawer open={o} onClose={c} side="bottom" title="Filtros">…</Drawer>  {/* mobile */}
```

- **Modal** for confirmations (delete → `iconTone="danger"`), success (quote gerado → `iconTone="success"`), and short forms. Backdrop blur; ESC/backdrop close.
- **Drawer** `side="right"` for entity detail/edit on desktop; `side="bottom"` sheet for mobile filters and quick actions (drag handle shown). Both trap focus at `--z-drawer`.
- *(The card renders static open states scoped to a frame; in-app they render `position:fixed`.)*
