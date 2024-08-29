import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import { StyledPrimaryText } from "../PrimaryText.styled";
import { StyledTitleText } from "../TitleText.styled";
import { StyledSecondaryText } from "../SecondaryText.styled";
import { Advantages } from "../advantages/Advantages";
import { StyledPricePartBtn } from "../StyledPricePartBtn";
import styled from "styled-components";
import { SectionWrapperItem } from "../SectionWrapperItem";
import { Fade } from "react-awesome-reveal";

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

export const SectionPriceItem: React.FC<SectionPriceItemPropsType> = ({
  width,
  height,
  items,
}) => {
  return (
    <SectionWrapperItem
      padding="54px 31px 25px 31px"
      width={width}
      height={height}
      as={Fade}
      damping={0.1}
      direction="up"
      cascade
      triggerOnce
    >
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {item.mostPopular ? (
            <StyledMP>
              <StyledSecondaryText TAlign="center" color="#2B2B2B">
                Most Popular
              </StyledSecondaryText>
            </StyledMP>
          ) : null}
          <StyledTitle weight="600" size="24px" Lheight="29.66px">
            {item.nameList}
          </StyledTitle>
          <FlexWrapper align="baseline" justify="center" gap="10px">
            <StyledTitleText as={"p"}>${item.price}.00</StyledTitleText>
            <StyledText color="#2B2B2B">/Hour</StyledText>
          </FlexWrapper>
          <FlexWrapper align="center" gap="21px" direction="column">
            <StyledSecondaryText TAlign="center">
              {item.description}
            </StyledSecondaryText>
            <ItemList itemList={item.itemList} />
            <StyledPricePartBtn bgc={item.mostPopular ? "#FFB400" : "#FFFFFF"}>
              <StyledSecondaryText
                color="#2B2B2B"
                size="14px"
                lHeight="16.94px"
                fWeight="700"
              >
                ORDER NOW
              </StyledSecondaryText>
            </StyledPricePartBtn>
          </FlexWrapper>
        </React.Fragment>
      ))}
    </SectionWrapperItem>
  );
};

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
