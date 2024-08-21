import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledTitleText } from "../../../components/TitleText.styled";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import { Icon } from "../../../components/icon/Icon";
import { StyledPrimaryText } from "../../../components/PrimaryText.styled";
import styled from "styled-components";
import { TitleSections } from "../../../components/titleSections/TitleSections";
import { SectionWrapperItem } from "../../../components/SectionWrapperItem";

export const SectionService = () => {
  return (
    <StyledSection>
      <FlexWrapper
        as={"section"}
        color="#F0F0F6"
        direction="column"
        align="center"
      >
        <TitleSections
          pdt={138}
          title="my services"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
        <FLexSectionsWrapper>
          <SectionWrapperItem>
            <Icon
              iconSrc="ServicePcSvg"
              width="66"
              height="54"
              viewBox="0 0 66 54"
            />
            <StyledPrimaryText
              style={{ margin: "34px 0 15px" }}
              TAlign="center"
            >
              Web Development
            </StyledPrimaryText>
            <StyledSecondaryText style={{ margin: "0 0 42px" }}>
              Blog, E-commerce
            </StyledSecondaryText>
          </SectionWrapperItem>
          <SectionWrapperItem>
            <Icon
              iconSrc="ServicePaintingSvg"
              width="68"
              height="68"
              viewBox="0 0 68 68"
            />
            <StyledPrimaryText style={{ margin: "26px 0 15px" }}>
              uI/uX design
            </StyledPrimaryText>
            <StyledSecondaryText style={{ margin: "0 0 42px" }}>
              Mobile app, website design
            </StyledSecondaryText>
          </SectionWrapperItem>
          <SectionWrapperItem>
            <Icon
              iconSrc="ServiceMPhoneSvg"
              width="74"
              height="74"
              viewBox="0 0 74 74"
            />
            <StyledPrimaryText style={{ margin: "23px 0 15px" }}>
              sound design
            </StyledPrimaryText>
            <StyledSecondaryText style={{ margin: "0 0 42px" }}>
              Voice Over, Beat Making
            </StyledSecondaryText>
          </SectionWrapperItem>
          <SectionWrapperItem>
            <Icon
              iconSrc="ServiceGameDevSvg"
              width="74"
              height="74"
              viewBox="0 0 74 74"
            />
            <StyledPrimaryText style={{ margin: "23px 0 18px" }}>
              game design
            </StyledPrimaryText>
            <StyledSecondaryText style={{ margin: "0 0 33px" }}>
              Character Design, Props & Objects
            </StyledSecondaryText>
          </SectionWrapperItem>
          <SectionWrapperItem>
            <Icon
              iconSrc="ServicePhotographerSvg"
              width="72"
              height="78"
              viewBox="0 0 72 78"
            />
            <StyledPrimaryText style={{ margin: "25px 0 18px" }}>
              photography
            </StyledPrimaryText>
            <StyledSecondaryText style={{ margin: "0 0 33px" }}>
              portrait, product photography
            </StyledSecondaryText>
          </SectionWrapperItem>
          <SectionWrapperItem>
            <StyledPrimaryText
              style={{ marginBottom: "22px", marginTop: "31px" }}
            >
              advertising
            </StyledPrimaryText>
            <StyledSecondaryText
              TAlign="center"
              style={{ padding: "0 25px", marginBottom: "18px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.
            </StyledSecondaryText>
            <StyledLink href="#!" style={{ marginBottom: "33px" }}>
              <FlexWrapper align="center" gap="5px">
                <StyleTextLink>ORDER NOW</StyleTextLink>
                <Icon
                  iconSrc="ServiceArrowRightSvg"
                  width="6"
                  height="8"
                  viewBox="0 0 6 8"
                />
              </FlexWrapper>
            </StyledLink>
          </SectionWrapperItem>
        </FLexSectionsWrapper>
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section``;

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyleTextLink = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  text-align: left;
  color: #ffb400;
  height: fit-content;
`;
