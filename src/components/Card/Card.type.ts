import { ReactNode } from "react";

export type CardProps = {
  title?: string;
  children?: ReactNode;
  width?: number | string;
  padding?: number;
  background?: string;
  borderColor?: string;
};
