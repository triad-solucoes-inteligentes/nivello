import Link from "next/link";
import { Droplet, FileText, HardHat, LayoutGrid, Users } from "lucide-react";

import { SignOutButton } from "@/components/auth/sign-out-button";
import { setLocale } from "@/lib/i18n/actions";
import { getDictionary, LOCALES } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

const LANGUAGE_LABELS = { pt: "PT", es: "ES" };

export function Sidebar({ workspaceId, workspaceName, userName, active, locale = "pt" }) {
  const t = getDictionary(locale);

  const navItems = [
    { key: "painel", href: "/dashboard", label: t.sidebar.nav.painel, icon: LayoutGrid },
    { key: "quotes", href: `/workspaces/${workspaceId}/quotes`, label: t.sidebar.nav.quotes, icon: FileText },
    { key: "works", href: `/workspaces/${workspaceId}/works`, label: t.sidebar.nav.works, icon: HardHat },
    { key: "clients", href: `/workspaces/${workspaceId}/clients`, label: t.sidebar.nav.clients, icon: Users },
  ];

  const initials = (userName || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-[var(--surface-deep)] px-5 py-7 lg:flex">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--teal-500)] to-[var(--terra-500)] text-white">
          <Droplet className="h-4.5 w-4.5" strokeWidth={1.75} fill="currentColor" fillOpacity={0.25} />
        </div>
        <div>
          <p className="text-sm font-bold tracking-[-0.015em] text-white">Nivello</p>
          <p className="text-[11px] text-[var(--neutral-400)]">Obras e orçamentos</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-0.5">
        {navItems.map(({ key, href, label, icon: Icon }) => {
          const isActive = key === active;
          return (
            <Link
              key={key}
              href={href}
              className={
                isActive
                  ? "flex items-center gap-3 rounded-[var(--radius-md)] bg-[var(--surface-deep-hover)] px-3 py-2.5 text-sm font-semibold text-white transition"
                  : "flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-sm text-[var(--neutral-400)] transition hover:bg-[var(--surface-deep-hover)]/60 hover:text-white"
              }
            >
              <Icon
                className={isActive ? "h-4 w-4 text-[var(--teal-400)]" : "h-4 w-4"}
                strokeWidth={1.75}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Sessão / Logout */}
      <div className="mt-auto border-t border-[var(--surface-deep-border)] px-1 pt-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--teal-700)] text-xs font-semibold text-white">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">{userName}</p>
            <p className="truncate text-[11px] text-[var(--neutral-400)]">{workspaceName}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 rounded-full bg-[var(--surface-deep-hover)] p-1">
          {LOCALES.map((code) => (
            <form key={code} action={setLocale} className="contents">
              <input type="hidden" name="locale" value={code} />
              <button
                type="submit"
                className={cn(
                  "flex-1 rounded-full px-3 py-1.5 text-xs font-semibold transition",
                  locale === code
                    ? "bg-white text-[var(--neutral-900)]"
                    : "text-[var(--neutral-400)] hover:text-white"
                )}
              >
                {LANGUAGE_LABELS[code]}
              </button>
            </form>
          ))}
        </div>

        <div className="mt-3">
          <SignOutButton
            label={t.sidebar.signOut}
            className="w-full border-[var(--surface-deep-hover)] bg-transparent text-[var(--neutral-300)] hover:bg-[var(--surface-deep-hover)] hover:text-white"
          />
        </div>
      </div>
    </aside>
  );
}
