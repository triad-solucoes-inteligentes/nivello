import React from "react";

/**
 * Nivello ProgressIndicator — linear bar or circular ring.
 * Used for obra progress, upload/save, quote completion.
 */
export function ProgressIndicator({ value = 0, max = 100, variant = "linear", tone = "brand", size = "md", showLabel = false, label, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const tones = { brand: "var(--brand)", accent: "var(--accent)", success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)" };
  const color = tones[tone] || tones.brand;

  if (variant === "circular") {
    const dim = { sm: 40, md: 56, lg: 72 }[size];
    const stroke = size === "sm" ? 4 : 6;
    const r = (dim - stroke) / 2;
    const circ = 2 * Math.PI * r;
    return (
      <div style={{ position: "relative", width: dim, height: dim, ...style }} {...rest}>
        <svg width={dim} height={dim} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={dim / 2} cy={dim / 2} r={r} fill="none" stroke="var(--neutral-200)" strokeWidth={stroke} />
          <circle cx={dim / 2} cy={dim / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ - (circ * pct) / 100} style={{ transition: "stroke-dashoffset var(--dur-slow) var(--ease-out)" }} />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: size === "sm" ? "11px" : "13px", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)", fontFamily: "var(--font-mono)" }}>{Math.round(pct)}%</div>
      </div>
    );
  }

  const h = { sm: 4, md: 6, lg: 8 }[size];
  return (
    <div style={style} {...rest}>
      {(showLabel || label) && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: "12px" }}>
          <span style={{ color: "var(--text-muted)" }}>{label}</span>
          {showLabel && <span style={{ color: "var(--text-body)", fontWeight: "var(--fw-semibold)", fontFamily: "var(--font-mono)" }}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div style={{ height: h, background: "var(--neutral-200)", borderRadius: "var(--radius-full)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: "var(--radius-full)", transition: "width var(--dur-slow) var(--ease-out)" }} />
      </div>
    </div>
  );
}
