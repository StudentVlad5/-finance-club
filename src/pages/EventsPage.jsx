import { Events } from 'components/Events/Events';
import { SEO } from 'utils/SEO';

const EventsPage = () => {
  return (
    <>
      <SEO
        title="Events calendar"
        description="Events calendar - finance club"
      />
      <Events />
    </>
  );
};

export default EventsPage;
