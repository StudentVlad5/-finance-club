import React from 'react';
import PropTypes from 'prop-types';
// import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';
import { MobileNavList, NavList, NavItem } from './Nav.styled';
import { SwitchTheme } from 'components/ThemeStatus/SwitcherTheme/SwitchTheme';

export const MobileNav = ({ toggleMenu }) => {
  // const { t } = useTranslation();
  return (
    <MobileNavList>
      <NavItem to="/" aria-label="About" data-info="About" onClick={toggleMenu}>
        About
      </NavItem>
      <NavItem
        to="/events"
        aria-label="Events calendar"
        data-info="Events calendar"
        onClick={toggleMenu}
      >
        Events calendar
      </NavItem>
      <NavItem
        to="/join"
        aria-label="How to join"
        data-info="How to join"
        onClick={toggleMenu}
      >
        How to join
      </NavItem>
      <NavItem
        to="/reviews"
        aria-label="Reviews"
        data-info="Reviews"
        onClick={toggleMenu}
      >
        Reviews
      </NavItem>
      <NavItem
        to="/contacts"
        aria-label="Contacts"
        data-info="Contacts"
        onClick={toggleMenu}
      >
        Contacts
      </NavItem>
      <div>
        <Language />
        <SwitchTheme />
      </div>
    </MobileNavList>
  );
};

export const Nav = () => {
  // const { t } = useTranslation();
  return (
    <NavList>
      <NavItem to="/" aria-label="About" data-info="About">
        About
      </NavItem>
      <NavItem
        to="/events"
        aria-label="Events calendar"
        data-info="Events calendar"
      >
        Events calendar
      </NavItem>
      <NavItem to="/join" aria-label="How to join" data-info="How to join">
        How to join
      </NavItem>
      <NavItem to="/reviews" aria-label="Reviews" data-info="Reviews">
        Reviews
      </NavItem>
      <NavItem to="/contacts" aria-label="Contacts" data-info="Contacts">
        Contacts
      </NavItem>
      <div>
        <Language />
        <SwitchTheme />
      </div>
    </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
