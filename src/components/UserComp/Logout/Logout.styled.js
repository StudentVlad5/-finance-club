import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { ReactComponent as LogoutIcon } from 'images/svg/logout.svg';

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  /* width: 110px; */
  padding: 12px 24px;

  color: ${props => props.theme.black};
  background-color: ${props => props.theme.white_fon};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: ${theme.transition[1]};

  @media (min-width: ${theme.breakpoints.desktop}) {
    /* width: 150px; */
    padding: 12px 36px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    /* width: 285px; */
    padding: 12px 48px;
  }

  &:hover,
  &:focus,
  &:hover > span,
  &:focus > span,
  &:hover > svg,
  &:focus > svg {
    color: ${props => props.theme.white_text};
    background-color: ${props => props.theme.grey};

    fill: ${props => props.theme.white_text};
    stroke: ${props => props.theme.white_text};
    transition: ${theme.transition[1]};
  }
`;

export const LogoutIconStyled = styled(LogoutIcon)`
  width: 10px;
  height: 10px;
  fill: ${props => props.theme.black_text};
  stroke: ${props => props.theme.black_text};
  transition: ${theme.transition[1]};

  &:hover,
  :focus {
    fill: ${props => props.theme.white_text};
    stroke: ${props => props.theme.white_text};
  }
`;

export const LogoutBtnText = styled.span`
  text-decoration: none;
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  color: ${props => props.theme.black_text};

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(17, 17, 17, 0.6);
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;
