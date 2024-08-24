import React from "react";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

type StarsPropsType = {
  starsCount: number;
};

export const Stars = (props: StarsPropsType) => {
  return (
    <FlexWrapper gap="10px">
      {[...Array(props.starsCount)].map((_, i) => (
        <Icon
          key={i}
          iconSrc="StarSvg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        />
      ))}
    </FlexWrapper>
  );
};
