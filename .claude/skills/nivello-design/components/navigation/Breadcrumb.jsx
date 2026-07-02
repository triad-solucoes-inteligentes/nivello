import React from "react";
import { Icon } from "../shared/Icon.jsx";

/** Nivello Breadcrumb — hierarchical trail. items: [{label,href,icon}]. */
export function Breadcrumb({ items = [], onNavigate, style, ...rest }) {
  return (
    <nav aria-label="breadcrumb" style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", ...style }} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            <span
              onClick={!last && onNavigate ? () => onNavigate(it, i) : undefined}
              style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "13px", fontWeight: last ? "var(--fw-semibold)" : "var(--fw-medium)", color: last ? "var(--text-strong)" : "var(--text-muted)", cursor: !last && onNavigate ? "pointer" : "default", whiteSpace: "nowrap" }}>
              {it.icon && <Icon name={it.icon} style={{ width: 14, height: 14 }} />}
              {it.label}
            </span>
            {!last && <Icon name="chevron-right" style={{ width: 14, height: 14, color: "var(--text-subtle)" }} />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
