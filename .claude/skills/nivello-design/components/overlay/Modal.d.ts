import * as React from "react";
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  /** Footer actions (buttons). */
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  /** Lucide icon name shown in a tinted badge. */
  icon?: string;
  iconTone?: "brand" | "success" | "warning" | "danger";
  closeOnBackdrop?: boolean;
  style?: React.CSSProperties;
}
export function Modal(props: ModalProps): React.JSX.Element | null;
