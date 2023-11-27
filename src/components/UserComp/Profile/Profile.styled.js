import styled from "styled-components";
import { theme } from "components/baseStyles/Variables.styled";
import { Field, Form } from "formik";

const ProfileList = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 24px;
  }
`;

const ProfileLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileName = styled.span`
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.8%;
  color: ${(props) => props.theme.white_text};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;

const ProfileInput = styled(Field)`
  width: 100%;
  padding: 8px 30px 8px 20px;

  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  color: ${theme.colors.green};

  border: 1px solid #c6cdd3;
  border-color: transparent;
  border-radius: 10px;
  background: ${theme.colors.blue3};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* width: 580px; */
    padding: 12px 30px 12px 20px;
    font-size: 16px;
  }

  &:focus-visible {
    border: 0.5px solid ${theme.colors.green};
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.green};
    font-family: ${theme.fonts[1]};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 14px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 16px;
    }
  }
`;

const Error = styled.span`
  position: absolute;
  bottom: -20px;
  right: 0;
  z-index: 2;

  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  text-align: right;
  color: ${theme.colors.red};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }
`;

const ProfileBtn = styled.button`
  position: absolute;
  bottom: 1px;
  right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50%;
  background-color: transparent;

  cursor: pointer;
  transform: ${theme.transition[1]};
  transition: ${theme.transition[0]};

  &:hover,
  &:focus {
    background-color: ${theme.colors.fon};
  }
  &:disabled {
    svg {
      fill: ${theme.colors.grey1};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 32px;
    height: 32px;
    margin-left: 24px;
  }
`;

export {
  ProfileList,
  ProfileLabel,
  ProfileName,
  ProfileInput,
  ProfileBtn,
  Error,
};
