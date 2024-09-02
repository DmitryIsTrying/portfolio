import React from "react";
import { FlexWrapper } from "../../FlexWrapper";
import { StyledSecondaryText } from "../../SecondaryText.styled";
import styled from "styled-components";
import { StyleBlogInfo } from "../../StyleBlogInfo";
import { useTheme } from "../../../hooks/useTheme";
import { layoutsTheme } from "../../../styles/Theme.styled";

export const SecondaryInfo = () => {
  const { isDark } = useTheme();
  return (
    <StyleBlogInfo isDark={isDark}>
      <FlexWrapper gap="9px" direction="column">
        <FlexWrapper justify="space-between">
          <BorderClrText
            isDark={isDark}
            color={
              isDark
                ? layoutsTheme.theme.dark.titleText
                : layoutsTheme.theme.light.titleText
            }
          >
            Age:
          </BorderClrText>
          <StyledSecondaryText
            isDark={isDark}
            color={
              isDark
                ? layoutsTheme.theme.dark.titleText
                : layoutsTheme.theme.light.titleText
            }
          >
            24
          </StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <BorderClrText
            isDark={isDark}
            color={
              isDark
                ? layoutsTheme.theme.dark.titleText
                : layoutsTheme.theme.light.titleText
            }
          >
            Residence:
          </BorderClrText>
          <StyledSecondaryText
            isDark={isDark}
            color={
              isDark
                ? layoutsTheme.theme.dark.titleText
                : layoutsTheme.theme.light.titleText
            }
          >
            BD
          </StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <BorderClrText
            isDark={isDark}
            color={
              isDark
                ? layoutsTheme.theme.dark.titleText
                : layoutsTheme.theme.light.titleText
            }
          >
            Freelance:
          </BorderClrText>
          <StyledSecondaryText isDark={isDark} color="#7EB942">
            Available
          </StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <BorderClrText
            isDark={isDark}
            color={
              isDark
                ? layoutsTheme.theme.dark.titleText
                : layoutsTheme.theme.light.titleText
            }
          >
            Address:
          </BorderClrText>
          <StyledSecondaryText
            isDark={isDark}
            color={
              isDark
                ? layoutsTheme.theme.dark.titleText
                : layoutsTheme.theme.light.titleText
            }
          >
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
