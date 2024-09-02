import React from "react";
import styled, { css } from "styled-components";

export type StyledPrimaryTextPropsType = {
  size?: string;
  Lheight?: string;
  weight?: string;
  TAlign?: string;
  color?: string;
  isDark: boolean;
};

export const StyledPrimaryText = styled.h3<StyledPrimaryTextPropsType>`
  font-family: Inter;
  font-size: ${(props) => props.size || "18px"};
  font-weight: ${(props) => props.weight || "500"};
  line-height: ${(props) => props.Lheight || "22.25px"};
  text-align: ${(props) => props.TAlign || "left"};
  color: ${(props) =>
    props.color ||
    (props.isDark
      ? props.theme.theme.dark.titleText
      : props.theme.theme.light.titleText)};
  @media (hover: hover) {
    transition: 0.5s ease;
  }
  @media (hover: none) {
    transition: 0.1s ease;
  }
`;
