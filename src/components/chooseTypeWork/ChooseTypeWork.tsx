import React from "react";
import styled, { css } from "styled-components";
import { StyledPrimaryText } from "../PrimaryText.styled";
import { StyledBtn } from "../StyledBtn.styled";
import { useTheme } from "../../hooks/useTheme";

export type ChooseTypeWorkPropsType = {
  names: Array<{ title: string }>;
  changePortfolio: (value: string) => void;
  currentFilterStatus: string;
};

export const ChooseTypeWork = (props: ChooseTypeWorkPropsType) => {
  const { isDark } = useTheme();
  return (
    <StyledUl>
      {props.names.map((name, i) => (
        <li key={i}>
          <MenuBtn
            isDark={isDark}
            onClick={() => {
              props.changePortfolio(name.title);
            }}
            noHover
            padding="0"
            color="transparent"
            WFit
            active={props.currentFilterStatus === name.title}
          >
            <StyledPrimaryText isDark={isDark}>{name.title}</StyledPrimaryText>
          </MenuBtn>
        </li>
      ))}
    </StyledUl>
  );
};

const MenuBtn = styled(StyledBtn)<{ active: boolean }>`
  ${StyledPrimaryText} {
    color: ${(props) =>
      props.active
        ? props.isDark
          ? props.theme.theme.dark.secondaryColor
          : props.theme.theme.light.secondaryColor
        : props.isDark
        ? props.theme.theme.dark.titleText
        : props.theme.theme.light.titleText};
  }

  &:hover ${StyledPrimaryText} {
    color: ${(props) =>
      props.isDark
        ? props.theme.theme.dark.secondaryColor
        : props.theme.theme.light.secondaryColor};
  }
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 37px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;
