import styled from "styled-components";
import { theme } from "components/baseStyles/Variables.styled";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 80px;
  background: ${(props) => props.theme.white_text};
  color: ${(props) => props.theme.black};
  text-align: center;
  font-family: ${theme.fonts[1]};
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.white_text};
    background: ${(props) => props.theme.grey};
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
    width: 210px;
    height: 70px;
  }
`;

export { Button };
