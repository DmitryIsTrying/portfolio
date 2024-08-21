import React from "react";
import { ItemDesign } from "../ItemDesign";
import styled from "styled-components";

export const ItemsDesign = () => {
  return (
    <>
      <ItemDesign border="2px solid #FFB400CC" top="30px" left="40px" />
      <ItemDesign border="2px solid #05FF00CC" top="52px" right="434px" />
      <ItemDesign
        border="2px solid #FFB400CC"
        radius="0"
        top="70px"
        right="54px"
        transform={26.05}
      />
      <ItemDesign border="2px solid #05FF00CC" bot="29px" left="88px" />
      <ItemDesign
        border="2px solid #0047FFCC"
        radius="0"
        top="333px"
        left="373px"
        transform={26.05}
      />
      <ItemDesign border="2px solid #FFB400CC" bot="71px" left="557px" />
      <ContainerTriangle>
        <Triangle />
      </ContainerTriangle>
    </>
  );
};

const ContainerTriangle = styled.span`
  position: absolute;
  margin: auto;
  bottom: 24px;
  right: 33px;
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
