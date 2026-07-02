import React from "react";
import { Icon } from "../shared/Icon.jsx";

/**
 * Nivello Stepper — multi-step progress header (quote builder).
 * steps: [{label, description?}]. current = 0-indexed active step.
 */
export function Stepper({ steps = [], current = 0, orientation = "horizontal", onStepClick, style, ...rest }) {
  const vertical = orientation === "vertical";
  return (
    <div style={{ display: "flex", flexDirection: vertical ? "column" : "row", alignItems: vertical ? "stretch" : "flex-start", gap: 0, ...style }} {...rest}>
      {steps.map((s, i) => {
        const done = i < current;
        const active = i === current;
        const color = done || active ? "var(--brand)" : "var(--neutral-300)";
        return (
          <div key={i} style={{ display: "flex", flexDirection: vertical ? "row" : "column", alignItems: vertical ? "flex-start" : "center", flex: vertical ? "none" : 1, position: "relative" }}>
            <div style={{ display: "flex", flexDirection: vertical ? "column" : "row", alignItems: "center", gap: vertical ? 0 : 0, [vertical ? "marginRight" : ""]: 12 }}>
              <button type="button" onClick={onStepClick ? () => onStepClick(i) : undefined}
                style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, border: `2px solid ${color}`, background: done ? "var(--brand)" : active ? "var(--brand-subtle)" : "var(--surface-card)", color: done ? "#fff" : active ? "var(--brand)" : "var(--text-subtle)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "var(--fw-bold)", fontFamily: "var(--font-mono)", cursor: onStepClick ? "pointer" : "default", transition: "all var(--dur-base)" }}>
                {done ? <Icon name="check" style={{ width: 15, height: 15 }} /> : i + 1}
              </button>
            </div>
            {/* connector */}
            {i < steps.length - 1 && (
              <div style={vertical
                ? { position: "absolute", left: 14, top: 30, bottom: -6, width: 2, background: done ? "var(--brand)" : "var(--neutral-200)" }
                : { position: "absolute", top: 14, left: "calc(50% + 20px)", right: "calc(-50% + 20px)", height: 2, background: done ? "var(--brand)" : "var(--neutral-200)" }} />
            )}
            <div style={{ marginTop: vertical ? 0 : 8, marginLeft: vertical ? 12 : 0, paddingBottom: vertical ? 24 : 0, textAlign: vertical ? "left" : "center" }}>
              <div style={{ fontSize: "13px", fontWeight: active ? "var(--fw-semibold)" : "var(--fw-medium)", color: active || done ? "var(--text-strong)" : "var(--text-muted)" }}>{s.label}</div>
              {s.description && <div style={{ fontSize: "12px", color: "var(--text-subtle)", marginTop: 2 }}>{s.description}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
