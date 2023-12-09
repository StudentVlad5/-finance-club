import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'components/baseStyles/Variables.styled';

const fadeInRightAnimation = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AuthLink = styled(NavLink)`
  cursor: pointer;
  font-family: ${theme.fonts[1]};
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;
  text-decoration: none;
  white-space: nowrap;
  color: ${props => props.theme.white_text};
  transition: ${theme.transition[0]};
  padding: 11px 32px;
  border-radius: 8px;

  position: relative;
  overflow: hidden;
  animation: ${fadeInRightAnimation} 0.6s ease-in both;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${props => props.theme.white_text};
    border-radius: 8px;
    transition: width 0.3s ease-in-out;
    z-index: -1;
  }
  &:hover:before {
    width: 100%;
  }

  &:focus,
  &:hover {
    color: ${props => props.theme.black};
  }

  &.active {
    background-color: ${props => props.theme.white_text};
    color: ${props => props.theme.black};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export { AuthLink };
