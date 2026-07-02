import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello Sidebar — desktop primary navigation.
 * Brand wordmark + nav groups + user footer. Deep teal surface.
 * items: [{ value, label, icon, badge }]
 */
export function Sidebar({ items = [], value, onSelect, user, collapsed = false, footer, style, ...rest }) {
  return (
    <aside style={{ width: collapsed ? "var(--sidebar-w-collapsed)" : "var(--sidebar-w)", height: "100%", background: "var(--surface-deep)", color: "#cfe6ec", display: "flex", flexDirection: "column", transition: "width var(--dur-base) var(--ease-out)", ...style }} {...rest}>
      {/* Brand */}
      <div style={{ height: "var(--topbar-h)", display: "flex", alignItems: "center", gap: 10, padding: "0 18px", flexShrink: 0 }}>
        <span style={{ width: 30, height: 30, borderRadius: "var(--radius-md)", background: "linear-gradient(160deg, var(--teal-400), var(--teal-600))", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name="droplet" style={{ width: 17, height: 17, color: "#fff" }} />
        </span>
        {!collapsed && <span style={{ fontSize: "18px", fontWeight: "var(--fw-bold)", color: "#fff", letterSpacing: "-0.02em" }}>Nivello</span>}
      </div>
      {/* Nav */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((it) => {
          if (it.section) return !collapsed ? <div key={it.section} className="nv-label" style={{ padding: "14px 10px 6px", fontSize: "11px", color: "#6f96a0" }}>{it.section}</div> : <div key={it.section} style={{ height: 12 }} />;
          const active = it.value === value;
          return (
            <button key={it.value} onClick={() => onSelect && onSelect(it.value)} title={it.label}
              style={{ display: "flex", alignItems: "center", gap: 11, padding: collapsed ? "10px" : "9px 11px", justifyContent: collapsed ? "center" : "flex-start", border: "none", cursor: "pointer", borderRadius: "var(--radius-md)", background: active ? "rgba(52,186,205,0.16)" : "transparent", color: active ? "#fff" : "#a9cdd6", fontSize: "14px", fontWeight: "var(--fw-medium)", fontFamily: "var(--font-sans)", transition: "background var(--dur-fast), color var(--dur-fast)", position: "relative" }}
              onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
              onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}>
              {active && <span style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 3, borderRadius: 4, background: "var(--teal-300)" }} />}
              <Icon name={it.icon} style={{ width: 19, height: 19, flexShrink: 0 }} />
              {!collapsed && <span style={{ flex: 1, textAlign: "left" }}>{it.label}</span>}
              {!collapsed && it.badge != null && <span style={{ fontSize: "11px", fontWeight: "var(--fw-semibold)", padding: "1px 7px", borderRadius: "var(--radius-full)", background: "rgba(52,186,205,0.22)", color: "#cbeef4", fontFamily: "var(--font-mono)" }}>{it.badge}</span>}
            </button>
          );
        })}
      </nav>
      {/* User footer */}
      {(user || footer) && (
        <div style={{ padding: 12, borderTop: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 }}>
          {footer || (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.12)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "var(--fw-semibold)", color: "#fff", flexShrink: 0 }}>
                {(user?.name || "?").split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase()}
              </span>
              {!collapsed && <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "13px", fontWeight: "var(--fw-semibold)", color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user?.name}</div>
                <div style={{ fontSize: "12px", color: "#7fa4ad", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user?.email}</div>
              </div>}
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
