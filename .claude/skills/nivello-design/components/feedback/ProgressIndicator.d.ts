import * as React from "react";
export interface ProgressIndicatorProps {
  value?: number;
  max?: number;
  variant?: "linear" | "circular";
  tone?: "brand" | "accent" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  /** Show percentage label. */
  showLabel?: boolean;
  /** Text label (linear only). */
  label?: string;
  style?: React.CSSProperties;
}
export function ProgressIndicator(props: ProgressIndicatorProps): React.JSX.Element;
