import styled from 'styled-components';
import { Field, Form } from 'formik';
import { theme } from 'components/baseStyles/Variables.styled';
import { CloseBtn } from 'components/baseStyles/Modal.styled';

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
  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.white_text};
`;

export const FormLabelBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  width: 100%;

  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.white_text};

  & label {
    display: flex;
    align-items: center;
  }
`;

export const FormRatio = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  width: 70%;

  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.white_text};
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

  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.black_text};

  background-color: ${props => props.theme.white_fon};
  border: 1px solid ${props => props.theme.white_fon};
  border-radius: 4px;
  outline: none;
  transition: ${theme.transition};

  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }

  &:hover,
  &:focus {
    outline: 2px solid ${props => props.theme.black_text};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }

  &:disabled {
    background-color: ${props => props.theme.greyOpacity};
    color: ${props => props.theme.grey};
  }

  &[type='checkbox'] {
    width: 30px;

    &:hover,
    &:focus {
      outline: none;
    }

    & ~ span {
      font-family: ${theme.fonts[0]};
      font-size: 12px;
      font-weight: 400;
      line-height: 1.33;
      letter-spacing: 0.04em;
      color: ${props => props.theme.black_text};
    }
  }
`;

export const FormInputFile = styled(Field)`
  all: unset;
  height: 50px;
  width: 50px;

  background-color: ${props => props.theme.white_fon};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.white_fon};
  outline: none;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzEiIGhlaWdodD0iNzEiIHZpZXdCb3g9IjAgMCA3MSA3MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM1LjQ5OTkgNTkuMTY2M1YzNS40OTk3TTM1LjQ5OTkgMzUuNDk5N1YxMS44MzNNMzUuNDk5OSAzNS40OTk3SDU5LjE2NjZNMzUuNDk5OSAzNS40OTk3SDExLjgzMzMiIHN0cm9rZT0iIzExMTExMSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+);
  background-size: 24px, 24px;
  background-position: center;
  background-repeat: no-repeat;

  transition: all 500ms ease;

  color: transparent;
  &:hover {
    outline: 3px solid ${props => props.theme.black_text};
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

export const DoneBtn = styled(CloseBtn)`
  right: 45px;
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
  color: ${props => props.theme.white_text};

  background-color: ${props => props.theme.white_fon};
  border: 1px solid ${props => props.theme.white_fon};
  border-radius: 4px;
  outline: none;
  transition: ${theme.transition};

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${props => props.theme.white_fon};
    background-color: ${props => props.theme.white_fon};
  }
`;

export const AddDetailsBtn = styled.button`
  padding: 5px;
  text-align: start;

  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.black_text};

  background-color: ${props => props.theme.white_fon};
  border: 1px solid ${props => props.theme.white_fon};
  border-radius: 4px;
  outline: none;

  transition: ${theme.transition};

  cursor: pointer;

  &:hover,
  &:focus {
    color: ${props => props.theme.white_fon};
    background-color: ${props => props.theme.white_fon};
  }
`;

export const Error = styled.span`
  position: absolute;
  bottom: -15px;
  right: 0px;
  z-index: 99;

  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  text-align: right;
  color: ${props => props.theme.black_text};
`;
