import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import { StyledPrimaryText } from "../PrimaryText.styled";
import styled from "styled-components";
import { StyledSecondaryText } from "../SecondaryText.styled";
import { StyledBtn } from "../StyledBtn.styled";
import { StyledTitleText } from "../TitleText.styled";

export const Form = () => {
  return (
    <MediaWrapper fitWidth direction="column">
      <StyledTitleText style={{ marginBottom: "50px" }}>
        Leave us your info
      </StyledTitleText>
      <StyledForm action="#!">
        <label htmlFor="name">
          <StyledPrimaryText style={{ marginBottom: "8px" }} color="#767676">
            Your Full Name ( Required)
          </StyledPrimaryText>
        </label>
        <StyledInput
          style={{ marginBottom: "25px" }}
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
        />
        <label htmlFor="email">
          <StyledPrimaryText style={{ marginBottom: "8px" }} color="#767676">
            Your Email ( Required)
          </StyledPrimaryText>
        </label>
        <StyledInput
          style={{ marginBottom: "25px" }}
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
        />
        <label htmlFor="subj">
          <StyledPrimaryText style={{ marginBottom: "8px" }} color="#767676">
            Subject
          </StyledPrimaryText>
        </label>
        <StyledInput
          style={{ marginBottom: "25px" }}
          id="subj"
          type="text"
          name="subj"
        />
        <label htmlFor="msg">
          <StyledPrimaryText style={{ marginBottom: "8px" }} color="#767676">
            Your Message
          </StyledPrimaryText>
          <StyledInput
            style={{
              resize: "none",
              height: "210px",
              marginBottom: "25px",
            }}
            as={"textarea"}
            name="msg"
            id="msg"
          />
        </label>
        <StyledBtn type="submit" WFit padding="9px 25px">
          <StyledSecondaryText
            color="#2B2B2B"
            size="14px"
            lHeight="16.94px"
            fWeight="600"
          >
            SEND MESSAGE
          </StyledSecondaryText>
        </StyledBtn>
      </StyledForm>
    </MediaWrapper>
  );
};

const MediaWrapper = styled(FlexWrapper)`
  @media screen and (max-width: 1439px) {
    width: 100%;
  }
`;

const StyledForm = styled.form`
  background-color: #ffffff;
  padding: 25px;
  width: 570px;
  @media screen and (max-width: 1439px) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.25px;
  color: #2b2b2b;
  width: 100%;
  height: 50px;
  border: none;
  padding: 10px;
  background-color: #f0f0f6;
  &:focus {
    outline: 2px solid #767676;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c0bfbf;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 6px;
  }
`;
