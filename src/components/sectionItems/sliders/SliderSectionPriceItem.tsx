import React from "react";
import { FlexWrapper } from "../../FlexWrapper";
import { StyledPrimaryText } from "../../PrimaryText.styled";
import { StyledTitleText } from "../../TitleText.styled";
import { StyledSecondaryText } from "../../SecondaryText.styled";
import { Advantages } from "../../advantages/Advantages";
import { StyledPricePartBtn } from "../../StyledPricePartBtn";
import styled from "styled-components";
import { SectionWrapperItem } from "../../SectionWrapperItem";
import "animate.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../../styles/Slider.css";
import { useTheme } from "../../../hooks/useTheme";
import { layoutsTheme } from "../../../styles/Theme.styled";

const responsive = {
  0: { items: 1 },
  750: { items: 2 },
  993: { items: 1 },
  1192: { items: 2 },
};

type PriceList = {
  nameList: string;
  price: number;
  description: string;
  mostPopular?: boolean;
  itemList: { name: string; isDisabled?: boolean }[];
};

type SectionPriceItemPropsType = {
  items: PriceList[];
  width: number;
  height: number;
};

const ItemList: React.FC<Pick<PriceList, "itemList">> = ({ itemList }) => {
  return (
    <FlexWrapper direction="column" gap="16px">
      {itemList.map((item, i) =>
        item.isDisabled ? (
          <Advantages isDisabled key={i}>
            {item.name}
          </Advantages>
        ) : (
          <Advantages key={i}>{item.name}</Advantages>
        )
      )}
    </FlexWrapper>
  );
};

export const SliderSectionPriceItem: React.FC<SectionPriceItemPropsType> = ({
  width,
  height,
  items,
}) => {
  let countDelay = 200;
  const { isDark } = useTheme();
  return (
    <AliceCarousel
      autoHeight
      mouseTracking
      responsive={responsive}
      controlsStrategy="alternate"
      infinite
      autoPlay
      autoPlayInterval={4000}
      disableButtonsControls
    >
      {items.map((item, i) => {
        const delay = `${countDelay * i}ms`;

        return (
          <SlidesSectionWrapperItem
            isDark={isDark}
            padding="54px 31px 25px 31px"
            width={width}
            height={height}
            style={{ animationDelay: delay }}
            className="animate__animated animate__fadeInUp"
            key={i}
          >
            {item.mostPopular ? (
              <StyledMP>
                <StyledSecondaryText
                  isDark={isDark}
                  TAlign="center"
                  color={
                    isDark
                      ? layoutsTheme.theme.dark.titleText
                      : layoutsTheme.theme.light.titleText
                  }
                >
                  Most Popular
                </StyledSecondaryText>
              </StyledMP>
            ) : null}
            <StyledTitle
              isDark={isDark}
              weight="600"
              size="24px"
              Lheight="29.66px"
            >
              {item.nameList}
            </StyledTitle>
            <FlexWrapper align="baseline" justify="center" gap="10px">
              <StyledTitleText isDark={isDark} as={"p"}>
                ${item.price}.00
              </StyledTitleText>
              <StyledText
                isDark={isDark}
                color={
                  isDark
                    ? layoutsTheme.theme.dark.titleText
                    : layoutsTheme.theme.light.titleText
                }
              >
                /Hour
              </StyledText>
            </FlexWrapper>
            <FlexWrapper align="center" gap="21px" direction="column">
              <StyledSecondaryText isDark={isDark} TAlign="center">
                {item.description}
              </StyledSecondaryText>
              <ItemList itemList={item.itemList} />
              <StyledPricePartBtn
                isDark={isDark}
                bgc={
                  item.mostPopular
                    ? "#FFB400"
                    : isDark
                    ? layoutsTheme.theme.dark.primaryColor
                    : layoutsTheme.theme.light.primaryColor
                }
              >
                <StyledSecondaryText
                  isDark={isDark}
                  color={
                    isDark
                      ? layoutsTheme.theme.dark.titleText
                      : layoutsTheme.theme.light.titleText
                  }
                  size="14px"
                  lHeight="16.94px"
                  fWeight="700"
                >
                  ORDER NOW
                </StyledSecondaryText>
              </StyledPricePartBtn>
            </FlexWrapper>
          </SlidesSectionWrapperItem>
        );
      })}
    </AliceCarousel>
  );
};

const SlidesSectionWrapperItem = styled(SectionWrapperItem)`
  width: 310px;
  margin: 0 auto;
`;

const StyledTitle = styled(StyledPrimaryText)`
  margin-bottom: 19px;
`;
const StyledText = styled(StyledSecondaryText)`
  margin-bottom: 9px;
`;
const StyledMP = styled.div`
  background-color: #ffb400;
  padding: 3px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
