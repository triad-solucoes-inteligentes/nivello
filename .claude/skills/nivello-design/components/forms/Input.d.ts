import * as React from "react";
export interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  /** Lucide icon name shown inside, left. */
  icon?: string;
  /** Trailing unit/suffix (e.g. "m", "un"). */
  suffix?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  id?: string;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): React.JSX.Element;
