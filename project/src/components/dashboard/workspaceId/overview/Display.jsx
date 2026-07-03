import Link from "next/link";
import {
  Building2,
  FileText,
  HardHat,
  Home,
  Bell,
  Settings,
  Users,
} from "lucide-react";

import { SessionStatus } from "@/components/auth/session-status";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Button } from "@/components/ui/button";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const dateFormatter = new Intl.DateTimeFormat("pt-BR");

function NavLink({ href, icon: Icon, label, active = false }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
        active
          ? "bg-primary font-semibold text-primary-foreground shadow-xs"
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
      }`}
    >
      <Icon className="size-4" />
      {label}
    </Link>
  );
}

function MetricCard({ icon: Icon, label, value, tone = "brand" }) {
  const toneClasses = {
    brand: "bg-accent text-accent-foreground",
    accent: "bg-[var(--terra-50)] text-[var(--terra-600)]",
    info: "bg-[var(--info-50)] text-[var(--info-600)]",
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
      <div className={`mb-4 flex size-10 items-center justify-center rounded-2xl ${toneClasses[tone]}`}>
        <Icon className="size-5" />
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-3xl font-semibold tracking-tight text-foreground">{value}</p>
    </div>
  );
}

export default function Display({ workspace, user, counts, recentQuotes }) {
  const quotesHref = `/workspaces/${workspace._id}/quotes`;
  const newQuoteHref = `/workspaces/${workspace._id}/quotes/new`;

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="hidden w-72 shrink-0 flex-col bg-sidebar px-6 py-8 text-sidebar-foreground lg:flex">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Building2 className="size-6" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-sidebar-foreground">{workspace.name}</p>
            <p className="text-xs text-sidebar-foreground/60">Equipe {workspace.teamId}</p>
          </div>
        </div>

        <nav className="space-y-2">
          <NavLink href={`/workspaces/${workspace._id}`} icon={Home} label="Dashboard" active />
          <NavLink href={quotesHref} icon={FileText} label="Orçamentos" />
          <NavLink href="#" icon={HardHat} label="Obras" />
          <NavLink href="#" icon={Users} label="Clientes" />
          <NavLink href="#" icon={Bell} label="Notificações" />
          <NavLink href="#" icon={Settings} label="Configurações" />
        </nav>

        <div className="mt-auto space-y-4 pt-8">
          <Link
            href="/workspaces"
            className="block rounded-2xl bg-sidebar-accent px-4 py-3 text-sm text-sidebar-foreground/80 transition hover:text-sidebar-foreground"
          >
            Trocar de workspace
          </Link>
          <div className="rounded-3xl bg-sidebar-accent p-4 text-sm">
            <p className="font-semibold text-sidebar-foreground">Sair</p>
            <div className="mt-2">
              <SignOutButton />
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 px-6 py-8 lg:px-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{workspace.name}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">Painel de controle</h1>
            <p className="mt-2 max-w-2xl text-base text-muted-foreground">
              Acompanhe o status de orçamentos, obras e clientes deste workspace.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button render={<Link href={newQuoteHref} />}>Criar orçamento</Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <section className="grid gap-4 sm:grid-cols-3">
              <MetricCard icon={FileText} label="Orçamentos" value={counts.quotes} tone="brand" />
              <MetricCard icon={HardHat} label="Obras" value={counts.works} tone="accent" />
              <MetricCard icon={Users} label="Clientes" value={counts.clients} tone="info" />
            </section>

            <section className="rounded-3xl border border-border bg-card p-8 shadow-xs">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-foreground">Orçamentos recentes</h2>
                <Link href={quotesHref} className="text-sm font-medium text-primary hover:underline">
                  Ver todos
                </Link>
              </div>

              {recentQuotes.length === 0 ? (
                <div className="mt-6 flex flex-col items-center gap-2 rounded-2xl bg-muted px-8 py-12 text-center">
                  <p className="text-sm text-muted-foreground">Nenhum orçamento criado ainda neste workspace.</p>
                  <Button className="mt-2" render={<Link href={newQuoteHref} />}>
                    Criar orçamento
                  </Button>
                </div>
              ) : (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                        <th className="py-3 pr-4 font-medium">Orçamento</th>
                        <th className="py-3 pr-4 font-medium">Cliente</th>
                        <th className="py-3 pr-4 font-medium">Obra</th>
                        <th className="py-3 pr-4 font-medium">Total</th>
                        <th className="py-3 pr-4 font-medium">Criado em</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentQuotes.map((quote) => (
                        <tr key={quote._id} className="border-b border-border/60 last:border-0">
                          <td className="py-3 pr-4 font-medium text-foreground">{quote.name}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{quote.client?.name || "-"}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{quote.work?.name || "-"}</td>
                          <td className="py-3 pr-4 font-mono text-foreground">
                            {currencyFormatter.format(quote.total ?? 0)}
                          </td>
                          <td className="py-3 pr-4 text-muted-foreground">
                            {quote.createdAt ? dateFormatter.format(new Date(quote.createdAt)) : "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-border bg-card p-6 shadow-xs">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Usuário</p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{user.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Função: {user.role ?? "Não disponível"}</p>
              <SessionStatus />
            </section>

            <section className="rounded-3xl border border-border bg-card p-6 shadow-xs">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Próximos passos</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>• Criar novo orçamento</li>
                <li>• Ver clientes ativos</li>
                <li>• Revisar prazos de obras</li>
              </ul>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
