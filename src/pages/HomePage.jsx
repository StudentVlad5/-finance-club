import About from 'components/About/About';
import Adventages from 'components/Adventages/Adventages';
import Hero from 'components/Hero/Hero';
import MeetingEvents from 'components/MeetingEvents/MeetingEvents';
import Prices from 'components/Prices/Prices';
import { SEO } from 'utils/SEO';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Home"
        description="for a communication platform of a fundamentally new format between the financial and banking community, the expert environment, regulators and society"
      />
      <Hero/>
      <About/>
      <Adventages/>
      <Prices/>
      <MeetingEvents/>
    </>
  );
};

export default HomePage;
