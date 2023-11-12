import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LogoContainer, IconLogo } from './Logo.styled';

export const Logo = ({ toggleMenu }) => {
  // const { t } = useTranslation();
  return (
    <LogoContainer onClick={toggleMenu}>
      <Link to="/">
      <IconLogo />
      </Link>
    </LogoContainer>
  );
};

Logo.propTypes = {
  toggleMenu: PropTypes.func,
};