import * as React from "react";
export interface SelectOption { value: string; label: string; }
export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** String[] or {value,label}[]. */
  options?: (string | SelectOption)[];
  placeholder?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  id?: string;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): React.JSX.Element;
