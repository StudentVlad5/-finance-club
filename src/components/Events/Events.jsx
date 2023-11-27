import React, { useEffect, useState } from 'react';
import { EventsList } from './EventsList/EventList';
import { ArchiveEventsList } from './ArchiveEventsList/ArchiveEventList';
import { fetchData } from 'services/APIservice';
import { onLoading, onLoaded } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { EventsSection, Heading } from './Events.styled';
import { Container, Title } from 'components/baseStyles/CommonStyle.styled';

import eventsData from 'components/data/events.json';
import { useTranslation } from 'react-i18next';

export const Events = () => {
  const { t } = useTranslation();

  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/events`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        setEvents(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <EventsSection>
      <Container>
        <Title>{t("Events calendar")}</Title>

        <Heading>{t("Upcoming club meetings")}</Heading>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        {events.length > 0 && !error && <EventsList events={events} />}

        <Heading>{t("Archive of past events")}</Heading>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        {events.length > 0 && !error && <ArchiveEventsList events={events} />}
      </Container>
    </EventsSection>
  );
};
