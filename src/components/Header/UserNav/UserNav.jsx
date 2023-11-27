import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getPermission, selectUserName } from 'redux/auth/selectors';
import {
  MobileAccountButton,
  AccountButton,
  IconUser,
  // AvatarUser,
} from './UserNav.styled';


export const MobileUserNav = ({ toggleMenu }) => {
  const user = useSelector(selectUserName);
  const permission = useSelector(getPermission);
  

  // const userAvatar = useSelector(getUserAvatar);
  // let avatar;
  // if (userAvatar !== '' && userAvatar !== undefined) {
  //   avatar =
  //     BASE_URL_IMG +
  //     'avatars/' +
  //     userAvatar.split('/')[userAvatar.split('/').length - 1];
  // }

  return (
    <MobileAccountButton to={permission === "admin" ? "/admin" : "/user"} onClick={toggleMenu}>
      {/* {avatar ? <AvatarUser src={avatar} alt="User" /> : <IconUser />} */}
      <IconUser />
      {user}
    </MobileAccountButton>
  );
};

export const UserNav = () => {
  const user = useSelector(selectUserName);
  const permission = useSelector(getPermission);
  // const userAvatar = useSelector(getUserAvatar);
  // let avatar;
  // if (userAvatar !== '' && userAvatar !== undefined) {
  //   avatar =
  //     BASE_URL_IMG +
  //     'avatars/' +
  //     userAvatar.split('/')[userAvatar.split('/').length - 1];
  // }

  return (
    <AccountButton to={permission === "admin" ? "/admin" : "/user"}>
      {/* {avatar ? <AvatarUser src={avatar} alt="User" /> : <IconUser />} */}
      <IconUser />
      {user}
    </AccountButton>
  );
};

MobileUserNav.propTypes = {
  toggleMenu: PropTypes.func,
};
