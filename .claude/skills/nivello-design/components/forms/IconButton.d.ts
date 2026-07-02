import * as React from "react";
export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  variant?: "ghost" | "solid" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  /** Accessible label (aria-label + title). */
  label?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): React.JSX.Element;
