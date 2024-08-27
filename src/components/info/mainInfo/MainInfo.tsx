import React from "react";
import { FlexWrapper } from "../../FlexWrapper";
import { ItemDesign } from "../../ItemDesign";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { StyledSecondaryText } from "../../SecondaryText.styled";
import styled from "styled-components";
import profile from "../../../assets/images/Profile.webp";
import profile2x from "../../../assets/images/Profile@2x.webp";
import { ListItems } from "../../listItems/ListItems";

const socialLinks = [
  {
    ariaLabel: "Facebook Link Profile",
    href: "#!Facebook",
    iconSrc: "FbLogoSvg",
    width: "7",
    height: "12",
    viewBox: "0 0 7 12",
  },
  {
    ariaLabel: "Instagram Link Profile",
    href: "#!Instagram",
    iconSrc: "InstaLogoSvg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
  },
  {
    ariaLabel: "Twitter Link Profile",
    href: "#!Twitter",
    iconSrc: "TwLogoSvg",
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
  },
  {
    ariaLabel: "LinkedIn Link Profile",
    href: "#!LinkedIn",
    iconSrc: "LdLogoSvg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
  },
  {
    ariaLabel: "Youtube Link Profile",
    href: "#!Youtube",
    iconSrc: "YtLogoSvg",
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
  },
  {
    ariaLabel: "Dribble Link Profile",
    href: "#!Dr",
    iconSrc: "DrLogoSvg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
  },
];

export const MainInfo = () => {
  return (
    <FlexWrapper direction="column" align="center">
      <PositionElementOnline>
        <ProfileImg
          src={profile}
          srcSet={`${profile2x} 2x`}
          alt="Rayan Adlardard Face"
        />
        <ItemDesign
          bgc="#7eb942"
          bShadow="0px 4px 10px 0px #00000026"
          bot="18px"
          right="10px"
        />
      </PositionElementOnline>
      <FlexWrapper gap="15px" direction="column">
        <StyledPrimaryText TAlign="center">Rayan Adlardard</StyledPrimaryText>
        <StyledSecondaryText TAlign="center">
          Font-end Developer
        </StyledSecondaryText>
        <ListItems
          width={24}
          height={24}
          color="#FFB400"
          Links={socialLinks}
          direction="row"
          gap={15}
        />
      </FlexWrapper>
    </FlexWrapper>
  );
};

const PositionElementOnline = styled.div`
  position: relative;
  margin-bottom: 31px;
  display: flex;
  width: 150px;
  height: 150px;
`;

const ProfileImg = styled.img`
  display: block;
  width: 150px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;
