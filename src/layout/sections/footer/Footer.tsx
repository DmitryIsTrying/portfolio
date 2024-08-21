import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";

export const Footer = () => {
  return (
    <FlexWrapper gap="15px" align="center" justify="center">
      <Icon iconSrc="CopyRightSvg" width="20" height="20" viewBox="0 0 20 20" />
      <StyledSecondaryText color="#2B2B2B">
        2021 All Rights Reserved.Ojjomedia
      </StyledSecondaryText>
    </FlexWrapper>
  );
};
