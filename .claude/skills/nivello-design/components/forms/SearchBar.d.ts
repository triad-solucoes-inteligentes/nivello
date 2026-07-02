import * as React from "react";
export interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
export function SearchBar(props: SearchBarProps): React.JSX.Element;
