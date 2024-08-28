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
  flex: 1 1 calc(33.333% - 40px);
  min-width: calc(${(props) => props.width}px - 50px);
  max-width: calc(${(props) => props.width}px + 50px);
  background-color: #ffffff;
  position: relative;
  padding: ${(props) => props.padding || "0"};
`;
