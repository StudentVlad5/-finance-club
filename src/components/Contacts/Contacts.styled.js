import { theme } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';
import { ReactComponent as pin } from 'images/contacts/pin.svg';
import { ReactComponent as email } from 'images/contacts/email.svg';
import { ReactComponent as phone } from 'images/contacts/phone.svg';
import { MapContainer } from 'react-leaflet';

export const ContactsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* display: flex;
    justify-content: space-between; */
  }
`;

export const ContactsTitle = styled.p`
  color: ${props => props.theme.black_text};
  font-family: ${theme.fonts[0]};
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 30.998px;
  letter-spacing: 0.22px;
  margin-top: 35px;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 50px;
  }
`;

export const ContactsList = styled.ul`
  margin-top: 20px;
  /* margin-right: 20px; */

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 15px;
  }
`;

export const ContactsListItemText = styled.p`
  color: ${props => props.theme.black_text};
  font-family: ${theme.fonts[0]};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.998px;
  margin-left: 15px;
`;

export const ContactsListItemLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.black_text};
  font-family: ${theme.fonts[0]};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.998px;
  margin-left: 15px;
`;

export const ContactsListIconPin = styled(pin)``;

export const ContactsListIconEmail = styled(email)``;

export const ContactsListIconPhone = styled(phone)``;

export const MyContainerMap = styled(MapContainer)`
  height: 403px;
  width: 100%;
  margin-top: 40px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    height: 403px;
    width: 707px;
  }

  @media screen and (min-width: 1025px) {
    margin-top: 0;
  }
`;
// export const ContactsListItemText = styled.ul``
