import * as React from "react";
export interface Step { label: string; description?: string; }
export interface StepperProps {
  steps: Step[];
  /** 0-indexed active step. */
  current?: number;
  orientation?: "horizontal" | "vertical";
  onStepClick?: (index: number) => void;
  style?: React.CSSProperties;
}
export function Stepper(props: StepperProps): React.JSX.Element;
