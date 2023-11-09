import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const GoBack = styled(Link)`
  all: unset;

  display: flex;
  align-items: center;
  gap: 5px;
  font-family: inherit;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  text-decoration: none;
  text-transform: uppercase;
  background-color: transparent;

  cursor: pointer;
  &:hover,
  &:focus {
    color: ${theme.colors.green};
    background-color: ${theme.colors.white};
  }
`;

export { GoBack };
