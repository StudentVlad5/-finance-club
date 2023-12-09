import {
  Container,
  Headline,
  Section,
} from 'components/baseStyles/CommonStyle.styled';
import { theme } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';
import BackgroundImageD1x from 'images/hero/screen_desctop_desctop_1x.webp';
import BackgroundImageD2x from 'images/hero/screen_desctop_desctop_2x.webp';
import BackgroundImageD3x from 'images/hero/screen_desctop_desctop_3x.webp';
import BackgroundImageM1x from 'images/hero/screen_desctop_modal_1x.webp';
import BackgroundImageM2x from 'images/hero/screen_desctop_modal_2x.webp';
import BackgroundImageM3x from 'images/hero/screen_desctop_modal_3x.webp';

import { ReactComponent as DesctopScreen } from 'images/hero/dark_screen.svg';
import { ReactComponent as DesctopBottom } from 'images/hero/bottom_desctop.svg';
import { BtnLight } from 'components/baseStyles/Button.styled';

const HeroSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.black};
  padding-bottom: 38px;
  padding-top: 119px;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-bottom: 34px;
    padding-top: 105px;
  }
`;
const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.black};
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: start;
    gap: 50px;
  }
`;
const HeroControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const HeroHeadline = styled(Headline)`
  max-width: 50%;
  color: ${props => props.theme.white_text};
  font-family: ${theme.fonts[2]};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  /* word-break: break-all; */
  overflow-wrap: break-word;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 40px;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 25px;
  padding: 50px 0;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 52px;
    padding: 85px 0 163px;
  }
  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`;

const BtnHeroJoin = styled(BtnLight)`
  background-color: ${props => props.theme.white_text};
  color: ${props => props.theme.black};
`;

const BtnHeroPricing = styled(BtnLight)`
  background-color: transparent;
  color: ${props => props.theme.white_text};
  border-color: ${props => props.theme.white_text};
`;

const DesctopImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImages = styled.div`
  width: 253px;
  height: 144.475px;
  flex-shrink: 0;
  border-radius: 10px 10px 6px 6px;
  z-index: 10;
  background: -webkit-image-set(
    url(${BackgroundImageM1x}) 1x,
    url(${BackgroundImageM2x}) 2x,
    url(${BackgroundImageM3x}) 3x
  );
  background-image: image-set(
    url(${BackgroundImageM1x}) 1x,
    url(${BackgroundImageM2x}) 2x,
    url(${BackgroundImageM3x}) 3x
  );
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 540px;
    height: 345px;
    flex-shrink: 0;
    border-radius: 6px;
    background: -webkit-image-set(
      url(${BackgroundImageD1x}) 1x,
      url(${BackgroundImageD2x}) 2x,
      url(${BackgroundImageD3x}) 3x
    );
    background-image: image-set(
      url(${BackgroundImageD1x}) 1x,
      url(${BackgroundImageD2x}) 2x,
      url(${BackgroundImageD3x}) 3x
    );
  }
`;
const DesctopDarkScreen = styled(DesctopScreen)`
  position: absolute;
  width: 263.869px;
  height: 157.762px;
  flex-shrink: 0;
  border-radius: 22px 22px 0px 0px;
  border: 2px solid #4a5568;
  background: #1a202c;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 555.724px;
    height: 376.622px;
    flex-shrink: 0;
  }
`;

const DesctopDarkBottom = styled(DesctopBottom)`
  position: absolute;
  bottom: -10px;
  width: 330px;
  height: 3.585px;
  flex-shrink: 0;
  border-radius: 2px 2px 0px 0px;
  background: linear-gradient(
      90deg,
      #0d1012 0%,
      #cad4db 2.95%,
      #242729 6.25%,
      #a3acb1 13.36%,
      #a3acb1 86.6%,
      #242729 94.19%,
      #cad4db 97.13%,
      #0d1012 99.64%
    ),
    #a3acb1;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 695px;
    height: 8.56px;
    flex-shrink: 0;
    bottom: -25px;
  }
`;

export {
  HeroSection,
  HeroContainer,
  HeroControl,
  HeroHeadline,
  BtnHeroJoin,
  BtnContainer,
  HeroImages,
  DesctopImgContainer,
  DesctopDarkScreen,
  DesctopDarkBottom,
  BtnHeroPricing,
};
