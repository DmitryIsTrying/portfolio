import React from "react";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledTitleText } from "../../../components/TitleText.styled";
import styled from "styled-components";
import { Form } from "../../../components/form/Form";
import { SectionFormItem } from "../../../components/sectionItems/defoltSectionItems/SectionFormItem";
import { useInView } from "react-intersection-observer";
import { EmptyDiv } from "../../../components/sectionItems/emptyDiv/EmptyDiv";
import { useTheme } from "../../../hooks/useTheme";

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
  const { isDark } = useTheme();
  return (
    <StyledSection id="messageSection">
      <StyledFLexSectionsWrapper>
        <Form />
        <StyledMediaWrapper direction="column">
          <ContactText isDark={isDark} style={{ marginBottom: "50px" }}>
            Contact information
          </ContactText>
          <StyledFlexWrapper align="center" ref={ref} gap="18px">
            {inView ? (
              <SectionFormItem width={370} height={210} items={items} />
            ) : null}
          </StyledFlexWrapper>
        </StyledMediaWrapper>
      </StyledFLexSectionsWrapper>
    </StyledSection>
  );
};

const ContactText = styled(StyledTitleText)`
  width: 100%;
  text-align: left;
`;

const StyledMediaWrapper = styled(FlexWrapper)`
  align-items: center;
  flex: 0 1 370px;
  @media screen and (min-width: 993px) and (max-width: 1214px) {
    flex: 1 1 370px;
  }
  @media screen and (max-width: 780px) {
    flex: 1 1 370px;
  }
`;

const StyledFlexWrapper = styled(FlexWrapper)`
  flex-wrap: wrap;
  max-width: 660px;
`;

const StyledFLexSectionsWrapper = styled(FLexSectionsWrapper)`
  gap: 30px;
  justify-content: center;
`;

const StyledSection = styled.section`
  padding: 35px 0;
`;
