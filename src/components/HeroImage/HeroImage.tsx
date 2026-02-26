import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.type";

const Wrapper = styled.section<{ $height: number | string }>`
  position: relative;
  width: 100%;
  height: ${({ $height }) => (typeof $height === "number" ? `${$height}px` : $height)};
  min-height: 220px;
  overflow: hidden;
  border-radius: 10px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Content = styled.div<{ $overlay: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  color: white;
  background: ${({ $overlay }) =>
    $overlay ? "linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6))" : "transparent"};
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const Subtitle = styled.p`
  margin: 6px 0 0 0;
  font-size: 14px;
`;

export function HeroImage({
  src,
  alt = "Hero image",
  title,
  subtitle,
  height = 320,
  overlay = true,
}: HeroImageProps) {
  return (
    <Wrapper $height={height}>
      <StyledImage src={src} alt={alt} />
      {(title || subtitle) && (
        <Content $overlay={overlay}>
          {title ? <Title>{title}</Title> : null}
          {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
        </Content>
      )}
    </Wrapper>
  );
}
