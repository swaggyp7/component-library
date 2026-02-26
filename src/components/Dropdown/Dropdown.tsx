import { useState } from "react";
import { DropdownProps } from "./Dropdown.type";
import { Button } from "../Button";
import React from "react";
import styled, { css } from "styled-components";

const StyledListbox = styled.ul<{ $color: string }>`
  margin: 0;
  padding: 6px;
  list-style: none;

  max-height: 260px;
  overflow: auto;

  background: white;
  border: 1px solid ${(props) => props.$color};
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

  outline: none;
`;

const StyledOption = styled.li<{
  $color: string;
  $disabled: boolean;
  $active: boolean;
  $selected: boolean;
}>`
  padding: 8px 10px;
  border-radius: 8px;
  color: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  background: ${({ $active }) => ($active ? "#f3f4f6" : "transparent")};

  transition: background 120ms ease;

  ${({ $selected }) =>
    $selected &&
    css`
      font-weight: 500;
    `}

  &:hover {
    ${({ $disabled }) =>
      !$disabled &&
      css`
        background: #f3f4f6;
      `}
  }
`;

export function Dropdown({
  options,
  disabled = false,
  labelKey = "name",
  valueKey = "value",
  color = "#BF4F74",
  onOpen,
  onChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({});

  return (
    <div>
      <Button
        disabled={disabled}
        background={color}
        onClick={() => {
          if(disabled) return;
          setOpen(!open);
          onOpen();
        }}
        plain
      >
        {value[labelKey] ?? "Select"}
      </Button>
      {open && (
        <StyledListbox $color={color}>
          {options.map((option) => {
            return (
              <StyledOption
                $color={color}
                $disabled={disabled}
                $active={option[valueKey] == value[valueKey]}
                $selected={option[valueKey] == value[valueKey]}
                onClick={() => {
                  if(disabled) return;
                  setValue(option);
                  onChange(option);
                }}
                key={`option_${option[labelKey]}`}
              >
                {option[labelKey]}
              </StyledOption>
            );
          })}
        </StyledListbox>
      )}
    </div>
  );
}
