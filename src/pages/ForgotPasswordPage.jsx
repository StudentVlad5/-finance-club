import ForgotPasswordForm from 'components/Auth/ForgotPasswordForm/ForgotPasswordForm';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';

const ForgotPasswordPage = () => {
  useEffect(() => {
    window.scrollTo(({ top: 0, left: 0, behavior: 'smooth' }))
  }, [])
  return (
    <>
      <SEO title="Forgot Password" description="" />
      <ForgotPasswordForm/>
    </>
  );
};

export default ForgotPasswordPage;
