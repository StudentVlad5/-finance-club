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

export const Footer = () => {
  // const { t } = useTranslation();

  return (
    <FooterSection>
      <FooterContainer>
        <Logo/>
        <FooterStyleWrap>
          <FooterItemContainer>
              <FooterList>
                <TitleMenu>MENU</TitleMenu>
                <FooterListItem><LinkItem to='/' aria-label='About'>Home</LinkItem></FooterListItem>
                <FooterListItem><LinkItem to="/join" aria-label='How to join'>how to join</LinkItem></FooterListItem>
                <FooterListItem><LinkItem to="/events" aria-label='Events calendar'>EVENTS CALENDAR</LinkItem></FooterListItem>
                <FooterListItem><LinkItem to="/reviews" aria-label='Reviews'>Reviews</LinkItem></FooterListItem>
                <FooterListItem><LinkItem to="/contacts" aria-label='Contacts'>contacts</LinkItem></FooterListItem>
              </FooterList>
              <FooterList>
                <TitleMenu>Location</TitleMenu>
                <FooterListItem>New york, USA</FooterListItem>
                <FooterListItem>street 1a</FooterListItem>
              </FooterList>
              <FooterList>
                <TitleMenu>Contacts</TitleMenu>
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
            <SpanBottom>Privacy Policy | Terms & Conditions</SpanBottom>
            <LinkItemLowercase to='https://brand-maze.vercel.app/' target="_blank">Designed and Developed by Brand Maze</LinkItemLowercase>
          </FooterBottomContainer>
        </FooterStyleWrap>
      </FooterContainer>
    </FooterSection>
  );
};