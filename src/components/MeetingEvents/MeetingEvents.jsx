import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MeetingEventSection,
  MeetingEventContainer,
  EventCalendarBtn,
} from './MeetingEvents.styled';
import { fetchData } from 'services/APIservice';
import { onLoading, onLoaded } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { ArchiveEventsList } from 'components/Events/ArchiveEventsList/ArchiveEventList';

import digitalMoney from 'images/events/DIGITAL MONEY.jpg';
import cybersecurity from 'images/events/cybersecurity.webp';
import cybersecurity2 from 'images/events/cybersecurity-2.webp';
import defi from 'images/events/defi.webp';
import { useTranslation } from 'react-i18next';

const eventsData = [
  {
    _id: '1sdghs',
    date: '2023/11/22',
    time: '17:30 - 20:30',
    location: 'New York, USA',
    title: 'Digital money and financial risks',
    description:
      'There is a challenge to ensuring a high level of security of the digital money function, namely the problem of digital currency fraud and CBDCs. CBDC is a new third form of fiat money. The difference between CBDCs and cryptocurrencies, is that the latter are forms of decentralized or private money. Today, the use of cryptocurrency requires full regulation comparable to the risks they already pose or may pose in the future.',
    plan: [
      '17:30 – 18:00 Welcome coffee break with a welcome session',
      '18:00 – 20:00 Lecture from the speaker',
      '20:00 – 20:30 Questions for the speaker',
    ],
    speakers: [
      { name: 'Den Braun', company: 'Bronx', position: 'CFO' },
      {
        name: 'Joanne Walker',
        company: 'BDO',
        position: 'Global Partnership Director',
      },
    ],
    moderator: 'Stew May',
    packages: ['pro', 'expert'],
    image: digitalMoney,
  },
  {
    _id: '2sgfhd',
    date: '2023/12/02',
    time: '19:00 - 21:00',
    location: 'ZOOM',
    title: 'TOP 10 cybersecurity trends in 2023',
    description:
      'Tendencies and trends of the current year • What hackers know about your business • Cloud migration and cyber security risks • Practical recommendations for building cyber defense in the context of military operations',
    plan: '',
    speakers: [
      {
        name: 'Joanne Walker',
        company: 'BDO',
        position: 'Global Partnership Director',
      },
    ],
    moderator: '',
    packages: ['expert'],
    image: cybersecurity,
  },
  {
    _id: '3xfgndf',
    date: '2023/12/15',
    time: '13:00 - 16:00',
    location: 'Miami, USA',
    title: 'DeFi: challenges of modern financial analytics',
    description:
      'The development of computing technologies and the emergence of cryptocurrencies have created the possibility of concluding direct smart contracts between economic agents, effectively redistributing risks between them and thereby creating prerequisites for further growth in economic efficiency in local markets, taking into account the local nature of their risks. To realize the new opportunities that new technologies give us, we need to create a simple and understandable decentralized platform for trading derivative financial instruments (smart derivatives) that can be initiated by each market participant, create analytical methods for the basic assessment of financial contracts, ensure their implementation by introducing certain algorithms into the corresponding smart contracts, using the mechanism of collateral by different parties to the transaction. Another important tool for the implementation of such agreements is the inclusion, by mutual agreement of the parties, in smart derivatives of reliable information flows that provide another participant in the platform – the oracle.',
    plan: '',
    speakers: [
      {
        name: 'Jane Pence',
        company: 'KBS',
        position: 'Professor of Finance and Economics',
      },
    ],
    moderator: 'Stew May',
    packages: ['pro', 'expert'],
    image: defi,
  },
  {
    _id: '4zfgxd',
    date: '2023/10/17',
    time: '14:00 - 16:00',
    location: 'ZOOM',
    title: 'Cybersecurity for Business',
    description:
      'How to protect your company from hackers, spyware and security forces? Cybersecurity for Business',
    plan: '',
    speakers: [
      {
        name: 'Mark Fray',
        company: 'HackControl',
        position: 'Cybersecurity specialist',
      },
    ],
    moderator: '',
    packages: ['basic', 'pro', 'expert'],
    image: cybersecurity2,
  },
  {
    _id: '5sfgnd',
    date: '2023/09/27',
    time: '14:30 - 18:30',
    location: 'ZOOM',
    title: 'Digital money and financial risks',
    description:
      'There is a challenge to ensuring a high level of security of the digital money function, namely the problem of digital currency fraud and CBDCs.CBDC is a new third form of fiat money. The difference between CBDCs and cryptocurrencies, is that the latter are forms of decentralized or private money. Today, the use of cryptocurrency requires full regulation comparable to the risks they already pose or may pose in the future.',
    plan: '',
    speakers: [{ name: 'Den Braun', company: 'Bronx', position: 'CFO' }],
    moderator: '',
    packages: ['pro', 'expert'],
    image: digitalMoney,
  },
  {
    _id: '6sfgcd',
    date: '2023/09/07',
    time: '13:00 - 16:00',
    location: 'New York, USA',
    title: 'Challenges of modern financial analytics',
    description:
      'The development of computing technologies and the emergence of cryptocurrencies have created the possibility of concluding direct smart contracts between economic agents, effectively redistributing risks between them and thereby creating prerequisites for further growth in economic efficiency in local markets, taking into account the local nature of their risks. To realize the new opportunities that new technologies give us, we need to create a simple and understandable decentralized platform for trading derivative financial instruments (smart derivatives) that can be initiated by each market participant, create analytical methods for the basic assessment of financial contracts, ensure their implementation by introducing certain algorithms into the corresponding smart contracts, using the mechanism of collateral by different parties to the transaction. Another important tool for the implementation of such agreements is the inclusion, by mutual agreement of the parties, in smart derivatives of reliable information flows that provide another participant in the platform – the oracle.',
    plan: '',
    speakers: [
      {
        name: 'Petter Ponn',
        company: 'JTLD',
        position: 'Professor of Finance and Economics',
      },
    ],
    moderator: 'Stew May',
    packages: ['pro', 'expert'],
    image: defi,
  },
];

const MeetingEvents = () => {
  const { t } = useTranslation();

  const [events, setEvents] = useState(eventsData);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const { t } = useTranslation();
  // useEffect(() => {
  //   (async function getData() {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await fetchData(`/events`);
  //       if (!data) {
  //         return onFetchError('Whoops, something went wrong');
  //       }
  //       setEvents(data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);
  const today = new Date();
  const archiveEvents = events.filter(({ date }) => new Date(date) > today);

  return (
    <MeetingEventSection>
      <MeetingEventContainer>
        {/* <ListItemsUppertitle
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
            Upcoming club meetings
          </ListItemsUppertitle>
          <SubTitle
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque
          </SubTitle>
          <ListItemsContainer>
          {data.map(it=><ListItems key={it.id}>
            <EventImages/>
            <EventContentData>
              <span>{it.dataBegin}</span>
              <span>{it.type}</span>
            </EventContentData>
            <EventContentDesc>
              <span>{it.time}, {it.event}</span>
            </EventContentDesc>
          </ListItems>)}
          </ListItemsContainer> */}
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        {events.length > 0 && !error && (
          <ArchiveEventsList events={archiveEvents} />
        )}
        <Link style={{ textDecoration: 'none' }} to="/events">
          <EventCalendarBtn type="button" aria-label="EVENTS CALENDAR">
            <span>{t("Events calendar")}</span>
          </EventCalendarBtn>
        </Link>
      </MeetingEventContainer>
    </MeetingEventSection>
  );
};

export default MeetingEvents;
