import * as React from "react";
export interface DatePickerProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  size?: "sm" | "md" | "lg";
  min?: string;
  max?: string;
  id?: string;
  style?: React.CSSProperties;
}
export function DatePicker(props: DatePickerProps): React.JSX.Element;
