import PropTypes from 'prop-types';
import React from 'react';
import { ButtonAuth } from '../Elements/button/ButtonAuth';
import { MobileContainer, Container } from './AuthNav.styled';
// import { useTranslation } from 'react-i18next';

export const MobileAuthNav = ({ toggleMenu }) => {
  // const { t } = useTranslation();
  return (
    <MobileContainer>
      <ButtonAuth title='Log in' path="/login" onClick={toggleMenu} />
    </MobileContainer>
  );
};

export const AuthNav = ({ toggleMenu }) => {
  // const { t } = useTranslation();

  return (
    <Container>
      <ButtonAuth title='Log in' path="/login" onClick={toggleMenu} />
    </Container>
  );
};

MobileAuthNav.propTypes = {
  toggleMenu: PropTypes.func,
};

AuthNav.propTypes = {
  toggleMenu: PropTypes.func,
};
