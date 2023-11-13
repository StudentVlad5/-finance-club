import { useEffect } from 'react';
import { SEO } from 'utils/SEO';

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(({ top: 0, left: 0, behavior: 'smooth' }))
  }, [])
  return (
    <>
      <SEO title="Login" description="" />
    </>
  );
};

export default LoginPage;
