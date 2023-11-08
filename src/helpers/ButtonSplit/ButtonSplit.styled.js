import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

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
  color: ${theme.colors.green};
  text-decoration: none;
  text-transform: uppercase;

  background-color: transparent;
  border: 1px solid ${theme.colors.green};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${theme.colors.green};
    background-color: ${theme.colors.white};
  }
`;

export { Button };
