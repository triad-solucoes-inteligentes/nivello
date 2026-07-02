import * as React from "react";
export interface BottomNavItem { value: string; label: string; icon: string; }
export interface BottomNavProps {
  items: BottomNavItem[];
  value?: string;
  onSelect?: (value: string) => void;
  style?: React.CSSProperties;
}
export function BottomNav(props: BottomNavProps): React.JSX.Element;
