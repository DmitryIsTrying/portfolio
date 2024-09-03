import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import RecPhotoLeft from "../../../assets/images/Rec-person-left.webp";
import RecPhotoMiddle from "../../../assets/images/Rec-person-middle.webp";
import RecPhotoRight from "../../../assets/images/Rec-person-right.webp";
import styled from "styled-components";
import { TitleSections } from "../../../components/titleSections/TitleSections";
import { SectionRecomItem } from "../../../components/sectionItems/defoltSectionItems/SectionRecomItem";
import { useInView } from "react-intersection-observer";
import { SliderSectionRecomItem } from "../../../components/sectionItems/sliders/SliderSectionRecomItem";
import { useViewport } from "../../../hooks/useViewport";
import { EmptyDiv } from "../../../components/sectionItems/emptyDiv/EmptyDiv";

const recData = [
  {
    title: "Great Quality!",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    pathPhoto: RecPhotoLeft,
    altPhoto: "James Gouse",
    name: "James Gouse",
    job: "Graphic Designer",
  },
  {
    title: "Amazing work!",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    pathPhoto: RecPhotoMiddle,
    altPhoto: "Tiana Philips",
    name: "Tiana Philips",
    job: "Photographer",
  },
  {
    title: "Great Quality!",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
    pathPhoto: RecPhotoRight,
    altPhoto: "Talan Westervelt",
    name: "Talan Westervelt",
    job: "Business man",
  },
];

export const SectionRecommend = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { width } = useViewport();
  return (
    <StyledSection>
      <FlexWrapper direction="column" align="center">
        <TitleSections
          title="Recommendations"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
        <FLexSectionsWrapper ref={ref}>
          {inView ? (
            (width > 992 && width < 1380) || width < 940 ? (
              <SliderSectionRecomItem
                recData={recData}
                width={310}
                height={323}
              />
            ) : (
              <SectionRecomItem recData={recData} width={310} height={323} />
            )
          ) : (
            <EmptyDiv width={310} height={323} isSlide={386} />
          )}
        </FLexSectionsWrapper>
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 35px 0;
`;
