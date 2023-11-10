import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';

export const BtnLight = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.grey};
  }
`;
