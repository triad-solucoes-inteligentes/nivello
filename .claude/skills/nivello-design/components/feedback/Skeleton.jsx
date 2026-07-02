import React from "react";

/** Nivello Skeleton — loading placeholder block. */
export function Skeleton({ width = "100%", height = 16, radius = "var(--radius-sm)", circle = false, style, ...rest }) {
  return <span className="nv-skeleton" style={{ display: "block", width, height: circle ? width : height, borderRadius: circle ? "50%" : radius, ...style }} {...rest} />;
}
