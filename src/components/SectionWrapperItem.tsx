import React from "react";
import styled from "styled-components";

type SectionWrapperItemPropsType = {
  width: number;
  height: number;
  padding?: string;
  isDark: boolean;
};

export const SectionWrapperItem = styled.div<SectionWrapperItemPropsType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 calc(33.333% - 40px);
  min-width: calc(${(props) => props.width}px - 20px);
  max-width: calc(${(props) => props.width}px + 50px);
  background-color: ${(props) =>
    props.isDark
      ? props.theme.theme.dark.primaryColor
      : props.theme.theme.light.primaryColor};
  position: relative;
  padding: ${(props) => props.padding || "0"};
`;
