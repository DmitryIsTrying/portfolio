import React, { ReactNode } from "react";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import { StyledSecondaryText } from "../SecondaryText.styled";

interface AdvantagesPropsType {
  children: ReactNode;
  isDisabled?: boolean;
}

export const Advantages: React.FC<AdvantagesPropsType> = ({
  children,
  isDisabled,
}) => {
  if (!isDisabled) {
    return (
      <FlexWrapper gap="18px" align="center">
        <Icon
          iconSrc="PriceActivedSvg"
          width="19"
          height="13"
          viewBox="0 0 19 13"
        />
        <StyledSecondaryText color="#2B2B2B">{children}</StyledSecondaryText>
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
        <StyledSecondaryText>{children}</StyledSecondaryText>
      </FlexWrapper>
    );
  }
};
