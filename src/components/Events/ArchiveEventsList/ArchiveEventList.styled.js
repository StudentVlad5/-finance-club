import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { DetailsWrapper, Event } from '../EventsList/EventList.styled';

export const ArchiveList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-items: stretch;
  gap: 20px;

  padding: 0 15px;
  margin-bottom: 20px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 45px;
    padding: 0;
    margin-bottom: 50px;
  }
`;

export const ArchiveEvent = styled(Event)`
  flex-direction: column;
  max-width: 466px;
`;

export const ArchiveDetailsWrapper = styled(DetailsWrapper)`
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const BtnMore = styled.button`
  display: block;
  margin: 0 auto;
  padding: 2px;

  color: ${props => props.theme.white_text};
  font-family: ${theme.fonts[0]};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32.004px; /* 160.02% */
  text-transform: uppercase;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.white_text};
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
