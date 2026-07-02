import React from "react";

/** Nivello Avatar — user/client initial or image. */
export function Avatar({ name = "", src, size = "md", tone = "brand", square = false, style, ...rest }) {
  const dim = { xs: 24, sm: 32, md: 40, lg: 48, xl: 64 }[size];
  const fs = { xs: 10, sm: 12, md: 14, lg: 16, xl: 22 }[size];
  const initials = name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const tones = { brand: { bg: "var(--brand-subtle)", fg: "var(--text-brand)" }, accent: { bg: "var(--accent-subtle)", fg: "var(--terra-700)" }, neutral: { bg: "var(--neutral-200)", fg: "var(--neutral-700)" } };
  const t = tones[tone] || tones.brand;
  const common = { width: dim, height: dim, borderRadius: square ? "var(--radius-md)" : "50%", flexShrink: 0 };
  if (src) return <img src={src} alt={name} style={{ ...common, objectFit: "cover", ...style }} {...rest} />;
  return (
    <span style={{ ...common, background: t.bg, color: t.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: fs, fontWeight: "var(--fw-semibold)", fontFamily: "var(--font-sans)", ...style }} {...rest}>
      {initials || "?"}
    </span>
  );
}
