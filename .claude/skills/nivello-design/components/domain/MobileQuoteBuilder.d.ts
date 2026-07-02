import * as React from "react";
export interface QBItem { name: string; quantity?: number; unit?: string; unitPrice?: number; type?: "servico" | "material"; }
/**
 * @startingPoint section="Domínio" subtitle="Fluxo mobile em etapas para criar orçamento" viewport="390x760"
 */
export interface MobileQuoteBuilderProps {
  client?: { name?: string };
  work?: { name?: string; address?: string };
  items?: QBItem[];
  onAddItem?: () => void;
  /** Controlled 0-indexed step. */
  step?: number;
  onStepChange?: (step: number) => void;
  style?: React.CSSProperties;
}
export function MobileQuoteBuilder(props: MobileQuoteBuilderProps): React.JSX.Element;
