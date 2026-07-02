import * as React from "react";
export interface FilterChip { value: string; label: string; icon?: string; active?: boolean; }
export interface FilterBarProps {
  filters: FilterChip[];
  onToggle?: (value: string) => void;
  /** Show a "Filtros" button that opens a Drawer (mobile). */
  onOpenDrawer?: () => void;
  resultCount?: number;
  trailing?: React.ReactNode;
  style?: React.CSSProperties;
}
export function FilterBar(props: FilterBarProps): React.JSX.Element;
