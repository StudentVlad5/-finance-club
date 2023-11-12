import { theme } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

const Container = styled.div`
  display: none;


  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    /* margin-left: 94px; */
  }
`;

const NavBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    gap: 24px;
  }
`;

const MobileContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    margin-left: 0px;
  }
`;
const MobileNavBlock = styled(NavBlock)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export {
  Container,
  NavBlock,
  MobileContainer,
  MobileNavBlock,
};
