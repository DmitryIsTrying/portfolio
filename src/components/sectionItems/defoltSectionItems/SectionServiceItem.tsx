import React from "react";
import { SectionWrapperItem } from "../../SectionWrapperItem";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { StyledSecondaryText } from "../../SecondaryText.styled";
import { Icon } from "../../icon/Icon";
import styled from "styled-components";
import { InView } from "react-intersection-observer";
import "animate.css";
import { useTheme } from "../../../hooks/useTheme";

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
  let countDelay = 200;
  const { isDark } = useTheme();
  return (
    <>
      {iconData.map((icon, i) => {
        const delay = `${countDelay * i}ms`;

        return (
          <HoverSectionWrapperItem
            isDark={isDark}
            padding="25px 32px 35px 32px"
            width={width}
            height={height}
            style={{ animationDelay: delay }}
            className={"animate__animated animate__fadeInUp"}
            key={i}
          >
            <Icon
              iconSrc={icon.path}
              width={icon.width}
              height={icon.height}
              viewBox={icon.vBox}
            />
            <PaddingText isDark={isDark} margin="26px 0 15px" TAlign="center">
              {icon.title}
            </PaddingText>
            <StyledSecondaryText isDark={isDark} TAlign="center">
              {icon.description}
            </StyledSecondaryText>
            <Test isDark={isDark}>
              <PaddingText isDark={isDark} margin="0" TAlign="center">
                {icon.title}
              </PaddingText>
              <StyledSecondaryText isDark={isDark} TAlign="center">
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
        );
      })}
    </>
  );
};

const StyledLink = styled.a`
  display: flex;
  text-decoration: none;
  gap: 5px;
  align-items: center;
`;

const StyleTextLink = styled.span`
  font-family: "Inter";
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  text-align: left;
  color: #ffb400;
  height: fit-content;
`;

const PaddingText = styled(StyledPrimaryText)<{ margin: string }>`
  margin: ${(props) => props.margin};
`;

const Test = styled.div<{ isDark: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.isDark
      ? props.theme.theme.dark.primaryColor
      : props.theme.theme.light.primaryColor};
  top: -250px;
  left: 0;
  transition: top 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 31px 25px 25px;
`;

const HoverSectionWrapperItem = styled(SectionWrapperItem)`
  position: relative;
  overflow: hidden;
  justify-content: space-between;
  &:hover ${Test} {
    top: 0px;
  }
`;
