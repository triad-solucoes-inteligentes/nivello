import React from "react";
import { Icon } from "../shared/Icon.jsx";
import { Avatar } from "../data/Avatar.jsx";

/**
 * Nivello ClientCard — cliente summary tile.
 * Shows name, address, phone, and related works/quotes counts.
 */
export function ClientCard({ client = {}, worksCount, quotesCount, onClick, actions, style, ...rest }) {
  const { name, address, cellphone } = client;
  return (
    <div onClick={onClick} className={onClick ? "nv-card-hover" : undefined}
      style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: 16, cursor: onClick ? "pointer" : "default", transition: "box-shadow var(--dur-base), transform var(--dur-base), border-color var(--dur-base)", ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <Avatar name={name} size="lg" square />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "15px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</div>
          {address && <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "13px", color: "var(--text-muted)", marginTop: 4 }}>
            <Icon name="map-pin" style={{ width: 14, height: 14, flexShrink: 0 }} /><span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{address}</span>
          </div>}
          {cellphone && <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "13px", color: "var(--text-muted)", marginTop: 3 }}>
            <Icon name="phone" style={{ width: 14, height: 14, flexShrink: 0 }} />{cellphone}
          </div>}
        </div>
        {actions}
      </div>
      {(worksCount != null || quotesCount != null) && (
        <div style={{ display: "flex", gap: 20, marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--border-subtle)" }}>
          {worksCount != null && <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Icon name="hard-hat" style={{ width: 15, height: 15, color: "var(--text-subtle)" }} />
            <span style={{ fontSize: "13px", color: "var(--text-body)" }}><b style={{ fontFamily: "var(--font-mono)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{worksCount}</b> obras</span>
          </div>}
          {quotesCount != null && <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Icon name="file-text" style={{ width: 15, height: 15, color: "var(--text-subtle)" }} />
            <span style={{ fontSize: "13px", color: "var(--text-body)" }}><b style={{ fontFamily: "var(--font-mono)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)" }}>{quotesCount}</b> orçamentos</span>
          </div>}
        </div>
      )}
    </div>
  );
}
