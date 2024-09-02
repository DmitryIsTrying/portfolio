import React, { ReactNode } from "react";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import { StyledSecondaryText } from "../SecondaryText.styled";
import { useTheme } from "../../hooks/useTheme";
import { layoutsTheme } from "../../styles/Theme.styled";

interface AdvantagesPropsType {
  children: ReactNode;
  isDisabled?: boolean;
}

export const Advantages = (props: AdvantagesPropsType) => {
  const { isDark } = useTheme();
  if (!props.isDisabled) {
    return (
      <FlexWrapper gap="18px" align="center">
        <Icon
          iconSrc="PriceActivedSvg"
          width="19"
          height="13"
          viewBox="0 0 19 13"
        />
        <StyledSecondaryText
          isDark={isDark}
          color={
            isDark
              ? layoutsTheme.theme.dark.titleText
              : layoutsTheme.theme.light.titleText
          }
        >
          {props.children}
        </StyledSecondaryText>
      </FlexWrapper>
    );
  } else {
    return (
      <FlexWrapper style={{ marginLeft: "2px" }} gap="20px" align="center">
        <Icon
          iconSrc="PriceDisabledSvg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
        />
        <StyledSecondaryText isDark={isDark}>
          {props.children}
        </StyledSecondaryText>
      </FlexWrapper>
    );
  }
};
