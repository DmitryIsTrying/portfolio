import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledTitleText } from "../../../components/TitleText.styled";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import { GridWrapper } from "../../../components/GridWrapper";
import { Icon } from "../../../components/icon/Icon";
import { StyledPrimaryText } from "../../../components/PrimaryText.styled";
import styled from "styled-components";

export const SectionService = () => {
  return (
    <FlexWrapper color="#F0F0F6" direction="column" align="center">
      <StyledTitleText style={{ marginBottom: "25px" }}>
        My Services
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
      <GridWrapper columns="3, 310px" rows="2, 225px">
        <FlexWrapper direction="column" align="center" justify="flex-end">
          <Icon
            iconSrc="ServicePcSvg"
            width="66"
            height="54"
            viewBox="0 0 66 54"
          />
          <StyledPrimaryText style={{ margin: "34px 0 15px" }} TAlign="center">
            Web Development
          </StyledPrimaryText>
          <StyledSecondaryText style={{ margin: "0 0 42px" }}>
            Blog, E-commerce
          </StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper direction="column" align="center" justify="flex-end">
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
        </FlexWrapper>
        <FlexWrapper direction="column" align="center" justify="flex-end">
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
        </FlexWrapper>
        <FlexWrapper direction="column" align="center" justify="flex-end">
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
        </FlexWrapper>
        <FlexWrapper direction="column" align="center" justify="flex-end">
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
        </FlexWrapper>
        <FlexWrapper direction="column" align="center" justify="flex-end">
          <StyledPrimaryText style={{ marginBottom: "22px" }}>
            advertising
          </StyledPrimaryText>
          <StyledSecondaryText
            TAlign="center"
            style={{ padding: "0 25px", marginBottom: "27px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
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
        </FlexWrapper>
      </GridWrapper>
    </FlexWrapper>
  );
};

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
