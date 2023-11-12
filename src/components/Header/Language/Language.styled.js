import { theme } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const SelectContainerLanguage = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: auto;
  margin-top: 14px;

  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 0;
  }
`;

export const LabelLanguage = styled.span`
  margin: 2px;

  font-family: ${theme.fonts[1]};
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;
  text-decoration: none;
  white-space: nowrap;
  color: ${(props) => props.theme.white_text};

  transition: ${theme.transition[0]};
  cursor: pointer;

  &:first-child {
    margin-left: 5px;
  }

  &:focus,
  &:hover {
    color:${(props) => props.theme.grey};
    transform: ${theme.scale[0]};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
  }
  &.active {
    color: ${(props) => props.theme.grey};;
    transform: ${theme.scale[0]};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
    font-weight: 700;
  }
`;
