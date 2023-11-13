import { Contacts } from 'components/Contacts/Contacts';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';

const ContactsPage = () => {
  useEffect(() => {
    window.scrollTo(({ top: 0, left: 0, behavior: 'smooth' }))
  }, [])
  return (
    <>
      <SEO title="Contacts" description="" />
      <Contacts />
    </>
  );
};

export default ContactsPage;
