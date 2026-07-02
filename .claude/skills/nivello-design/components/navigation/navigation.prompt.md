# Nivello — Navigation

`Tabs`, `Breadcrumb`, `Sidebar`, `BottomNav`, `DropdownMenu`, `Stepper`, `FilterBar`.

```jsx
<Sidebar items={[{section:"Geral"},{value:"obras",label:"Obras",icon:"hard-hat",badge:7}]} value={nav} onSelect={setNav} user={user} />
<BottomNav items={[{value:"home",label:"Início",icon:"home"}, …]} value={m} onSelect={setM} />
<Tabs items={[{value:"servicos",label:"Serviços",icon:"wrench",count:6}]} value={t} onChange={setT} />
<Stepper steps={[{label:"Cliente & Obra"},{label:"Itens"},{label:"Resumo"}]} current={1} />
```

- **Sidebar** = desktop primary nav (deep-teal `--surface-deep`); `section` items render group headers; `collapsed` for icon rail. **BottomNav** replaces it on mobile (≤768px) — max 5 items, 64px tall.
- **Tabs** underline (in-page) or pill (segmented). **Stepper** drives the multi-step quote builder. **FilterBar** chips + `onOpenDrawer` for the mobile filter Drawer. **DropdownMenu** for row/overflow actions (`danger` items in red).
