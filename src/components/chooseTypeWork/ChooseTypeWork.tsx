import React from "react";
import styled from "styled-components";
import { StyledPrimaryText } from "../PrimaryText.styled";
import { StyledBtn } from "../StyledBtn.styled";

export type ChooseTypeWorkPropsType = {
  names: Array<{ title: string }>;
  changePortfolio: (value: string) => void;
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
          >
            <StyledPrimaryText>{name.title}</StyledPrimaryText>
          </MenuBtn>
        </li>
      ))}
    </StyledUl>
  );
};

const MenuBtn = styled(StyledBtn)`
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
