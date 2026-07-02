import * as React from "react";
export interface CardProps {
  children?: React.ReactNode;
  /** Custom header node (overrides title/subtitle). */
  header?: React.ReactNode;
  footer?: React.ReactNode;
  title?: string;
  subtitle?: string;
  /** Right-aligned header actions. */
  actions?: React.ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): React.JSX.Element;
