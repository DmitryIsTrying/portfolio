import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import { StyledSecondaryText } from "../SecondaryText.styled";
import styled from "styled-components";
import { StyledTitleText } from "../TitleText.styled";

type TitleSectionsPropsType = {
  title: string;
  description: string;
  pdt: number;
};

export const TitleSections: React.FC<TitleSectionsPropsType> = ({
  title,
  description,
  pdt,
}) => {
  return (
    <>
      <StyledTitle pdt={pdt}>{title}</StyledTitle>
      <StyledSecondary Mwidth TAlign="center">
        {description}
      </StyledSecondary>
    </>
  );
};

const StyledTitle = styled(StyledTitleText)<{ pdt: number }>`
  padding-top: ${(props) => props.pdt || 70}px;
`;

const StyledSecondary = styled(StyledSecondaryText)`
  padding: 25px 0 50px;
`;
