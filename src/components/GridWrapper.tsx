import React from "react";
import styled, { css } from "styled-components";

type GridWrapperPropsType = {
  columns?: string;
  rows?: string;
  NRColumns?: string;
  NoGap?: boolean;
};

export const GridWrapper = styled.div<GridWrapperPropsType>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns});
  grid-template-rows: repeat(${(props) => props.rows});
  gap: ${(props) => (props.NoGap ? "0" : "20px")};
  ${(props) =>
    props.NRColumns &&
    css`
      grid-template-columns: ${props.NRColumns};
    `}
`;
