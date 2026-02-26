import { ReactNode } from "react"

export type Rounded = "rounded-sm" | "rounded-md" | "rounded-lg"
export type Size = "xs" | "sm" | "md" | "lg"
export type ButtonProps = {
    rounded?: Rounded
    plain?: boolean
    size?: Size
    disabled?: boolean
    background?: string
    onClick?: () => void
    children: ReactNode
}