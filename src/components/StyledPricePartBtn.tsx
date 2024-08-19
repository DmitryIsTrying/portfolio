import React from "react";
import styled from "styled-components";

type StyledPricePartBtnPropsType = {
  bgc?: string;
};

export const StyledPricePartBtn = styled.button<StyledPricePartBtnPropsType>`
  background-color: ${(props) => props.bgc || "#ffffff"};
  box-shadow: 0px 1px 10px 0px #00000026;
  padding: 11px 41px 10px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;
