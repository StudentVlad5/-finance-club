import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  ModalWrapper,
  CloseBtnWrapper,
  ModalCloseBtn,
  CloseIcon,
  ModalDescription,
  ModalButtonWrapper,
  ModalButton,
} from './ModalLogout.styled';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const ModalLogout = ({ onClose, onCloseBtn }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleDelete = () => {
    dispatch(logOut());
    onClose();
  };

  return (
    <ModalWrapper>
      <CloseBtnWrapper>
        <ModalCloseBtn
          type="button"
          onClick={onCloseBtn}
          aria-label="swich to close modal window"
        >
          <CloseIcon />
        </ModalCloseBtn>
      </CloseBtnWrapper>
      <ModalDescription>{t('Are you sure you want to exit?')}</ModalDescription>
      <ModalButtonWrapper>
        <ModalButton
          type="button"
          onClick={handleDelete}
          aria-label="submit log out"
        >
          {t('Yes')}
        </ModalButton>
        <ModalButton
          type="button"
          onClick={onCloseBtn}
          style={{
            marginLeft: '20px',
          }}
          aria-label="not log out"
        >
          {t('No')}
        </ModalButton>
      </ModalButtonWrapper>
    </ModalWrapper>
  );
};

ModalLogout.propTypes = {
  onClose: PropTypes.func,
  onCloseBtn: PropTypes.func,
};
