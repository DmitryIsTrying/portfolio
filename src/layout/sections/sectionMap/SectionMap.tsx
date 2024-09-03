import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledImage } from "../../../components/StyledImage";
import MapPhoto from "../../../assets/images/Map.webp";
import styled from "styled-components";

export const SectionMap = () => {
  return (
    <StyledSection>
      <FlexWrapper
        justify="center"
        style={{ overflow: "hidden" }}
        as={"section"}
      >
        <iframe
          title="My location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.02982613167!2d-122.47879947475269!3d37.75776068865792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z0KHQsNC9LdCk0YDQsNC90YbQuNGB0LrQviwg0JrQsNC70LjRhNC-0YDQvdC40Y8sINCh0KjQkA!5e0!3m2!1sru!2slv!4v1725374585832!5m2!1sru!2slv"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </FlexWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 35px 0;
`;
