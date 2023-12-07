import React, { useContext, useEffect, useState } from 'react';
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
import { useTranslation } from 'react-i18next';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { EventsList } from 'components/Events/EventsList/EventList';

const MeetingEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { selectedLanguage } = useContext(StatusContext);
  const { t } = useTranslation();
  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/events`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        let langData = [];
        data.map(it => {
          let item = [{ _id: it._id, ...it[selectedLanguage] }];
          langData.push(item[0]);
        });
        setEvents(langData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <MeetingEventSection>
      <MeetingEventContainer>
        {isLoading ? onLoading() : onLoaded()}
        {events.length > 0 && !error && (
          <div style={{display:"flex", gap:'20px', flexDirection:"column"}}>
          <EventsList events={events}/>
          <ArchiveEventsList events={events}/>
          </div>
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
