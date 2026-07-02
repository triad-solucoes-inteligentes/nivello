import * as React from "react";
export type WorkStatus = "planejada" | "andamento" | "concluida" | "atrasada";
export interface WorkData { name: string; address?: string; startDate?: string; deadline?: string; }
/**
 * @startingPoint section="Domínio" subtitle="Card de obra com status e progresso" viewport="360x200"
 */
export interface WorkCardProps {
  work: WorkData;
  clientName?: string;
  status?: WorkStatus;
  /** 0–100 completion. */
  progress?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function WorkCard(props: WorkCardProps): React.JSX.Element;
