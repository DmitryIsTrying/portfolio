import React from "react";
import styled, { css } from "styled-components";

export const EmptyDiv = ({
  width,
  height,
  elements = 1,
  isSlide,
}: {
  width: number;
  height: number;
  elements?: number;
  isSlide?: number;
}) => {
  return (
    <>
      {Array.from({ length: elements }).map((_, index) => (
        <EmptyDivAnimation
          key={index}
          isSlide={isSlide}
          width={width}
          height={height}
        />
      ))}
    </>
  );
};

const EmptyDivAnimation = styled.div<{
  width: number;
  height: number;
  isSlide?: number;
}>`
  flex: 1 1 calc(33.333% - 40px);
  min-width: calc(${(props) => props.width}px - 50px);
  max-width: calc(${(props) => props.width}px + 50px);
  aspect-ratio: ${(props) => props.width} / ${(props) => props.height};
  ${(props) =>
    props.isSlide &&
    css`
      @media (max-width: 849px), (min-width: 993px) and (max-width: 1289px) {
        height: ${props.isSlide}px;
        width: 20px;
      }
    `}
`;
