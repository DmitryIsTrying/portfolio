import React from "react";
import styled, { css } from "styled-components";

type StyledSecondaryTextPropsType = {
  color?: string;
  TAlign?: string;
  size?: string;
  Mwidth?: boolean;
  lHeight?: string;
  fWeight?: string;
};

export const StyledSecondaryText = styled.p<StyledSecondaryTextPropsType>`
  font-family: Inter;
  font-size: ${(props) => props.size || "15px"};
  font-weight: ${(props) => props.fWeight || "400"};
  line-height: ${(props) => props.lHeight || "24px"};
  text-align: ${(props) => props.TAlign || "left"};
  color: ${(props) => props.color || "#767676"};
  ${(props) =>
    props.Mwidth &&
    css`
      max-width: 378px;
    `}
`;
