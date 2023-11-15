import {
  Container,
  Headline,
  Section,
  Subtitle,
  Title,
} from "components/baseStyles/CommonStyle.styled";
import { theme } from "components/baseStyles/Variables.styled";
import styled from "styled-components";

const AdventagesSection = styled(Section)`
  background-color: ${(props) => props.theme.fon_second};
  padding-bottom: 0;
`;
const AdventagesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.fon_second};
`;
const ListItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 0 50px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: grid;
    justify-content: center;
    align-items: stretch;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 40px;
  }
`;
const ListItems = styled.li`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  padding: 48px 24px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.white_text};
`;
const ListItemsBig = styled(ListItems)`
  min-height: 620px;
  padding-bottom: 0;
`;
const ListItemsImgContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  border-radius: 20px;
  background: ${(props) => props.theme.black_img};
  margin-bottom: 20px;
`;
const ListItemsImgContainerBig = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 27px;
  width: 100%;
  background: transparent;
`;
const ListItemsImg = styled.img`
  width: 52px;
  height: 52px;
`;
const ListItemsImgBig = styled(ListItemsImg)`
width: 237.47px;
height: 444px;
object-fit: contain ;
`;
const ListItemsContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 100%;
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
  color: ${(props) => props.theme.black};
  font-family: ${theme.fonts[0]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 162.5%;
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
const SubTitleSection = styled(Subtitle)`
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
export {
  AdventagesSection,
  AdventagesContainer,
  ListItemsContainer,
  ListItemsImgContainer,
  ListItemsImg,
  ListItems,
  ListItemsTitle,
  SubTitle,
  ListItemsContentWraper,
  ListItemsImgContainerBig,
  ListItemsBig,
  ListItemsImgBig,
  ListItemsUppertitle,
  SubTitleSection
};
