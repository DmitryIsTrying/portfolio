import React from "react";
import { ItemDesign } from "../ItemDesign";
import styled from "styled-components";

export const ItemsDesign = () => {
  return (
    <>
      <ItemDesign border="2px solid #FFB400CC" top="9%" left="6%" />
      <ItemDesign border="2px solid #05FF00CC" top="10%" right="40%" />
      <ItemDesign
        border="2px solid #FFB400CC"
        radius="0"
        top="15%"
        right="5%"
        transform={26.05}
      />
      <ItemDesign border="2px solid #05FF00CC" bot="8%" left="10%" />
      <ItemDesign
        border="2px solid #0047FFCC"
        radius="0"
        top="75%"
        left="38%"
        transform={26.05}
      />
      <ItemDesign border="2px solid #FFB400CC" bot="15%" left="55%" />
      <ContainerTriangle>
        <Triangle />
      </ContainerTriangle>
    </>
  );
};

const ContainerTriangle = styled.span`
  position: absolute;
  margin: auto;
  bottom: 5%;
  right: 3%;
  width: 16px;
  height: 16px;
  border-bottom: 2px solid #e74c3c;
`;

const Triangle = styled.span`
  position: absolute;
  top: 8px;
  left: 2px;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  border-top: 2px solid #e74c3c;
  border-left: 2px solid #e74c3c;
`;
