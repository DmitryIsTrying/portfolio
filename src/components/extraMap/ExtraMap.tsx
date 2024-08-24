import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../icon/Icon";
import { StyledSecondaryText } from "../SecondaryText.styled";

type ExtraMapPropsType = {
  title: string[];
};

export const ExtraMap: React.FC<ExtraMapPropsType> = ({ title }) => {
  return (
    <FlexWrapper direction="column" gap="5px">
      {title.map((e, i) => (
        <FlexWrapper key={i} gap="15px" align="center">
          <Icon
            iconSrc={"ExtraSkillsSvg"}
            width="15"
            height="15"
            viewBox="0 0 15 15"
          />
          <StyledSecondaryText>{e}</StyledSecondaryText>
        </FlexWrapper>
      ))}
    </FlexWrapper>
  );
};
