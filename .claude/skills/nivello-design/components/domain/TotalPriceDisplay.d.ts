import * as React from "react";
export interface TotalPriceDisplayProps {
  value?: number;
  /** Currency prefix. @default "R$" */
  currency?: string;
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "strong" | "brand" | "accent" | "muted";
  decimals?: number;
  align?: "left" | "right";
  style?: React.CSSProperties;
}
export function TotalPriceDisplay(props: TotalPriceDisplayProps): React.JSX.Element;
