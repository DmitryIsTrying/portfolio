import React from "react";
import { Icon } from "../../../components/icon/Icon";
import photoUrl from "../../../assets/images/Photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledPrimaryText } from "../../../components/PrimaryText.styled";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import { StyledBtn } from "../../../components/StyledBtn.styled";
import { ItemDesign } from "../../../components/ItemDesign";
import styled from "styled-components";
import { StyledTitleText } from "../../../components/TitleText.styled";

export const Header = () => {
  return (
    <FlexWrapper
      justify="space-around"
      style={{
        marginBottom: "138px",
        padding: "8px 57px 0 60px",
        position: "relative",
        maxWidth: "1224px",
      }}
      align="flex-end"
      fitHeight
      as={"header"}
    >
      <FlexWrapper direction="column" fitWidth>
        <StyledTitleText
          size="48px"
          Lheight="59.33px"
          weight="700"
          style={{ width: "fit-content", marginTop: "93px" }}
        >
          I’m Rayan Adlrdard
        </StyledTitleText>
        <StyledTitleText
          as="h1"
          size="48px"
          Lheight="59.33px"
          weight="700"
          style={{ marginBottom: "18px", width: "fit-content" }}
        >
          <span style={{ color: "#FFB400" }}>Front-end</span> Developer
        </StyledTitleText>
        <StyledSecondaryText
          size="16px"
          style={{ marginBottom: "25px", maxWidth: "424px", zIndex: "1" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </StyledSecondaryText>
        <StyledBtn
          as="a"
          href="#!"
          gap="9px"
          padding="16px 32px"
          style={{ marginBottom: "74px" }}
          WFit
        >
          <StyledPrimaryText as="p" size="16px" Lheight="19.36px">
            HIRE ME
          </StyledPrimaryText>
          <Icon
            iconSrc={"HireSvg"}
            width="12"
            height="12"
            viewBox="0 0 12 12"
          />
        </StyledBtn>
      </FlexWrapper>
      <img style={{ zIndex: "1" }} src={photoUrl} alt="Rayan Adlardard Face" />
      <ItemDesign border="2px solid #FFB400CC" top="30px" left="40px" />
      <ItemDesign border="2px solid #05FF00CC" top="52px" right="434px" />
      <ItemDesign
        border="2px solid #FFB400CC"
        radius="0"
        top="70px"
        right="54px"
        transform={26.05}
      />
      <ItemDesign border="2px solid #05FF00CC" bot="29px" left="88px" />
      <ItemDesign
        border="2px solid #0047FFCC"
        radius="0"
        top="333px"
        left="373px"
        transform={26.05}
      />
      <ItemDesign border="2px solid #FFB400CC" bot="71px" left="557px" />
      <ItemDesign border="2px solid #FF2E00CC" bot="71px" left="557px" />
      <ContainerTriangle>
        <Triangle />
      </ContainerTriangle>
    </FlexWrapper>
  );
};

const ContainerTriangle = styled.span`
  position: absolute;
  margin: auto;
  bottom: 24px;
  right: 33px;
  width: 16px;
  height: 16px;
  border-bottom: 2px solid #e74c3c;
`;

const Triangle = styled.span`
  position: absolute;
  top: 8px;
  left: 2px;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  border-top: 2px solid #e74c3c;
  border-left: 2px solid #e74c3c;
`;
