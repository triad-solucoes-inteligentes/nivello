import * as React from "react";
export interface FABAction { label: string; icon: string; onClick?: () => void; }
export interface CreateFABProps {
  /** Lucide icon (closed state). @default "plus" */
  icon?: string;
  label?: string;
  /** Speed-dial actions; when present, FAB toggles a menu. */
  actions?: FABAction[];
  open?: boolean;
  onToggle?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function CreateFAB(props: CreateFABProps): React.JSX.Element;
