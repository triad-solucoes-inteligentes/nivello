import React from "react";
import { Icon } from "../shared/Icon.jsx";

/** Nivello Pagination — page navigation with prev/next and page numbers. */
export function Pagination({ page = 1, totalPages = 1, onChange, showEdges = true, style, ...rest }) {
  const go = (p) => { if (p >= 1 && p <= totalPages && p !== page && onChange) onChange(p); };
  const pages = [];
  const range = 1;
  for (let p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || (p >= page - range && p <= page + range)) pages.push(p);
    else if (pages[pages.length - 1] !== "…") pages.push("…");
  }
  const btn = (active) => ({
    minWidth: 34, height: 34, padding: "0 8px", display: "inline-flex", alignItems: "center", justifyContent: "center",
    border: `1px solid ${active ? "var(--brand)" : "var(--border-default)"}`, borderRadius: "var(--radius-md)",
    background: active ? "var(--brand)" : "var(--surface-card)", color: active ? "#fff" : "var(--text-body)",
    fontSize: "13px", fontWeight: "var(--fw-semibold)", fontFamily: "var(--font-mono)", cursor: "pointer",
    transition: "background var(--dur-fast)",
  });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, ...style }} {...rest}>
      <button onClick={() => go(page - 1)} disabled={page <= 1} aria-label="Anterior" style={{ ...btn(false), opacity: page <= 1 ? 0.4 : 1, cursor: page <= 1 ? "not-allowed" : "pointer" }}>
        <Icon name="chevron-left" style={{ width: 16, height: 16 }} />
      </button>
      {showEdges && pages.map((p, i) => p === "…"
        ? <span key={`e${i}`} style={{ color: "var(--text-subtle)", padding: "0 4px" }}>…</span>
        : <button key={p} onClick={() => go(p)} style={btn(p === page)}>{p}</button>)}
      <button onClick={() => go(page + 1)} disabled={page >= totalPages} aria-label="Próxima" style={{ ...btn(false), opacity: page >= totalPages ? 0.4 : 1, cursor: page >= totalPages ? "not-allowed" : "pointer" }}>
        <Icon name="chevron-right" style={{ width: 16, height: 16 }} />
      </button>
    </div>
  );
}
