import React from "react";
import styled, { keyframes } from "styled-components";

type StyledPricePartBtnPropsType = {
  bgc?: string;
  isDark: boolean;
};

export const StyledPricePartBtn = styled.button<StyledPricePartBtnPropsType>`
  background-color: ${(props) =>
    props.bgc ||
    (props.isDark
      ? props.theme.theme.dark.primaryColor
      : props.theme.theme.light.primaryColor)};
  box-shadow: 0px 1px 10px 0px
    ${(props) =>
      props.isDark
        ? props.theme.theme.dark.shadowColor
        : props.theme.theme.light.shadowColor};
  padding: 11px 41px 10px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  width: fit-content;
  transition: transform 0.5s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(4px);
    }
  }
  @media (hover: none) {
    &:active {
      transform: translateY(4px);
    }
  }
`;
