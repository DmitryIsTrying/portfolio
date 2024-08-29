import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import { StyledPrimaryText } from "../../../components/PrimaryText.styled";
import { StyledBtn } from "../../../components/StyledBtn.styled";
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
import { SectionPortfolioItem } from "../../../components/sectionItems/SectionPortfolioItem";

const photos = [
  {
    path: Port1,
    alt: "Port1",
    select: true,
  },
  {
    path: Port2,
    alt: "Port2",
  },
  {
    path: Port3,
    alt: "Port3",
  },
  {
    path: Port4,
    alt: "Port4",
  },
  {
    path: Port5,
    alt: "Port5",
  },
  {
    path: Port6,
    alt: "Port6",
  },
  {
    path: Port7,
    alt: "Port7",
  },
  {
    path: Port8,
    alt: "Port8",
  },
  {
    path: Port9,
    alt: "Port9",
  },
];

export const SectionPortfolio = () => {
  return (
    <StyledSection id="portfolioSection">
      <FlexWrapper direction="column" align="center">
        <TitleSections
          title="Portfolio"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
        <StyledUl>
          <li>
            <MenuBtn noHover padding="0" color="transparent" WFit>
              <StyledPrimaryText>All categories</StyledPrimaryText>
            </MenuBtn>
          </li>
          <li>
            <MenuBtn noHover padding="0" color="transparent" WFit>
              <StyledPrimaryText>UI Design</StyledPrimaryText>
            </MenuBtn>
          </li>
          <li>
            <MenuBtn noHover padding="0" color="transparent" WFit>
              <StyledPrimaryText>Web Templates</StyledPrimaryText>
            </MenuBtn>
          </li>
          <li>
            <MenuBtn noHover padding="0" color="transparent" WFit>
              <StyledPrimaryText>Logo</StyledPrimaryText>
            </MenuBtn>
          </li>
          <li>
            <MenuBtn noHover padding="0" color="transparent" WFit>
              <StyledPrimaryText>Branding</StyledPrimaryText>
            </MenuBtn>
          </li>
        </StyledUl>
        <FLexSectionsWrapper>
          <SectionPortfolioItem width={310} height={300} photos={photos} />
        </FLexSectionsWrapper>
      </FlexWrapper>
    </StyledSection>
  );
};

const MenuBtn = styled(StyledBtn)`
  &:hover ${StyledPrimaryText}, &:focus ${StyledPrimaryText} {
    color: #ffb400;
  }
`;

const StyledSection = styled.section`
  padding: 35px 0;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 37px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;
