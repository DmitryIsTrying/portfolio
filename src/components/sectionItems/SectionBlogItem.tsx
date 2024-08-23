import React from "react";
import { SectionWrapperItem } from "../SectionWrapperItem";
import { FlexWrapper } from "../FlexWrapper";
import { StyledPrimaryText } from "../PrimaryText.styled";
import { Icon } from "../icon/Icon";
import { StyledSecondaryText } from "../SecondaryText.styled";
import styled from "styled-components";

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
  return (
    <>
      {items.map((e, i) => (
        <Wrapper width={width} height={height} key={i}>
          <FlexWrapper direction="column">
            <ImageBlogStyled src={e.path} alt={e.alt} />
            <PaddingWrapper direction="column">
              <StyledPrimaryText style={{ marginBottom: "8px" }}>
                {e.title}
              </StyledPrimaryText>
              <StyledSecondaryText style={{ marginBottom: "9px" }}>
                {e.discription}
              </StyledSecondaryText>
              <StyledLink href={e.link}>
                <FlexWrapper gap="8px" align="baseline">
                  <StyledPrimaryText color="#FFB400">
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
          </FlexWrapper>
        </Wrapper>
      ))}
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
  justify-content: flex-start;
`;

const ImageBlogStyled = styled.img`
  display: block;
  width: 310px;
  height: 300px;
  object-fit: cover;
`;
