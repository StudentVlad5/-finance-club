import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/selectors';
import {
  MobileAccountButton,
  AccountButton,
  IconUser,
  // AvatarUser,
} from './UserNav.styled';


export const MobileUserNav = ({ toggleMenu }) => {
  const user = useSelector(getUser);
  // const userAvatar = useSelector(getUserAvatar);
  // let avatar;
  // if (userAvatar !== '' && userAvatar !== undefined) {
  //   avatar =
  //     BASE_URL_IMG +
  //     'avatars/' +
  //     userAvatar.split('/')[userAvatar.split('/').length - 1];
  // }

  return (
    <MobileAccountButton to="/user/profile" onClick={toggleMenu}>
      {/* {avatar ? <AvatarUser src={avatar} alt="User" /> : <IconUser />} */}
      <IconUser />
      {user}
    </MobileAccountButton>
  );
};

export const UserNav = () => {
  const user = useSelector(getUser);
  // const userAvatar = useSelector(getUserAvatar);
  // let avatar;
  // if (userAvatar !== '' && userAvatar !== undefined) {
  //   avatar =
  //     BASE_URL_IMG +
  //     'avatars/' +
  //     userAvatar.split('/')[userAvatar.split('/').length - 1];
  // }

  return (
    <AccountButton to="/user/profile">
      {/* {avatar ? <AvatarUser src={avatar} alt="User" /> : <IconUser />} */}
      <IconUser />
      {user}
    </AccountButton>
  );
};

MobileUserNav.propTypes = {
  toggleMenu: PropTypes.func,
};
