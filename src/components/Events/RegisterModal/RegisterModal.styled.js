import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { BtnLight } from 'components/baseStyles/Button.styled';
import {
  DataPlaceWrapper,
  DetailsWrapper,
  EventDate,
  EventImages,
  EventTitle,
} from '../EventsList/EventList.styled';

export const SelectedEvent = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  max-height: 80px;

  border-radius: 40px;
  background: ${props => props.theme.white_fon};
  overflow: hidden;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-height: 140px;
  }
`;

export const SDataPlaceWrapper = styled(DataPlaceWrapper)`
  flex-wrap: wrap;
  margin-bottom: 0;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 12px;
  }
`;

export const SDetailsWrapper = styled(DetailsWrapper)`
  padding: 5px 10px 5px 5px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 15px 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: calc(100% - 256px);
  }
`;

export const SEventDate = styled(EventDate)`
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    line-height: 32.004px; /* 228.6% */
  }
`;

export const SEventImages = styled(EventImages)`
  width: 103px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 30%;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 256px;
  }
`;

export const SEventTitle = styled(EventTitle)`
  margin-bottom: 0;
`;

export const SBtnLight = styled(BtnLight)`
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 190px;
    margin: 0 auto 0 0;
  }
`;
