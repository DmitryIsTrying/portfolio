import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import { StyledTitleText } from "../../../components/TitleText.styled";
import { SectionEducationItem } from "../../../components/sectionItems/SectionEducationItem";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import styled from "styled-components";

const educationData = [
  {
    nameUniversity: "University of Toronto",
    whois: "Student",
    date: "Jan 1016 - Dec 2021",
    nameCertificate: "Certificate of web training",
    descriptionCertificate:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    nameUniversity: "Programming Course",
    whois: "Student",
    date: "Jan 1016 - Dec 2021",
    nameCertificate: "Certificate of web training",
    descriptionCertificate:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    nameUniversity: "Web developer courses",
    whois: "Student",
    date: "Jan 1016 - Dec 2021",
    nameCertificate: "Certificate of web training",
    descriptionCertificate:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
];

export const SectionEducation = () => {
  return (
    <StyledSection id="educationSection">
      <FlexWrapper direction="column" align="center">
        <StyledTitleText style={{ marginBottom: "25px" }}>
          Education
        </StyledTitleText>
        <FlexWrapper color="#F0F0F6" justify="center">
          <StyledSecondaryText
            style={{ marginBottom: "50px" }}
            Mwidth
            TAlign="center"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper direction="column">
          <FLexSectionsWrapper>
            <SectionEducationItem
              width={970}
              height={632}
              educationData={educationData}
            />
          </FLexSectionsWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 35px 0;
`;
