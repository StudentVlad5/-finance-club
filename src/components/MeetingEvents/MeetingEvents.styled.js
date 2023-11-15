import {
  Container,
  Section,
  Subtitle,
  Title,
} from "components/baseStyles/CommonStyle.styled";
import { theme } from "components/baseStyles/Variables.styled";
import styled from "styled-components";

import BackgroundImage1x from "images/events/home_img_event_1x.webp";
import BackgroundImage2x from "images/events/home_img_event_2x.webp";
import BackgroundImage3x from "images/events/home_img_event_3x.webp";
import { AnimationBtn } from "components/baseStyles/Button.styled";

const MeetingEventSection = styled(Section)`
  background-color: ${(props) => props.theme.fon_second};
  padding-bottom: 70px;
`;
const MeetingEventContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.fon_second};
`;
const ListItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
  width: 100%;
  padding: 0px 50px 40px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;
const ListItemsUppertitle = styled(Title)`
  color: ${(props) => props.theme.white_text};
  text-align: center;
  font-family: ${theme.fonts[0]};
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 152.833%;
  margin-bottom: 15px;
  padding: 0 60px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 48px;
    line-height: 114.625%;
    padding: 0 90px;
    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      padding: 0 120px;
    }
  }
`;
const SubTitle = styled(Subtitle)`
  color: ${(props) => props.theme.white_text};
  font-family: ${theme.fonts[0]};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 213.36%;
  margin-bottom: 40px;
  padding: 0 60px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 177.8%;
    padding: 0 90px;
    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      padding: 0 120px;
    }
  }
`;
const ListItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 325px;
  height: 100%;
  border-radius: 40px;
  background-color: ${(props) => props.theme.white_fon};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 466px;
  }
`;
const EventImages = styled.div`
  width: 325px;
  height: 322px;
  flex-shrink: 0;
  border-radius: 40px 40px 0px 0px;
  z-index: 10;
  background: -webkit-image-set(
    url(${BackgroundImage1x}) 1x,
    url(${BackgroundImage2x}) 2x,
    url(${BackgroundImage3x}) 3x
  );
  background-image: image-set(
    url(${BackgroundImage1x}) 1x,
    url(${BackgroundImage2x}) 2x,
    url(${BackgroundImage3x}) 3x
  );
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
`;
const EventContentData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.grey};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 228.6%;
  padding: 10px 21px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;
const EventContentDesc = styled(EventContentData)`
  display: flex;
  color: ${theme.dark.black};
  text-align: justify;
  font-size: 15px;
  width: 100%;
  padding: 0px 21px 19px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;
const EventCalendarBtn = styled(AnimationBtn)`
color: ${(props) => props.theme.white_text};
background-color: transparent;
border: none;
text-align: center;
font-family: ${theme.fonts[0]};
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 160.02%;
text-transform: uppercase;
text-decoration: underline;
cursor: pointer;
`
export {
  MeetingEventSection,
  MeetingEventContainer,
  ListItemsContainer,
  SubTitle,
  ListItemsUppertitle,
  ListItems,
  EventImages,
  EventContentData,
  EventContentDesc,
  EventCalendarBtn
};
