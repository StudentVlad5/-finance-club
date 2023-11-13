import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/APIservice';
import { onLoading, onLoaded } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { EventDetails } from 'components/Events/EventDetails/EventDetails';
import { SEO } from 'utils/SEO';

import digitalMoney from 'images/events/DIGITAL MONEY.jpg';
const eventData = {
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
    'Den Braun, Bronx, CFO',
    'Joanne Walker, BDO, Global Partnership Director',
  ],
  packages: ['pro', 'expert'],
  image: digitalMoney,
};

const EventDetailsPage = () => {
  const [event, setEvent] = useState(eventData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const routeParams = useParams();

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await fetchData(`/events/${routeParams.id}`);
  //       if (!data) {
  //         return onFetchError('Whoops, something went wrong');
  //       }
  //       setEvent(data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   if (routeParams.id !== '' && routeParams !== undefined) {
  //     getData();
  //   }
  // }, [routeParams.id]);

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <>
      <SEO title="Event" description="Event details - finance club" />
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError(t('Whoops, something went wrong'))}
      {Object.keys(event).length > 0 && !error && (
        <EventDetails event={event} />
      )}
    </>
  );
};

export default EventDetailsPage;
