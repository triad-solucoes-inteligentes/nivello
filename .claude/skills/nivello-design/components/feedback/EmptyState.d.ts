import * as React from "react";
export interface EmptyStateProps {
  /** Lucide icon name. @default "inbox" */
  icon?: string;
  title: string;
  description?: string;
  /** Action node (e.g. a <Button/>). */
  action?: React.ReactNode;
  compact?: boolean;
  style?: React.CSSProperties;
}
export function EmptyState(props: EmptyStateProps): React.JSX.Element;
