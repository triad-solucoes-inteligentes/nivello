import * as React from "react";
/**
 * @startingPoint section="Data" subtitle="KPI tile para o dashboard" viewport="260x140"
 */
export interface MetricCardProps {
  label: string;
  value: string | number;
  /** Unit suffix (e.g. "obras", "R$"). */
  unit?: string;
  /** Lucide icon name. */
  icon?: string;
  tone?: "brand" | "accent" | "success" | "warning" | "info" | "neutral";
  /** Delta text (e.g. "+12%"). */
  delta?: string;
  deltaDirection?: "up" | "down";
  hint?: string;
  style?: React.CSSProperties;
}
export function MetricCard(props: MetricCardProps): React.JSX.Element;
