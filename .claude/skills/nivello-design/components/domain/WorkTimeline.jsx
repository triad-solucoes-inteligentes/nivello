import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello WorkTimeline — vertical timeline of a obra's milestones/events.
 * events: [{ title, date, description, status: 'done'|'current'|'upcoming', icon }]
 */
export function WorkTimeline({ events = [], style, ...rest }) {
  return (
    <div style={{ ...style }} {...rest}>
      {events.map((e, i) => {
        const last = i === events.length - 1;
        const cfg = {
          done: { ring: "var(--success)", bg: "var(--success)", ic: "#fff", icon: e.icon || "check" },
          current: { ring: "var(--brand)", bg: "var(--brand-subtle)", ic: "var(--brand)", icon: e.icon || "loader" },
          upcoming: { ring: "var(--neutral-300)", bg: "var(--surface-card)", ic: "var(--text-subtle)", icon: e.icon || "circle" },
        }[e.status || "upcoming"];
        return (
          <div key={i} style={{ display: "flex", gap: 14, position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <span style={{ width: 30, height: 30, borderRadius: "50%", border: `2px solid ${cfg.ring}`, background: cfg.bg, display: "inline-flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                <Icon name={cfg.icon} style={{ width: 15, height: 15, color: cfg.ic }} />
              </span>
              {!last && <span style={{ flex: 1, width: 2, background: e.status === "done" ? "var(--success)" : "var(--neutral-200)", minHeight: 24 }} />}
            </div>
            <div style={{ paddingBottom: last ? 0 : 22, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: "14px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{e.title}</span>
                {e.date && <span style={{ fontSize: "12px", color: "var(--text-subtle)", fontFamily: "var(--font-mono)" }}>{e.date}</span>}
              </div>
              {e.description && <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: 3, lineHeight: 1.5 }}>{e.description}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
