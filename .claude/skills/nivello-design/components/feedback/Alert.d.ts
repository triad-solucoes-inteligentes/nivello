import * as React from "react";
export interface AlertProps {
  variant?: "info" | "success" | "warning" | "danger";
  title?: string;
  children?: React.ReactNode;
  /** Override the default variant icon (Lucide name). */
  icon?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Alert(props: AlertProps): React.JSX.Element;
