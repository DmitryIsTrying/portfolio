import React from "react";
import styled, { css } from "styled-components";
import { StyledPrimaryText } from "../PrimaryText.styled";
import { StyledBtn } from "../StyledBtn.styled";

export type ChooseTypeWorkPropsType = {
  names: Array<{ title: string }>;
  changePortfolio: (value: string) => void;
  currentFilterStatus: string;
};

export const ChooseTypeWork = (props: ChooseTypeWorkPropsType) => {
  return (
    <StyledUl>
      {props.names.map((name, i) => (
        <li key={i}>
          <MenuBtn
            onClick={() => {
              props.changePortfolio(name.title);
            }}
            noHover
            padding="0"
            color="transparent"
            WFit
            active={props.currentFilterStatus === name.title}
          >
            <StyledPrimaryText>{name.title}</StyledPrimaryText>
          </MenuBtn>
        </li>
      ))}
    </StyledUl>
  );
};

const MenuBtn = styled(StyledBtn)<{ active: boolean }>`
  ${StyledPrimaryText} {
    color: ${(props) => (props.active ? "#ffb400" : "#2b2b2b")};
  }
  &:hover ${StyledPrimaryText} {
    color: #ffb400;
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
