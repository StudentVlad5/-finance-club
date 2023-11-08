import styled from 'styled-components';
import { ReactComponent as Logout } from 'images/svg/logout.svg';
import theme from 'components/baseStyles/Variables.styled';

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
  margin-top: 10px;
  color: ${theme.colors.black};
  border-collapse: collapse;
`;

export const TableFilter = styled.thead`
  /* position: absolute;
  top: 0;
  left: 0; */

  & input {
    width: 100%;
    margin: 0;
    padding: 5px 35px 5px 10px;

    font-family: ${theme.fonts[2]};
    font-size: ${theme.fontSizes.extraSmall};
    font-weight: 400;
    line-height: 1.33;
    color: #303030;

    border-color: #f7f7f7;
    border-radius: 40px;

    &:hover,
    &:focus,
    &:focus-visible,
    &:focus-within {
      border: 2px solid ${theme.colors.braun};
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
    background-color: ${theme.colors.opacity};
  }
`;

export const TableHead = styled.th`
  position: relative;
  padding: 0.25rem;

  font-family: ${theme.fonts[2]};
  font-size: ${theme.fontSizes.extraSmall};
  font-weight: 700;
  line-height: 1.03;

  border-bottom: 1px solid ${theme.colors.gray};

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

  font-family: ${theme.fonts[2]};
  font-size: ${theme.fontSizes.extraSmall};
  font-weight: 400;
  line-height: 1.1;

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
      color: ${theme.colors.braun};
    }

    & > svg {
      fill: inherit;
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

  color: ${theme.colors.gray};
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: ${theme.transition};

  &:hover,
  &:focus,
  &:active {
    color: ${theme.colors.braun};
  }

  & > svg {
    fill: currentColor;
  }
`;

export const LearnMoreBtn = styled.button`
  display: block;
  margin-left: auto;
  padding: 6px;

  font-family: ${theme.fonts[2]};
  font-size: ${theme.fontSizes.extraSmall};
  font-weight: 500;
  color: ${theme.colors.gray};

  color: ${theme.colors.gray};
  border-color: #f7f7f7;
  border-radius: 40px;
  background-color: transparent;

  transition: ${theme.transition};
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: ${theme.colors.gray} 1px 1px 2px inset;
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${theme.fonts[2]};
  font-size: ${theme.fontSizes.extraSmall};
  font-style: normal;
  font-weight: 400;
  text-align: center;
  /* text-transform: uppercase; */
  text-decoration: none;
  line-height: normal;

  color: ${theme.colors.gray};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:hover > svg,
  &:focus > svg {
    color: ${theme.colors.braun};
    fill: ${theme.colors.braun};
    stroke: ${theme.colors.braun};
    transition: all 150ms linear;
  }
`;

export const LogoutIcon = styled(Logout)`
  width: 16px;
  height: 16px;
  stroke: ${theme.colors.gray};
  transition: all 150ms linear;

  &:hover,
  :focus {
    fill: ${theme.colors.white};
    stroke: ${theme.colors.white};
  }
`;

export const LogoutLabel = styled.span`
  font-family: ${theme.fonts[2]};
  font-size: ${theme.fontSizes.extraSmall};
  font-weight: 400;
  letter-spacing: -0.04em;
  margin-left: 8px;
  transition: all 150ms linear;
`;

export const ClearFiltersBtn = styled.button`
  padding: 5px;
  text-align: start;

  font-family: ${theme.fonts[2]};
  font-size: 10px;
  font-weight: 400;
  line-height: 1.33;

  color: ${theme.colors.gray};
  border-color: #f7f7f7;
  border-radius: 40px;
  background-color: transparent;

  transition: ${theme.transition};

  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: ${theme.colors.gray} 1px 1px 2px inset;
  }
`;
