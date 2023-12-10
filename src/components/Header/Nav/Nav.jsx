import React from 'react';
import PropTypes from 'prop-types';
// import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';
import { MobileNavList, NavList, NavItem } from './Nav.styled';
import { SwitchTheme } from 'components/ThemeStatus/SwitcherTheme/SwitchTheme';
import { useTranslation } from 'react-i18next';

export const MobileNav = ({ toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <MobileNavList>
        <li>
            <NavItem to="/" aria-label="More information about us" data-info="About" onClick={toggleMenu}>
           {t("About")}
            </NavItem>
        </li>
        <li>
            <NavItem
              to="/events"
              aria-label="Events calendar"
              data-info="Events calendar"
              onClick={toggleMenu}
            >
              {t("Events calendar")}
            </NavItem>
        </li>
        <li>
            <NavItem
              to="/join"
              aria-label="How to join"
              data-info="How to join"
              onClick={toggleMenu}
            >
              {t("How to join")}
            </NavItem>
        </li><li>
            <NavItem
              to="/reviews"
              aria-label="Reviews"
              data-info="Reviews"
              onClick={toggleMenu}
            >
              {t("Reviews")}
            </NavItem>
        </li><li>
            <NavItem
              to="/contacts"
              aria-label="Contacts"
              data-info="Contacts"
              onClick={toggleMenu}
            >
              {t("Contacts")}
            </NavItem>
        </li>
      <li style={{ display: 'flex' }}>
        <Language />
        <SwitchTheme />
      </li>
    </MobileNavList>
  );
};

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <NavList>
        <li>
          <NavItem to="/" aria-label="More information about us" data-info="About">
            {t("About")}
          </NavItem>
        </li><li> 
          <NavItem
            to="/events"
            aria-label="Events calendar"
            data-info="Events calendar"
          >
            {t("Events calendar")}
          </NavItem>
        </li><li> 
          <NavItem to="/join" aria-label="How to join" data-info="How to join">
            {t("How to join")}
          </NavItem>
        </li><li> 
          <NavItem to="/reviews" aria-label="Reviews" data-info="Reviews">
            {t("Reviews")}
          </NavItem>
        </li><li>
          <NavItem to="/contacts" aria-label="Contacts" data-info="Contacts">
            {t("Contacts")}
          </NavItem>
        </li> 

      <li style={{ display: 'flex' }}>
        <Language />
        <SwitchTheme />
      </li>
    </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
