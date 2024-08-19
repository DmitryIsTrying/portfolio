import React from "react";
import styled from "styled-components";

type ItemDesignPropsType = {
  bgc?: string;
  border?: string;
  radius?: string;
  bShadow?: string;
  bot?: string;
  top?: string;
  right?: string;
  left?: string;
  transform?: number;
};

export const ItemDesign = styled.span<ItemDesignPropsType>`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.bgc || "transparent"};
  box-shadow: ${(props) => props.bShadow || "none"};
  border-radius: ${(props) => props.radius || "50%"};
  border: ${(props) => props.border || "none"};
  bottom: ${(props) => props.bot || "18px"};
  right: ${(props) => props.right || "10px"};
  top: ${(props) => props.top || "auto"};
  left: ${(props) => props.left || "auto"};
  transform: rotate(${(props) => props.transform}deg);
  -webkit-transform: rotate(${(props) => props.transform}deg);
  -moz-transform: rotate(${(props) => props.transform}deg);
  -o-transform: rotate(${(props) => props.transform}deg);
  -ms-transform: rotate(${(props) => props.transform}deg);
`;
