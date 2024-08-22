import React from "react";
import styled from "styled-components";

type StyledImagePropsType = {
  path: string;
  alt: string;
};

export const StyledImage = (props: StyledImagePropsType) => {
  return <Image src={props.path} alt={props.alt} />;
};

const Image = styled.img`
  display: block;
  width: auto;
  height: 300px;
`;
