import Link from "next/link";

import { auth } from "@/auth";
import { SessionStatus } from "@/components/auth/session-status";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="flex min-h-screen bg-zinc-50 text-black dark:bg-black dark:text-zinc-50">
      <aside className="hidden w-72 shrink-0 flex-col border-r border-black/[.08] bg-white px-6 py-8 dark:border-white/[.08] dark:bg-zinc-950 lg:flex">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white">CL</div>
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Nivello</p>
            <p className="text-xs text-zinc-400">Gerenciamento de obras</p>
          </div>
        </div>

        <nav className="space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 rounded-2xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700">
            <span>🏠</span>
            Dashboard
          </Link>
          <Link href="/orcamentos/novo" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5">
            <span>📄</span>
            Orçamentos
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5">
            <span>👷</span>
            Obras
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5">
            <span>🔔</span>
            Notificações
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5">
            <span>⚙️</span>
            Configurações
          </Link>
        </nav>

        <div className="mt-auto space-y-4 pt-8">
          <div className="rounded-3xl bg-zinc-100 p-4 text-sm text-zinc-600 dark:bg-white/5 dark:text-zinc-300">
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">Modo</p>
            <p>Light / Dark (UI conceitual)</p>
          </div>
          <div className="rounded-3xl border border-black/[.08] bg-white p-4 text-sm text-zinc-600 dark:border-white/[.08] dark:bg-zinc-950 dark:text-zinc-300">
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">Sair</p>
            <SignOutButton />
          </div>
        </div>
      </aside>

      <main className="flex-1 px-6 py-8 lg:px-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Dashboard</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Painel de controle
            </h1>
            <p className="mt-2 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
              Acompanhe o status de orçamentos, acesse ações rápidas e navegue pelas principais áreas do sistema.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button render={<Link href="/orcamentos/novo" />}>Criar Orçamento</Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <section className="rounded-3xl border border-black/[.08] bg-white p-8 shadow-sm dark:border-white/[.08] dark:bg-zinc-950">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">Visão geral</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-zinc-100 p-6 dark:bg-white/5">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Orçamentos</p>
                  <p className="mt-3 text-3xl font-semibold text-black dark:text-zinc-50">0</p>
                </div>
                <div className="rounded-3xl bg-zinc-100 p-6 dark:bg-white/5">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Projetos</p>
                  <p className="mt-3 text-3xl font-semibold text-black dark:text-zinc-50">0</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-black/[.08] bg-white p-8 shadow-sm dark:border-white/[.08] dark:bg-zinc-950">
              <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">Atalhos</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <Button render={<Link href="/orcamentos/novo" />} className="w-full">Novo Orçamento</Button>
                <Button variant="outline" render={<Link href="#" />} className="w-full">Clientes</Button>
                <Button variant="outline" render={<Link href="#" />} className="w-full">Obras</Button>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-black/[.08] bg-white p-6 shadow-sm dark:border-white/[.08] dark:bg-zinc-950">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Usuário</p>
              <h3 className="mt-3 text-xl font-semibold text-black dark:text-zinc-50">
                {session?.user ? session.user.name ?? session.user.email : "Visitante"}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Função: {session?.user?.role ?? "Não disponível"}</p>
              <SessionStatus />
            </section>

            <section className="rounded-3xl border border-black/[.08] bg-white p-6 shadow-sm dark:border-white/[.08] dark:bg-zinc-950">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Próximos passos</p>
              <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400">
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
