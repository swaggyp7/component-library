import styled from "styled-components";
import { LabelProps, Size } from "./Label.type";
import React from "react";

const sizeMap: Record<Size, { fontSize: string; padding: string }> = {
  xs: { fontSize: "12px", padding: "4px 10px" },
  sm: { fontSize: "14px", padding: "6px 12px" },
  md: { fontSize: "16px", padding: "8px 14px" },
  lg: { fontSize: "18px", padding: "10px 16px" },
};

const StyledLabel = styled.label<{ $size: Size, $color: string}>`
  color: ${(props) => props.$color};
  font-size: ${({ $size }) => sizeMap[$size].fontSize};
`;
export function Label({ size = "sm", color = "#bf4f74", children }: LabelProps) {
    return (<StyledLabel $color={color} $size={size}>{children}</StyledLabel>)
}
