import Link from "next/link";
import { Building2, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

const dateFormatter = new Intl.DateTimeFormat("pt-BR");

function buildHref(params, overrides = {}) {
  const query = new URLSearchParams();
  const nextParams = { ...params, ...overrides };

  Object.entries(nextParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      query.set(key, String(value));
    }
  });

  const queryString = query.toString();
  return `/workspaces${queryString ? `?${queryString}` : ""}`;
}

function toggleDirection(currentOrder, currentDirection, nextOrder) {
  if (currentOrder !== nextOrder) return "asc";
  return currentDirection === "asc" ? "desc" : "asc";
}

function SortLink({ params, label, value }) {
  const direction = toggleDirection(params.order, params.direction, value);
  const isActive = params.order === value;

  return (
    <Link href={buildHref(params, { order: value, direction, page: 1 })} className="inline-flex items-center gap-1 font-medium">
      {label}
      {isActive ? <span>{params.direction === "asc" ? "ASC" : "DESC"}</span> : null}
    </Link>
  );
}

export default function Display({ workspaces, pagination, search, order, direction }) {
  const params = { search, order, direction };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 sm:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Nivello</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Workspaces</h1>
            <p className="mt-2 max-w-2xl text-base text-muted-foreground">
              Escolha um workspace para acompanhar obras, clientes e orçamentos.
            </p>
          </div>
          <Button render={<Link href="#" />}>
            <Plus className="size-4" />
            Novo workspace
          </Button>
        </div>

        <form
          action="/workspaces"
          className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-xs sm:flex-row"
        >
          <input
            type="search"
            name="search"
            defaultValue={search}
            placeholder="Buscar por workspace"
            className="h-10 flex-1 rounded-lg border border-border bg-transparent px-3 text-sm outline-none transition focus:border-ring"
          />
          <input type="hidden" name="order" value={order} />
          <input type="hidden" name="direction" value={direction} />
          <Button type="submit">Buscar</Button>
          {search ? (
            <Button variant="outline" render={<Link href="/workspaces" />}>
              Limpar
            </Button>
          ) : null}
        </form>

        <section className="flex flex-col gap-3">
          <div className="flex gap-4 px-2 text-xs uppercase tracking-wider text-muted-foreground">
            <SortLink params={params} label="Nome" value="name" />
            <SortLink params={params} label="Criado em" value="createdAt" />
          </div>

          {workspaces.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-8 py-16 text-center shadow-xs">
              <Building2 className="mb-2 size-8 text-muted-foreground" />
              <p className="text-lg font-semibold text-foreground">Nenhum workspace por aqui ainda</p>
              <p className="max-w-sm text-sm text-muted-foreground">
                Crie o primeiro workspace para começar a organizar obras e orçamentos.
              </p>
              <Button className="mt-4" render={<Link href="#" />}>
                Criar workspace
              </Button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {workspaces.map((workspace) => (
                <Link
                  key={workspace._id}
                  href={`/workspaces/${workspace._id}`}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-xs transition hover:border-ring hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      {workspace.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={workspace.logo} alt="" className="size-full rounded-2xl object-cover" />
                      ) : (
                        <Building2 className="size-6" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-lg font-semibold text-foreground">{workspace.name}</p>
                      <p className="truncate text-sm text-muted-foreground">Equipe {workspace.teamId}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Criado em {workspace.createdAt ? dateFormatter.format(new Date(workspace.createdAt)) : "-"}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </section>

        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Página {pagination.totalPages === 0 ? 0 : pagination.page} de {pagination.totalPages} -{" "}
            {pagination.totalCount} registros
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              render={
                <Link
                  href={buildHref(params, { page: Math.max(1, pagination.page - 1) })}
                  aria-disabled={!pagination.hasPrevPage}
                  className={!pagination.hasPrevPage ? "pointer-events-none opacity-50" : ""}
                />
              }
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              render={
                <Link
                  href={buildHref(params, { page: pagination.page + 1 })}
                  aria-disabled={!pagination.hasNextPage}
                  className={!pagination.hasNextPage ? "pointer-events-none opacity-50" : ""}
                />
              }
            >
              Próxima
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
