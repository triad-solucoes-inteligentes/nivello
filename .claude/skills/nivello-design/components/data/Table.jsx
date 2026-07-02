import React from "react";

/**
 * Nivello Table — clean data table (never a spreadsheet look).
 * columns: [{ key, header, align, width, render, mono }]
 */
export function Table({ columns = [], data = [], rowKey = "id", onRowClick, selectable = false, selectedKeys = [], onToggleRow, emptyLabel = "Sem registros", zebra = false, compact = false, style, ...rest }) {
  const cellPad = compact ? "8px 12px" : "12px 14px";
  return (
    <div style={{ border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--surface-card)", ...style }} {...rest}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr style={{ background: "var(--surface-sunken)" }}>
              {selectable && <th style={{ width: 40, padding: cellPad }} />}
              {columns.map((c) => (
                <th key={c.key} style={{ textAlign: c.align || "left", padding: cellPad, width: c.width, fontSize: "12px", fontWeight: "var(--fw-semibold)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "nowrap", borderBottom: "1px solid var(--border-subtle)" }}>{c.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr><td colSpan={columns.length + (selectable ? 1 : 0)} style={{ padding: "32px", textAlign: "center", color: "var(--text-muted)" }}>{emptyLabel}</td></tr>
            )}
            {data.map((row, i) => {
              const key = row[rowKey] ?? i;
              const checked = selectedKeys.includes(key);
              return (
                <tr key={key} onClick={onRowClick ? () => onRowClick(row) : undefined}
                  className="nv-table-row"
                  style={{ background: checked ? "var(--brand-subtle)" : zebra && i % 2 ? "var(--neutral-50)" : "transparent", cursor: onRowClick ? "pointer" : "default", transition: "background var(--dur-fast)" }}>
                  {selectable && (
                    <td style={{ padding: cellPad, borderBottom: "1px solid var(--border-subtle)" }} onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" checked={checked} onChange={() => onToggleRow && onToggleRow(key)} style={{ width: 16, height: 16, accentColor: "var(--brand)" }} />
                    </td>
                  )}
                  {columns.map((c) => (
                    <td key={c.key} style={{ textAlign: c.align || "left", padding: cellPad, color: "var(--text-body)", borderBottom: "1px solid var(--border-subtle)", fontFamily: c.mono ? "var(--font-mono)" : "inherit", fontVariantNumeric: c.mono ? "tabular-nums" : "normal", whiteSpace: c.nowrap ? "nowrap" : "normal" }}>
                      {c.render ? c.render(row[c.key], row) : row[c.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
