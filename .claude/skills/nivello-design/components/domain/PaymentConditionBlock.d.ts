import * as React from "react";
export interface PaymentConditionBlockProps {
  /** e.g. "Saldo 30 e 60 dias". */
  paymentTerms?: string;
  /** e.g. "3 dias". */
  deliveryTerm?: string;
  /** e.g. "30 dias". */
  validity?: string;
  observations?: string;
  layout?: "grid" | "stack";
  style?: React.CSSProperties;
}
export function PaymentConditionBlock(props: PaymentConditionBlockProps): React.JSX.Element;
