import Link from "next/link";

import { Button } from "@/components/ui/button";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const dateFormatter = new Intl.DateTimeFormat("pt-BR");

function buildHref(workspaceId, params, overrides = {}) {
  const query = new URLSearchParams();
  const nextParams = { ...params, ...overrides };

  Object.entries(nextParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      query.set(key, String(value));
    }
  });

  const queryString = query.toString();
  return `/workspaces/${workspaceId}/quotes${queryString ? `?${queryString}` : ""}`;
}

function toggleDirection(currentOrder, currentDirection, nextOrder) {
  if (currentOrder !== nextOrder) return "asc";
  return currentDirection === "asc" ? "desc" : "asc";
}

function SortLink({ workspaceId, params, label, value }) {
  const direction = toggleDirection(params.order, params.direction, value);
  const isActive = params.order === value;

  return (
    <Link
      href={buildHref(workspaceId, params, { order: value, direction, page: 1 })}
      className="inline-flex items-center gap-1 font-medium"
    >
      {label}
      {isActive ? <span>{params.direction === "asc" ? "ASC" : "DESC"}</span> : null}
    </Link>
  );
}

export default function Display({  workspaceId,  workspaceName,  quotes,  pagination,  search,  order,  direction,}) {
  const params = { search, order, direction };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-black dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 sm:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {workspaceName}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Orcamentos
            </h1>
            <p className="mt-2 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
              Acompanhe os orcamentos de obra criados neste workspace.
            </p>
          </div>
          <Button render={<Link href={`/workspaces/${workspaceId}/quotes/new`} />}>
            Novo orcamento
          </Button>
        </div>

        <form
          action={`/workspaces/${workspaceId}/quotes`}
          className="flex flex-col gap-3 rounded-2xl border border-black/[.08] bg-white p-4 shadow-sm dark:border-white/[.08] dark:bg-zinc-950 sm:flex-row"
        >
          <input
            type="search"
            name="search"
            defaultValue={search}
            placeholder="Buscar por orcamento, cliente ou obra"
            className="h-10 flex-1 rounded-lg border border-black/[.08] bg-transparent px-3 text-sm outline-none transition focus:border-black/30 dark:border-white/[.08] dark:focus:border-white/30"
          />
          <input type="hidden" name="order" value={order} />
          <input type="hidden" name="direction" value={direction} />
          <Button type="submit">Buscar</Button>
          {search ? (
            <Button variant="outline" render={<Link href={`/workspaces/${workspaceId}/quotes`} />}>
              Limpar
            </Button>
          ) : null}
        </form>

        <section className="overflow-hidden rounded-2xl border border-black/[.08] bg-white shadow-sm dark:border-white/[.08] dark:bg-zinc-950">
          {quotes.length === 0 ? (
            <div className="flex flex-col items-center gap-2 px-8 py-16 text-center">
              <p className="text-lg font-semibold text-black dark:text-zinc-50">
                Nenhum orcamento por aqui ainda
              </p>
              <p className="max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
                Crie o primeiro orcamento deste workspace para comecar a acompanhar obras e clientes.
              </p>
              <Button
                className="mt-4"
                render={<Link href={`/workspaces/${workspaceId}/quotes/new`} />}
              >
                Criar orcamento
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/[.08] text-xs uppercase tracking-wider text-zinc-500 dark:border-white/[.08] dark:text-zinc-400">
                    <th className="px-6 py-4">
                      <SortLink workspaceId={workspaceId} params={params} label="Orcamento" value="name" />
                    </th>
                    <th className="px-6 py-4">
                      <SortLink workspaceId={workspaceId} params={params} label="Cliente" value="client" />
                    </th>
                    <th className="px-6 py-4">
                      <SortLink workspaceId={workspaceId} params={params} label="Obra" value="work" />
                    </th>
                    <th className="px-6 py-4 font-medium">Itens</th>
                    <th className="px-6 py-4">
                      <SortLink workspaceId={workspaceId} params={params} label="Total" value="total" />
                    </th>
                    <th className="px-6 py-4">
                      <SortLink workspaceId={workspaceId} params={params} label="Criado em" value="createdAt" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map((quote) => (
                    <tr
                      key={quote._id}
                      className="border-b border-black/[.06] last:border-0 dark:border-white/[.06]"
                    >
                      <td className="px-6 py-4 font-medium text-black dark:text-zinc-50">
                        {quote.name}
                      </td>
                      <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                        {quote.client?.name || "-"}
                      </td>
                      <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                        {quote.work?.name || "-"}
                      </td>
                      <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                        {quote.itemCount}
                      </td>
                      <td className="px-6 py-4 font-mono text-black dark:text-zinc-50">
                        {currencyFormatter.format(quote.total ?? 0)}
                      </td>
                      <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                        {quote.createdAt ? dateFormatter.format(new Date(quote.createdAt)) : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <div className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Pagina {pagination.totalPages === 0 ? 0 : pagination.page} de {pagination.totalPages} -{" "}
            {pagination.totalCount} registros
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              render={
                <Link
                  href={buildHref(workspaceId, params, {
                    page: Math.max(1, pagination.page - 1),
                  })}
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
                  href={buildHref(workspaceId, params, {
                    page: pagination.page + 1,
                  })}
                  aria-disabled={!pagination.hasNextPage}
                  className={!pagination.hasNextPage ? "pointer-events-none opacity-50" : ""}
                />
              }
            >
              Proxima
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
