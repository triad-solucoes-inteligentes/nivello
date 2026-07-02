import * as React from "react";
export interface TableColumn {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
  width?: number | string;
  /** Render mono/tabular (prices, quantities). */
  mono?: boolean;
  nowrap?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}
/**
 * @startingPoint section="Data" subtitle="Tabela de dados (desktop)" viewport="700x300"
 */
export interface TableProps {
  columns: TableColumn[];
  data: any[];
  rowKey?: string;
  onRowClick?: (row: any) => void;
  selectable?: boolean;
  selectedKeys?: (string | number)[];
  onToggleRow?: (key: string | number) => void;
  emptyLabel?: string;
  zebra?: boolean;
  compact?: boolean;
  style?: React.CSSProperties;
}
export function Table(props: TableProps): React.JSX.Element;
