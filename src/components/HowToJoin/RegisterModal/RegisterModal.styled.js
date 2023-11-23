import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { BtnLight } from 'components/baseStyles/Button.styled';
import { Field } from "formik";

export const SBtnLight = styled(BtnLight)`
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 18px 33px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin: 0 auto 0 0;
  }
`;
export const TitlePackage = styled.h2`
  color: ${(props) => props.theme.white_text};
  font-family: ${theme.fonts[0]};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 80%;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`;
export const InputWithStyle = styled(Field)`
  position: relative;
  width: auto;
  font-family: ${theme.fonts[0]};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 80%;
  letter-spacing: 1.6px;
  margin: 5px;
  color: ${(props) => props.theme.fon};
  cursor: pointer;
`;
export const LabelRadioButton = styled.label`
  color: ${(props) => props.theme.white_text};
  font-family: ${theme.fonts[0]};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 80%;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  cursor: pointer;
`;
export const LabelRadioButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  cursor: pointer;
  &.active {
    border-radius: 17px;
    background-color: rgba(255, 255, 255, 0.25);
  }
  &.active .labelRadioButtonCheck {
    border: none;
    background-color: ${(props) => props.theme.grey};
  }
`;
export const LabelRadioButtonCheck = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.white_text};
  margin: 6px;
  cursor: pointer;
`;
export const ContainerRadioButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: start;
    align-items: start;
  }
`;
export const ListRadioButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 18px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 28px;
  }
`;
const ButtonRegistration = styled(BtnLight)`
  &:disabled {
    /* cursor: no-drop; */
  }`;
const BtnContainerRegistration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 26px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;