import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import styled from "styled-components";
import { layoutsTheme } from "../../../styles/Theme.styled";
import { useTheme } from "../../../hooks/useTheme";

export const Footer = () => {
  const { isDark } = useTheme();
  return (
    <StyledFooter>
      <StyledFlexWrapper
        isDark={isDark}
        gap="15px"
        align="center"
        justify="center"
      >
        <Icon
          iconSrc="CopyRightSvg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        />
        <StyledSecondaryText
          isDark={isDark}
          as={"small"}
          color={
            isDark
              ? layoutsTheme.theme.dark.smallText
              : layoutsTheme.theme.light.smallText
          }
        >
          2021 All Rights Reserved.Ojjomedia
        </StyledSecondaryText>
      </StyledFlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 35px 0 0 0;
`;

const StyledFlexWrapper = styled(FlexWrapper)<{ isDark: boolean }>`
  background-color: ${(props) =>
    props.isDark
      ? props.theme.theme.dark.primaryColor
      : props.theme.theme.light.primaryColor};
  padding: 18px 0;
  @media ${layoutsTheme.media.tablet} {
    padding-bottom: 98px;
  }
`;
