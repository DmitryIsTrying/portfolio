import React from "react";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledTitleText } from "../../../components/TitleText.styled";
import styled from "styled-components";
import { Form } from "../../../components/form/Form";
import { SectionFormItem } from "../../../components/sectionItems/defoltSectionItems/SectionFormItem";
import { useInView } from "react-intersection-observer";
import { EmptyDiv } from "../../../components/sectionItems/emptyDiv/EmptyDiv";

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
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <StyledSection id="messageSection">
      <StyledFLexSectionsWrapper>
        <Form />
        <StyledMediaWrapper direction="column">
          <StyledTitleText style={{ marginBottom: "50px" }}>
            Contact information
          </StyledTitleText>
          <StyledFlexWrapper ref={ref} gap="18px" fitWidth direction="column">
            {inView ? (
              <SectionFormItem width={370} height={210} items={items} />
            ) : null}
          </StyledFlexWrapper>
        </StyledMediaWrapper>
      </StyledFLexSectionsWrapper>
    </StyledSection>
  );
};

const StyledMediaWrapper = styled(FlexWrapper)`
  flex: 0 1 370px;
  @media screen and (min-width: 993px) and (max-width: 1214px) {
    flex: 1 1 370px;
  }
`;

const StyledFlexWrapper = styled(FlexWrapper)`
  width: 100%;
  align-items: center;
`;

const StyledFLexSectionsWrapper = styled(FLexSectionsWrapper)`
  gap: 30px;
  justify-content: center;
`;

const StyledSection = styled.section`
  padding: 35px 0;
`;
