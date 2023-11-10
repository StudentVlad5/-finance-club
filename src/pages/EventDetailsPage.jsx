import { EventDetails } from 'components/Events/EventDetails/EventDetails';
import { SEO } from 'utils/SEO';

const EventDetailsPage = () => {
  return (
    <>
      <SEO title="Event details" description="Event details - finance club" />
      <EventDetails />
    </>
  );
};

export default EventDetailsPage;
