import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';
import { FormTitle, StyledForm } from '../AuthForm.styled';

export const TitleRegister = styled(FormTitle)``;

export const FormRegister = styled(StyledForm)``;

export const BackButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;

  color: ${theme.colors.brown1};
  background: ${theme.colors.green4};
  border: none;
  border-radius: 4px;
  transform: scale(1);

  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: ${theme.transition[0]};

  &:hover,
  &:focus {
    transform: scale(1.05);
    transition: transform 0.5s;
    color: ${theme.colors.white};
    background: ${theme.colors.brown2};
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 180px;
  }
`;
