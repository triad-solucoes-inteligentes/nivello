import * as React from "react";
export interface DeadlineIndicatorProps {
  /** ISO date of the deadline. */
  date?: string;
  /** Explicit days remaining (overrides date calc). Negative = overdue. */
  daysLeft?: number;
  label?: string;
  size?: "sm" | "md";
  style?: React.CSSProperties;
}
export function DeadlineIndicator(props: DeadlineIndicatorProps): React.JSX.Element;
