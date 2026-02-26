import { ReactElement, ReactNode } from "react";
import { TableFoot } from "./Table";


export type TableColumn = {
    id: string;
    displayName: string;
    width?: number;
    span?: number
}

export type TableFootColumn = {
    content: string;
    span?: number
}

export type TableProps = {
    border?: number;
    color?: string;
    background?: string;
    columns: Array<TableColumn>;
    data: Array<Record<string, string>>
    children?: ReactElement<typeof TableFoot> | null
}