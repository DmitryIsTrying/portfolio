import React from "react";
import styled, { css } from "styled-components";
import { StyledPrimaryText } from "./PrimaryText.styled";

type StyledBtnPropsType = {
  gap?: string;
  padding: string;
  WFit?: boolean;
  newIdIcon?: string;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: ${(props) => props.padding};
  width: ${(props) => (props.WFit ? "fit-content" : "100%")};
  border: none;
  gap: ${(props) => props.gap || 0};
  background-color: #ffb400;
  cursor: pointer;

  @media (hover: hover) {
    transition: 0.5s ease;
    &:hover {
      ${StyledPrimaryText} {
        color: #ffffff;
      }
      svg {
        fill: #ffffff;
      }
    }
  }

  @media (hover: none) {
    transition: 0.5s ease;
    &:active {
      ${StyledPrimaryText} {
        color: #ffffff;
      }
      svg {
        fill: #ffffff;
      }
    }
  }
`;
