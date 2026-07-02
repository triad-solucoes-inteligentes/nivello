import React from "react";

/**
 * Nivello Icon — React-owned wrapper around a Lucide glyph.
 *
 * Node identity is stable: React owns the <span> and never its interior.
 * The Lucide SVG is injected via innerHTML in an effect, so lucide's DOM
 * mutations never touch nodes React is reconciling (avoids insertBefore
 * crashes on re-render). No global createIcons() interval needed.
 */
export function Icon({ name, size, strokeWidth = 1.75, style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!name) { el.innerHTML = ""; return; }
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    try { if (window.lucide && window.lucide.createIcons) window.lucide.createIcons(); } catch (e) { /* lucide not ready */ }
    const svg = el.querySelector("svg");
    if (svg) {
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.setAttribute("stroke-width", strokeWidth);
      svg.style.display = "block";
    }
  }, [name, strokeWidth]);
  const dim = size != null ? size : undefined;
  return React.createElement("span", {
    ref,
    "aria-hidden": "true",
    style: { display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...(dim != null ? { width: dim, height: dim } : {}), ...style },
    ...rest,
  });
}
