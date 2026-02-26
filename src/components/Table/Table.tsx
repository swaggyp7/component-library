import styled from "styled-components";
import { TableColumn, TableFootColumn, TableProps } from "./Table.type";
import React from "react";

const StyledTable = styled.table<{$color: string, $background: string}>`
    color: ${(props) => props.$color};
    background: ${(props) => props.$background};
`
const StyledTH = styled.th<{$width: number}>`
    width: ${(props) => props.$width}px;
`

const StyledTD = styled.td<{$width: number}>`
    width: ${(props) => props.$width}px;
`

export function TableFoot({columns = []}: { columns: Array<TableFootColumn> }) {
    return <tfoot>
        <tr>
            {columns.map(column => {
                return <td colSpan={column.span}>{column.content}</td>
            })}
        </tr>
    </tfoot>
}

export function Table({columns = [], data = [], color = "#bf4f74", background = "white", border = 1, children}: TableProps) {
    return (<StyledTable border={border} $color={color} $background={background}>
        <thead>
            <tr>
                {columns.map(column => {
                    return <StyledTH colSpan={column.span ?? 1} $width={column.width ?? 200} key={`column_${column.id}`}>{column.displayName}</StyledTH>
                })}
            </tr>
        </thead>
        <tbody>
            {data.map((row, index) => {
                return <tr>
                    {columns.map(column => {
                        return <StyledTD colSpan={column.span ?? 1} $width={column.width ?? 200} key={`row_${index}_column_${column.id}`}>{row[column.id]}</StyledTD>
                    })}
                </tr>
            })}
        </tbody>
        {children}
    </StyledTable>)
}