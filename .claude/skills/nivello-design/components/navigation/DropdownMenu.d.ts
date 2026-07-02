import * as React from "react";
export interface DropdownMenuItem {
  label?: string;
  icon?: string;
  onClick?: () => void;
  danger?: boolean;
  divider?: boolean;
}
export interface DropdownMenuProps {
  /** Trigger node (e.g. an IconButton). */
  trigger: React.ReactNode;
  items: DropdownMenuItem[];
  align?: "left" | "right";
  style?: React.CSSProperties;
}
export function DropdownMenu(props: DropdownMenuProps): React.JSX.Element;
