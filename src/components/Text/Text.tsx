import styled from "styled-components";
import { TextProps } from "./Text.type";
import { Size } from "../Label";
import React from "react";

const sizeMap: Record<Size, { fontSize: string; padding: string }> = {
  xs: { fontSize: "12px", padding: "4px 10px" },
  sm: { fontSize: "14px", padding: "6px 12px" },
  md: { fontSize: "16px", padding: "8px 14px" },
  lg: { fontSize: "18px", padding: "10px 16px" },
};

const StyledText = styled.text<{ $size: Size; $color: string; $bold: boolean }>`
    color: ${(props) => props.$color};
    font-size: ${({ $size }) => sizeMap[$size].fontSize};
    font-weight: ${(props) => (props.$bold ? "500" : "400")}
`;

export function Text({
  size = "sm",
  bold = false,
  color = "#bf4f74",
  children,
}: TextProps) {
  return (
    <StyledText $size={size} $bold={bold} $color={color}>
      {children}
    </StyledText>
  );
}
