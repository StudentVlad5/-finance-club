import React from 'react';
import PropTypes from 'prop-types';
import { MobileHeader, IconClose } from './MobileMenu.styled';
import { MobileNav } from 'components/Header/Nav/Nav';
import { MobileNavigation } from '../Navigation/Navigation';
import { Logo } from '../Elements/logo/Logo';
import { MobileUserNav } from '../UserNav/UserNav';
import { MobileAuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const MobileMenu = ({ toggleMenu }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <MobileHeader>
        <Logo toggleMenu={toggleMenu} />
        <IconClose onClick={toggleMenu} />
      </MobileHeader>
      {isLoggedIn ? (
        <MobileUserNav toggleMenu={toggleMenu} />
      ) : (
        <MobileAuthNav toggleMenu={toggleMenu} />
      )}
      <MobileNavigation toggleMobileMenu={toggleMenu} />
      <MobileNav toggleMenu={toggleMenu} />
    </>
  );
};

MobileMenu.propTypes = {
  toggleMenu: PropTypes.func,
};
