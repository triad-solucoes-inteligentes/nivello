/* Nivello UI kit — shared mock data (well-drilling domain) */
window.NivelloData = (function () {
  const clients = [
    { id: "c1", name: "Kalyleste S.A", address: "Monday, Ruta 7 — CDE", cellphone: "0983-693 400", works: 3, quotes: 5 },
    { id: "c2", name: "Formighieri Agro", address: "Avda. Mons. Rodriguez, km 4,3", cellphone: "0985-221 108", works: 2, quotes: 3 },
    { id: "c3", name: "Estância Santa Rita", address: "Zona rural — Minga Guazú", cellphone: "0971-455 902", works: 1, quotes: 2 },
    { id: "c4", name: "Cond. Vista Verde", address: "Km 12 Acaray — CDE", cellphone: "0982-110 774", works: 4, quotes: 6 },
    { id: "c5", name: "Frigorífico Paraná", address: "Ruta 2, Caaguazú", cellphone: "0976-334 019", works: 1, quotes: 1 },
  ];
  const works = [
    { id: "w1", name: "Poço tubular 100m", clientId: "c1", clientName: "Kalyleste S.A", address: "Zona rural — CDE", startDate: "2026-04-13", deadline: "2026-07-08", status: "andamento", progress: 68 },
    { id: "w2", name: "Poço + motobomba", clientId: "c4", clientName: "Cond. Vista Verde", address: "Km 12 Acaray", startDate: "2026-03-20", deadline: "2026-07-04", status: "atrasada", progress: 45 },
    { id: "w3", name: "Perfuração 60m", clientId: "c2", clientName: "Formighieri Agro", address: "km 4,3 Monday", startDate: "2026-05-02", deadline: "2026-08-01", status: "planejada", progress: 0 },
    { id: "w4", name: "Poço artesiano 80m", clientId: "c3", clientName: "Estância Santa Rita", address: "Minga Guazú", startDate: "2026-02-10", deadline: "2026-05-15", status: "concluida", progress: 100 },
  ];
  const quotes = [
    { id: "q1", number: "002M", name: "Poço tubular 100m", clientName: "Kalyleste S.A", workName: "Poço tubular 100m", total: 33000000, status: "enviado", date: "13/04/2026", itemCount: 9 },
    { id: "q2", number: "014M", name: "Poço + motobomba", clientName: "Cond. Vista Verde", workName: "Poço + motobomba", total: 41500000, status: "aprovado", date: "20/03/2026", itemCount: 12 },
    { id: "q3", number: "021M", name: "Perfuração 60m", clientName: "Formighieri Agro", workName: "Perfuração 60m", total: 18900000, status: "rascunho", date: "02/05/2026", itemCount: 6 },
    { id: "q4", number: "009M", name: "Poço 80m", clientName: "Estância Santa Rita", workName: "Poço artesiano 80m", total: 22400000, status: "aprovado", date: "10/02/2026", itemCount: 8 },
    { id: "q5", number: "025M", name: "Reforma de poço", clientName: "Frigorífico Paraná", workName: "—", total: 9800000, status: "expirado", date: "15/01/2026", itemCount: 4 },
  ];
  const quoteItems = [
    { name: "Perfuração solo sedimentário", description: "Diâm. 10\" de 0 a 20m", quantity: 20, unit: "m", unitPrice: 200000, type: "servico" },
    { name: "Perfuração em rocha", description: "Diâm. 6 1/8\" de 20 a 100m", quantity: 80, unit: "m", unitPrice: 230000, type: "servico" },
    { name: "Limpeza e desenvolvimento", description: "Com compressor de ar", quantity: 1, unit: "gl", unitPrice: 650000, type: "servico" },
    { name: "Translado de máquinas", quantity: 1, unit: "gl", unitPrice: 650000, type: "servico" },
    { name: "Tubo PVC 174mm", description: "Revestimento 0–20m", quantity: 20, unit: "m", unitPrice: 155000, type: "material" },
    { name: "Selo sanitário", quantity: 1, unit: "un", unitPrice: 650000, type: "material" },
    { name: "Conjunto motobomba", description: "Eletrobomba NF 95 3HP/380V", quantity: 1, unit: "cj", unitPrice: 6850000, type: "material" },
  ];
  const nav = [
    { section: "Geral" },
    { value: "dashboard", label: "Dashboard", icon: "layout-dashboard" },
    { value: "clientes", label: "Clientes", icon: "users", badge: clients.length },
    { value: "obras", label: "Obras", icon: "hard-hat", badge: works.filter(w => w.status === "andamento").length },
    { section: "Comercial" },
    { value: "produtos", label: "Produtos", icon: "package" },
    { value: "orcamentos", label: "Orçamentos", icon: "file-text", badge: quotes.filter(q => q.status === "rascunho").length },
  ];
  const user = { name: "João Perfuratriz", email: "joao@formighieri.com" };
  const company = { name: "Formighieri S.A", tagline: "Perfuração de poços artesianos", address: "Avda. Mons. Rodriguez, km 4,3 — CDE", phone: "(061) 578.730", email: "formighieri@formighieri.com", taxId: "80061772-0" };
  const money = (n) => Number(n || 0).toLocaleString("pt-BR");
  return { clients, works, quotes, quoteItems, nav, user, company, money };
})();
