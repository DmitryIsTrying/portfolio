import "animate.css";
import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../FlexWrapper";
import { Icon } from "../../icon/Icon";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { StyledSecondaryText } from "../../SecondaryText.styled";
import { SectionWrapperItem } from "../../SectionWrapperItem";
import { useTheme } from "../../../hooks/useTheme";

type ItemsPropsType = {
  path: string;
  alt: string;
  title: string;
  discription: string;
  link: string;
};

type SectionBlogItemPropsType = {
  items: ItemsPropsType[];
  width: number;
  height: number;
};

export const SectionBlogItem: React.FC<SectionBlogItemPropsType> = ({
  items,
  width,
  height,
}) => {
  let countDelay = 200;
  const { isDark } = useTheme();
  return (
    <>
      {items.map((e, i) => {
        const delay = `${countDelay * i}ms`;
        return (
          <Wrapper
            isDark={isDark}
            width={width}
            height={height}
            key={i}
            style={{ animationDelay: delay }}
            className="animate__animated animate__fadeInUp"
          >
            <ImageBlogStyled src={e.path} alt={e.alt} />
            <PaddingWrapper direction="column">
              <StyledPrimaryText
                isDark={isDark}
                style={{ marginBottom: "8px" }}
              >
                {e.title}
              </StyledPrimaryText>
              <StyledSecondaryText
                isDark={isDark}
                style={{ marginBottom: "9px" }}
              >
                {e.discription}
              </StyledSecondaryText>
              <StyledLink href={e.link}>
                <FlexWrapper gap="8px" align="baseline">
                  <StyledPrimaryText isDark={isDark} color="#FFB400">
                    Learn more
                  </StyledPrimaryText>
                  <Icon
                    iconSrc="ServiceArrowRightSvg"
                    width="6"
                    height="8"
                    viewBox="0 0 6 8"
                  />
                </FlexWrapper>
              </StyledLink>
            </PaddingWrapper>
          </Wrapper>
        );
      })}
    </>
  );
};

const StyledLink = styled.a`
  text-decoration: none;
`;

const PaddingWrapper = styled(FlexWrapper)`
  padding: 20px 25px;
`;

const Wrapper = styled(SectionWrapperItem)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 0;
`;

const ImageBlogStyled = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 310 / 300;
  object-fit: cover;
`;
