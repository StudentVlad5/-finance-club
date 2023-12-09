import styled, { keyframes } from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { ReactComponent as Icon_Logo } from 'images/header/logo.svg';

const fadeInLeftAnimation = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* width: 100%; */
  max-width: 230px;
  animation: ${fadeInLeftAnimation} 0.6s ease-in both;


  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 320px;
  }
`;

const IconLogo = styled(Icon_Logo)`
  width: 100%;
  height: auto;
  transform: scale(0.5);

`;

export { LogoContainer, IconLogo };
