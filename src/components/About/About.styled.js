import {
  Container,
  Headline,
  Section,
  Subtitle,
  Title,
} from "components/baseStyles/CommonStyle.styled";
import { theme } from "components/baseStyles/Variables.styled";
import styled from "styled-components";

const AboutSection = styled(Section)`
  background-color: ${(props) => props.theme.fon_second};
`;
const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.fon_second};
`;
const ContainerNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.fon_second};
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.grey};
    border-radius: 50%;
  }

  &:hover(.buttonSlide) {
    color: ${(props) => props.theme.white_text};
    fill: ${(props) => props.theme.white_text};
  }
`;

const ListOfItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.fon_second};
`;
const ListOfItemNext = styled(ListOfItem)`
  padding: 0 60px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 90px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 120px;
  }
`;
const ListItemsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: stretch;
  gap: 28px;
  width: 100%;
  margin-bottom: 48px;
  padding: 0 50px;
  background-color: ${(props) => props.theme.fon_second};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;
const ListItemsImgContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 82px;
  border-radius: 20px;
  background: ${(props) => props.theme.black_img};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 100px;
  }
`;
const ListItemsContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 100%;
`;
const ListItemsImg = styled.img`
  width: 52px;
  height: 52px;
`;
const ListItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  min-height: 246px;
  padding: 58px 32px;
  border-radius: 40px;
  gap: 24px;
  background-color: ${(props) => props.theme.white_text};
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
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 48px;
    line-height: 114.625%;
  }
`;
const ListItemsTitle = styled(Headline)`
  color: ${(props) => props.theme.black};
  margin-bottom: 7px;
  font-family: ${theme.fonts[0]};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 144.4%;
  letter-spacing: 0.9px;
  text-transform: uppercase;
`;
const SubTitle = styled(Subtitle)`
  color: ${(props) => props.theme.white_text};
  font-family: ${theme.fonts[0]};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 213.36%;
  margin-bottom: 40px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 177.8%;
  }
`;
const SubTitleItem = styled(SubTitle)`
  color: ${(props) => props.theme.black};
  margin-bottom: 0px;
  text-align: start;
`;
export {
  AboutSection,
  AboutContainer,
  ContainerNavigation,
  Btn,
  ListOfItem,
  ListItemsContainer,
  ListItemsImgContainer,
  ListItemsImg,
  ListItems,
  ListItemsTitle,
  SubTitle,
  ListItemsUppertitle,
  SubTitleItem,
  ListItemsContentWraper,
  ListOfItemNext,
};
