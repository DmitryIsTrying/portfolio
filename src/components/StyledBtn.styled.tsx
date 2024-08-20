import React from "react";
import styled, { css } from "styled-components";
import { StyledPrimaryText } from "./PrimaryText.styled";

type StyledBtnPropsType = {
  gap?: string;
  padding: string;
  WFit?: boolean;
  newIdIcon?: string;
  color?: string;
  noHover?: boolean;
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
  background-color: ${(props) => props.color || "#ffb400"};
  cursor: pointer;

  ${(props) =>
    !props.noHover &&
    css`
      @media (hover: hover) {
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
        &:active {
          ${StyledPrimaryText} {
            color: #ffffff;
          }
          svg {
            fill: #ffffff;
          }
        }
      }
    `}
`;
