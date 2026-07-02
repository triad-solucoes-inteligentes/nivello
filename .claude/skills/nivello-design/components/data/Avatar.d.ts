import * as React from "react";
export interface AvatarProps {
  name?: string;
  src?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  tone?: "brand" | "accent" | "neutral";
  square?: boolean;
  style?: React.CSSProperties;
}
export function Avatar(props: AvatarProps): React.JSX.Element;
