import { theme } from 'components/baseStyles/Variables.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  margin-top: 60px;

  font-family: ${theme.fonts[1]};
  font-size: 24px;
  text-decoration: none;
  white-space: nowrap;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    /* gap: 60px; */
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const NavList = styled(MobileNavList)`
  display: none;
  white-space: nowrap;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 24px;
    margin: 0px;
    /* width: 100%; */
  }
`;

const NavItem = styled(NavLink)`
  cursor: pointer;
  font-family: ${theme.fonts[1]};
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;
  text-decoration: none;
  white-space: nowrap;
  color: ${props => props.theme.white_text};
  transition: ${theme.transition};

  position: relative;
  display: block;
  padding: 4px 0;

  &::after {
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${props => props.theme.white_text};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &.active::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
export { MobileNavList, NavList, NavItem };
