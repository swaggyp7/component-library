import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.type";

const Wrapper = styled.article<{
  $width: number | string;
  $padding: number;
  $background: string;
  $borderColor: string;
}>`
  width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
  padding: ${({ $padding }) => `${$padding}px`};
  background: ${({ $background }) => $background};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: 10px;
  box-sizing: border-box;
`;

const Title = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
`;

const Body = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export function Card({
  title,
  children,
  width = 320,
  padding = 16,
  background = "white",
  borderColor = "#e5e7eb",
}: CardProps) {
  return (
    <Wrapper $width={width} $padding={padding} $background={background} $borderColor={borderColor}>
      {title ? <Title>{title}</Title> : null}
      <Body>{children}</Body>
    </Wrapper>
  );
}
