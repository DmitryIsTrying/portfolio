import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import styled from "styled-components";
import { layoutsTheme } from "../../../styles/Theme.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFlexWrapper gap="15px" align="center" justify="center">
        <Icon
          iconSrc="CopyRightSvg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        />
        <StyledSecondaryText as={"small"} color="#2B2B2B">
          2021 All Rights Reserved.Ojjomedia
        </StyledSecondaryText>
      </StyledFlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 35px 0 0 0;
  @media ${layoutsTheme.media.tablet} {
    padding-bottom: 80px;
  }
`;

const StyledFlexWrapper = styled(FlexWrapper)`
  background-color: #ffffff;
  padding: 18px 0;
`;
