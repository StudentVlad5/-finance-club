import styled from 'styled-components';
import {MdMenu} from "react-icons/md"
import { theme } from 'components/baseStyles/Variables.styled';

const Burger = styled(MdMenu)`
  /* margin-left: 20px; */
  width: 25px;
  height: 20px;
  flex-shrink: 0;
  cursor: pointer;
  fill: ${(props) => props.theme.white_text};
  color: ${(props) => props.theme.white_text};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const MobileMenuSection = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  transform: translateX(100%);
  transition: transform 250ms ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.black};
  overflow: hidden;

  &.is-expanded {
    transform: translateX(0);
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export { Burger, MobileMenuSection };
