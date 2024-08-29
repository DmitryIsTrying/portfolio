import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import styled from "styled-components";
import { TitleSections } from "../../../components/titleSections/TitleSections";
import { SectionServiceItem } from "../../../components/sectionItems/SectionServiceItem";

const sectionItems = [
  {
    path: "ServicePcSvg",
    width: "66",
    height: "54",
    vBox: "0 0 66 54",
    title: "Web Development",
    description: "Blog, E-commerce",
  },
  {
    path: "ServicePaintingSvg",
    width: "68",
    height: "68",
    vBox: "0 0 68 68",
    title: "UI/UX Design",
    description: "Mobile app, website design",
  },
  {
    path: "ServiceMPhoneSvg",
    width: "74",
    height: "74",
    vBox: "0 0 74 74",
    title: "Sound Design",
    description: "Voice Over, Beat Making",
  },
  {
    path: "ServiceGameDevSvg",
    width: "74",
    height: "74",
    vBox: "0 0 74 74",
    title: "Game Design",
    description: "Character Design, Props & Objects",
  },
  {
    path: "ServicePhotographerSvg",
    width: "72",
    height: "78",
    vBox: "0 0 72 78",
    title: "Photography",
    description: "Portrait, product photography",
  },
  {
    path: "ServicePhotographerSvg",
    width: "72",
    height: "78",
    vBox: "0 0 72 78",
    title: "Advertising",
    description: "Captivating visuals, Eye-catching",
  },
];

export const SectionService = () => {
  return (
    <StyledSection>
      <FlexWrapper direction="column" align="center">
        <TitleSections
          pdt={103}
          title="My Services"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
        <FLexSectionsWrapper>
          <SectionServiceItem
            width={310}
            height={225}
            iconData={sectionItems}
          />
        </FLexSectionsWrapper>
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 35px 0;
`;
