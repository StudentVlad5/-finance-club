import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getPermission } from 'redux/auth/selectors';
import { Logout } from 'components/UserComp/Logout/Logout';
import {
  UserSection,
  UserContainer,
  UserAboutWrapper,
  UserDataWrapper,
  FolderWrapper,
  LinkFolder,
} from './UserComp.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';

export const UserComp = () => {
  const { t } = useTranslation();
  const permission = useSelector(getPermission);

  return (
    <UserSection>
      <UserContainer>
        <Title as="h1" hidden>
          {t('Profile')}
        </Title>
        {permission === 'admin' ? (
          <UserDataWrapper>
            <FolderWrapper>
              <LinkFolder to={`/admin/profile`}>{t('My account')}</LinkFolder>
              <Logout />
            </FolderWrapper>
            <UserAboutWrapper>
              <Outlet />
            </UserAboutWrapper>
          </UserDataWrapper>
        ) : (
          <UserDataWrapper>
            <FolderWrapper>
              <LinkFolder to={`/user/profile`}>{t('My account')}</LinkFolder>
              <LinkFolder to={`/user/events`}>{t('My events')}</LinkFolder>
              <LinkFolder to={`/user/packages`}>{t('My packages')}</LinkFolder>
              <Logout />
            </FolderWrapper>
            <UserAboutWrapper>
              <Outlet />
            </UserAboutWrapper>
          </UserDataWrapper>
        )}
      </UserContainer>
    </UserSection>
  );
};
