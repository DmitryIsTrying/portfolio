import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledImage } from "../../../components/StyledImage";
import MapPhoto from "../../../assets/images/Map.webp";
import styled from "styled-components";

export const SectionMap = () => {
  return (
    <StyledSection>
      <FlexWrapper
        justify="center"
        style={{ overflow: "hidden" }}
        as={"section"}
      >
        <StyledImage path={MapPhoto} alt="My location" />
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 35px 0;
`;
