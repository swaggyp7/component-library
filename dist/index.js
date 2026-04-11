var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod,
  )
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Card: () => Card,
  Dropdown: () => Dropdown,
  HeroImage: () => HeroImage,
  Image: () => Image,
  Label: () => Label,
  RadioButton: () => RadioButton,
  Table: () => Table,
  Text: () => Text,
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.tsx
var import_styled_components = __toESM(require("styled-components"));
var import_jsx_runtime = require("react/jsx-runtime");
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
var StyledButton = import_styled_components.default.button`
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledButton, {
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
var import_styled_components2 = __toESM(require("styled-components"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Wrapper = import_styled_components2.default.article`
  width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
  padding: ${({ $padding }) => `${$padding}px`};
  background: ${({ $background }) => $background};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: 10px;
  box-sizing: border-box;
`;
var Title = import_styled_components2.default.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
`;
var Body = import_styled_components2.default.div`
  font-size: 14px;
  line-height: 1.5;
`;
var TestBody = import_styled_components2.default.div`
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Wrapper, {
    $width: width,
    $padding: padding,
    $background: background,
    $borderColor: borderColor,
    children: [
      title
        ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Title, {
            children: title,
          })
        : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Body, { children }),
    ],
  });
}

// src/components/Dropdown/Dropdown.tsx
var import_react = require("react");
var import_styled_components3 = __toESM(require("styled-components"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var StyledListbox = import_styled_components3.default.ul`
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
var StyledOption = import_styled_components3.default.li`
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
    import_styled_components3.css`
      font-weight: 500;
    `}

  &:hover {
    ${({ $disabled }) =>
      !$disabled &&
      import_styled_components3.css`
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
  const [open, setOpen] = (0, import_react.useState)(false);
  const [value, setValue] = (0, import_react.useState)({});
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, {
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StyledListbox, {
          $color: color,
          children: options.map((option) => {
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_styled_components4 = __toESM(require("styled-components"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var Wrapper2 = import_styled_components4.default.section`
  position: relative;
  width: 100%;
  height: ${({ $height }) => (typeof $height === "number" ? `${$height}px` : $height)};
  min-height: 220px;
  overflow: hidden;
  border-radius: 10px;
`;
var StyledImage = import_styled_components4.default.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
var Content = import_styled_components4.default.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  color: white;
  background: ${({ $overlay }) => ($overlay ? "linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6))" : "transparent")};
`;
var Title2 = import_styled_components4.default.h2`
  margin: 0;
  font-size: 24px;
`;
var Subtitle = import_styled_components4.default.p`
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Wrapper2, {
    $height: height,
    "data-testid": "hero-image",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(StyledImage, { src, alt }),
      (title || subtitle) &&
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Content, {
          $overlay: overlay,
          "data-testid": "hero-image-content",
          children: [
            title
              ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Title2, {
                  children: title,
                })
              : null,
            subtitle
              ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Subtitle, {
                  children: subtitle,
                })
              : null,
          ],
        }),
    ],
  });
}

// src/components/Image/Image.tsx
var import_styled_components5 = __toESM(require("styled-components"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var StyledImage2 = import_styled_components5.default.img`
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(StyledImage2, {
    src,
    $width: width,
    $height: height,
    $border: border,
    $borderColor: borderColor,
    $round: round,
  });
}

// src/components/Label/Label.tsx
var import_styled_components6 = __toESM(require("styled-components"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var sizeMap2 = {
  xs: { fontSize: "12px", padding: "4px 10px" },
  sm: { fontSize: "14px", padding: "6px 12px" },
  md: { fontSize: "16px", padding: "8px 14px" },
  lg: { fontSize: "18px", padding: "10px 16px" },
};
var StyledLabel = import_styled_components6.default.label`
  color: ${(props) => props.$color};
  font-size: ${({ $size }) => sizeMap2[$size].fontSize};
`;
function Label({ size = "sm", color = "#bf4f74", children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StyledLabel, {
    $color: color,
    $size: size,
    children,
  });
}

// src/components/RadioButton/RadioButton.tsx
var import_styled_components7 = __toESM(require("styled-components"));
var import_react2 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var OriginalRadio = import_styled_components7.default.input.attrs({
  type: "radio",
})`
  position: absolute;
  opacity: 0;
  pointer-event: none;
`;
var StyledLabel2 = import_styled_components7.default.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  position: relative;
  user-select: none;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  color: ${({ $color }) => $color};
`;
var StyledCircle = import_styled_components7.default.span`
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
  const [check, setCheck] = (0, import_react2.useState)(checked);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(StyledLabel2, {
    $color: color,
    $disabled: disabled,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(OriginalRadio, {
        onChange: (e) => {
          setCheck(e.target.checked);
        },
        checked: check,
        disabled,
        ...props,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(StyledCircle, {
        $color: color,
        $checked: check,
        $disabled: disabled,
      }),
      label,
    ],
  });
}

// src/components/Table/Table.tsx
var import_styled_components8 = __toESM(require("styled-components"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var StyledTable = import_styled_components8.default.table`
  color: ${(props) => props.$color};
  background: ${(props) => props.$background};
`;
var StyledTH = import_styled_components8.default.th`
  width: ${(props) => props.$width}px;
`;
var StyledTD = import_styled_components8.default.td`
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(StyledTable, {
    border,
    $color: color,
    $background: background,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("thead", {
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("tr", {
          children: columns.map((column) => {
            var _a, _b;
            return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("tbody", {
        children: data.map((row, index) => {
          return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "tr",
            {
              children: columns.map((column) => {
                var _a, _b;
                return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var import_styled_components9 = __toESM(require("styled-components"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var sizeMap3 = {
  xs: { fontSize: "12px", padding: "4px 10px" },
  sm: { fontSize: "14px", padding: "6px 12px" },
  md: { fontSize: "16px", padding: "8px 14px" },
  lg: { fontSize: "18px", padding: "10px 16px" },
};
var StyledText = import_styled_components9.default.span`
  color: ${(props) => props.$color};
  font-size: ${({ $size }) => sizeMap3[$size].fontSize};
  font-weight: ${(props) => (props.$bold ? "500" : "400")};
`;
function Text({ size = "sm", bold = false, color = "#bf4f74", children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(StyledText, {
    $size: size,
    $bold: bold,
    $color: color,
    children,
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    Button,
    Card,
    Dropdown,
    HeroImage,
    Image,
    Label,
    RadioButton,
    Table,
    Text,
  });
//# sourceMappingURL=index.js.map
