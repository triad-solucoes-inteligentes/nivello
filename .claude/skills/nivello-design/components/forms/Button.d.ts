import * as React from "react";

/**
 * @startingPoint section="Forms" subtitle="Botões: primary, secondary, accent, ghost, danger" viewport="700x180"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "accent" | "ghost" | "danger" | "link";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Lucide icon name shown before the label. */
  icon?: string;
  /** Lucide icon name shown after the label. */
  iconRight?: string;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): React.JSX.Element;
