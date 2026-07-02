import * as React from "react";
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "neutral" | "brand" | "accent" | "success" | "warning" | "danger" | "info" | "solid";
  size?: "sm" | "md";
  /** Leading status dot. */
  dot?: boolean;
  /** Lucide icon name. */
  icon?: string;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): React.JSX.Element;
