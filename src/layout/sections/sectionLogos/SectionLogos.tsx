import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const SectionLogos = () => {
  return (
    <FlexWrapper
      as={"section"}
      justify="space-between"
      align="center"
      color="#F0F0F6"
    >
      <Icon iconSrc="LogosSvg1" width="129" height="90" viewBox="0 0 129 90" />
      <Icon
        iconSrc="LogosSvg2"
        width="125"
        height="103"
        viewBox="0 0 125 103"
      />
      <Icon iconSrc="LogosSvg3" width="134" height="85" viewBox="0 0 134 85" />
      <Icon iconSrc="LogosSvg4" width="129" height="95" viewBox="0 0 129 95" />
    </FlexWrapper>
  );
};
