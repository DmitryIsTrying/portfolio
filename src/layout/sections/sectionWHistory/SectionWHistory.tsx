import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionEducationItem } from "../../../components/sectionItems/defoltSectionItems/SectionEducationItem";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import styled from "styled-components";
import { TitleSections } from "../../../components/titleSections/TitleSections";
import { useInView } from "react-intersection-observer";
import { EmptyDivWE } from "../../../components/sectionItems/emptyDiv/EmptyDivWE";

const educationData = [
  {
    nameUniversity: "Lead Web Designer",
    whois: "Student",
    date: "Jan 1016 - Dec 2021",
    nameCertificate: "Certificate of web training",
    descriptionCertificate:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    nameUniversity: "Junior Web Designer",
    whois: "Student",
    date: "Jan 1016 - Dec 2021",
    nameCertificate: "Certificate of web training",
    descriptionCertificate:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
  {
    nameUniversity: "Senior Web Designer",
    whois: "Student",
    date: "Jan 1016 - Dec 2021",
    nameCertificate: "Certificate of web training",
    descriptionCertificate:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
  },
];

export const SectionWHistory = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <StyledSection id="workHistorySection">
      <FlexWrapper direction="column" align="center">
        <TitleSections
          title="Work History"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
        <FlexWrapper direction="column">
          <FLexSectionsWrapper ref={ref}>
            {inView ? (
              <SectionEducationItem
                width={970}
                height={632}
                educationData={educationData}
              />
            ) : (
              <EmptyDivWE
                width={970}
                height={632}
                educationData={educationData}
              />
            )}
          </FLexSectionsWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 35px 0;
`;
