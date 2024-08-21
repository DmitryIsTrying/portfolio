import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledTitleText } from "../../../components/TitleText.styled";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import { StyledPrimaryText } from "../../../components/PrimaryText.styled";
import { StyledBtn } from "../../../components/StyledBtn.styled";
import { StyledImage } from "../../../components/StyledImage";
import { Icon } from "../../../components/icon/Icon";
import Port1 from "../../../assets/images/Port1-blog.webp";
import Port2 from "../../../assets/images/Port2-blog.webp";
import Port3 from "../../../assets/images/Port3-blog.webp";
import Port4 from "../../../assets/images/Port4.webp";
import Port5 from "../../../assets/images/Port5.webp";
import Port6 from "../../../assets/images/Port6.webp";
import Port7 from "../../../assets/images/Port7.webp";
import Port8 from "../../../assets/images/Port8.webp";
import Port9 from "../../../assets/images/Port9.webp";

export const SectionPortfolio = () => {
  return (
    <FlexWrapper
      id="portfolioSection"
      as={"section"}
      color="#F0F0F6"
      direction="column"
      align="center"
    >
      <StyledTitleText style={{ marginBottom: "25px" }}>
        Portfolio
      </StyledTitleText>
      <FlexWrapper
        style={{ marginBottom: "50px" }}
        direction="column"
        color="#F0F0F6"
        align="center"
      >
        <StyledSecondaryText
          style={{ marginBottom: "50px" }}
          Mwidth
          TAlign="center"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </StyledSecondaryText>
        <FlexWrapper gap="37px" color="#F0F0F6" justify="center">
          <StyledBtn noHover padding="0" color="transparent" WFit>
            <StyledPrimaryText style={{ color: "#FFB400" }}>
              All categories
            </StyledPrimaryText>
          </StyledBtn>
          <StyledBtn noHover padding="0" color="transparent" WFit>
            <StyledPrimaryText>UI Design</StyledPrimaryText>
          </StyledBtn>
          <StyledBtn noHover padding="0" color="transparent" WFit>
            <StyledPrimaryText>Web Templates</StyledPrimaryText>
          </StyledBtn>
          <StyledBtn noHover padding="0" color="transparent" WFit>
            <StyledPrimaryText>Logo</StyledPrimaryText>
          </StyledBtn>
          <StyledBtn noHover padding="0" color="transparent" WFit>
            <StyledPrimaryText>Branding</StyledPrimaryText>
          </StyledBtn>
        </FlexWrapper>
      </FlexWrapper>
      <FLexSectionsWrapper columns="3, 310px" rows="3, 300px">
        <FlexWrapper style={{ position: "relative" }}>
          <StyledImage path={Port1} alt="Port1" />
          <FlexWrapper
            style={{ position: "absolute", top: "0", left: "0" }}
            color="#FFB400F2"
            justify="center"
            align="center"
          >
            <StyledBtn
              aria-label="More examples"
              padding="0"
              color="transparent"
              WFit
            >
              <Icon
                iconSrc="CrossSvg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              />
            </StyledBtn>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper style={{ position: "relative" }}>
          <StyledImage path={Port2} alt="Port2" />
        </FlexWrapper>
        <FlexWrapper style={{ position: "relative" }}>
          <StyledImage path={Port3} alt="Port3" />
        </FlexWrapper>
        <FlexWrapper style={{ position: "relative" }}>
          <StyledImage path={Port4} alt="Port4" />
        </FlexWrapper>
        <FlexWrapper style={{ position: "relative" }}>
          <StyledImage path={Port5} alt="Port5" />
        </FlexWrapper>
        <FlexWrapper style={{ position: "relative" }}>
          <StyledImage path={Port6} alt="Port6" />
        </FlexWrapper>
        <FlexWrapper style={{ position: "relative" }}>
          <StyledImage path={Port7} alt="Port7" />
        </FlexWrapper>
        <FlexWrapper style={{ position: "relative" }}>
          <StyledImage path={Port8} alt="Port8" />
        </FlexWrapper>
        <FlexWrapper style={{ position: "relative" }}>
          <StyledImage path={Port9} alt="Port9" />
        </FlexWrapper>
      </FLexSectionsWrapper>
    </FlexWrapper>
  );
};
