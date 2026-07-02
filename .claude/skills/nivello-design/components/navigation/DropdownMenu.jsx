import React from "react";
import { Icon } from "../shared/Icon.jsx";

/** Nivello DropdownMenu — click-to-open menu. items: [{label,icon,onClick,danger,divider}]. */
export function DropdownMenu({ trigger, items = [], align = "left", style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block", ...style }} {...rest}>
      <span onClick={() => setOpen((o) => !o)} style={{ display: "inline-flex", cursor: "pointer" }}>{trigger}</span>
      {open && (
        <div style={{ position: "absolute", top: "calc(100% + 6px)", [align]: 0, minWidth: 190, background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", padding: 5, zIndex: "var(--z-dropdown)", animation: "nv-slide-up var(--dur-fast) var(--ease-out)" }}>
          {items.map((it, i) => it.divider
            ? <div key={`d${i}`} style={{ height: 1, background: "var(--border-subtle)", margin: "5px 0" }} />
            : (
              <button key={i} onClick={() => { it.onClick && it.onClick(); setOpen(false); }}
                style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", border: "none", background: "transparent", cursor: "pointer", borderRadius: "var(--radius-sm)", fontSize: "13px", fontWeight: "var(--fw-medium)", fontFamily: "var(--font-sans)", color: it.danger ? "var(--danger)" : "var(--text-body)", textAlign: "left", transition: "background var(--dur-fast)" }}
                onMouseEnter={(e) => e.currentTarget.style.background = it.danger ? "var(--danger-bg)" : "var(--surface-hover)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                {it.icon && <Icon name={it.icon} style={{ width: 16, height: 16 }} />}
                {it.label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
