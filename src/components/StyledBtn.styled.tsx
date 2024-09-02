import React from "react";
import styled, { css } from "styled-components";
import { StyledPrimaryText } from "./PrimaryText.styled";
import { useTheme } from "../hooks/useTheme";

type StyledBtnPropsType = {
  gap?: string;
  padding: string;
  WFit?: boolean;
  newIdIcon?: string;
  color?: string;
  noHover?: boolean;
  tRotate?: boolean;
  isDark: boolean;
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
  transition: 1.5s ease;
  background-color: ${(props) =>
    props.color ||
    (props.isDark
      ? props.theme.theme.dark.secondaryColor
      : props.theme.theme.light.secondaryColor)};
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
            ${props.tRotate &&
            css`
              transform: rotate(-45deg);
            `}
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
