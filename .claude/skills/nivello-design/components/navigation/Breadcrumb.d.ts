import * as React from "react";
export interface BreadcrumbItem { label: string; href?: string; icon?: string; }
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate?: (item: BreadcrumbItem, index: number) => void;
  style?: React.CSSProperties;
}
export function Breadcrumb(props: BreadcrumbProps): React.JSX.Element;
