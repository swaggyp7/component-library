import { ReactNode } from "react"

export type Size = "xs" | "sm" | "md" | "lg"

export type LabelProps = {
    size?: Size,
    disabled?: boolean
    color?: string
    children: ReactNode
}