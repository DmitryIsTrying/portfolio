import React from "react";
import { FlexWrapper } from "../../FlexWrapper";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { StyleBlogInfo } from "../../StyleBlogInfo";
import { ExtraMap } from "../../extraMap/ExtraMap";
import { useTheme } from "../../../hooks/useTheme";

const extraArr = [
  "Bootstrap, Materialize",
  "Stylus, Sass, Less",
  "Gulp, Webpack, Grunt",
  "GIT Knowledge",
];

export const Extra = () => {
  const { isDark } = useTheme();
  return (
    <StyleBlogInfo isDark={isDark}>
      <FlexWrapper gap="15px" direction="column" align="flex-start">
        <StyledPrimaryText isDark={isDark}>Extra Skills</StyledPrimaryText>
        <ExtraMap title={extraArr} />
      </FlexWrapper>
    </StyleBlogInfo>
  );
};
