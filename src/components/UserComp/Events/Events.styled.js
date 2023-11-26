import { Heading } from "components/Events/Events.styled";
import styled from "styled-components";

export const HeaderText = styled(Heading)`
  color: ${(props) => props.theme.white_text};
`;
