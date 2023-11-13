import { useEffect } from 'react';
import { SEO } from 'utils/SEO';

const ReviewsPage = () => {
  useEffect(() => {
    window.scrollTo(({ top: 0, left: 0, behavior: 'smooth' }))
  }, [])
  return (
    <>
      <SEO title="Reviews" description="" />
    </>
  );
};

export default ReviewsPage;
