import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as iconUser } from 'images/svg/icon_user.svg';
import { theme } from 'components/baseStyles/Variables.styled';


const MobileAccountButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 46px auto 0 auto;
  /* padding: 8px 36px; */

  height: 35px;
  border-radius: 40px;
  text-decoration: none;
  color: ${(props) => props.theme.black};

  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-size: ${theme.fontSizes.small};
  line-height: normal;
  /* letter-spacing: -0.04em; */

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
    margin: 0 auto;
  }
`;

const AccountButton = styled(MobileAccountButton)`
  display: none;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* padding: 8px 28px; */
    display: flex;
    height: 44px;
    font-size: 20px;
    line-height: normal;
  }
`;

const IconUser = styled(iconUser)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  display: block;
  fill: ${(props) => props.theme.black};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 28px;
    height: 28px;
  }
`;

const AvatarUser = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  display: block;
  fill: ${(props) => props.theme.black};
  border-radius: 50%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 28px;
    height: 28px;
  }
`;
export { MobileAccountButton, AccountButton, IconUser, AvatarUser };
