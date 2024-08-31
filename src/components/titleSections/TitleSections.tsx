import React from "react";
import { StyledSecondaryText } from "../SecondaryText.styled";
import styled, { css } from "styled-components";
import { StyledTitleText } from "../TitleText.styled";
import { layoutsTheme } from "../../styles/Theme.styled";

type TitleSectionsPropsType = {
  title: string;
  description: string;
  pdt?: number;
  first?: boolean;
};

export const TitleSections: React.FC<TitleSectionsPropsType> = ({
  title,
  description,
  pdt,
  first,
}) => {
  return (
    <>
      <StyledTitle first pdt={pdt}>
        {title}
      </StyledTitle>
      <StyledSecondary Mwidth TAlign="center">
        {description}
      </StyledSecondary>
    </>
  );
};

const StyledTitle = styled(StyledTitleText)<{
  pdt: number | undefined;
  first?: boolean;
}>`
  padding-top: ${(props) => props.pdt || 0}px;
  ${(props) =>
    props.first &&
    css<{ first?: boolean }>`
      @media ${layoutsTheme.media.tablet} {
        padding-top: 52px;
      }
    `}
`;

const StyledSecondary = styled(StyledSecondaryText)`
  padding: 25px 0 50px;
`;
