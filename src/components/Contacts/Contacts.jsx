import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import {
  ContactsBox,
  ContactsList,
  ContactsListIconEmail,
  ContactsListIconPhone,
  ContactsListIconPin,
  ContactsListItem,
  ContactsListItemLink,
  ContactsListItemText,
  ContactsTitle,
  MyContainerMap,
} from './Contacts.styled';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';

export const Contacts = () => {
  const { t } = useTranslation();

  const position = [40.712776, -74.005974];

  return (
    <Section>
      <Container>
        <Title>{t('Contacts')}</Title>

        <ContactsTitle>{t('Want to reach us directly?')}</ContactsTitle>

        <ContactsBox>
          <ContactsList>
            <ContactsListItem>
              <ContactsListIconPin />
              <ContactsListItemText>
                {t("Street 1A, New York, USA")}
              </ContactsListItemText>
            </ContactsListItem>

            <ContactsListItem>
              <ContactsListIconEmail />
              <ContactsListItemLink href="mailto:test@gmail.com">
                test@gmail.com
              </ContactsListItemLink>
            </ContactsListItem>

            <ContactsListItem>
              <ContactsListIconPhone />
              <ContactsListItemLink href="tel:+1234567890">
                +1234567890
              </ContactsListItemLink>
            </ContactsListItem>
          </ContactsList>

          <MyContainerMap center={position} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>New York, Street 1A, USA</Popup>
            </Marker>
          </MyContainerMap>
        </ContactsBox>
      </Container>
    </Section>
  );
};
