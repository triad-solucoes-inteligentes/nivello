import * as React from "react";
export interface IconProps {
  /** Lucide icon name (kebab-case), e.g. "hard-hat". */
  name?: string;
  /** Square size in px (or set width/height via style). */
  size?: number;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): React.JSX.Element;
