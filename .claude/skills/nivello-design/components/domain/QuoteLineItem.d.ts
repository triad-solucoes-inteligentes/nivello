import * as React from "react";
export interface QuoteLineData {
  name: string;
  description?: string;
  quantity?: number;
  unit?: string;
  unitPrice?: number;
  type?: "servico" | "material";
}
export interface QuoteLineItemProps {
  item: QuoteLineData;
  editable?: boolean;
  onChange?: (item: QuoteLineData) => void;
  onRemove?: () => void;
  index?: number;
  style?: React.CSSProperties;
}
export function QuoteLineItem(props: QuoteLineItemProps): React.JSX.Element;
