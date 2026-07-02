import * as React from "react";
import { QuoteCompany } from "./PrintableQuoteHeader";
export interface QuoteItem {
  name: string;
  description?: string;
  quantity?: number;
  unit?: string;
  unitPrice?: number;
  type?: "servico" | "material";
}
/**
 * @startingPoint section="Domínio" subtitle="Documento de orçamento para impressão/PDF" viewport="820x900"
 */
export interface QuotePreviewProps {
  company: QuoteCompany;
  client?: { name?: string; address?: string; cellphone?: string };
  work?: { name?: string; address?: string; description?: string };
  quoteNumber?: string;
  date?: string;
  validity?: string;
  items: QuoteItem[];
  paymentTerms?: string;
  deliveryTerm?: string;
  observations?: string;
  currency?: string;
  style?: React.CSSProperties;
}
export function QuotePreview(props: QuotePreviewProps): React.JSX.Element;
