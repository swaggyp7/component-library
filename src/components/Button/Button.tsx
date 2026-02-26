import React from "react";
import { ButtonProps, Rounded, Size } from "./Button.type";
import styles from "./Button.module.css";
import clsx from "clsx";
import styled from "styled-components";

const sizeMap: Record<Size, { fontSize: string; padding: string }> = {
  xs: { fontSize: "12px", padding: "4px 10px" },
  sm: { fontSize: "14px", padding: "6px 12px" },
  md: { fontSize: "16px", padding: "8px 14px" },
  lg: { fontSize: "18px", padding: "10px 16px" },
};

const radiusMap: Record<Rounded, string> = {
  "rounded-sm": "6px",
  "rounded-md": "10px",
  "rounded-lg": "14px",
};

const StyledButton = styled.button<{
  $size: Size;
  $rounded: Rounded;
  $plain: boolean;
  $background: string;
}>`
  background: ${(props) => (props.$plain ? "white" : props.$background)};
  color: ${(props) => (props.$plain ? props.$background : "white")};
  font-size: ${({$size}) => sizeMap[$size].fontSize};
  margin: 1em;
  padding: ${({$size}) => sizeMap[$size].padding};
  border: 2px solid ${(props) => props.$background};
  border-radius: ${({$rounded}) => radiusMap[$rounded]};
  cursor: pointer;
  user-select: none;

  transition: background 120ms ease, transform 120ms ease, box-shadow 120ms ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  }

  &:active:not(:disabled) {
    transform: translateY(0px);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export function Button({
  size = "sm",
  rounded = "rounded-sm",
  plain = false,
  disabled = false,
  background = "#BF4F74",
  onClick = () => {},
  children,
}: ButtonProps) {
  return <StyledButton $background={background}  onClick={onClick} disabled={disabled} $size={size} $rounded={rounded} $plain={plain}>{children}</StyledButton>;
}
