import * as React from "react";
export interface TabItem { value: string; label: string; icon?: string; count?: number; }
export interface TabsProps {
  items: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  variant?: "underline" | "pill";
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): React.JSX.Element;
