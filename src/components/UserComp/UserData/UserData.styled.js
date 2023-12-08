import styled from 'styled-components';
import { ReactComponent as Pencil } from 'images/svg/edit_light.svg';
import { theme } from 'components/baseStyles/Variables.styled';

const UserDataSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 36px;
    width: 80%;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 42px;
  }
`;
const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 24px;
  }
`;

const UserDataImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

const EditCameraForm = styled.form`
  position: absolute;
  bottom: 0;
  left: 110%;
  z-index: 10;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* position: absolute;
    right: 0;
    top: 214px; */
  }
`;

const UserDataImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 130px;
    height: 130px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 180px;
    height: 180px;
  }
`;

const EditPhotoLabel = styled.label`
  transition: ${theme.transition[1]};
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-right: 0px;
  }
`;

const EditPhotoInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 0;
  height: 0;
  cursor: pointer;
`;

const UserDataList = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    /* padding-top: 16px;
    padding-bottom: 55px;
    width: 379px;
    margin-left: 32px; */
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 24px;
    /* padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 16px; */
  }
`;

const UserPasswordList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 16px;
    padding-bottom: 55px;
    width: 379px;
    margin-left: 32px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 16px;
  }
`;

const BtnLightUser = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 188px;
  height: 55px;

  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 80%;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: ${props => props.theme.black};

  background-color: ${props => props.theme.white_text};
  border: 1px solid ${props => props.theme.black};
  border-radius: 80px;
  cursor: pointer;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.white_text};
    background-color: ${props => props.theme.black};
    border: 1px solid ${props => props.theme.white_text};
  }
  & :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
`;
const BtnDarkUser = styled(BtnLightUser)`
  color: ${props => props.theme.white_text};
  background-color: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.white_text};
  &:hover,
  &:focus {
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.white_text};
    border: 1px solid ${props => props.theme.black};
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 8px;

  width: 100%;
  padding: 20px;
  border-radius: 14px;
  background-color: ${props => props.theme.white_fon};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 10px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* width: 580px; */
  }
`;

const ProfileSpanName = styled.span`
  font-family: ${theme.fonts[0]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 80%;
  letter-spacing: 1.6px;
  color: ${props => props.theme.black_text};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`;

const ProfileSpanValues = styled.span`
  font-family: ${theme.fonts[0]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 80%;
  letter-spacing: 1.6px;
  color: ${props => props.theme.black_text};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`;

const IconBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 27px;

  border: none;
  border-radius: 50%;
  background-color: transparent;

  cursor: pointer;
  transform: ${theme.transition[1]};
  transition: all 0.25s ease-in;

  &:hover,
  &:focus {
    border-radius: 50%;
    background-color: ${props => props.theme.fon};
  }

  &:disabled {
    svg {
      fill: ${props => props.theme.grey};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 30px;
    height: 30px;
  }
`;

const PensilStyle = styled(Pencil)`
  width: 14px;
  height: 14px;
  fill: ${props => props.theme.white_text};
  transform: ${theme.transition[1]};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 24px;
    height: 24px;
  }
`;

const TitleArticle = styled.h2`
  font-size: 18px;
  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 700;
  line-height: 66.667%;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: ${props => props.theme.white_text};
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

export {
  EditCameraForm,
  EditPhotoInput,
  EditPhotoLabel,
  UserDataContainer,
  UserDataImg,
  UserDataImgWrapper,
  UserDataList,
  BtnLightUser,
  UserDataSection,
  UserPasswordList,
  ProfileContainer,
  ProfileSpanName,
  ProfileSpanValues,
  IconBtn,
  PensilStyle,
  TitleArticle,
  BtnContainer,
  BtnDarkUser,
};
