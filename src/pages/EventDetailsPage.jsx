import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/APIservice';
import { onLoading, onLoaded } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { EventDetails } from 'components/Events/EventDetails/EventDetails';
import { SEO } from 'utils/SEO';

const EventDetailsPage = () => {
  const [event, setEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const routeParams = useParams();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/events/${routeParams.id}`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        setEvent(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (routeParams.id !== '' && routeParams !== undefined) {
      getData();
    }
  }, [routeParams.id]);

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <>
      <SEO title="Event" description="Event details - finance club" />
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      {Object.keys(event).length > 0 && !error && (
        <EventDetails event={event} />
      )}
    </>
  );
};

export default EventDetailsPage;
