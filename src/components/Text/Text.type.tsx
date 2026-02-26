import { ReactNode } from "react";

export type Size = "xs" | "sm" | "md" | "lg"

export type TextProps = {
    bold?: boolean;
    size?: Size,
    color?: string
    children: ReactNode
}