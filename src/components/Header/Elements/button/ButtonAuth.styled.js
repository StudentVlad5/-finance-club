import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'components/baseStyles/Variables.styled';


const AuthLink = styled(NavLink)`
 cursor: pointer;
  font-family: ${theme.fonts[1]};
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;
  text-decoration: none;
  white-space: nowrap;
  color: ${(props) => props.theme.black};
  transition: ${theme.transition[0]};
  background-color: ${(props) => props.theme.white_text};
  padding: 11px 52px;
  border-radius: 8px;

  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${(props) => props.theme.grey};
    border-radius: 8px;
    transition: width 0.3s ease-in-out;
  }
  &:hover:before {
    width: 100%;
    left: 0;

  }

  &:focus,
  &:hover {
    color: #fff;
  }
  &.active {
    background-color: ${(props) => props.theme.grey};;
  }


  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export { AuthLink };
