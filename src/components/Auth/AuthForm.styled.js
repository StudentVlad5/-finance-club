import styled from "styled-components";
import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import {
  Container,
  Section,
  Title,
} from "components/baseStyles/CommonStyle.styled";
import { theme } from "components/baseStyles/Variables.styled";
import { Button } from "helpers/ButtonSplit/ButtonSplit.styled";

const FormSection = styled(Section)`
  padding: 0;
  background-color: ${(props) => props.theme.black};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

const FormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 120px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

const FormTitle = styled(Title)`
  margin-bottom: 40px;
  margin-top: 0;
  color: ${(props) => props.theme.white_text};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.extraXL};
    font-weight: 500;
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.extraXL};
    font-weight: 500;
    margin-bottom: 48px;
  }
`;

const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin: 0 auto;
    background-color: transparent;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 40px;
  }
  & > div {
    position: relative;
  }
`;

const Input = styled(Field)`
  width: calc(100vw - 60px);
  max-width: 365px;
  padding: 11px 0 12px 14px;
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border-radius: 14px;
  color: ${(props) => props.theme.black};
  background: ${(props) => props.theme.white_fon};

  border: none;
  transition: ${theme.transition[0]};

  &:focus,
  &:hover {
    border-color: ${(props) => props.theme.grey};
    color: ${(props) => props.theme.grey};
    outline: none;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.medium};
    padding: 14px 0 13px 32px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 22px 25px;
  }

  &::placeholder {
  }
`;

const Btn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
  color: ${(props) => props.theme.black};

  border: none;
  border-radius: 4px;
  background: ${(props) => props.theme.white_fon};

  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: ${theme.transition[0]};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.white_text};
    background: ${(props) => props.theme.black};
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;

const ErrorBox = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: -5px;
  left: 15px;
  margin-bottom: -16px;
  color: #e53e3e;

  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.03em;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    left: 32px;
  }
`;
const StyledLink = styled(Link)`
  color: ${(props) => props.theme.white_text};
  transition: ${theme.transition[0]};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.grey};
  }
`;

const BoxText = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;

  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.black};
`;

const Label = styled.label`
  color: ${(props) => props.theme.white_text};
  font-family: ${theme.fonts[0]};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 80%;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`;

const Span = styled.span`
  position: absolute;
  left: 20px;
  top: 13px;

  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  text-transform: uppercase;
  pointer-events: none;

  transition: ${theme.transition[0]};
`;

const IconValid = styled(FaCheck)`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

const IconInValid = styled(FaTimes)`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;

  & svg {
    width: inherit;
    height: inherit;
  }
`;
const ShowPassword = styled.span`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;

  cursor: pointer;

  & svg {
    width: inherit;
    height: inherit;
  }
`;
export {
  FormSection,
  FormContainer,
  FormTitle,
  StyledForm,
  Input,
  Label,
  Btn,
  StyledLink,
  BoxText,
  ErrorBox,
  IconInValid,
  IconValid,
  Span,
  ShowPassword
};
