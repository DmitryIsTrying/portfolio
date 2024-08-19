import React from "react";
import styled from "styled-components";

type StyledHrPropsType = {
  color?: string;
  margin: string;
};

export const StyledHr = styled.hr<StyledHrPropsType>`
  border: 1.5px solid ${(props) => props.color || "#F0F0F6"};
  width: 100%;
  margin: ${(props) => props.margin};
`;
