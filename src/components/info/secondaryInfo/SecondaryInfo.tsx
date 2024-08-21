import React from "react";
import { FlexWrapper } from "../../FlexWrapper";
import { StyledSecondaryText } from "../../SecondaryText.styled";
import styled from "styled-components";
import { StyleBlogInfo } from "../../StyleBlogInfo";

export const SecondaryInfo = () => {
  return (
    <StyleBlogInfo>
      <FlexWrapper gap="9px" direction="column">
        <FlexWrapper justify="space-between">
          <BorderClrText color="#2B2B2B">Age:</BorderClrText>
          <StyledSecondaryText color="#2B2B2B">24</StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <BorderClrText color="#2B2B2B">Residence:</BorderClrText>
          <StyledSecondaryText color="#2B2B2B">BD</StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <BorderClrText color="#2B2B2B">Freelance:</BorderClrText>
          <StyledSecondaryText color="#7EB942">Available</StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <BorderClrText color="#2B2B2B">Address:</BorderClrText>
          <StyledSecondaryText color="#2B2B2B">
            Dhaka,Bangladesh
          </StyledSecondaryText>
        </FlexWrapper>
      </FlexWrapper>
    </StyleBlogInfo>
  );
};

const BorderClrText = styled(StyledSecondaryText)`
  background-color: #ffb400;
  padding: 0px 5px;
`;
