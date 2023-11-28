import React from 'react';
import { Logout } from 'components/UserComp/Logout/Logout';
import { Outlet } from 'react-router-dom';
import {
  UserSection,
  UserContainer,
  UserAboutWrapper,
  UserDataWrapper,
  FolderWrapper,
  LinkFolder,
} from './UserComp.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import { useTranslation } from 'react-i18next';

export const UserComp = () => {
  const { t } = useTranslation();
  
  return (
    <UserSection>
      <UserContainer>
        <Title as="h1" hidden>
          {t("Profile")}
        </Title>
        <UserDataWrapper>
          <FolderWrapper>
            <LinkFolder
              to={`/user/profile`}
            >
              {t("My account")}
            </LinkFolder>
            <LinkFolder to={`/user/events`}>
              {t("My events")}
            </LinkFolder>
            <LinkFolder
              to={`/user/packages`}
            >
              {t("My packages")}
            </LinkFolder>
            <Logout />
          </FolderWrapper>
          <UserAboutWrapper>
            <Outlet />
          </UserAboutWrapper>
        </UserDataWrapper>
      </UserContainer>
    </UserSection>
  );
};
