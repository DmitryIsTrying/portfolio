import React from "react";
import { FlexWrapper } from "../../FlexWrapper";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { Icon } from "../../icon/Icon";
import { StyledSecondaryText } from "../../SecondaryText.styled";
import { StyleBlogInfo } from "../../StyleBlogInfo";

export const Extra = () => {
  return (
    <StyleBlogInfo>
      <FlexWrapper gap="15px" direction="column" align="flex-start">
        <StyledPrimaryText>Extra Skills</StyledPrimaryText>
        <FlexWrapper direction="column" gap="5px">
          <FlexWrapper gap="15px" align="center">
            <Icon
              iconSrc={"ExtraSkillsSvg"}
              width="15"
              height="15"
              viewBox="0 0 15 15"
            />
            <StyledSecondaryText>Bootstrap, Materialize</StyledSecondaryText>
          </FlexWrapper>
          <FlexWrapper gap="15px" align="center">
            <Icon
              iconSrc={"ExtraSkillsSvg"}
              width="15"
              height="15"
              viewBox="0 0 15 15"
            />
            <StyledSecondaryText>Stylus, Sass, Less</StyledSecondaryText>
          </FlexWrapper>
          <FlexWrapper gap="15px" align="center">
            <Icon
              iconSrc={"ExtraSkillsSvg"}
              width="15"
              height="15"
              viewBox="0 0 15 15"
            />
            <StyledSecondaryText>Gulp, Webpack, Grunt</StyledSecondaryText>
          </FlexWrapper>
          <FlexWrapper gap="15px" align="center">
            <Icon
              iconSrc={"ExtraSkillsSvg"}
              width="15"
              height="15"
              viewBox="0 0 15 15"
            />
            <StyledSecondaryText>GIT Knowledge</StyledSecondaryText>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </StyleBlogInfo>
  );
};
