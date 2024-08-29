import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

type FLexSectionsWrapperPropsType = {
  columns?: string;
  rows?: string;
  NRColumns?: string;
  NoGap?: boolean;
  gap?: number;
};

export const FLexSectionsWrapper = styled.div<FLexSectionsWrapperPropsType>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;
