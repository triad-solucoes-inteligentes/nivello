import * as React from "react";
export interface SidebarItem {
  value?: string;
  label?: string;
  /** Lucide icon name. */
  icon?: string;
  badge?: string | number;
  /** Render as a section header instead of a link. */
  section?: string;
}
export interface SidebarUser { name: string; email?: string; avatarUrl?: string; }
export interface SidebarProps {
  items: SidebarItem[];
  value?: string;
  onSelect?: (value: string) => void;
  user?: SidebarUser;
  collapsed?: boolean;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Sidebar(props: SidebarProps): React.JSX.Element;
