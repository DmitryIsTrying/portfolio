import React from "react";
import { StyledBtn } from "../../StyledBtn.styled";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { Icon } from "../../icon/Icon";
import { StyleBlogInfo } from "../../StyleBlogInfo";

export const LoadBtn = () => {
  return (
    <StyleBlogInfo>
      <StyledBtn gap="19px" padding="10px 40px" newIdIcon="newId">
        <StyledPrimaryText as={"p"} size="14px" Lheight="16.94px" weight="600">
          Download cv
        </StyledPrimaryText>
        <Icon
          iconSrc={"BtnCvLoadSvg"}
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fillStart="#2B2B2B"
        />
      </StyledBtn>
    </StyleBlogInfo>
  );
};
