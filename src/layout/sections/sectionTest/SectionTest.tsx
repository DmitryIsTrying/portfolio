import React from "react";
import styled from "styled-components";
import { StyledTitleText } from "../../../components/TitleText.styled";

export const SectionTest = () => {
  return (
    <StyledService>
      <StyledTitleText>My Services</StyledTitleText>
    </StyledService>
  );
};

const StyledService = styled.section`
  height: fit-content;
`;
