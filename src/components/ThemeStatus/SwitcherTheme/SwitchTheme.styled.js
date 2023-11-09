import styled, { keyframes } from 'styled-components';

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

const BtnChangeTheme = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 110px;
  height: auto;

  background-color: transparent;
  animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    left: 135px;
  }
`;

export { BtnChangeTheme, SwitcherWrapper };
