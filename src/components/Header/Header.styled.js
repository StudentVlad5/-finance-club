import styled from "styled-components";
import { Container } from "components/baseStyles/CommonStyle.styled";
import { theme } from "components/baseStyles/Variables.styled";

const HeaderSectionWrap = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 20;
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) =>
    props.$props === "true" ? props.theme.black : "transparent"};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 30px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 30px 0px;
  }
`;

export { HeaderContainer, HeaderSectionWrap };
