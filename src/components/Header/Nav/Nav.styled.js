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
  &:focus,
  &:hover {
    color: ${props => props.theme.grey};
    /* transform: ${theme.scale}; */
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
  }
  &.active {
    color: ${props => props.theme.grey};
    /* transform: ${theme.scale}; */
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
    font-weight: 700;
  }
`;
export { MobileNavList, NavList, NavItem };
