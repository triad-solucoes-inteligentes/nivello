import * as React from "react";
export interface ToastProps {
  variant?: "info" | "success" | "warning" | "danger";
  title?: string;
  description?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): React.JSX.Element;
