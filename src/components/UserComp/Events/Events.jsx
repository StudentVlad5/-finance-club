import { ArchiveEventsList } from 'components/Events/ArchiveEventsList/ArchiveEventList';
import { EventsSection } from 'components/Events/Events.styled';
import { EventsList } from 'components/Events/EventsList/EventList';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/selectors';
import { fetchData } from 'services/APIservice';
import { HeaderText } from './Events.styled';
import { useTranslation } from 'react-i18next';
import { StatusContext } from 'components/ContextStatus/ContextStatus';

export const Events = () => {
  const eventsOfUser = useSelector(getUser).events;
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();
  const { selectedLanguage } = useContext(StatusContext);

  useEffect(() => {
    (async function getData() {
      let eventsList = [];
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/events`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        data.map(it =>
          eventsOfUser.map(item => {
            if (item === it._id) {
              eventsList.push({_id: it._id,...it[selectedLanguage]});
            }
            setEvents(eventsList);
          }),
        );
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [selectedLanguage]);

  return (
    <EventsSection>
      <Container>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        <HeaderText>{t('Upcoming club meetings')}</HeaderText>

        {events.length > 0 && !error && <EventsList events={events} />}
        <HeaderText>{t('Archive of past events')}</HeaderText>
        {events.length > 0 && !error && <ArchiveEventsList events={events} />}
      </Container>
    </EventsSection>
  );
};
