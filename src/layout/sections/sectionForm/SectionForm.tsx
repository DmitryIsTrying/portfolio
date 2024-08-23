import React from "react";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledTitleText } from "../../../components/TitleText.styled";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import styled from "styled-components";
import { Form } from "../../../components/form/Form";
import { SectionFormItem } from "../../../components/sectionItems/SectionFormItem";

const items = [
  {
    first: "Country:",
    dataFirst: "Bangladesh",
    second: "City:",
    dataSecond: "Dhaka",
    third: "Streat:",
    dataThird: "35 vhatara, Badda",
  },
  {
    first: "Email:",
    dataFirst: "youremail@gmail.com",
    second: "Skype:",
    dataSecond: "@yourusername",
    third: "Telegram:",
    dataThird: "@yourusername",
  },
  {
    first: "Support services:",
    dataFirst: "15369",
    second: "Office:",
    dataSecond: "+58 (021)356 587 235",
    third: "Personal:",
    dataThird: "+58 (021)356 587 235",
  },
];

export const SectionForm = () => {
  return (
    <StyledSection id="messageSection">
      <FlexWrapper direction="column" align="center">
        <StyledFLexSectionsWrapper>
          <Form />
          <FlexWrapper fitWidth direction="column">
            <StyledTitleText style={{ marginBottom: "50px" }}>
              Contact information
            </StyledTitleText>
            <StyledFlexWrapper gap="18px" fitWidth direction="column">
              <SectionFormItem width={370} height={210} items={items} />
            </StyledFlexWrapper>
          </FlexWrapper>
        </StyledFLexSectionsWrapper>
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledFlexWrapper = styled(FlexWrapper)`
  width: 100%;
  flex-wrap: wrap;
  @media screen and (max-width: 1440px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledFLexSectionsWrapper = styled(FLexSectionsWrapper)`
  gap: 30px;
  justify-content: flex-start;
`;

const StyledSection = styled.section`
  padding: 35px 0;
`;
