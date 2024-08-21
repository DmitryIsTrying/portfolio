import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledImage } from "../../../components/StyledImage";
import MapPhoto from "../../../assets/images/Map.webp";

export const SectionMap = () => {
  return (
    <FlexWrapper as={"section"}>
      <StyledImage path={MapPhoto} alt="My location" />
    </FlexWrapper>
  );
};
