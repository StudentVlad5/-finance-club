import React, { useEffect, useState } from 'react';
import { ModalLogout } from './ModalLogout/ModalLogout';
import {
  LogoutBtn,
  LogoutBtnText,
  LogoutIconStyled,
  Modal,
} from './Logout.styled';
import { useTranslation } from 'react-i18next';

export const Logout = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  return (
    <>
      <LogoutBtn onClick={toggleModal} aria-label="open log out window">
        <LogoutIconStyled />
        <LogoutBtnText>{t("Log Out")}</LogoutBtnText>
      </LogoutBtn>

      {isModalOpen && (
        <Modal setShow={toggleModal}>
          <ModalLogout onClose={toggleModal} onCloseBtn={toggleModal} />
        </Modal>
      )}
    </>
  );
};
