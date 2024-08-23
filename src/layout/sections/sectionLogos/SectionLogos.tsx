import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import styled from "styled-components";

export const SectionLogos = () => {
  return (
    <StyledSection>
      <StyledFLexSectionsWrapper>
        <FlexWrapper gap="55px" fitWidth>
          <Icon
            iconSrc="LogosSvg1"
            width="129"
            height="90"
            viewBox="0 0 129 90"
          />
          <Icon
            iconSrc="LogosSvg2"
            width="125"
            height="103"
            viewBox="0 0 125 103"
          />
        </FlexWrapper>
        <FlexWrapper gap="55px" fitWidth>
          <Icon
            iconSrc="LogosSvg3"
            width="134"
            height="85"
            viewBox="0 0 134 85"
          />
          <Icon
            iconSrc="LogosSvg4"
            width="129"
            height="95"
            viewBox="0 0 129 95"
          />
        </FlexWrapper>
      </StyledFLexSectionsWrapper>
    </StyledSection>
  );
};

const StyledFLexSectionsWrapper = styled(FLexSectionsWrapper)`
  gap: 55px;
`;

const StyledSection = styled.section`
  padding: 35px 0;
`;
