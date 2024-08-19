import React from "react";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

type StarsPropsType = {
  starsCount: number;
};

export const Stars = (props: StarsPropsType) => {
  return (
    <FlexWrapper fitHeight gap="10px" style={{ marginBottom: "17px" }}>
      {Array.from({ length: props.starsCount }, (_, index) => (
        <Icon
          key={index}
          iconSrc="StarSvg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        />
      ))}
    </FlexWrapper>
  );
};
