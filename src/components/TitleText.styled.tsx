import React from "react";
import styled from "styled-components";

type StyledTitleTextPropsType = {
  size?: string;
  Lheight?: string;
  weight?: string;
  isHover?: boolean;
};

export const StyledTitleText = styled.h2<StyledTitleTextPropsType>`
  font-family: Inter;
  font-size: ${(props) => props.size || "32px"};
  font-weight: ${(props) => props.weight || "700"};
  line-height: ${(props) => props.Lheight || "39.55px"};
  text-align: center;
  color: #2b2b2b;
`;
