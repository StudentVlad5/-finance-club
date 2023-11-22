import {
  Container,
  Section,
  Subtitle,
  Title,
} from "components/baseStyles/CommonStyle.styled";
import { theme } from "components/baseStyles/Variables.styled";
import { BtnLight } from "components/baseStyles/Button.styled";
import styled from "styled-components";

const PriceSection = styled(Section)`
  background-color: ${(props) => props.theme.fon_second};
  padding-bottom: 0;
`;
const PriceContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.fon_second};
`;
const ContainerNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const BtnSlider = styled.div`
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
const ListItemsContainer = styled.ul`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 26px;
  width: 100%;
  padding: 0 50px;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
  }
`;
const ListItemsContainerForSwiper = styled(ListItemsContainer)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 26px;
  width: 100%;
  padding: 0 50px;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;
const ListItemsOfPacked = styled.div`
  display: flex;
  padding: 9px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  background: ${(props) => props.theme.grey};
  color: ${(props) => props.theme.white_text};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 128.6%;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`;
const ListItemsContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 100%;
`;
const ListItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: row;
  /* height: 645px; */
  padding: 48px 30px;
  border-radius: 40px;
  gap: 24px;
  background-color: ${(props) => props.theme.white_text};
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
const SubTitleItem = styled(SubTitle)`
  color: ${(props) => props.theme.black};
  margin-bottom: 40px;
  text-align: start;
  font-size: 18px;
  line-height: 177.8%;
  padding: 0;
`;
const TitleItem = styled(SubTitle)`
  color: ${(props) => props.theme.black};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 131%;
  margin: 16px 0;
  text-transform: uppercase;
  padding: 0;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size:38px;
    }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 42px;
    }
`;
const UlContent = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
  color: ${(props) => props.theme.black};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 144.4%;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  text-align: start;
  list-style-type: disc;
  list-style-position: outside;
  margin-bottom: 40px;
  margin-left: 20px;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 16px;
    font-size: 18px;
    min-height: 270px;
  }
`;
const LiContent = styled.li`
  color: ${(props) => props.theme.black};
  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 400;
  line-height: 111.1%;
  text-transform: none;
`;
const ButtonBuy = styled(BtnLight)`
  width: 100%;
  border: none;
  border-radius: 80px;
  padding: 22px 26px;
  background: ${(props) => props.theme.grey};
  color: ${(props) => props.theme.white_text};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.grey};
    background: ${(props) => props.theme.black};
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
    padding: 27px 32px;
    /* width: 210px; */
    height: 70px;
  }
`;

export {
  PriceSection,
  PriceContainer,
  ListItemsOfPacked,
  ContainerNavigation,
  BtnSlider,
  ListItemsContainer,
  ListItemsContainerForSwiper,
  ListItems,
  TitleItem,
  SubTitle,
  ListItemsUppertitle,
  SubTitleItem,
  ListItemsContentWraper,
  UlContent,
  LiContent,
  ButtonBuy,
};
