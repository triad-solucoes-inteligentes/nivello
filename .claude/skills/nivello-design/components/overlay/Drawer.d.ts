import * as React from "react";
export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  side?: "right" | "left" | "bottom";
  /** Panel width in px (side drawers). */
  size?: number;
  style?: React.CSSProperties;
}
export function Drawer(props: DrawerProps): React.JSX.Element | null;
