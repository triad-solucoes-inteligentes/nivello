import * as React from "react";
export interface QuoteCompany {
  name: string;
  tagline?: string;
  address?: string;
  phone?: string;
  email?: string;
  taxId?: string;
}
export interface PrintableQuoteHeaderProps {
  company: QuoteCompany;
  quoteNumber?: string;
  date?: string;
  validity?: string;
  /** Custom logo node (falls back to a droplet mark). */
  logoSlot?: React.ReactNode;
  style?: React.CSSProperties;
}
export function PrintableQuoteHeader(props: PrintableQuoteHeaderProps): React.JSX.Element;
