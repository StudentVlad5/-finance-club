import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';
import { theme } from 'components/baseStyles/Variables.styled';

export const UserSection = styled(Section)``;

export const UserContainer = styled(Container)``;

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: nowrap;
  align-items: start;
  gap: 20px;
  width: 100%;
  padding: 0 30px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 100px;
    padding: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 84px;
  }
`;

export const UserAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: flex-start;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export const FolderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 250px;
    gap: 25px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 30px;
    width: 350px;
  }
`;

export const LinkFolder = styled(NavLink)`
  font-family: ${theme.fonts[0]};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 66.667%;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: ${props => props.theme.white_text};
  text-decoration: none;
  padding-bottom: 4px;

  &:hover,
  &:focus {
    color: ${props => props.theme.grey};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
  }
  &.active {
    color: ${props => props.theme.grey};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;
