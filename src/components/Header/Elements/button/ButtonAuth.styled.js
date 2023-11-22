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
  color: ${(props) => props.theme.white_text};
  transition: ${theme.transition[0]};
  &:focus,
  &:hover {
    color:${(props) => props.theme.grey};
    transform: ${theme.scale[0]};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
  }
  &.active {
    color: ${(props) => props.theme.grey};;
    transform: ${theme.scale[0]};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
    font-weight: 700;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export { AuthLink };
