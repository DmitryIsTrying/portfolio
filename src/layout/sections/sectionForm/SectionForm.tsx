import React from "react";
import { GridWrapper } from "../../../components/GridWrapper";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const SectionForm = () => {
  return (
    <GridWrapper NoGap NRColumns="570px 370px" rows="1, 755px">
      <FlexWrapper direction="column"></FlexWrapper>
      <FlexWrapper direction="column"></FlexWrapper>
    </GridWrapper>
  );
};
