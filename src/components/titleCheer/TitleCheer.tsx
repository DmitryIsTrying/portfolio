import React from "react";
import { StyledTitleText } from "../TitleText.styled";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { StyledBtn } from "../StyledBtn.styled";
import { StyledPrimaryText } from "../PrimaryText.styled";
import { Icon } from "../icon/Icon";
import { useTheme } from "../../hooks/useTheme";
import { layoutsTheme } from "../../styles/Theme.styled";
import { TitleTextWritter } from "./TitleTextWritter";

export const TitleCheer = () => {
  const { isDark } = useTheme();

  return (
    <PaddingsWrapper fitWidth direction="column">
      <StyledTitleText
        isDark={isDark}
        TAlign="left"
        size="48px"
        Lheight="59.33px"
        weight="700"
      >
        I’m Rayan Adlrdard
      </StyledTitleText>
      <StyledTitleText
        isDark={isDark}
        TAlign="left"
        as="h1"
        size="48px"
        Lheight="59.33px"
        weight="700"
      >
        <span style={{ color: "#FFB400" }}>Front-end</span> Developer
      </StyledTitleText>
      <TitleTextWritter />
      <StyledBtn
        isDark={isDark}
        as="a"
        href="#!"
        gap="9px"
        padding="16px 32px"
        WFit
        tRotate
      >
        <StyledPrimaryText isDark={isDark} as="p" size="16px" Lheight="19.36px">
          HIRE ME
        </StyledPrimaryText>
        <Icon
          iconSrc={"HireSvg"}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fillStart={
            isDark
              ? layoutsTheme.theme.dark.titleText
              : layoutsTheme.theme.light.titleText
          }
        />
      </StyledBtn>
    </PaddingsWrapper>
  );
};

const PaddingsWrapper = styled(FlexWrapper)`
  padding: 93px 25px 51px 0;
`;
