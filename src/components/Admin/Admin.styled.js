import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { NavLink } from 'react-router-dom';

export const AdminContainer = styled.div`
  position: relative;
  padding: 20px;
  overflow-x: scroll;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Table = styled.table`
  width: 100%;
  margin: 10px 0;
  color: ${props => props.theme.black_text};
  border-collapse: collapse;
`;

export const TableFilter = styled.thead`
  /* position: absolute;
  top: 0;
  left: 0; */

  & input {
    width: 100%;
    margin: 0;
    padding: 5px 20px 5px 10px;

    font-family: ${theme.fonts[0]};
    font-size: ${theme.fontSizes.extraSmall};
    font-weight: 400;
    line-height: 1.33;
    color: ${props => props.theme.black_text};

    border-color: ${props => props.theme.grey};
    border-radius: 40px;

    &:hover,
    &:focus,
    &:focus-visible,
    &:focus-within {
      border: 1px solid ${props => props.theme.black_text};
    }
  }
`;

export const TableRow = styled.tr`
  /* &:first-child {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
  } */

  &:nth-child(2n) {
    background-color: ${props => props.theme.greyOpacity};
  }
`;

export const TableHead = styled.th`
  position: relative;
  padding: 0.25rem;

  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.extraSmall};
  font-weight: 700;
  line-height: 1.03;
  color: ${props => props.theme.white_text};
  border-bottom: 1px solid ${props => props.theme.grey};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
    line-height: 1.3;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 200px;
    font-size: 14px;
  }
`;

export const TableData = styled.td`
  padding: 0.25rem;
  max-width: 80px;

  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.extraSmall};
  font-weight: 400;
  line-height: 1.1;
  color: ${props => props.theme.white_text};
  overflow-x: hidden;
  white-space: nowrap;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 100px;
    font-size: 12px;
    line-height: 1.3;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 200px;
    font-size: 14px;
  }
`;

export const BtnWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  & button {
    padding: 1px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.black_text};
    }

    & > svg {
      fill: currentColor;
    }
  }
`;

export const IconBtn = styled.button`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;

  color: ${props => props.theme.white_text};
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: ${theme.transition};

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.black_text};
  }

  & > svg {
    fill: currentColor;
  }
`;

export const LearnMoreBtn = styled.button`
  display: block;
  margin-left: auto;
  padding: 6px;

  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.extraSmall};
  font-weight: 500;
  color: ${props => props.theme.white_text};
  border-color: #f7f7f7;
  border-radius: 40px;
  background-color: transparent;

  transition: ${theme.transition};
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.grey} 1px 1px 2px inset;
    color: ${props => props.theme.black_text};
    background-color: ${props => props.theme.white};
  }
`;

export const ClearFiltersBtn = styled.button`
  padding: 5px;
  text-align: start;

  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-weight: 400;
  line-height: 1.33;

  color: ${props => props.theme.white_text};
  border-color: #f7f7f7;
  border-radius: 40px;
  background-color: transparent;

  transition: ${theme.transition};

  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.grey} 1px 1px 2px inset;
    color: ${props => props.theme.black_text};
    background-color: ${props => props.theme.white};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  max-width: calc(100vw - 40px);

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: calc(100vw - 64px);
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-content: space-between;
    max-width: 1280px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
  height: auto;
  padding: 12px 4px;

  background-color: ${props => props.theme.white_fon};
  box-shadow: 7px 4px 14px ${props => props.theme.greyOpacity};
  border-radius: 20px;
  transition: ${theme.transition};

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    max-width: 280px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 336px;
    border-radius: 40px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 390px;
  }

  & svg {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.greyOpacity};
    scale: ${theme.scale};
  }
`;

export const SLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts[0]};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.333;
  color: ${props => props.theme.black_text};
  text-decoration: none;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 1.357;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
    line-height: 1.375;
  }
`;
