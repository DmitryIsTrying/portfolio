import React from "react";
import styled from "styled-components";

type StyledSecondaryTextPropsType = {
  color?: string;
  TAlign?: string;
  size?: string;
};

export const StyledSecondaryText = styled.p<StyledSecondaryTextPropsType>`
  font-family: Inter;
  font-size: ${(props) => props.TAlign || "15px"};
  font-weight: 400;
  line-height: 24px;
  text-align: ${(props) => props.TAlign || "left"};
  color: ${(props) => props.color || "#767676"};
`;
