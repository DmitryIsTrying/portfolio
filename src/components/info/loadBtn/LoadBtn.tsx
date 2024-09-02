import React from "react";
import { StyledBtn } from "../../StyledBtn.styled";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { Icon } from "../../icon/Icon";
import { StyleBlogInfo } from "../../StyleBlogInfo";
import { useTheme } from "../../../hooks/useTheme";
import { layoutsTheme } from "../../../styles/Theme.styled";

export const LoadBtn = () => {
  const { isDark } = useTheme();
  return (
    <StyleBlogInfo isDark={isDark}>
      <StyledBtn
        isDark={isDark}
        gap="19px"
        padding="10px 40px"
        newIdIcon="newId"
      >
        <StyledPrimaryText
          isDark={isDark}
          as={"p"}
          size="14px"
          Lheight="16.94px"
          weight="600"
        >
          Download cv
        </StyledPrimaryText>
        <Icon
          iconSrc={"BtnCvLoadSvg"}
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fillStart={
            isDark
              ? layoutsTheme.theme.dark.titleText
              : layoutsTheme.theme.light.titleText
          }
        />
      </StyledBtn>
    </StyleBlogInfo>
  );
};
