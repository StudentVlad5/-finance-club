import { Logo } from 'components/Header/Elements/logo/Logo';
import {
  FooterSection,
  FooterContainer,
  FooterList,
  FooterListItem,
  FooterItemContainer,
  TitleMenu,
  LinkItem,
  LinkEmail,
  Span,
  FooterBottomContainer,
  SpanBottom,
  FooterStyleWrap,
  LinkItemLowercase,
  FooterSvgContainer,
  FooterSvg,
  FooterSvgLi
} from './Footer.styled';

import sprite from 'images/svg/sprite.svg';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterSection>
      <FooterContainer>
        <Logo/>
        <FooterStyleWrap>
          <FooterItemContainer>
              <FooterList>
                <TitleMenu>{t("MENU")}</TitleMenu>
                <FooterListItem><LinkItem to='/' aria-label='About'>{t("Home")}</LinkItem></FooterListItem>
                <FooterListItem><LinkItem to="/join" aria-label='How to join'>{t("How to join")}</LinkItem></FooterListItem>
                <FooterListItem><LinkItem to="/events" aria-label='Events calendar'>{t("Events calendar")}</LinkItem></FooterListItem>
                <FooterListItem><LinkItem to="/reviews" aria-label='Reviews'>{t("Reviews")}</LinkItem></FooterListItem>
                <FooterListItem><LinkItem to="/contacts" aria-label='Contacts'>{t("Contacts")}</LinkItem></FooterListItem>
              </FooterList>
              <FooterList>
                <TitleMenu>{t("Location")}</TitleMenu>
                <FooterListItem>{t("New york, USA")}</FooterListItem>
                <FooterListItem>{t("street 1a")}</FooterListItem>
              </FooterList>
              <FooterList>
                <TitleMenu>{t("Contacts")}</TitleMenu>
                <FooterListItem><LinkEmail href="mailto:test@gmail.com"><Span>test@gmail.com</Span></LinkEmail></FooterListItem>
                <FooterListItem><LinkItem to="tel:1234567890" aria-label='phone'>+1234567890</LinkItem></FooterListItem>
                <FooterSvgContainer>
                  <FooterSvgLi>
                    <FooterSvg width="15" height="15">
                      <use href={sprite + '#facebook'}></use>
                    </FooterSvg>
                  </FooterSvgLi>
                  <FooterSvgLi>
                    <FooterSvg width="15" height="15">
                      <use href={sprite + '#instagram'}></use>
                    </FooterSvg>
                  </FooterSvgLi>
                  <FooterSvgLi>
                    <FooterSvg width="15" height="15">
                      <use href={sprite + '#twitter'}></use>
                    </FooterSvg>
                  </FooterSvgLi>
                </FooterSvgContainer>
              </FooterList>
          </FooterItemContainer>
          <FooterBottomContainer>
            <SpanBottom>© 2023 CFO Club Ukraine</SpanBottom>
            <SpanBottom>{t("Privacy Policy")} | {t("Terms & Conditions")}</SpanBottom>
            <LinkItemLowercase to='https://brand-maze.com/' target="_blank">
              <SpanBottom>{t("Designed and Developed by")} Brand Maze</SpanBottom>
            </LinkItemLowercase>
          </FooterBottomContainer>
        </FooterStyleWrap>
      </FooterContainer>
    </FooterSection>
  );
};