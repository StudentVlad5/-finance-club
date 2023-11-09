import styled from 'styled-components';
import { Field, Form } from 'formik';
import theme from 'components/baseStyles/Variables.styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding-top: 30px;

  background: rgba(0, 0, 0, 0.2);

  transition: ${theme.transition};
  overflow-y: scroll;

  &.is-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`;

export const Modal = styled.div`
  position: relative;
  display: block;

  width: 90%;
  max-width: calc(100vw - 40px);
  padding: 20px;

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.opacity};
  border-radius: 5px;
  box-shadow: ${theme.colors.opacity} 7px 4px 14px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 600px;
    margin-top: 0;
    padding: 25px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 800px;
    padding: 40px;
  }
`;

export const ModalForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 6px;

  margin: 0 auto;
  padding: 35px 0 12px;
`;

export const FormList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: stretch;
  gap: 15px;
`;

export const FormField = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3px;
`;

export const FormLabel = styled.label`
  font-family: ${theme.fonts[2]};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

export const FormLabelBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  width: 100%;

  font-family: ${theme.fonts[2]};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

export const FormRatio = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  width: 70%;

  font-family: ${theme.fonts[2]};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

export const FormInputBox = styled.div`
  display: flex;
  gap: 8px;
  width: 70%;
`;

export const FormInputBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 70%;

  & input {
    width: calc(100% - 42px);
  }
`;

export const FormInput = styled(Field)`
  width: 70%;
  padding: 5px;
  box-sizing: border-box;

  font-family: ${theme.fonts[2]};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.04em;

  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  border: 1px solid ${theme.colors.braun};
  border-radius: 4px;
  outline: none;
  transition: ${theme.transition};

  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }

  &:hover,
  &:focus {
    outline: 2px solid ${theme.colors.braun};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }

  &:disabled {
    background-color: ${theme.colors.opacity};
    color: ${theme.colors.gray};
  }
`;

export const FormInputFile = styled(Field)`
  all: unset;
  height: 50px;
  width: 50px;

  background-color: ${theme.colors.white};
  border-radius: 4px;
  border: 1px solid ${theme.colors.braun};
  outline: none;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzEiIGhlaWdodD0iNzEiIHZpZXdCb3g9IjAgMCA3MSA3MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM1LjQ5OTkgNTkuMTY2M1YzNS40OTk3TTM1LjQ5OTkgMzUuNDk5N1YxMS44MzNNMzUuNDk5OSAzNS40OTk3SDU5LjE2NjZNMzUuNDk5OSAzNS40OTk3SDExLjgzMzMiIHN0cm9rZT0iIzExMTExMSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+);
  background-size: 24px, 24px;
  background-position: center;
  background-repeat: no-repeat;

  transition: all 500ms ease;

  color: transparent;
  &:hover {
    outline: 3px solid ${theme.colors.braun};
  }
  &:focus {
    outline: none;
  }

  &::file-selector-button {
    display: none;
  }

  &::file-selector-text {
    display: none;
  }
`;

export const FormInputArray = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  border-color: ${theme.colors.black};
  border-radius: 50%;
  backdrop-filter: blur(2px);
  z-index: 50;

  cursor: pointer;
`;

export const DoneBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  color: ${theme.colors.braun};
  background-color: transparent;
  border-color: ${theme.colors.braun};
  border-radius: 50%;
  backdrop-filter: blur(2px);
  z-index: 50;

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.braun};
  }
`;

export const IncrementBtn = styled.button`
  width: 20px;
  height: 26px;
  padding: 0;
  text-align: center;

  font-family: ${theme.fonts[2]};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.04em;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  border: 1px solid ${theme.colors.braun};
  border-radius: 4px;
  outline: none;
  transition: ${theme.transition};

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.braun};
  }
`;

export const AddDetailsBtn = styled.button`
  padding: 5px;
  text-align: start;

  font-family: ${theme.fonts[2]};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.04em;

  background-color: ${theme.colors.white};
  color: ${theme.colors.gray};
  border: 1px solid ${theme.colors.braun};
  border-radius: 4px;
  outline: none;

  transition: ${theme.transition};

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.braun};
  }
`;

export const Error = styled.span`
  position: absolute;
  bottom: -15px;
  right: 0px;
  z-index: 99;

  font-family: ${theme.fonts[2]};
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  text-align: right;
  color: ${theme.colors.braun};
`;
