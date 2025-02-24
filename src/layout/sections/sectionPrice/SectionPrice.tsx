import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import styled from "styled-components";
import { TitleSections } from "../../../components/titleSections/TitleSections";
import { SectionPriceItem } from "../../../components/sectionItems/defoltSectionItems/SectionPriceItem";
import { useInView } from "react-intersection-observer";
import { SliderSectionPriceItem } from "../../../components/sectionItems/sliders/SliderSectionPriceItem";
import { useViewport } from "../../../hooks/useViewport";
import { EmptyDiv } from "../../../components/sectionItems/emptyDiv/EmptyDiv";

const items = [
  {
    nameList: "Silver",
    price: 0,
    description: "For most businesses that want to optimize web queries",
    itemList: [
      { name: "UI Design" },
      { name: "Web Development" },
      { name: "Logo Design", isDisabled: true },
      { name: "SEO Optimization", isDisabled: true },
      { name: "WordPress Integration", isDisabled: true },
      { name: "5 Websites", isDisabled: true },
      { name: "Unlimited User", isDisabled: true },
      { name: "20 GB Bandwidth", isDisabled: true },
    ],
  },
  {
    nameList: "Gold",
    price: 50,
    description: "For most businesses that want to optimize web queries",
    mostPopular: true,
    itemList: [
      { name: "UI Design" },
      { name: "Web Development" },
      { name: "Logo Design" },
      { name: "SEO Optimization" },
      { name: "WordPress Integration", isDisabled: true },
      { name: "5 Websites", isDisabled: true },
      { name: "Unlimited User", isDisabled: true },
      { name: "20 GB Bandwidth", isDisabled: true },
    ],
  },
  {
    nameList: "Diamond",
    price: 80,
    description: "For most businesses that want to optimize web queries",
    itemList: [
      { name: "UI Design" },
      { name: "Web Development" },
      { name: "Logo Design" },
      { name: "SEO Optimization" },
      { name: "WordPress Integration" },
      { name: "5 Websites" },
      { name: "Unlimited User" },
      { name: "20 GB Bandwidth" },
    ],
  },
];

export const SectionPrice = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { width } = useViewport();
  return (
    <StyledSection id="priceSection">
      <FlexWrapper direction="column" align="center">
        <TitleSections
          title="Price Plans"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
        <FLexSectionsWrapper ref={ref}>
          {inView ? (
            (width > 992 && width < 1380) || width < 940 ? (
              <SliderSectionPriceItem width={310} height={609} items={items} />
            ) : (
              <SectionPriceItem width={310} height={609} items={items} />
            )
          ) : (
            <EmptyDiv width={310} height={609} isSlide={662} />
          )}
        </FLexSectionsWrapper>
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 35px 0;
`;
