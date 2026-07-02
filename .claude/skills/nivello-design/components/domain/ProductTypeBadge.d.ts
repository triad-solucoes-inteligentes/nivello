import * as React from "react";
export type ProductType = "servico" | "material";
export interface ProductTypeBadgeProps {
  type?: ProductType;
  size?: "sm" | "md";
  style?: React.CSSProperties;
}
export function ProductTypeBadge(props: ProductTypeBadgeProps): React.JSX.Element;
