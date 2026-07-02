# Nivello — Design System

Nivello é um SaaS B2B de **gestão de obras e orçamentos** para empresas de
**perfuração de poços artesianos**. Controla clientes, obras,
produtos/serviços/materiais e orçamentos técnicos, com foco forte em mobile.

> **Conceito da marca.** *Nivello* (do italiano, "nível") evoca nível d'água,
> nivelamento e medição precisa — o universo de água subterrânea, engenharia e
> perfuração. A identidade combina **água/aquífero** (teal), **solo/perfuração**
> (ocre/terra) e **aço/engenharia** (slate frio). Personalidade: técnica,
> precisa, confiável, organizada — premium mas acessível, para usuários que
> nem sempre são técnicos. Mobile-first; tabelas viram cards no celular.

---

## Fontes usadas (referência — o leitor pode não ter acesso)
- **GitHub — código do produto:** `triad-solucoes-inteligentes/nivello`
  → https://github.com/triad-solucoes-inteligentes/nivello
  Estado: scaffold **Next.js 16 + React 19 + Tailwind v4** (sem design system
  próprio ainda). Referencia a fonte **Geist/Geist Mono** — adotada aqui como
  tipografia oficial. **Explore este repositório** para evoluir o DS junto ao
  código real e produzir telas mais fiéis ao produto.
- **PDF de orçamento real:** `uploads/002M KALYLESTE S.pdf` — presupuesto da
  Formighieri S.A. Base do componente `QuotePreview`/`PrintableQuoteHeader` e do
  vocabulário de itens (perfuração solo/rocha, camisa/revestimento, tubo PVC,
  filtros, pré-filtro, limpeza/desenvolvimento, translado de máquinas, selo
  sanitário, equipamento de bombeio, conjunto motobomba, condições de pagamento,
  prazo, validade).

> Sem acesso? Peça o repositório privado e o PDF ao time. Nada aqui depende
> deles em runtime — foram usados só como contexto.

## Entidades
User (name, email, avatarUrl) · Client (name, address, cellphone) ·
Work (name, description, startDate, deadline, address, clientId) ·
Product (name, description, quantity, unit, total, type: serviço|material) ·
Quote (name, description, products[], workId, clientId).

---

## CONTENT FUNDAMENTALS (voz & copy)
- **Idioma:** Português do Brasil (pt-BR). O produto atende também região de
  fronteira (o sample é paraguaio, em Guaraníes) — moeda é configurável.
- **Tom:** direto, técnico e cordial. Frases curtas, orientadas à ação. Trata o
  usuário de forma neutra/impessoal ("Novo orçamento", "Buscar cliente…"), não
  "você"/"eu". Nada de jargão de marketing.
