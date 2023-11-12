import React from 'react';
import PropTypes from 'prop-types';
import { MobileHeader, IconClose } from './MobileMenu.styled';
import { MobileNav } from 'components/Header/Nav/Nav';
import { MobileNavigation } from '../Navigation/Navigation';
import { Logo } from '../Elements/logo/Logo';

export const MobileMenu = ({ toggleMenu }) => {
  return (
    <>
      <MobileHeader>
        <Logo toggleMenu={toggleMenu} />
        <IconClose onClick={toggleMenu} />
      </MobileHeader>
      <MobileNavigation toggleMobileMenu={toggleMenu} />
      <MobileNav toggleMenu={toggleMenu} />
    </>
  );
};

MobileMenu.propTypes = {
  toggleMenu: PropTypes.func,
};
