import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.type";
import React, { useState } from "react";

const OriginalRadio = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  pointer-event: none;
`;
const StyledLabel = styled.label<{ $disabled: boolean; $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  position: relative;
  user-select: none;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  color: ${({$color}) => $color}
`;

const StyledCircle = styled.span<{
  $checked?: boolean;
  $disabled?: boolean;
  $color: string;
}>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid ${({ $disabled }) => ($disabled ? "#d1d5db" : ({$color}) => $color)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease;

  background: ${({ $checked, $disabled }) =>
    $disabled ? "#f3f4f6" : $checked ? ({$color}) => $color : "white"};

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $disabled }) => ($disabled ? "#9ca3af" : "white")};
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
    transition: opacity 150ms ease;
  }
`;

export function RadioButton({
  label,
  color = "#BF4F74",
  checked = false,
  disabled = false,
  ...props
}: RadioButtonProps) {
  const [check, setCheck] = useState(checked)
  return (
    <StyledLabel $color={color} $disabled={disabled}>
      <OriginalRadio onChange={(e) => {setCheck(e.target.checked)}}  checked={check} disabled={disabled} {...props} />
      <StyledCircle $color={color} $checked={check} $disabled={disabled} />
      {label}
    </StyledLabel>
  );
}
