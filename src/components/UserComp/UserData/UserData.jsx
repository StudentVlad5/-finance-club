import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/auth/operations';
import { selectId, getUserAvatar, getUser } from 'redux/auth/selectors';

import {
  EditCameraForm,
  EditPhotoInput,
  EditPhotoLabel,
  ProfileContainer,
  ProfileSpanName,
  ProfileSpanValues,
  UserDataContainer,
  UserDataImg,
  UserDataImgWrapper,
  UserDataSection,
  PensilStyle,
  TitleArticle,
  IconBtn,
  IconBtnWhite,
} from './UserData.styled';

import NotFoundImg from 'images/No-image-available.webp';
import { BASE_URL_IMG } from 'helpers/constants';

import { Profile } from '../Profile/Profile';
import { ChangePassword } from '../ChangePassword/ChangePassword';
import { useTranslation } from 'react-i18next';


export const UserData = () => {
  const { t } = useTranslation();

  const [editProfileSettings, setEditProfileSettings] = useState(false);
  const dispatch = useDispatch();

  let userIn = useSelector(getUser);
  const id = useSelector(selectId);
  const userAvatar = useSelector(getUserAvatar);
  let avatar = NotFoundImg;
  if (userAvatar !== '' && userAvatar !== undefined) {
    avatar =
      BASE_URL_IMG +
      'avatars/' +
      userAvatar.split('/')[userAvatar.split('/').length - 1];
  }

  const changeAvatar = e => {
    const data = {};
    data['avatar'] = e.target.files[0];
    data['id'] = id;
    dispatch(update(data));
  };

  const birthday = userIn.birthday
    ? new Date(userIn.birthday).toLocaleDateString()
    : '';

  return (
    <UserDataSection>
      <UserDataContainer>
        {!editProfileSettings && (
          <>
            <UserDataImgWrapper>
              <UserDataImg alt="User" src={avatar} />
              <EditCameraForm>
                <EditPhotoLabel htmlFor="user_photo">
                <IconBtnWhite>
                  <PensilStyle />
                </IconBtnWhite>
                </EditPhotoLabel>
                <EditPhotoInput
                  type="file"
                  name="edit photo"
                  id="user_photo"
                  onChange={changeAvatar}
                  accept=".gif,.jpg,.jpeg,.webp,.png"
                />
              </EditCameraForm>
            </UserDataImgWrapper>
            <ProfileContainer>
              <IconBtn onClick={() => setEditProfileSettings(true)}>
                <PensilStyle />
              </IconBtn>
              <ProfileSpanName>
                {userIn.name} {userIn.surname}
              </ProfileSpanName>
              <ProfileSpanValues>{userIn.company}</ProfileSpanValues>
              <ProfileSpanValues>{userIn.position}</ProfileSpanValues>
              <ProfileSpanValues>{userIn.email}</ProfileSpanValues>
              <ProfileSpanValues>{userIn.phone}</ProfileSpanValues>
              <ProfileSpanValues>{birthday}</ProfileSpanValues>
            </ProfileContainer>
          </>
        )}
        {editProfileSettings && <Profile onClose={setEditProfileSettings} />}
      </UserDataContainer>
      <UserDataContainer>
        <TitleArticle>{t("Change Password")}</TitleArticle>
        <ChangePassword />
      </UserDataContainer>
    </UserDataSection>
  );
};
