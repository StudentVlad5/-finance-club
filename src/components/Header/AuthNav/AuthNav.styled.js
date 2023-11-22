
import { theme } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

const MobileContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 46px;
  transition: ${theme.transition[0]};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 0px;
    display: none;
  }
  :hover,
  :focus {
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
  }
`;
const Container = styled(MobileContainer)`
  display: none;
  transition: ${theme.transition[0]};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    gap: 24px;
  }
  :hover,
  :focus {
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
    text-shadow: 2px 4px 2px rgba(0, 0, 0, 0.4);
  }
`;

export { MobileContainer, Container };
