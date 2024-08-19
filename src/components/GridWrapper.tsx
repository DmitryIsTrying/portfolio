import React from "react";
import styled from "styled-components";

type GridWrapperPropsType = {
  columns: string;
  rows: string;
};

export const GridWrapper = styled.div<GridWrapperPropsType>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns});
  grid-template-rows: repeat(${(props) => props.rows});
  gap: 20px;
`;
