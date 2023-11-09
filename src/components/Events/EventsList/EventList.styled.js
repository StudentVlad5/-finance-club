import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 0 15px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 45px;
    padding: 0;
    margin-bottom: 100px;
  }
`;

export const Event = styled.li`
  display: flex;
  flex-direction: column;

  border-radius: 40px;
  background: ${props => props.theme.white_fon};
  overflow: hidden;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const DetailsWrapper = styled.div`
  padding: 20px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 20px 40px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: calc(100% - 466px);
  }
`;

export const EventNavLink = styled(NavLink)`
  max-height: 322px;
  overflow: hidden;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-height: 366px;
  }
`;

export const EventImages = styled.img`
  width: 100%;
  transition: ${theme.transition};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 466px;
    height: 100%;
    max-height: 366px;
  }

  &:hover,
  &:focus {
    transform: ${theme.scale};
  }
`;

export const DataPlaceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const EventDate = styled.span`
  color: ${props => props.theme.grey};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 32.004px; /* 228.6% */
`;

export const EventTitle = styled.p`
  margin-bottom: 20px;

  color: ${props => props.theme.black};
  font-family: ${theme.fonts[0]};
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 22.004px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
    line-height: 32.004px; /* 177.8% */
  }
`;

export const EventDesc = styled.p`
  margin-bottom: 10px;

  color: ${props => props.theme.grey};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.004px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
    line-height: 32.004px;
  }
`;

export const BtnLink = styled(NavLink)`
  padding: 2px;
  margin-left: 10px;

  color: ${props => props.theme.black};
  font-family: ${theme.fonts[0]};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32.004px; /* 160.02% */
  text-decoration: none;

  border-bottom: 1px solid ${props => props.theme.black};
  transition: ${theme.transition};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.grey};
    border-bottom: 1px solid ${props => props.theme.grey};
  }
`;
