import * as React from "react";
export interface TimelineEvent {
  title: string;
  date?: string;
  description?: string;
  status?: "done" | "current" | "upcoming";
  /** Lucide icon name override. */
  icon?: string;
}
export interface WorkTimelineProps {
  events: TimelineEvent[];
  style?: React.CSSProperties;
}
export function WorkTimeline(props: WorkTimelineProps): React.JSX.Element;
