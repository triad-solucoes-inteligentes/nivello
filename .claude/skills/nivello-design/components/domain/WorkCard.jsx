import React from "react";
import { Icon } from "../shared/Icon.jsx";
import { ProgressIndicator } from "../feedback/ProgressIndicator.jsx";
import { DeadlineIndicator } from "./DeadlineIndicator.jsx";

const WORK_STATUS = {
  planejada:   { label: "Planejada", fg: "var(--work-planned)", bg: "var(--work-planned-bg)", dot: "var(--neutral-400)" },
  andamento:   { label: "Em andamento", fg: "var(--work-active)", bg: "var(--work-active-bg)", dot: "var(--teal-500)" },
  concluida:   { label: "Concluída", fg: "var(--work-done)", bg: "var(--work-done-bg)", dot: "var(--success-500)" },
  atrasada:    { label: "Atrasada", fg: "var(--work-late)", bg: "var(--work-late-bg)", dot: "var(--danger-500)" },
};

/** Nivello WorkCard — obra summary with status, client, progress, deadline. */
export function WorkCard({ work = {}, clientName, status = "andamento", progress, onClick, style, ...rest }) {
  const { name, address, deadline } = work;
  const s = WORK_STATUS[status] || WORK_STATUS.andamento;
  return (
    <div onClick={onClick} className={onClick ? "nv-card-hover" : undefined}
      style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: 16, cursor: onClick ? "pointer" : "default", transition: "box-shadow var(--dur-base), transform var(--dur-base), border-color var(--dur-base)", ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: "15px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</div>
          {clientName && <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "13px", color: "var(--text-muted)", marginTop: 3 }}>
            <Icon name="building-2" style={{ width: 13, height: 13 }} />{clientName}
          </div>}
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, flexShrink: 0, fontSize: "12px", fontWeight: "var(--fw-semibold)", color: s.fg, background: s.bg, borderRadius: "var(--radius-full)", padding: "3px 10px" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.dot }} />{s.label}
        </span>
      </div>
      {address && <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "12px", color: "var(--text-subtle)", marginTop: 8 }}>
        <Icon name="map-pin" style={{ width: 13, height: 13, flexShrink: 0 }} /><span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{address}</span>
      </div>}
      {progress != null && <div style={{ marginTop: 12 }}><ProgressIndicator value={progress} tone={status === "atrasada" ? "danger" : "brand"} showLabel /></div>}
      {deadline && <div style={{ marginTop: 12 }}><DeadlineIndicator date={deadline} size="sm" label="Prazo" /></div>}
    </div>
  );
}
