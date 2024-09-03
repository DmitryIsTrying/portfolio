import React from "react";
import styled, { css } from "styled-components";

export const GridSectionWrapper = styled.div<{ rows?: number }>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  grid-auto-rows: ${(props) => (props.rows ? `${props.rows}px` : "auto")};
  place-items: center;
  div {
    max-width: 400px;
  }
  ${(props) =>
    props.rows &&
    css`
      place-items: unset;
      div {
        max-width: unset;
      }
    `}
`;
