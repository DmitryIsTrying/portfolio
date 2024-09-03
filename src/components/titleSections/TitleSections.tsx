import React from "react";
import { StyledSecondaryText } from "../SecondaryText.styled";
import styled, { css } from "styled-components";
import { StyledTitleText } from "../TitleText.styled";
import { layoutsTheme } from "../../styles/Theme.styled";
import { useTheme } from "../../hooks/useTheme";

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
  const { isDark } = useTheme();
  return (
    <>
      <StyledTitle isDark={isDark} first={first} pdt={pdt}>
        {title}
      </StyledTitle>
      <StyledSecondary isDark={isDark} Mwidth TAlign="center">
        {description}
      </StyledSecondary>
    </>
  );
};

const StyledTitle = styled(StyledTitleText)<{
  pdt: number | undefined;
  first?: boolean;
}>`
  margin-top: ${(props) => props.pdt || 0}px;

  @media ${layoutsTheme.media.tablet} {
    ${(props) =>
      props.first &&
      css<{ first?: boolean }>`
        margin-top: 52px;
      `}
  }
`;

const StyledSecondary = styled(StyledSecondaryText)`
  margin: 25px 0 50px;
`;
