import Link from "next/link";
import { Building2, Droplet, Search } from "lucide-react";

import { SignOutButton } from "@/components/auth/sign-out-button";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

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

export default function Display({ workspaces, userName, pagination, search, order, direction, locale = "pt" }) {
  const t = getDictionary(locale).workspaces;
  const params = { search, order, direction };

  return (
    <div className="min-h-screen bg-[var(--surface-page)]">
      <header className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--surface-card)] px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--teal-500)] to-[var(--terra-500)] text-white">
            <Droplet className="h-4.5 w-4.5" strokeWidth={1.75} fill="currentColor" fillOpacity={0.25} />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[-0.015em] text-[var(--text-strong)]">Nivello</p>
            <p className="text-[11px] text-[var(--text-muted)]">Obras e orçamentos</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="hidden text-sm text-[var(--text-muted)] sm:block">{userName}</p>
          <SignOutButton />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-[28px] font-bold tracking-[-0.015em] text-[var(--text-strong)]">{t.title}</h1>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{t.subtitle}</p>
          </div>
          <div className="flex flex-1 items-center gap-3 sm:flex-none sm:justify-end">
            <form action="/workspaces" className="w-full max-w-xs">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-subtle)]" strokeWidth={1.75} />
                <input
                  type="search"
                  name="search"
                  defaultValue={search}
                  placeholder={t.searchPlaceholder}
                  className="h-10 w-full rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-card)] pl-9 pr-3 text-sm text-[var(--text-strong)] outline-none transition placeholder:text-[var(--text-subtle)] focus:border-[var(--teal-500)] focus:ring-2 focus:ring-[var(--teal-500)]/20"
                />
              </div>
              <input type="hidden" name="order" value={order} />
              <input type="hidden" name="direction" value={direction} />
            </form>
            <Link href="#" className={buttonVariants({ variant: "dark" })}>
              {t.newWorkspace}
            </Link>
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          {pagination.totalCount} {pagination.totalCount === 1 ? t.countSingular : t.countPlural}
        </p>

        {workspaces.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-card)] px-8 py-20 text-center shadow-[var(--shadow-sm)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--neutral-100)]">
              <Building2 className="h-6 w-6 text-[var(--text-subtle)]" strokeWidth={1.75} />
            </div>
            <p className="text-lg font-semibold text-[var(--text-strong)]">{t.emptyTitle}</p>
            <p className="max-w-sm text-sm text-[var(--text-muted)]">{t.emptyDescription}</p>
            <Link href="#" className={buttonVariants({ variant: "dark", className: "mt-2" })}>
              {t.newWorkspace}
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workspaces.map((workspace) => (
              <Link
                key={workspace._id}
                href={`/workspaces/${workspace._id}`}
                className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 shadow-[var(--shadow-sm)] transition hover:-translate-y-px hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--teal-50)] text-[var(--teal-600)]">
                    <Building2 className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-[var(--text-strong)]">{workspace.name}</p>
                    <p className="truncate text-xs text-[var(--text-muted)]">
                      {t.card.team} {workspace.teamId}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-subtle)]">
                  {t.card.createdAt} {workspace.createdAt ? dateFormatter.format(new Date(workspace.createdAt)) : "-"}
                </p>
              </Link>
            ))}
          </div>
        )}

        {pagination.totalPages > 1 ? (
          <div className="flex flex-col gap-3 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              {t.pagination.page} {pagination.page} {t.pagination.of} {pagination.totalPages} — {pagination.totalCount}{" "}
              {t.pagination.records}
            </p>
            <div className="flex gap-2">
              <Link
                href={buildHref(params, { page: Math.max(1, pagination.page - 1) })}
                className={cn(buttonVariants({ variant: "outline" }), !pagination.hasPrevPage && "pointer-events-none opacity-50")}
              >
                {t.pagination.previous}
              </Link>
              <Link
                href={buildHref(params, { page: pagination.page + 1 })}
                className={cn(buttonVariants({ variant: "outline" }), !pagination.hasNextPage && "pointer-events-none opacity-50")}
              >
                {t.pagination.next}
              </Link>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
