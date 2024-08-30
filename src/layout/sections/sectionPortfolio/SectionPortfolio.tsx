import React, { useState } from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import Port1 from "../../../assets/images/Port1-blog.webp";
import Port2 from "../../../assets/images/Port2-blog.webp";
import Port3 from "../../../assets/images/Port3-blog.webp";
import Port4 from "../../../assets/images/Port4.webp";
import Port5 from "../../../assets/images/Port5.webp";
import Port6 from "../../../assets/images/Port6.webp";
import Port7 from "../../../assets/images/Port7.webp";
import Port8 from "../../../assets/images/Port8.webp";
import Port9 from "../../../assets/images/Port9.webp";
import styled from "styled-components";
import { TitleSections } from "../../../components/titleSections/TitleSections";
import {
  PhotosArrayPropsType,
  SectionPortfolioItem,
} from "../../../components/sectionItems/SectionPortfolioItem";
import { useInView } from "react-intersection-observer";
import { ChooseTypeWork } from "../../../components/chooseTypeWork/ChooseTypeWork";

const nameButtons: Array<{ title: string }> = [
  {
    title: "All categories",
  },
  {
    title: "UI Design",
  },
  {
    title: "Web Templates",
  },
  {
    title: "Logo",
  },
  {
    title: "Branding",
  },
];

const photos: PhotosArrayPropsType[] = [
  {
    path: Port1,
    type: "Logo",
  },
  {
    path: Port2,
    type: "UI Design",
  },
  {
    path: Port3,
    type: "UI Design",
  },
  {
    path: Port4,
    type: "UI Design",
  },
  {
    path: Port5,
    type: "Web Templates",
  },
  {
    path: Port6,
    type: "Branding",
  },
  {
    path: Port7,
    type: "Branding",
  },
  {
    path: Port8,
    type: "Branding",
  },
  {
    path: Port9,
    type: "Branding",
  },
];

export const SectionPortfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [currentFilterStatus, setFilterStatus] = useState("All categories");
  function changePortfolio(value: string) {
    setFilterStatus(value);
  }

  return (
    <StyledSection id="portfolioSection">
      <FlexWrapper direction="column" align="center">
        <TitleSections
          title="Portfolio"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
        <ChooseTypeWork changePortfolio={changePortfolio} names={nameButtons} />
        <FLexSectionsWrapper ref={ref}>
          {inView ? (
            <SectionPortfolioItem
              currentFilterStatus={currentFilterStatus}
              width={310}
              height={300}
              photos={photos}
            />
          ) : null}
        </FLexSectionsWrapper>
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 35px 0;
`;
