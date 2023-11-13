import { theme } from 'components/baseStyles/Variables.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 35px;
  gap: 30px 50px;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 50px;
  }
`;

export const ReviewsListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px 25px 25px 10px;
  width: 320px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.white_fon};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 430px;
    /* height: 162px; */
  }
`;

export const ReviewsListItemImg = styled.img`
  width: 52px;
  height: 52px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 70px;
    height: 70px;
  }
`;

export const ReviewsListItemName = styled.p`
  color: ${theme.light.black_text};
  font-family: ${theme.fonts[0]};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.504px;
  margin-left: 7px;
`;

export const ReviewsListItemDiscr = styled.p`
  width: 226.76px;
  height: 71px;
  margin-left: 75px;
  color: ${theme.light.black_text};
  font-family: ${theme.fonts[0]};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.504px;

  @media screen and (min-width: ${theme.breakpoints.desktop}){
    width: 304px;
  }
`;

export const ReviewsBtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 60px;
  }
`;

export const ReviewsBtn = styled(NavLink)`
  position: relative;
  padding: 2px;

  background-color: transparent;
  border-color: transparent;

  color: ${props => props.theme.white_text};
  font-family: ${theme.fonts[0]};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32.004px;

  transition: ${theme.transition};
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
    margin-top: 60px;
  }

  &::before,
  &::after,
  & span::after,
  & span::before {
    content: '';
    position: absolute;
    top: 100%;
    bottom: 0;
    left: -16px;
    width: 1px;
    background: ${props => props.theme.white_text};
    transition: ${theme.transition};
  }

  &::before {
    right: -16px;
    left: -16px;
    width: auto;
    background: 0;
    border-right: 1px solid ${props => props.theme.white_text};
    border-left: 1px solid ${props => props.theme.white_text};
  }

  &::after {
    right: 0;
    left: 0;
    height: 1px;
    width: auto;
  }

  & span {
    position: relative;
    display: inline-block;

    &::before,
    &::after {
      top: -2px;
      left: auto;
      right: auto;
      width: 0;
      height: 1px;
      transition: ${theme.transition};

      @media screen and (min-width: ${theme.breakpoints.tablet}) {
        top: -2px;
      }

      @media screen and (min-width: ${theme.breakpoints.desktop}) {
        top: -2px;
      }
    }

    &::before {
      left: -18px;
    }

    &::after {
      right: -18px;
    }
  }

  &:hover,
  &:focus {
    &::before {
      top: 0;
    }
    &::after {
      right: -16px;
      left: -16px;
    }

    & span::before,
    & span::after {
      width: 80%;
    }
  }
`;

