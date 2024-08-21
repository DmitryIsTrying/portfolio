import React from "react";
import { FLexSectionsWrapper } from "../../../components/FLexSectionsWrapper";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledTitleText } from "../../../components/TitleText.styled";
import { StyledPrimaryText } from "../../../components/PrimaryText.styled";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";
import styled from "styled-components";
import { StyledBtn } from "../../../components/StyledBtn.styled";
import { Icon } from "../../../components/icon/Icon";

export const SectionForm = () => {
  return (
    <FLexSectionsWrapper
      id="messageSection"
      as={"section"}
      gap={30}
      NRColumns="570px 370px"
      rows="1, 755px"
    >
      <FlexWrapper color="#F0F0F6" direction="column">
        <StyledTitleText style={{ marginBottom: "50px" }} TAlign="left">
          Leave us your info
        </StyledTitleText>
        <FlexWrapper>
          <form action="#!">
            <label htmlFor="name">
              <StyledPrimaryText
                style={{ marginBottom: "8px" }}
                color="#767676"
              >
                Your Full Name ( Required)
              </StyledPrimaryText>
            </label>
            <StyledInput
              style={{ marginBottom: "25px" }}
              id="name"
              type="text"
              name="name"
              required
            />
            <label htmlFor="email">
              <StyledPrimaryText
                style={{ marginBottom: "8px" }}
                color="#767676"
              >
                Your Email ( Required)
              </StyledPrimaryText>
            </label>
            <StyledInput
              style={{ marginBottom: "25px" }}
              id="email"
              type="email"
              name="email"
              required
            />
            <label htmlFor="subj">
              <StyledPrimaryText
                style={{ marginBottom: "8px" }}
                color="#767676"
              >
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
              <StyledPrimaryText
                style={{ marginBottom: "8px" }}
                color="#767676"
              >
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
          </form>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper color="#F0F0F6" direction="column">
        <StyledTitleText style={{ marginBottom: "50px" }} TAlign="left">
          Contact information
        </StyledTitleText>
        <FLexSectionsWrapper gap={18} columns="1, 370px" rows="3, 210px">
          <FlexWrapper align="center" direction="column">
            <FlexWrapper
              style={{ borderRadius: "50%", marginBottom: "30px" }}
              color="#FFB400"
              align="center"
              justify="center"
            >
              <Icon
                width="16"
                height="16"
                viewBox="0 0 16 16"
                iconSrc="FormMapSvg"
              />
            </FlexWrapper>
            <FlexWrapper
              style={{ marginBottom: "14px" }}
              justify="space-between"
            >
              <StyledPrimaryText color="#767676" as={"p"}>
                Country:
              </StyledPrimaryText>
              <StyledSecondaryText color="#767676">
                Bangladesh
              </StyledSecondaryText>
            </FlexWrapper>
            <FlexWrapper
              style={{ marginBottom: "14px" }}
              justify="space-between"
            >
              <StyledPrimaryText color="#767676" as={"p"}>
                City:
              </StyledPrimaryText>
              <StyledSecondaryText color="#767676">Dhaka</StyledSecondaryText>
            </FlexWrapper>
            <FlexWrapper justify="space-between">
              <StyledPrimaryText color="#767676" as={"p"}>
                Streat:
              </StyledPrimaryText>
              <StyledSecondaryText color="#767676">
                35 vhatara, Badda
              </StyledSecondaryText>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper align="center" direction="column">
            <FlexWrapper
              style={{ borderRadius: "50%", marginBottom: "30px" }}
              color="#FFB400"
              align="center"
              justify="center"
            >
              <Icon
                width="16"
                height="16"
                viewBox="0 0 16 16"
                iconSrc="FormMapSvg"
              />
            </FlexWrapper>
            <FlexWrapper
              style={{ marginBottom: "14px" }}
              justify="space-between"
            >
              <StyledPrimaryText color="#767676" as={"p"}>
                Email:
              </StyledPrimaryText>
              <StyledSecondaryText color="#767676">
                youremail@gmail.com
              </StyledSecondaryText>
            </FlexWrapper>
            <FlexWrapper
              style={{ marginBottom: "14px" }}
              justify="space-between"
            >
              <StyledPrimaryText color="#767676" as={"p"}>
                Skype:
              </StyledPrimaryText>
              <StyledSecondaryText color="#767676">
                @yourusername
              </StyledSecondaryText>
            </FlexWrapper>
            <FlexWrapper justify="space-between">
              <StyledPrimaryText color="#767676" as={"p"}>
                Telegram:
              </StyledPrimaryText>
              <StyledSecondaryText color="#767676">
                @yourusername
              </StyledSecondaryText>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper align="center" direction="column">
            <FlexWrapper
              style={{ borderRadius: "50%", marginBottom: "30px" }}
              color="#FFB400"
              align="center"
              justify="center"
            >
              <Icon
                width="16"
                height="16"
                viewBox="0 0 16 16"
                iconSrc="FormMapSvg"
              />
            </FlexWrapper>
            <FlexWrapper
              style={{ marginBottom: "14px" }}
              justify="space-between"
            >
              <StyledPrimaryText color="#767676" as={"p"}>
                Support services:
              </StyledPrimaryText>
              <StyledSecondaryText color="#767676">15369</StyledSecondaryText>
            </FlexWrapper>
            <FlexWrapper
              style={{ marginBottom: "14px" }}
              justify="space-between"
            >
              <StyledPrimaryText color="#767676" as={"p"}>
                Office:
              </StyledPrimaryText>
              <StyledSecondaryText color="#767676">
                +58 (021)356 587 235
              </StyledSecondaryText>
            </FlexWrapper>
            <FlexWrapper justify="space-between">
              <StyledPrimaryText color="#767676" as={"p"}>
                Personal:
              </StyledPrimaryText>
              <StyledSecondaryText color="#767676">
                +58 (021)356 587 235
              </StyledSecondaryText>
            </FlexWrapper>
          </FlexWrapper>
        </FLexSectionsWrapper>
      </FlexWrapper>
    </FLexSectionsWrapper>
  );
};

const StyledInput = styled.input`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.25px;
  color: #2b2b2b;
  width: 521px;
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
