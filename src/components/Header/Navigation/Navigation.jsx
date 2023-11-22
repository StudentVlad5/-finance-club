import React from 'react';
import { Nav } from 'components/Header/Nav/Nav';
import PropTypes from 'prop-types';

import {
  Container,
  NavBlock,
  MobileContainer,
  MobileNavBlock,
} from './Navigation.styled';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Nav />
      <NavBlock/>
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </Container>
  );
};

export const MobileNavigation = ({ toggleMobileMenu }) => {
  return (
    <MobileContainer>
      <Nav />
      <MobileNavBlock/>
    </MobileContainer>
  );
};

MobileNavigation.propTypes = {
  toggleMobileMenu: PropTypes.func,
};