import { BtnLight } from "components/baseStyles/Button.styled";
import { Container, Section } from "components/baseStyles/CommonStyle.styled";
import { theme } from "components/baseStyles/Variables.styled";
import styled from "styled-components";

export const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 50px;
  }
`;

export const JoinTitle = styled.h2`
  color: ${(props) => props.theme.white_text};
  text-align: center;
  font-family: ${theme.fonts[0]};
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 55.02px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 42px;
  }
`;

export const JoinDiscr = styled.p`
  color: ${(props) => props.theme.white_text};
  text-align: center;
  font-family: ${theme.fonts[0]};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  width: 357px;
  margin-top: 10px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 725px;
    margin-top: 15px;
    font-size: 18px;
    line-height: 32px;
  }
`;

export const JoinList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
  /* margin-bottom: 50px; */
  gap: 35px 70px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 40px;
    /* margin-bottom: 100px; */
  }
`;

export const JoinListItem = styled.li`
  position: relative;
  padding: 53px 49px 53px 49px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.white_fon};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 53px 102px 53px 102px;
  }
`;

export const JoinListItemNumber = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  left: 10px;

  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: #1e1e1e;

  color: #ffffff;
  font-family: ${theme.fonts[0]};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.504px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 50px;
    height: 50px;
    font-size: 32px;
    position: absolute;
    left: 15px;
  }
`;

export const JoinListItemText = styled.p`
  width: 227px;
  text-align: left;
  color: ${(props) => props.theme.black_text};
  font-family: ${theme.fonts[0]};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;
export const RegistrationSection = styled(Section)`
  background-color: ${(props) => props.theme.fon_second};
  padding-bottom: 0;
`;
export const RegistrationContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;
export const RegistrationBtn = styled(BtnLight)`
margin: 20px 0;`
