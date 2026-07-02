# Nivello — Data Display

`Card`, `MetricCard`, `Table`, `MobileListItem`, `Avatar`, `Pagination`.

```jsx
<MetricCard icon="hard-hat" tone="accent" label="Obras em andamento" value="7" />
<Table columns={[{key:"total",header:"Total",align:"right",mono:true,render:money}]} data={rows} />
<MobileListItem avatar={<Avatar name="Kalyleste S.A"/>} title="Kalyleste" subtitle="…" onClick={…} />
<Pagination page={2} totalPages={9} onChange={setPage} />
```

- **Table** is desktop-only; on mobile map each row to a **MobileListItem** (never horizontal scroll a wide table). Use `mono` columns for prices/quantities → tabular-nums alignment.
- **MetricCard** for the dashboard KPI row; `delta`+`deltaDirection` for trends.
- **Card** is the base surface — 12px radius, subtle border + `--shadow-sm`, `hover` lifts it. Use `padding="none"` when embedding lists.
- **Avatar** falls back to initials; `square` for company logos.
