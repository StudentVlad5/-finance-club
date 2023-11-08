import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';

const FormSection = styled(Section)`
  padding-top: 123px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 129px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-bottom: 110px;
  }
`;

const FormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 68px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 141px;
  }
`;

const FormTitle = styled(Title)`
  margin-bottom: 40px;
  margin-top: 0;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.extraXL};
    font-weight: 500;
    margin-bottom: 32px;
    color: ${theme.colors.brown1};
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
  max-width: 400px;
  padding: 11px 0 12px 14px;

  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${theme.colors.brown2};
  background: ${theme.colors.blue1};

  border: none;
  transition: ${theme.transition[0]};

  &:focus,
  &:hover {
    border-color: ${theme.colors.darkGreen};
    color: ${theme.colors.darkGreen};
    outline: none;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 450px;
    max-width: 450px;
    font-size: ${theme.fontSizes.medium};
    padding: 14px 0 13px 32px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 600px;
    max-width: 600px;
  }

  &::placeholder {
  }

  &:focus ~ .floating-label,
  &:not([value='']):not(:focus):invalid ~ .floating-label,
  &:not([value='']):not(:focus):valid ~ .floating-label {
    top: -15px;
    left: 20px;
    font-size: 11px;
    opacity: 1;
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
  color: ${theme.colors.brown1};

  border: none;
  border-radius: 4px;
  background: ${theme.colors.green3};

  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: ${theme.transition[0]};

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background: ${theme.colors.brown2};
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

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 450px;
    font-size: ${theme.fontSizes.medium};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 600px;
  }
`;

const StyledLink = styled(Link)`
  color: ${theme.colors.brown2};
  transition: ${theme.transition[0]};

  &:hover,
  &:focus {
    color: ${theme.colors.brown3};
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
  color: ${theme.brown2};
`;

export {
  FormSection,
  FormContainer,
  FormTitle,
  StyledForm,
  Input,
  Span,
  ShowPassword,
  IconValid,
  IconInValid,
  Btn,
  StyledLink,
  BoxText,
  ErrorBox,
  BtnContainer,
};
