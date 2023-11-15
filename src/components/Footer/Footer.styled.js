import { Container, Section } from "components/baseStyles/CommonStyle.styled";
import { theme } from "components/baseStyles/Variables.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link as Email } from "@react-email/link";

const FooterSection = styled(Section)`
  background-color: ${(props) => props.theme.white_text};
`;
const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.white_text};
`;
const FooterStyleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${theme.breakpoints.tablet}){
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}){
  }
`;
const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.white_text};
`;
const FooterListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 192px;
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 162.5%;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white_text};
  &:first-of-type {
    margin-top: 30px;
  }
`;
const FooterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.tablet}){
    flex-direction: row;
    justify-content: space-around;
    align-items: start;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}){
    flex-direction: row;
    gap: 100px;
    align-items: start;
  }
`;
const FooterBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
  margin-top: 38px;
  border-top: 1px solid ${(props) => props.theme.black};
  @media screen and (min-width: ${theme.breakpoints.tablet}){
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 25px;
  }
`;
const TitleMenu = styled.h3`
  font-family: ${theme.fonts[0]};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  padding: 35px 0 20px;
  border-bottom: 1px solid ${(props) => props.theme.black};
  text-transform: uppercase;
  color: ${(props) => props.theme.black};
`;
const LinkItem = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 162.5%;
  text-transform: uppercase;
  color: ${(props) => props.theme.black};
`;
const LinkItemLowercase = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 162.5%;
  color: ${(props) => props.theme.black};
`;
const LinkEmail = styled(Email)`
  cursor: pointer;
  text-decoration: none;
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 162.5%;
  color: ${(props) => props.theme.black};
`;
const Span = styled.span`
  color: ${(props) => props.theme.black};
  text-transform: none;
`;
const SpanBottom = styled.span`
  color: ${(props) => props.theme.black};
  text-transform: none;
  text-align: center;
  font-family: ${theme.fonts[1]};
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 173.333%;
`;
const FooterSvg = styled.svg`
  fill: ${(props) => props.theme.white_text};
  background-color: ${(props) => props.theme.black};
  cursor: pointer;
`;
const FooterSvgContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 19px;
`;
const FooterSvgLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.theme.black};
  border-radius: 50%;
  cursor: pointer;
`;
export {
  FooterSection,
  FooterContainer,
  FooterStyleWrap,
  FooterList,
  FooterListItem,
  FooterItemContainer,
  FooterBottomContainer,
  TitleMenu,
  LinkItem,
  LinkEmail,
  Span,
  SpanBottom,
  LinkItemLowercase,
  FooterSvgContainer,
  FooterSvg,
  FooterSvgLi
};