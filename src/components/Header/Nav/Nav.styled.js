import { theme } from "components/baseStyles/Variables.styled";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeInTopAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 20px;
  margin-top: 30px;
  font-family: ${theme.fonts[1]};
  font-size: 24px;
  text-decoration: none;
  white-space: nowrap;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 40px;
    margin-top: 60px;
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
  color: ${(props) => props.theme.white_text};
  transition: ${theme.transition};

  position: relative;
  display: block;
  padding: 4px 0;

  &:nth-child(1) {
    animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
  }
  &:nth-child(2) {
    animation: ${fadeInTopAnimation} 0.8s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
  }
  &:nth-child(3) {
    animation: ${fadeInTopAnimation} 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  &:nth-child(4) {
    animation: ${fadeInTopAnimation} 1.2s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
  }
  &:nth-child(5) {
    animation: ${fadeInTopAnimation} 1.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
  }

  &::after {
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${(props) => props.theme.white_text};
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
