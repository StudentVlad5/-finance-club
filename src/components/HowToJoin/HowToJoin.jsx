import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import {
  JoinBox,
  JoinDiscr,
  JoinList,
  JoinListItem,
  JoinListItemNumber,
  JoinListItemText,
  JoinTitle,
} from './HowToJoin.styled';
import Prices from 'components/Prices/Prices';

export const HowToJoin = () => {
  return (
    <Section>
      <Container>
        <Title>How to join</Title>

        <JoinBox>
          <JoinTitle>Accession procedure</JoinTitle>
          <JoinDiscr>
            Only general, financial directors and owners of the “medium +”
            business can become members of the club. We create the most
            comfortable environment for our participants. The high level of
            competence of club members in financial matters is extremely
            important to us.
          </JoinDiscr>

          <JoinList>
            <JoinListItem>
              <JoinListItemNumber>1</JoinListItemNumber>
              <JoinListItemText>
                Apply by filling out the application form
              </JoinListItemText>
            </JoinListItem>

            <JoinListItem>
              <JoinListItemNumber>2</JoinListItemNumber>
              <JoinListItemText>
                Adopt a community code of conduct
              </JoinListItemText>
            </JoinListItem>

            <JoinListItem>
              <JoinListItemNumber>3</JoinListItemNumber>
              <JoinListItemText>
                Get a recommendation from a CFO Club member
              </JoinListItemText>
            </JoinListItem>

            <JoinListItem>
              <JoinListItemNumber>4</JoinListItemNumber>
              <JoinListItemText>
                Get confirmation from the club Council
              </JoinListItemText>
            </JoinListItem>

            <JoinListItem>
              <JoinListItemNumber>5</JoinListItemNumber>
              <JoinListItemText>Pay club card</JoinListItemText>
            </JoinListItem>

            <JoinListItem>
              <JoinListItemNumber>6</JoinListItemNumber>
              <JoinListItemText>Sign a contract with CFO Club</JoinListItemText>
            </JoinListItem>
          </JoinList>
          <Prices />
        </JoinBox>
      </Container>
    </Section>
  );
};
