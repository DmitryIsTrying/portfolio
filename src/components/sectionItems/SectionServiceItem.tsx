import React from "react";
import { SectionWrapperItem } from "../SectionWrapperItem";
import { StyledPrimaryText } from "../PrimaryText.styled";
import { StyledSecondaryText } from "../SecondaryText.styled";
import { Icon } from "../icon/Icon";
import styled, { keyframes } from "styled-components";

type IconData = {
  path: string;
  width: string;
  height: string;
  vBox: string;
  title: string;
  description: string;
};

type SectionItemPropsType = {
  iconData: IconData[];
  width: number;
  height: number;
};

export const SectionServiceItem: React.FC<SectionItemPropsType> = ({
  iconData,
  width,
  height,
}) => {
  return (
    <>
      {iconData.map((icon, i) => (
        <HoverSectionWrapperItem
          padding="25px 32px 35px 32px"
          width={width}
          height={height}
          key={i}
        >
          <Icon
            iconSrc={icon.path}
            width={icon.width}
            height={icon.height}
            viewBox={icon.vBox}
          />
          <PaddingText margin="26px 0 15px" TAlign="center">
            {icon.title}
          </PaddingText>
          <StyledSecondaryText TAlign="center">
            {icon.description}
          </StyledSecondaryText>
          <Test>
            <PaddingText margin="0" TAlign="center">
              {icon.title}
            </PaddingText>
            <StyledSecondaryText TAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.
            </StyledSecondaryText>
            <StyledLink
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyleTextLink>ORDER NOW</StyleTextLink>
              <Icon
                iconSrc={"ServiceArrowRightSvg"}
                width="6"
                height="8"
                viewBox="0 0 6 8"
              />
            </StyledLink>
          </Test>
        </HoverSectionWrapperItem>
      ))}
    </>
  );
};

const Test = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  top: -250px;
  left: 0;
  transition: top 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 31px 25px 25px;
`;

const StyledLink = styled.a`
  display: flex;
  text-decoration: none;
  gap: 5px;
  align-items: center;
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

const HoverSectionWrapperItem = styled(SectionWrapperItem)`
  position: relative;
  overflow: hidden;
  &:hover ${Test} {
    top: 0px;
  }
`;

const PaddingText = styled(StyledPrimaryText)<{ margin: string }>`
  margin: ${(props) => props.margin};
`;
