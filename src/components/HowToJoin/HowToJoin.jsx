import { useDispatch } from 'react-redux';
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
  RegistrationBtn,
  RegistrationContainer,
  RegistrationSection,
} from './HowToJoin.styled';
import Prices from 'components/Prices/Prices';
import { openModalWindow } from 'hooks/modalWindow';
import { RegisterModal } from './RegisterModal/RegisterModal';
import { addModal } from 'redux/modal/operation';

export const HowToJoin = () => {

  const dispatch = useDispatch();
  const openModal = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'member_registration') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
        }),
      );
      setTimeout(() => openModalWindow(e, null), 200);
    }
  };

  return (
    <>
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
          <RegistrationSection>
            <RegistrationContainer>
              <JoinDiscr data-aos="fade-down" data-aos-easing="linear"    data-aos-duration="1500">
              The decision on admission to the club is made by the Council within two weeks. The cost of the annual membership fee for CFO Club Ukraine: – for the real sector of business 2700$; – for consultants 4500$. Loyalty program for regular customers, for those who are in the club: – more than 10 years – 20% discount; – over 8 years – 15%; – more than 5 years – 10%. If your membership is interrupted for less than 1 year, this discount is reserved for the club member. If participation is interrupted for a longer period, the program is no longer valid.
              </JoinDiscr>
              <RegistrationBtn type="button" aria-label="button for form registration"  onClick={e => {
              openModal(e);
            }}
            data-modal="member_registration">BECOME A MEMBER</RegistrationBtn>
            </RegistrationContainer>
          </RegistrationSection>
        </JoinBox>
      </Container>
    </Section>
    <RegisterModal/>
    </>
  );
};
