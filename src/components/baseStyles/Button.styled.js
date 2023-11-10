import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';

export const BtnLight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 125px;
  padding: 13px 23px;
  margin: 0 auto;

  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${props => props.theme.black};
  text-transform: uppercase;

  background-color: ${props => props.theme.white_fon};
  border-radius: 80px;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
    padding: 23px 33px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.white_text};
    background-color: ${props => props.theme.grey};
  }
`;

export const BtnGrey = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 17px 27px;
  margin: 0 auto;
  width: 100%;

  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.6px;
  color: ${props => props.theme.white_text};
  text-transform: uppercase;
  letter-spacing: 1.6px;

  background-color: ${props => props.theme.grey};
  border-radius: 80px;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
    padding: 27px 32px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.white_text};
    background-color: ${props => props.theme.black};
  }
`;
