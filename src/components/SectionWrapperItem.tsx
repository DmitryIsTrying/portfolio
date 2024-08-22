import React from "react";
import styled from "styled-components";

type SectionWrapperItemPropsType = {
  width: number;
  height: number;
  padding?: string;
};

export const SectionWrapperItem = styled.div<SectionWrapperItemPropsType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: #ffffff;
  position: relative;
  padding: ${(props) => props.padding || "0"};
`;
