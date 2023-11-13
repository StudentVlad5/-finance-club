import { HowToJoin } from 'components/HowToJoin/HowToJoin';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';

const HowToJoinPage = () => {
  useEffect(() => {
    window.scrollTo(({ top: 0, left: 0, behavior: 'smooth' }))
  }, [])
  return (
    <>
      <SEO title="How to join" description="" />
      <HowToJoin />
    </>
  );
};

export default HowToJoinPage;
