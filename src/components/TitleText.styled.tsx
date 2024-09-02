import React from "react";
import styled from "styled-components";

type StyledTitleTextPropsType = {
  size?: string;
  Lheight?: string;
  weight?: string;
  isHover?: boolean;
  TAlign?: string;
  isDark: boolean;
};

export const StyledTitleText = styled.h2<StyledTitleTextPropsType>`
  font-family: Inter;
  font-size: ${(props) => props.size || "32px"};
  font-weight: ${(props) => props.weight || "700"};
  line-height: ${(props) => props.Lheight || "39.55px"};
  text-align: ${(props) => props.TAlign || "center"};
  transition: 1.5s ease;
  color: ${(props) =>
    props.isDark
      ? props.theme.theme.dark.titleText
      : props.theme.theme.light.titleText};
  height: fit-content;
  width: fit-content;
`;
