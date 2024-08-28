import React from "react";
import styled, { keyframes } from "styled-components";

type StyledPricePartBtnPropsType = {
  bgc?: string;
};

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  8% {
    transform: translateY(-1px);
  }
  19% {
    transform: translateY(-2px);
  }
  28% {
    transform: translateY(-3px);
  }
  39% {
    transform: translateY(-4px);
  }
  50% {
    transform: translateY(-5px);
  }
  61% {
    transform: translateY(-4px);
  }
  72% {
    transform: translateY(-3px);
  }
  83% {
    transform: translateY(-2px);
  }
  94% {
    transform: translateY(-1px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const StyledPricePartBtn = styled.button<StyledPricePartBtnPropsType>`
  background-color: ${(props) => props.bgc || "#ffffff"};
  box-shadow: 0px 1px 10px 0px #00000026;
  padding: 11px 41px 10px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  width: fit-content;

  &:hover {
    animation: ${bounce} 0.5s ease;
  }
`;
