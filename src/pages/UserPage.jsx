import { UserComp } from 'components/UserComp/UserComp';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';

const UserPage = () => {
  useEffect(() => {
    window.scrollTo(({ top: 0, left: 0, behavior: 'smooth' }))
  }, [])
  return (
    <>
      <SEO title="Profile" description="User profile" />
      <UserComp />
    </>
  );
};

export default UserPage;
