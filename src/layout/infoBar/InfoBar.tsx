import React from "react";
import smallPhoto from "../../assets/images/Photo-small.webp";
import { Icon } from "../../components/icon/Icon";
import { ProgressBar } from "../../components/progressBar/ProgressBar";
import styled from "styled-components";
import { StyledBtn } from "../../components/StyledBtn.styled";
import { StyledPrimaryText } from "../../components/PrimaryText.styled";
import { StyledSecondaryText } from "../../components/SecondaryText.styled";
import { FlexWrapper } from "../../components/FlexWrapper";

export default function InfoBar() {
  return (
    <StyledAside
      as={FlexWrapper}
      direction="column"
      align="center"
      justify="space-between"
    >
      <FlexWrapper
        direction="column"
        align="center"
        style={{ marginBottom: "15px" }}
      >
        <PositionElementOnline>
          <ProfileImg src={smallPhoto} alt="Rayan Adlardard Face" />
          <CircleOnline></CircleOnline>
        </PositionElementOnline>
        <StyledPrimaryText style={{ marginBottom: "15px" }}>
          Rayan Adlardard
        </StyledPrimaryText>
        <StyledSecondaryText style={{ marginBottom: "15px" }}>
          Font-end Developer
        </StyledSecondaryText>
      </FlexWrapper>
      <FlexWrapper as={"ul"} style={{ listStyle: "none" }} gap="15px">
        <StyledLi>
          <Icon
            iconSrc={"FbLogoSvg"}
            width="7"
            height="12"
            viewBox="0 0 7 12"
          />
        </StyledLi>
        <StyledLi>
          <Icon
            iconSrc={"InstaLogoSvg"}
            width="12"
            height="12"
            viewBox="0 0 12 12"
          />
        </StyledLi>
        <StyledLi>
          <Icon
            iconSrc={"TwLogoSvg"}
            width="12"
            height="10"
            viewBox="0 0 12 10"
          />
        </StyledLi>
        <StyledLi>
          <Icon
            iconSrc={"LdLogoSvg"}
            width="12"
            height="12"
            viewBox="0 0 12 12"
          />
        </StyledLi>
        <StyledLi>
          <Icon
            iconSrc={"YtLogoSvg"}
            width="12"
            height="10"
            viewBox="0 0 12 10"
          />
        </StyledLi>
        <StyledLi>
          <Icon
            iconSrc={"DrLogoSvg"}
            width="12"
            height="12"
            viewBox="0 0 12 12"
          />
        </StyledLi>
      </FlexWrapper>
      <StyledHr />
      <FlexWrapper gap="9px" direction="column">
        <FlexWrapper justify="space-between">
          <BorderClrText color="#2B2B2B">Age:</BorderClrText>
          <StyledSecondaryText color="#2B2B2B">24</StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <BorderClrText color="#2B2B2B">Residence:</BorderClrText>
          <StyledSecondaryText color="#2B2B2B">BD</StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <BorderClrText color="#2B2B2B">Freelance:</BorderClrText>
          <StyledSecondaryText color="#7EB942">Available</StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper justify="space-between">
          <BorderClrText color="#2B2B2B">Address:</BorderClrText>
          <StyledSecondaryText color="#2B2B2B">
            Dhaka,Bangladesh
          </StyledSecondaryText>
        </FlexWrapper>
      </FlexWrapper>
      <StyledHr />
      <FlexWrapper direction="column" align="flex-start">
        <StyledPrimaryText style={{ marginBottom: "15px" }}>
          Languages
        </StyledPrimaryText>
        <ProgressBar nameSKill={"Bangla"} lvlSkill={"100%"} />
        <ProgressBar nameSKill={"English"} lvlSkill={"80%"} />
        <ProgressBar nameSKill={"Spanish"} lvlSkill={"60%"} />
      </FlexWrapper>
      <StyledHr />
      <FlexWrapper direction="column" align="flex-start">
        <StyledPrimaryText style={{ marginBottom: "15px" }}>
          Skills
        </StyledPrimaryText>
        <ProgressBar nameSKill={"Html"} lvlSkill={"90%"} />
        <ProgressBar nameSKill={"CSS"} lvlSkill={"85%"} />
        <ProgressBar nameSKill={"Js"} lvlSkill={"80%"} />
        <ProgressBar nameSKill={"PHP"} lvlSkill={"75%"} />
        <ProgressBar nameSKill={"WordPress"} lvlSkill={"85%"} />
      </FlexWrapper>
      <StyledHr />
      <FlexWrapper direction="column" align="flex-start">
        <StyledPrimaryText style={{ marginBottom: "15px" }}>
          Extra Skills
        </StyledPrimaryText>
        <FlexWrapper direction="column" gap="5px">
          <FlexWrapper gap="15px" align="center">
            <Icon
              iconSrc={"ExtraSkillsSvg"}
              width="15"
              height="15"
              viewBox="0 0 15 15"
            />
            <StyledSecondaryText>Bootstrap, Materialize</StyledSecondaryText>
          </FlexWrapper>
          <FlexWrapper gap="15px" align="center">
            <Icon
              iconSrc={"ExtraSkillsSvg"}
              width="15"
              height="15"
              viewBox="0 0 15 15"
            />
            <StyledSecondaryText>Stylus, Sass, Less</StyledSecondaryText>
          </FlexWrapper>
          <FlexWrapper gap="15px" align="center">
            <Icon
              iconSrc={"ExtraSkillsSvg"}
              width="15"
              height="15"
              viewBox="0 0 15 15"
            />
            <StyledSecondaryText>Gulp, Webpack, Grunt</StyledSecondaryText>
          </FlexWrapper>
          <FlexWrapper gap="15px" align="center">
            <Icon
              iconSrc={"ExtraSkillsSvg"}
              width="15"
              height="15"
              viewBox="0 0 15 15"
            />
            <StyledSecondaryText>GIT Knowledge</StyledSecondaryText>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
      <StyledHr />
      <StyledBtn gap="19px">
        <StyledTextBtn>Download cv</StyledTextBtn>
        <Icon
          iconSrc={"BtnCvLoadSvg"}
          width="12"
          height="13"
          viewBox="0 0 12 13"
        />
      </StyledBtn>
    </StyledAside>
  );
}

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: #ffb400;
  border-radius: 50%;
`;

const StyledHr = styled.hr`
  border: 1.5px solid #f0f0f6;
  width: 100%;
  margin: 25px 0;
`;

const BorderClrText = styled(StyledSecondaryText)`
  background-color: #ffb400;
  padding: 0px 7px 0px 5px;
`;

const PositionElementOnline = styled.div`
  position: relative;
  margin-bottom: 31px;
  display: flex;
`;

const CircleOnline = styled.span`
  width: 16px;
  height: 16px;
  background-color: #7eb942;
  box-shadow: 0px 4px 10px 0px #00000026;
  border-radius: 50%;
  position: absolute;
  bottom: 18px;
  right: 10px;
`;

const StyledAside = styled.aside`
  height: fit-content;
  padding: 50px 45px 25px 40px;
  background-color: #ffffff;
  position: fixed;
  width: 305px;
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c0bfbf;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 6px;
  }
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const StyledTextBtn = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.94px;
  text-align: left;
  color: #2b2b2b;
`;
