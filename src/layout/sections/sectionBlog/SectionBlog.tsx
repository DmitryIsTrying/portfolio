import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import Port1 from "../../../assets/images/Port1-blog.webp";
import Port2 from "../../../assets/images/Port2-blog.webp";
import Port3 from "../../../assets/images/Port3-blog.webp";
import { TitleSections } from "../../../components/titleSections/TitleSections";
import { SectionBlogItem } from "../../../components/sectionItems/SectionBlogItem";
import styled from "styled-components";

const itemsBlog = [
  {
    path: Port1,
    alt: "Port1",
    title: "How to make web tempates",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
    link: "#!",
  },
  {
    path: Port2,
    alt: "Port2",
    title: "make Business card",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
    link: "#!",
  },
  {
    path: Port3,
    alt: "Port3",
    title: "How to make Flyer Design",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
    link: "#!",
  },
];

export const SectionBlog = () => {
  return (
    <StyledSection>
      <FlexWrapper direction="column" align="center">
        <TitleSections
          title="Portfolio"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
        <FLexSectionsWrapper>
          <SectionBlogItem items={itemsBlog} width={310} height={474} />
        </FLexSectionsWrapper>
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 35px 0;
`;
