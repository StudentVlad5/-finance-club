import { Events } from 'components/Events/Events';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(({ top: 0, left: 0, behavior: 'smooth' }))
  }, [])
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
