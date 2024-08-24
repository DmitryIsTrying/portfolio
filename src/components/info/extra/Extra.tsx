import React from "react";
import { FlexWrapper } from "../../FlexWrapper";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { StyleBlogInfo } from "../../StyleBlogInfo";
import { ExtraMap } from "../../extraMap/ExtraMap";

const extraArr = [
  "Bootstrap, Materialize",
  "Stylus, Sass, Less",
  "Gulp, Webpack, Grunt",
  "GIT Knowledge",
];

export const Extra = () => {
  return (
    <StyleBlogInfo>
      <FlexWrapper gap="15px" direction="column" align="flex-start">
        <StyledPrimaryText>Extra Skills</StyledPrimaryText>
        <ExtraMap title={extraArr} />
      </FlexWrapper>
    </StyleBlogInfo>
  );
};
