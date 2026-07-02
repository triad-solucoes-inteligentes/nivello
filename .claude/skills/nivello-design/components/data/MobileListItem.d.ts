import * as React from "react";
export interface MobileListItemProps {
  /** Lucide icon name (leading). */
  icon?: string;
  iconTone?: "brand" | "accent" | "neutral" | "success";
  /** Custom leading node (e.g. Avatar); overrides icon. */
  avatar?: React.ReactNode;
  title: string;
  subtitle?: string;
  /** Meta row(s), e.g. dates, address chips. */
  meta?: React.ReactNode;
  /** Trailing content (value, badge). */
  trailing?: React.ReactNode;
  badge?: React.ReactNode;
  onClick?: () => void;
  showChevron?: boolean;
  style?: React.CSSProperties;
}
export function MobileListItem(props: MobileListItemProps): React.JSX.Element;
