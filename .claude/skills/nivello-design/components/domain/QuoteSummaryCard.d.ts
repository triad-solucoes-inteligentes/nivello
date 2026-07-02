import * as React from "react";
export interface QuoteSummaryData {
  number?: string;
  name?: string;
  clientName?: string;
  workName?: string;
  total?: number;
  status?: "rascunho" | "enviado" | "aprovado" | "recusado" | "expirado";
  date?: string;
  itemCount?: number;
}
/**
 * @startingPoint section="Domínio" subtitle="Resumo de orçamento (lista/dashboard)" viewport="380x160"
 */
export interface QuoteSummaryCardProps {
  quote: QuoteSummaryData;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function QuoteSummaryCard(props: QuoteSummaryCardProps): React.JSX.Element;
