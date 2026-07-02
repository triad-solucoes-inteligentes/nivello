import React from "react";

/** Nivello Card — base surface container. Optional header/footer, hover, padding. */
export function Card({ children, header, footer, title, subtitle, actions, padding = "md", hover = false, onClick, style, ...rest }) {
  const pad = { none: 0, sm: "14px", md: "18px", lg: "24px" }[padding];
  const clickable = Boolean(onClick);
  return (
    <div
      onClick={onClick}
      className={hover || clickable ? "nv-card-hover" : undefined}
      style={{
        background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)", overflow: "hidden", cursor: clickable ? "pointer" : "default",
        transition: "box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base), transform var(--dur-base)", ...style,
      }}
      {...rest}
    >
      {(title || header || actions) && (
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, padding: `14px ${pad === 0 ? "18px" : pad} 0` }}>
          <div style={{ minWidth: 0 }}>
            {header || (<>
              {title && <div style={{ fontSize: "15px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{title}</div>}
              {subtitle && <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: 2 }}>{subtitle}</div>}
            </>)}
          </div>
          {actions && <div style={{ flexShrink: 0 }}>{actions}</div>}
        </div>
      )}
      <div style={{ padding: pad }}>{children}</div>
      {footer && <div style={{ padding: `0 ${pad === 0 ? "18px" : pad} 14px`, borderTop: "1px solid var(--border-subtle)", marginTop: 4, paddingTop: 12 }}>{footer}</div>}
    </div>
  );
}
