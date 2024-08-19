import React from "react";
import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  color?: string;
  padding?: string;
  fitHeight?: boolean;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  width: 100%;
  height: ${(props) => (props.fitHeight ? "fit-content" : "100%")};
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) => props.color || "#ffffff"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
`;
