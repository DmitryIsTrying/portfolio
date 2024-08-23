import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import styled from "styled-components";

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
        <small>
          <StyledSecondaryText color="#2B2B2B">
            2021 All Rights Reserved.Ojjomedia
          </StyledSecondaryText>
        </small>
      </StyledFlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 35px 0 0 0;
`;

const StyledFlexWrapper = styled(FlexWrapper)`
  background-color: #ffffff;
  padding: 18px 0;
`;
