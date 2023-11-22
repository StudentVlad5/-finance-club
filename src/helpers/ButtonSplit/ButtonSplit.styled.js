import { theme } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';


const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 48px;
  padding: 4px 20px;

  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 700;
  font-size: ${theme.fontSizes.small};
  color: ${props=>props.theme.black};
  text-decoration: none;
  text-transform: uppercase;

  background-color: transparent;
  border: 1px solid ${props=>props.theme.grey};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${props=>props.theme.white_text};
    background-color: ${props=>props.theme.black};
  }
`;

export { Button };
