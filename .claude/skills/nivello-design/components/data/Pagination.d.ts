import * as React from "react";
export interface PaginationProps {
  page?: number;
  totalPages?: number;
  onChange?: (page: number) => void;
  /** Show numbered pages (else just prev/next). */
  showEdges?: boolean;
  style?: React.CSSProperties;
}
export function Pagination(props: PaginationProps): React.JSX.Element;
