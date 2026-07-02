import * as React from "react";
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: string;
  /** Render as a circle (uses width for both dims). */
  circle?: boolean;
  style?: React.CSSProperties;
}
export function Skeleton(props: SkeletonProps): React.JSX.Element;
