import styled from "styled-components";
import { ImageProps } from "./Image.type";
import React from "react";

const StyledImage = styled.img<{
  $width: number | string;
  $height: number | string;
  $round: boolean;
  $border: boolean;
  $borderColor: string;
}>`
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

export function Image({
  width = 200,
  height = 200,
  border = false,
  borderColor = "#BF4F74",
  round = false,
  src
}: ImageProps) {
  return <StyledImage src={src} $width={width} $height={height} $border={border} $borderColor={borderColor} $round={round}></StyledImage>;
}
