import * as react_jsx_runtime from "react/jsx-runtime";
import { ReactNode, ReactElement } from "react";

type Rounded = "rounded-sm" | "rounded-md" | "rounded-lg";
type Size$2 = "xs" | "sm" | "md" | "lg";
type ButtonProps = {
  rounded?: Rounded;
  plain?: boolean;
  size?: Size$2;
  disabled?: boolean;
  background?: string;
  onClick?: () => void;
  children: ReactNode;
};

declare function Button({
  size,
  rounded,
  plain,
  disabled,
  background,
  onClick,
  children,
}: ButtonProps): react_jsx_runtime.JSX.Element;

type CardProps = {
  title?: string;
  children?: ReactNode;
  width?: number | string;
  padding?: number;
  background?: string;
  borderColor?: string;
};

declare function Card({
  title,
  children,
  width,
  padding,
  background,
  borderColor,
}: CardProps): react_jsx_runtime.JSX.Element;

type DropdownProps = {
  onChange: (value: string) => void;
  onOpen: () => void;
  options: Array<any>;
  labelKey?: string;
  valueKey?: string;
  disabled?: boolean;
  color?: string;
};

declare function Dropdown({
  options,
  disabled,
  labelKey,
  valueKey,
  color,
  onOpen,
  onChange,
}: DropdownProps): react_jsx_runtime.JSX.Element;

type HeroImageProps = {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  height?: number | string;
  overlay?: boolean;
};

declare function HeroImage({
  src,
  alt,
  title,
  subtitle,
  height,
  overlay,
}: HeroImageProps): react_jsx_runtime.JSX.Element;

type ImageProps = {
  width?: number | string;
  height?: number | string;
  border?: boolean;
  borderColor?: string;
  round?: boolean;
  src: string;
};

declare function Image({
  width,
  height,
  border,
  borderColor,
  round,
  src,
}: ImageProps): react_jsx_runtime.JSX.Element;

type Size$1 = "xs" | "sm" | "md" | "lg";
type LabelProps = {
  size?: Size$1;
  disabled?: boolean;
  color?: string;
  children: ReactNode;
};

declare function Label({
  size,
  color,
  children,
}: LabelProps): react_jsx_runtime.JSX.Element;

type RadioButtonProps = {
  disabled?: boolean;
  color?: string;
  checked: boolean;
  label: string;
};

declare function RadioButton({
  label,
  color,
  checked,
  disabled,
  ...props
}: RadioButtonProps): react_jsx_runtime.JSX.Element;

type TableColumn = {
  id: string;
  displayName: string;
  width?: number;
  span?: number;
};
type TableFootColumn = {
  content: string;
  span?: number;
};
type TableProps = {
  border?: number;
  color?: string;
  background?: string;
  columns: Array<TableColumn>;
  data: Array<Record<string, string>>;
  children?: ReactElement<typeof TableFoot> | null;
};

declare function TableFoot({
  columns,
}: {
  columns: Array<TableFootColumn>;
}): react_jsx_runtime.JSX.Element;
declare function Table({
  columns,
  data,
  color,
  background,
  border,
  children,
}: TableProps): react_jsx_runtime.JSX.Element;

type Size = "xs" | "sm" | "md" | "lg";
type TextProps = {
  bold?: boolean;
  size?: Size;
  color?: string;
  children: ReactNode;
};

declare function Text({
  size,
  bold,
  color,
  children,
}: TextProps): react_jsx_runtime.JSX.Element;

export {
  Button,
  type ButtonProps,
  type Size$2 as ButtonSize,
  Card,
  type CardProps,
  Dropdown,
  type DropdownProps,
  HeroImage,
  type HeroImageProps,
  Image,
  type ImageProps,
  Label,
  type LabelProps,
  type Size$1 as LabelSize,
  RadioButton,
  type RadioButtonProps,
  type Rounded,
  Table,
  type TableColumn,
  type TableFootColumn,
  type TableProps,
  Text,
  type TextProps,
  type Size as TextSize,
};