- **Casing:** títulos em *sentence case* ("Próximos prazos", não "Próximos
  Prazos"). `LABELS` de formulário/tabela em MAIÚSCULAS pequenas com tracking.
- **Botões:** verbo + objeto — "Novo orçamento", "Gerar orçamento", "Baixar
  PDF", "Adicionar item". Destrutivos são explícitos ("Excluir orçamento?").
- **Vocabulário do domínio:** Obra, Orçamento, Cliente, Serviço, Material,
  Prazo, Validade, Condições de pagamento, Total geral, Subtotal, Poço, Perfuração.
- **Números & dinheiro:** sempre `R$ 33.000.000` (pt-BR, ponto de milhar) em
  fonte mono/tabular. Datas `dd/mm/aaaa`. Unidades técnicas: m, gl, un, cj, pol.
- **Emoji:** não. Ícones (Lucide) fazem esse papel, com parcimônia.
- **Mensagens de estado:** curtas e humanas — "Orçamento gerado com sucesso",
  "Nenhum orçamento ainda", "Salvo automaticamente há 2s", "Sem conexão —
  reconectando".

## VISUAL FOUNDATIONS
- **Cor.** Marca teal `--brand #0C7C93` (água); acento ocre `--accent #C97A22`
  (terra/material). Neutros slate frios. **Serviço = teal + `wrench`**,
  **Material = ocre + `package`** — a distinção visual mais importante do
  sistema. Estados: success verde, warning âmbar, danger vermelho, info azul.
  Status de orçamento: rascunho(neutro)·enviado(info)·aprovado(success)·
  recusado(danger)·expirado(warning). Contraste AA em texto e badges.
- **Tipografia.** Geist (interface) + Geist Mono para números/preços/tabelas
  (`tabular-nums`). Escala Display 40 → H1 32 → H2 26 → H3 20 → H4 17 → Body 15
  → Small 13 → Caption/Label 12. Títulos com tracking negativo.
- **Espaçamento.** Base 4px (`--space-*`). Grid mobile 4col/16 · tablet 8col/24
  · desktop 12col/24, conteúdo máx 1200px. Alvos de toque ≥ 44px; controles lg
  48px no mobile.
- **Superfícies & cards.** Card = fundo branco, borda `--border-subtle` 1px,
  raio **12px** (`--radius-lg`), sombra suave em camadas (`--shadow-sm`). Hover
  eleva (`--shadow-md` + translateY -1px). Página `--surface-page` (slate 50).
  Sidebar e faixa de total usam `--surface-deep` (teal 950).
- **Sem gradientes chamativos, sem cantos com borda colorida só à esquerda, sem
  emoji.** Único gradiente permitido: o selo da marca (gota) e a régua fina do
  cabeçalho do orçamento (teal→ocre).
- **Bordas & raios.** raios sm6/md8/lg12/xl16/2xl20/full. Bordas 1px; divisores
  `--border-subtle`.
- **Sombras.** xs→xl, todas frias e discretas (rgba 16,23,28). Nada de sombra
  dura/preta.
- **Movimento.** Transições 120–280ms, `--ease-out` (saída suave). Hover muda
  cor/sombra; press faz translateY 0.5px. Modais fazem fade+slide-up; drawers
  deslizam da direita/base. Reduzir para `prefers-reduced-motion`. Sem loops
  decorativos.
- **Estados de feedback.** loading (spinner no botão), skeleton (shimmer),
  vazio (`EmptyState` sempre com ação), erro/inválido (borda + texto danger),
  sucesso (`Toast`/`Modal`), sem conexão (`Alert` danger), salvamento
  automático (Toast discreto), confirmação antes de excluir (`Modal` danger).

## ICONOGRAPHY
- **Sistema:** [**Lucide**](https://lucide.dev) via CDN
  (`unpkg.com/lucide`), stroke **1.75** (combina com o traço técnico da marca).
  As fontes não trazem ícones próprios → Lucide é a substituição adotada
  (sinalizada). Se o time tiver um set próprio, troque aqui.
- **Uso:** ícones renderizam como `<i data-lucide="nome">`; o host chama
  `lucide.createIcons()` após montar/atualizar. Nas telas React, um intervalo
  reprocessa novos ícones.
- **Vocabulário de ícones do domínio:** obra `hard-hat` · perfuração `drill` ·
  água/poço `droplet`/`waves` · cliente `users`/`user` · orçamento `file-text` ·
  prazo `calendar-clock`/`clock-alert` · dinheiro `wallet`/`credit-card` ·
  material `package` · serviço `wrench` · localização `map-pin` · translado
  `truck` · sucesso `check-circle-2`.
- **Regra:** sem ícones decorativos em excesso — cada ícone carrega significado
  (tipo, status, ação, métrica). Emoji nunca.

---

## Componentes (índice)
Importe via `const { X } = window.NivelloDesignSystem_c06109` (o namespace exato
é reportado por `check_design_system`).

**Forms** (`components/forms/`): `Button`, `IconButton`, `Input`, `Textarea`,
`Select`, `DatePicker`, `SearchBar`.

**Feedback** (`components/feedback/`): `Badge`, `Alert`, `Toast`, `EmptyState`,
`ProgressIndicator`, `Skeleton`.

**Data** (`components/data/`): `Card`, `MetricCard`, `Table`, `MobileListItem`,
`Avatar`, `Pagination`.

**Navigation** (`components/navigation/`): `Tabs`, `Breadcrumb`, `Sidebar`,
`BottomNav`, `DropdownMenu`, `Stepper`, `FilterBar`.

**Overlay** (`components/overlay/`): `Modal`, `Drawer`.

**Domínio** (`components/domain/`): `ClientCard`, `WorkCard`,
`ProductServiceItem`, `QuoteSummaryCard`, `QuoteLineItem`, `WorkTimeline`,
`QuoteStatusBadge`, `ProductTypeBadge`, `TotalPriceDisplay`, `DeadlineIndicator`,
`PaymentConditionBlock`, `QuotePreview`, `PrintableQuoteHeader`,
`MobileQuoteBuilder`, `CreateFAB`.

## UI Kits
- `ui_kits/nivello-app/index.html` — app desktop (Dashboard, Clientes, Obras,
  Produtos, Orçamentos, quote builder, impressão/PDF).
- `ui_kits/nivello-app/mobile.html` — app mobile (bottom nav, cards, FAB,
  quote builder em etapas).

## Manifesto do repositório (raiz)
- `styles.css` — entry point (só `@import`s).
- `tokens/` — `colors.css`, `typography.css`, `layout.css` (spacing, radius,
  shadow, z-index, breakpoints, sizes, motion), `components.css` (keyframes +
  utilitários), `fonts.css` (Geist via Google Fonts).
- `guidelines/` — cards de foundations (Brand, Colors, Type, Spacing).
- `components/` — primitivos + domínio (cada dir tem `.card.html` e `.prompt.md`).
- `ui_kits/nivello-app/` — telas do produto.
- `SKILL.md` — uso como Agent Skill.

---

## Sem logotipo fornecido
As fontes **não contêm logotipo** da Nivello. Onde uma marca apareceria, o
sistema usa o **wordmark "Nivello"** (Geist Bold) com um selo de gota em CSS
(`droplet`). Nenhuma marca real foi inventada. → **Envie o logo oficial** para
substituirmos o wordmark.

## Substituições sinalizadas
- **Fonte Geist** carregada do **Google Fonts CDN** (é o que o codebase
  referencia). Para self-host, coloque os `.woff2` em `assets/fonts` e ajuste
  `tokens/fonts.css`.
- **Ícones Lucide** (CDN) no lugar de um set próprio inexistente.

## PARA ITERAR — peço sua ajuda
1. **Moeda:** confirmar R$ (Brasil) vs Gs. (Paraguai) vs multi-moeda.
2. **Logo oficial** (se existir) e **arquivos de fonte** se quiser self-host.
3. Prioridades de tela para aprofundar (ex.: detalhe de obra com timeline real,
   catálogo de produtos, fluxo de aprovação de orçamento).
