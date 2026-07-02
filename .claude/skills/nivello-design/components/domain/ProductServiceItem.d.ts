import * as React from "react";
export interface ProductData {
  name: string;
  description?: string;
  quantity?: number;
  unit?: string;
  total?: number;
  type?: "servico" | "material";
}
export interface ProductServiceItemProps {
  product: ProductData;
  onClick?: () => void;
  selected?: boolean;
  /** Trailing action node (e.g. add button). */
  action?: React.ReactNode;
  compact?: boolean;
  style?: React.CSSProperties;
}
export function ProductServiceItem(props: ProductServiceItemProps): React.JSX.Element;
