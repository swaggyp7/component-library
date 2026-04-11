// src/components/Button/Button.tsx
import styled from "styled-components";
import { jsx } from "react/jsx-runtime";
var sizeMap = {
  xs: { fontSize: "12px", padding: "4px 10px" },
  sm: { fontSize: "14px", padding: "6px 12px" },
  md: { fontSize: "16px", padding: "8px 14px" },
  lg: { fontSize: "18px", padding: "10px 16px" },
};
var radiusMap = {
  "rounded-sm": "6px",
  "rounded-md": "10px",
  "rounded-lg": "14px",
};
var StyledButton = styled.button`
  background: ${(props) => (props.$plain ? "white" : props.$background)};
  color: ${(props) => (props.$plain ? props.$background : "white")};
  font-size: ${({ $size }) => sizeMap[$size].fontSize};
  margin: 1em;
  padding: ${({ $size }) => sizeMap[$size].padding};
  border: 2px solid ${(props) => props.$background};
  border-radius: ${({ $rounded }) => radiusMap[$rounded]};
  cursor: pointer;
  user-select: none;

  transition:
    background 120ms ease,
    transform 120ms ease,
    box-shadow 120ms ease;

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
function Button({
  size = "sm",
  rounded = "rounded-sm",
  plain = false,
  disabled = false,
  background = "#BF4F74",
  onClick = () => {},
  children,
}) {
  return /* @__PURE__ */ jsx(StyledButton, {
    $background: background,
    onClick,
    disabled,
    $size: size,
    $rounded: rounded,
    $plain: plain,
    children,
  });
}

// src/components/Card/Card.tsx
import styled2 from "styled-components";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Wrapper = styled2.article`
  width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
  padding: ${({ $padding }) => `${$padding}px`};
  background: ${({ $background }) => $background};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: 10px;
  box-sizing: border-box;
`;
var Title = styled2.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
`;
var Body = styled2.div`
  font-size: 14px;
  line-height: 1.5;
`;
var TestBody = styled2.div`
  font-size: 14px;
  line-height: 1.5;
`;
function Card({
  title,
  children,
  width = 320,
  padding = 16,
  background = "white",
  borderColor = "#e5e7eb",
}) {
  return /* @__PURE__ */ jsxs(Wrapper, {
    $width: width,
    $padding: padding,
    $background: background,
    $borderColor: borderColor,
    children: [
      title ? /* @__PURE__ */ jsx2(Title, { children: title }) : null,
      /* @__PURE__ */ jsx2(Body, { children }),
    ],
  });
}

// src/components/Dropdown/Dropdown.tsx
import { useState } from "react";
import styled3, { css } from "styled-components";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var StyledListbox = styled3.ul`
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
var StyledOption = styled3.li`
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
function Dropdown({
  options,
  disabled = false,
  labelKey = "name",
  valueKey = "value",
  color = "#BF4F74",
  onOpen,
  onChange,
}) {
  var _a;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({});
  return /* @__PURE__ */ jsxs2("div", {
    children: [
      /* @__PURE__ */ jsx3(Button, {
        disabled,
        background: color,
        onClick: () => {
          if (disabled) return;
          setOpen(!open);
          onOpen();
        },
        plain: true,
        children: (_a = value[labelKey]) != null ? _a : "Select",
      }),
      open &&
        /* @__PURE__ */ jsx3(StyledListbox, {
          $color: color,
          children: options.map((option) => {
            return /* @__PURE__ */ jsx3(
              StyledOption,
              {
                $color: color,
                $disabled: disabled,
                $active: option[valueKey] == value[valueKey],
                $selected: option[valueKey] == value[valueKey],
                onClick: () => {
                  if (disabled) return;
                  setValue(option);
                  onChange(option);
                },
                children: option[labelKey],
              },
              `option_${option[labelKey]}`,
            );
          }),
        }),
    ],
  });
}

// src/components/HeroImage/HeroImage.tsx
import styled4 from "styled-components";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Wrapper2 = styled4.section`
  position: relative;
  width: 100%;
  height: ${({ $height }) => (typeof $height === "number" ? `${$height}px` : $height)};
  min-height: 220px;
  overflow: hidden;
  border-radius: 10px;
`;
var StyledImage = styled4.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
var Content = styled4.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  color: white;
  background: ${({ $overlay }) => ($overlay ? "linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6))" : "transparent")};
`;
var Title2 = styled4.h2`
  margin: 0;
  font-size: 24px;
`;
var Subtitle = styled4.p`
  margin: 6px 0 0 0;
  font-size: 14px;
`;
function HeroImage({
  src,
  alt = "Hero image",
  title,
  subtitle,
  height = 320,
  overlay = true,
}) {
  return /* @__PURE__ */ jsxs3(Wrapper2, {
    $height: height,
    "data-testid": "hero-image",
    children: [
      /* @__PURE__ */ jsx4(StyledImage, { src, alt }),
      (title || subtitle) &&
        /* @__PURE__ */ jsxs3(Content, {
          $overlay: overlay,
          "data-testid": "hero-image-content",
          children: [
            title ? /* @__PURE__ */ jsx4(Title2, { children: title }) : null,
            subtitle
              ? /* @__PURE__ */ jsx4(Subtitle, { children: subtitle })
              : null,
          ],
        }),
    ],
  });
}

// src/components/Image/Image.tsx
import styled5 from "styled-components";
import { jsx as jsx5 } from "react/jsx-runtime";
var StyledImage2 = styled5.img`
  width: ${({ $width }) => {
    if (typeof $width == "string") {
      return $width;
    } else {
      return `${$width}px`;
    }
  }};
  height: ${({ $height }) => {
    if (typeof $height == "string") {
      return $height;
    } else {
      return `${$height}px`;
    }
  }};
  border-radius: ${({ $round }) => ($round ? "50%" : "5px")};
  border: ${({ $border, $borderColor }) => {
    if ($border) {
      return `1px solid ${$borderColor}`;
    } else {
      return "0";
    }
  }};
