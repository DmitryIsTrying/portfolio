import React from "react";
import styled, { css } from "styled-components";

type StyledSecondaryTextPropsType = {
  color?: string;
  TAlign?: string;
  size?: string;
  lHeight?: string;
  fWeight?: string;
  Mwidth?: boolean;
  MWE?: boolean;
  isDark: boolean;
};

export const StyledSecondaryText = styled.p<StyledSecondaryTextPropsType>`
  font-family: Inter;
  font-size: ${(props) => props.size || "15px"};
  font-weight: ${(props) => props.fWeight || "400"};
  line-height: ${(props) => props.lHeight || "24px"};
  text-align: ${(props) => props.TAlign || "left"};
  color: ${(props) =>
    props.color ||
    (props.isDark
      ? props.theme.theme.dark.smallText
      : props.theme.theme.light.smallText)};
  transition: 0.5s ease;
  ${(props) =>
    props.Mwidth &&
    css`
      max-width: 378px;
    `}
`;
