import React from "react";
import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  fitWidth?: boolean;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  width: ${(props) => (props.fitWidth ? "fit-content" : "100%")};
  height: fit-content;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  gap: ${(props) => props.gap || "0"};
`;