`;
function Image({
  width = 200,
  height = 200,
  border = false,
  borderColor = "#BF4F74",
  round = false,
  src,
}) {
  return /* @__PURE__ */ jsx5(StyledImage2, {
    src,
    $width: width,
    $height: height,
    $border: border,
    $borderColor: borderColor,
    $round: round,
  });
}

// src/components/Label/Label.tsx
import styled6 from "styled-components";
import { jsx as jsx6 } from "react/jsx-runtime";
var sizeMap2 = {
  xs: { fontSize: "12px", padding: "4px 10px" },
  sm: { fontSize: "14px", padding: "6px 12px" },
  md: { fontSize: "16px", padding: "8px 14px" },
  lg: { fontSize: "18px", padding: "10px 16px" },
};
var StyledLabel = styled6.label`
  color: ${(props) => props.$color};
  font-size: ${({ $size }) => sizeMap2[$size].fontSize};
`;
function Label({ size = "sm", color = "#bf4f74", children }) {
  return /* @__PURE__ */ jsx6(StyledLabel, {
    $color: color,
    $size: size,
    children,
  });
}

// src/components/RadioButton/RadioButton.tsx
import styled7 from "styled-components";
import { useState as useState2 } from "react";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var OriginalRadio = styled7.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  pointer-event: none;
`;
var StyledLabel2 = styled7.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  position: relative;
  user-select: none;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  color: ${({ $color }) => $color};
`;
var StyledCircle = styled7.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid
    ${({ $disabled }) => ($disabled ? "#d1d5db" : ({ $color }) => $color)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease;

  background: ${({ $checked, $disabled }) => ($disabled ? "#f3f4f6" : $checked ? ({ $color }) => $color : "white")};

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
function RadioButton({
  label,
  color = "#BF4F74",
  checked = false,
  disabled = false,
  ...props
}) {
  const [check, setCheck] = useState2(checked);
  return /* @__PURE__ */ jsxs4(StyledLabel2, {
    $color: color,
    $disabled: disabled,
    children: [
      /* @__PURE__ */ jsx7(OriginalRadio, {
        onChange: (e) => {
          setCheck(e.target.checked);
        },
        checked: check,
        disabled,
        ...props,
      }),
      /* @__PURE__ */ jsx7(StyledCircle, {
        $color: color,
        $checked: check,
        $disabled: disabled,
      }),
      label,
    ],
  });
}

// src/components/Table/Table.tsx
import styled8 from "styled-components";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var StyledTable = styled8.table`
  color: ${(props) => props.$color};
  background: ${(props) => props.$background};
`;
var StyledTH = styled8.th`
  width: ${(props) => props.$width}px;
`;
var StyledTD = styled8.td`
  width: ${(props) => props.$width}px;
`;
function Table({
  columns = [],
  data = [],
  color = "#bf4f74",
  background = "white",
  border = 1,
  children,
}) {
  return /* @__PURE__ */ jsxs5(StyledTable, {
    border,
    $color: color,
    $background: background,
    children: [
      /* @__PURE__ */ jsx8("thead", {
        children: /* @__PURE__ */ jsx8("tr", {
          children: columns.map((column) => {
            var _a, _b;
            return /* @__PURE__ */ jsx8(
              StyledTH,
              {
                colSpan: (_a = column.span) != null ? _a : 1,
                $width: (_b = column.width) != null ? _b : 200,
                children: column.displayName,
              },
              `column_${column.id}`,
            );
          }),
        }),
      }),
      /* @__PURE__ */ jsx8("tbody", {
        children: data.map((row, index) => {
          return /* @__PURE__ */ jsx8(
            "tr",
            {
              children: columns.map((column) => {
                var _a, _b;
                return /* @__PURE__ */ jsx8(
                  StyledTD,
                  {
                    colSpan: (_a = column.span) != null ? _a : 1,
                    $width: (_b = column.width) != null ? _b : 200,
                    children: row[column.id],
                  },
                  `row_${index}_column_${column.id}`,
                );
              }),
            },
            `row_${index}`,
          );
        }),
      }),
      children,
    ],
  });
}

// src/components/Text/Text.tsx
import styled9 from "styled-components";
import { jsx as jsx9 } from "react/jsx-runtime";
var sizeMap3 = {
  xs: { fontSize: "12px", padding: "4px 10px" },
  sm: { fontSize: "14px", padding: "6px 12px" },
  md: { fontSize: "16px", padding: "8px 14px" },
  lg: { fontSize: "18px", padding: "10px 16px" },
};
var StyledText = styled9.span`
  color: ${(props) => props.$color};
  font-size: ${({ $size }) => sizeMap3[$size].fontSize};
  font-weight: ${(props) => (props.$bold ? "500" : "400")};
`;
function Text({ size = "sm", bold = false, color = "#bf4f74", children }) {
  return /* @__PURE__ */ jsx9(StyledText, {
    $size: size,
    $bold: bold,
    $color: color,
    children,
  });
}
export {
  Button,
  Card,
  Dropdown,
  HeroImage,
  Image,
  Label,
  RadioButton,
  Table,
  Text,
};
//# sourceMappingURL=index.mjs.map
