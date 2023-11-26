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

export const UserComp = () => {
  return (
    <UserSection>
      <UserContainer>
        <Title as="h1" hidden>
          Profile
        </Title>
        <UserDataWrapper>
          <FolderWrapper>
            <LinkFolder
              to={`/user/profile`}
            >
              My account
            </LinkFolder>
            <LinkFolder to={`/user/events`}>
              My events
            </LinkFolder>
            <LinkFolder
              to={`/user/packages`}
            >
              My packages
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
