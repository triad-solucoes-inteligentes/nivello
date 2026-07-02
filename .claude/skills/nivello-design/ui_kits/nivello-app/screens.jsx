/* Nivello UI kit — desktop screens. Composes window.NivelloDesignSystem_c06109. */
(function () {
  const NS = window.NivelloDesignSystem_c06109;
  const { MetricCard, Card, Table, Button, IconButton, SearchBar, FilterBar, Pagination,
    ClientCard, WorkCard, QuoteSummaryCard, QuoteStatusBadge, ProductTypeBadge, DeadlineIndicator,
    TotalPriceDisplay, Avatar, Badge, WorkTimeline, Breadcrumb, DropdownMenu, EmptyState, ProductServiceItem, Icon } = NS;
  const D = window.NivelloData;
  const money = D.money;

  const SectionTitle = ({ title, sub, action }) => (
    React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 18, gap: 12, flexWrap: "wrap" } },
      React.createElement("div", null,
        React.createElement("h1", { style: { fontSize: 26, fontWeight: 700, letterSpacing: "-0.015em", color: "var(--text-strong)", margin: 0 } }, title),
        sub && React.createElement("p", { style: { fontSize: 14, color: "var(--text-muted)", margin: "4px 0 0" } }, sub)),
      action));

  /* ---------------- Dashboard ---------------- */
  function Dashboard({ onNav }) {
    const upcoming = D.works.filter(w => w.status !== "concluida").slice(0, 3);
    return React.createElement("div", null,
      SectionTitle({
        title: "Dashboard", sub: "Visão geral da operação — Formighieri S.A",
        action: React.createElement("div", { style: { display: "flex", gap: 10 } },
          React.createElement(Button, { variant: "secondary", icon: "user-plus", onClick: () => onNav("clientes") }, "Novo cliente"),
          React.createElement(Button, { variant: "secondary", icon: "hard-hat", onClick: () => onNav("obras") }, "Nova obra"),
          React.createElement(Button, { variant: "primary", icon: "plus", onClick: () => onNav("orcamentos") }, "Novo orçamento"))
      }),
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 20 } },
        React.createElement(MetricCard, { icon: "file-text", label: "Orçamentos", value: D.quotes.length, delta: "+12%", deltaDirection: "up" }),
        React.createElement(MetricCard, { icon: "hard-hat", tone: "accent", label: "Obras em andamento", value: D.works.filter(w => w.status === "andamento").length }),
        React.createElement(MetricCard, { icon: "users", tone: "info", label: "Clientes cadastrados", value: D.clients.length, delta: "+3", deltaDirection: "up" }),
        React.createElement(MetricCard, { icon: "wallet", tone: "success", label: "Valor total orçado", value: "R$ 1,2", unit: "mi" })),
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16 } },
        React.createElement(Card, { padding: "none", title: "Últimos orçamentos", actions: React.createElement(Button, { variant: "link", size: "sm", onClick: () => onNav("orcamentos") }, "Ver todos") },
          React.createElement("div", { style: { borderTop: "1px solid var(--border-subtle)" } },
            D.quotes.slice(0, 4).map((q, i) => React.createElement("div", { key: q.id, style: { display: "flex", alignItems: "center", gap: 12, padding: "12px 18px", borderBottom: i < 3 ? "1px solid var(--border-subtle)" : "none" } },
              React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "var(--text-brand)", background: "var(--brand-subtle)", padding: "2px 7px", borderRadius: 6 } }, q.number),
              React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                React.createElement("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-strong)" } }, q.clientName),
                React.createElement("div", { style: { fontSize: 12, color: "var(--text-muted)" } }, q.date + " · " + q.itemCount + " itens")),
              React.createElement(QuoteStatusBadge, { status: q.status, size: "sm" }),
              React.createElement("div", { style: { fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: 14, fontWeight: 700, color: "var(--text-strong)", width: 120, textAlign: "right" } }, "R$ " + money(q.total)))))),
        React.createElement(Card, { title: "Próximos prazos" },
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
            upcoming.map(w => React.createElement("div", { key: w.id, style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 } },
              React.createElement("div", { style: { minWidth: 0 } },
                React.createElement("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--text-strong)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, w.name),
                React.createElement("div", { style: { fontSize: 12, color: "var(--text-muted)" } }, w.clientName)),
              React.createElement(DeadlineIndicator, { date: w.deadline, size: "sm" })))))));
  }

  /* ---------------- Clientes ---------------- */
  function Clientes({ onOpenClient }) {
    const [q, setQ] = React.useState("");
    const list = D.clients.filter(c => c.name.toLowerCase().includes(q.toLowerCase()));
    return React.createElement("div", null,
      SectionTitle({ title: "Clientes", sub: D.clients.length + " clientes cadastrados", action: React.createElement(Button, { variant: "primary", icon: "user-plus" }, "Novo cliente") }),
      React.createElement("div", { style: { display: "flex", gap: 12, marginBottom: 16, alignItems: "center" } },
        React.createElement("div", { style: { maxWidth: 320, flex: 1 } }, React.createElement(SearchBar, { value: q, onChange: e => setQ(e.target.value), onClear: () => setQ(""), placeholder: "Buscar cliente…" })),
        React.createElement(FilterBar, { filters: [{ value: "ativo", label: "Ativos", active: true }, { value: "recent", label: "Recentes" }] })),
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 } },
        list.map(c => React.createElement(ClientCard, { key: c.id, client: c, worksCount: c.works, quotesCount: c.quotes, onClick: () => onOpenClient(c),
          actions: React.createElement(DropdownMenu, { align: "right", trigger: React.createElement(IconButton, { icon: "more-vertical", variant: "ghost", label: "Ações" }), items: [{ label: "Ver detalhes", icon: "eye" }, { label: "Editar", icon: "pencil" }, { divider: true }, { label: "Excluir", icon: "trash-2", danger: true }] }) }))));
  }

  /* ---------------- Obras ---------------- */
  function Obras() {
    const groups = [
      { key: "andamento", label: "Em andamento" },
      { key: "atrasada", label: "Atrasadas" },
      { key: "planejada", label: "Planejadas" },
      { key: "concluida", label: "Concluídas" },
    ];
    return React.createElement("div", null,
      SectionTitle({ title: "Obras", sub: "Acompanhe o andamento das perfurações", action: React.createElement(Button, { variant: "primary", icon: "plus" }, "Nova obra") }),
      groups.map(g => {
        const items = D.works.filter(w => w.status === g.key);
        if (!items.length) return null;
        return React.createElement("div", { key: g.key, style: { marginBottom: 22 } },
          React.createElement("div", { className: "nv-label", style: { fontSize: 12, color: "var(--text-muted)", marginBottom: 10, display: "flex", alignItems: "center", gap: 8 } }, g.label,
            React.createElement("span", { style: { fontFamily: "var(--font-mono)", background: "var(--neutral-100)", padding: "1px 7px", borderRadius: 999, fontSize: 11 } }, items.length)),
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 } },
            items.map(w => React.createElement(WorkCard, { key: w.id, work: w, clientName: w.clientName, status: w.status, progress: w.progress, onClick: () => { } }))));
      }));
  }

  /* ---------------- Orçamentos (list) ---------------- */
  function Orcamentos({ onOpenQuote }) {
    const [page, setPage] = React.useState(1);
    return React.createElement("div", null,
      SectionTitle({ title: "Orçamentos", sub: "Gerencie propostas técnicas", action: React.createElement(Button, { variant: "primary", icon: "plus" }, "Novo orçamento") }),
      React.createElement(FilterBar, { style: { marginBottom: 16 }, resultCount: D.quotes.length, filters: [{ value: "rascunho", label: "Rascunho" }, { value: "enviado", label: "Enviados", active: true }, { value: "aprovado", label: "Aprovados" }] }),
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 } },
        D.quotes.map(q => React.createElement(QuoteSummaryCard, { key: q.id, quote: q, onClick: () => onOpenQuote(q) }))),
      React.createElement("div", { style: { display: "flex", justifyContent: "center", marginTop: 20 } }, React.createElement(Pagination, { page: page, totalPages: 3, onChange: setPage })));
  }

  /* ---------------- Client detail ---------------- */
  function ClientDetail({ client, onBack }) {
    const works = D.works.filter(w => w.clientName === client.name);
    const quotes = D.quotes.filter(q => q.clientName === client.name);
    return React.createElement("div", null,
      React.createElement(Breadcrumb, { style: { marginBottom: 14 }, items: [{ label: "Clientes", icon: "users" }, { label: client.name }], onNavigate: onBack }),
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16, marginBottom: 22 } },
        React.createElement(Avatar, { name: client.name, size: "xl", square: true }),
        React.createElement("div", { style: { flex: 1 } },
          React.createElement("h1", { style: { fontSize: 26, fontWeight: 700, color: "var(--text-strong)", margin: 0 } }, client.name),
          React.createElement("div", { style: { display: "flex", gap: 16, marginTop: 6, fontSize: 13, color: "var(--text-muted)" } },
            React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 5 } }, React.createElement(Icon, { name: "map-pin", style: { width: 14, height: 14 } }), client.address),
            React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 5 } }, React.createElement(Icon, { name: "phone", style: { width: 14, height: 14 } }), client.cellphone))),
        React.createElement(Button, { variant: "secondary", icon: "pencil" }, "Editar")),
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } },
        React.createElement(Card, { title: "Obras (" + works.length + ")" }, React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, works.length ? works.map(w => React.createElement(WorkCard, { key: w.id, work: w, status: w.status, progress: w.progress })) : React.createElement(EmptyState, { compact: true, icon: "hard-hat", title: "Sem obras" }))),
        React.createElement(Card, { title: "Orçamentos (" + quotes.length + ")" }, React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, quotes.length ? quotes.map(q => React.createElement(QuoteSummaryCard, { key: q.id, quote: q })) : React.createElement(EmptyState, { compact: true, icon: "file-text", title: "Sem orçamentos" })))));
  }

  /* ---------------- Produtos (catálogo) ---------------- */
  function Produtos() {
    const [tab, setTab] = React.useState("todos");
    const T = NS.Tabs;
    const catalog = [
      { name: "Perfuração solo sedimentário", description: "Diâm. 10\"", unit: "m", total: 200000, type: "servico" },
      { name: "Perfuração em rocha", description: "Diâm. 6 1/8\"", unit: "m", total: 230000, type: "servico" },
      { name: "Limpeza e desenvolvimento", description: "Compressor de ar", unit: "gl", total: 650000, type: "servico" },
      { name: "Translado de máquinas", description: "Ida e volta", unit: "gl", total: 650000, type: "servico" },
      { name: "Selo sanitário", description: "Proteção do poço", unit: "un", total: 650000, type: "material" },
      { name: "Tubo PVC 174mm", description: "Revestimento / camisa", unit: "m", total: 155000, type: "material" },
      { name: "Filtro geomecânico", description: "Seção filtrante", unit: "m", total: 180000, type: "material" },
      { name: "Conjunto motobomba", description: "Eletrobomba submersível 3HP", unit: "cj", total: 6850000, type: "material" },
    ];
    const list = catalog.filter(p => tab === "todos" || p.type === tab);
    return React.createElement("div", null,
      SectionTitle({ title: "Produtos, serviços e materiais", sub: "Catálogo reutilizável nos orçamentos", action: React.createElement(Button, { variant: "primary", icon: "plus" }, "Novo item") }),
      React.createElement("div", { style: { marginBottom: 16 } },
        React.createElement(T, { variant: "pill", value: tab, onChange: setTab, items: [{ value: "todos", label: "Todos", count: catalog.length }, { value: "servico", label: "Serviços", icon: "wrench", count: catalog.filter(c => c.type === "servico").length }, { value: "material", label: "Materiais", icon: "package", count: catalog.filter(c => c.type === "material").length }] })),
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } },
        list.map((p, i) => React.createElement(ProductServiceItem, { key: i, product: p, action: React.createElement(IconButton, { icon: "plus", variant: "outline", label: "Adicionar" }) }))));
  }

  window.NivelloScreens = { Dashboard, Clientes, Obras, Orcamentos, ClientDetail, Produtos };
})();
