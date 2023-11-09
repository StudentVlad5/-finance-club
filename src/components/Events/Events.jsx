import React from 'react';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';

// import digitalMoney from 'images/events/DIGITAL MONEY.jpg';
// import cybersecurity from 'images/events/cybersecurity.webp';
// import cybersecurity2 from 'images/events/cybersecurity-2.webp';
// import defi from 'images/events/defi.webp';
// import { EventItem, EventsList } from './Events.styled';

// const events = [
//   {
//     date: '22/11/2023',
//     time: '17:30 - 20:30',
//     location: 'Street 1a, New york, USA',
//     title: 'Digital money and financial risks',
//     description:
//       'There is a challenge to ensuring a high level of security of the digital money function, namely the problem of digital currency fraud and CBDCs.CBDC is a new third form of fiat money. The difference between CBDCs and cryptocurrencies, is that the latter are forms of decentralized or private money. Today, the use of cryptocurrency requires full regulation comparable to the risks they already pose or may pose in the future.',
//     plan: [
//       '17:30 – 18:00 Welcome coffee break with a welcome session',
//       '18:00 – 20:00 Lecture from the speaker',
//       '20:00 – 20:30 Questions for the speaker',
//     ],
//     speakers: [{ name: 'Den Braun', company: 'Bronx', position: 'CFO' }],
//     package: ['basic', 'pro', 'expert', 'visit'],
//     image: digitalMoney,
//   },
//   {
//     date: '02/12/2023',
//     time: '19:00 - 21:00',
//     location: 'online',
//     title: 'TOP 10 cybersecurity trends in 2023',
//     description:
//       'Tendencies and trends of the current year • What hackers know about your business • Cloud migration and cyber security risks • Practical recommendations for building cyber defense in the context of military operations',
//     plan: '',
//     speakers: [
//       {
//         name: 'Joanne Walker',
//         company: 'BDO',
//         position: 'Global Partnership Director',
//       },
//     ],
//     package: ['expert', 'visit'],
//     image: cybersecurity,
//   },
//   {
//     date: '15/12/2023',
//     time: '13:00 - 16:00',
//     location: 'Miami, USA',
//     title: 'DeFi: challenges of modern financial analytics',
//     description:
//       'The development of computing technologies and the emergence of cryptocurrencies have created the possibility of concluding direct smart contracts between economic agents, effectively redistributing risks between them and thereby creating prerequisites for further growth in economic efficiency in local markets, taking into account the local nature of their risks. To realize the new opportunities that new technologies give us, we need to create a simple and understandable decentralized platform for trading derivative financial instruments (smart derivatives) that can be initiated by each market participant, create analytical methods for the basic assessment of financial contracts, ensure their implementation by introducing certain algorithms into the corresponding smart contracts, using the mechanism of collateral by different parties to the transaction. Another important tool for the implementation of such agreements is the inclusion, by mutual agreement of the parties, in smart derivatives of reliable information flows that provide another participant in the platform – the oracle.',
//     plan: '',
//     speakers: [
//       {
//         name: 'Jane Pence',
//         company: 'KBS',
//         position: 'Professor of Finance and Economics',
//       },
//     ],
//     package: ['pro', 'expert', 'visit'],
//     image: defi,
//   },
//   {
//     date: '22/10/2023',
//     time: '14:30 - 18:30',
//     location: 'online',
//     title: 'Digital money and financial risks',
//     description:
//       'There is a challenge to ensuring a high level of security of the digital money function, namely the problem of digital currency fraud and CBDCs.CBDC is a new third form of fiat money. The difference between CBDCs and cryptocurrencies, is that the latter are forms of decentralized or private money. Today, the use of cryptocurrency requires full regulation comparable to the risks they already pose or may pose in the future.',
//     plan: '',
//     speakers: [{ name: 'Den Braun', company: 'Bronx', position: 'CFO' }],
//     package: ['pro', 'expert'],
//     image: digitalMoney,
//   },
//   {
//     date: '07/10/2023',
//     time: '13:00 - 16:00',
//     location: 'New York, USA',
//     title: 'Challenges of modern financial analytics',
//     description:
//       'The development of computing technologies and the emergence of cryptocurrencies have created the possibility of concluding direct smart contracts between economic agents, effectively redistributing risks between them and thereby creating prerequisites for further growth in economic efficiency in local markets, taking into account the local nature of their risks. To realize the new opportunities that new technologies give us, we need to create a simple and understandable decentralized platform for trading derivative financial instruments (smart derivatives) that can be initiated by each market participant, create analytical methods for the basic assessment of financial contracts, ensure their implementation by introducing certain algorithms into the corresponding smart contracts, using the mechanism of collateral by different parties to the transaction. Another important tool for the implementation of such agreements is the inclusion, by mutual agreement of the parties, in smart derivatives of reliable information flows that provide another participant in the platform – the oracle.',
//     plan: '',
//     speakers: [
//       {
//         name: 'Petter Ponn',
//         company: 'JTLD',
//         position: 'Professor of Finance and Economics',
//       },
//     ],
//     package: ['pro', 'expert', 'visit'],
//     image: defi,
//   },
//   {
//     date: '17/09/2023',
//     time: '14:00 - 16"00',
//     location: 'online',
//     title: 'Cybersecurity for Business',
//     description:
//       'How to protect your company from hackers, spyware and security forces? Cybersecurity for Business',
//     plan: '',
//     speakers: [
//       {
//         name: 'Mark Fray',
//         company: 'HackControl',
//         position: 'Cybersecurity specialist',
//       },
//     ],
//     package: ['basic', 'pro', 'expert', 'visit'],
//     image: cybersecurity2,
//   },
// ];

export const Events = () => {
  return (
    <Section>
      <Container>
        <Title>Events calendar</Title>
        {/* <EventsList>
          <EventItem></EventItem>
        </EventsList> */}
      </Container>
    </Section>
  );
};
