import * as React from "react";
export interface ClientData { name: string; address?: string; cellphone?: string; }
/**
 * @startingPoint section="Domínio" subtitle="Card de cliente" viewport="360x160"
 */
export interface ClientCardProps {
  client: ClientData;
  worksCount?: number;
  quotesCount?: number;
  onClick?: () => void;
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}
export function ClientCard(props: ClientCardProps): React.JSX.Element;
