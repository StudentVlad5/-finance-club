import { SEO } from 'utils/SEO';
import Hero from 'components/Sections/Hero/Hero';
import About from 'components/Sections/About/About';
import Price from 'components/Sections/Price/Price';
import Benefits from 'components/Sections/Benefits/Benefits';
import Team from 'components/Sections/Team/Team';
import Gallery from 'components/Sections/Gallery/Gallery';
import Contacts from 'components/Sections/Contacts/Contacts';
import FixDown from 'components/FixDown/FixDown';

const LandingPage = () => {
  return (
    <>
      <SEO title="Home" description="for a communication platform of a fundamentally new format between the financial and banking community, the expert environment, regulators and society" />
      <Hero />
      <About />
      <Price />
      <Benefits />
      <Team />
      <Gallery />
      <Contacts />
      <FixDown />
    </>
  );
};

export default LandingPage;
