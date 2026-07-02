import * as React from "react";
export type QuoteStatus = "rascunho" | "enviado" | "aprovado" | "recusado" | "expirado";
export interface QuoteStatusBadgeProps {
  status?: QuoteStatus;
  size?: "sm" | "md";
  showIcon?: boolean;
  style?: React.CSSProperties;
}
export function QuoteStatusBadge(props: QuoteStatusBadgeProps): React.JSX.Element;
