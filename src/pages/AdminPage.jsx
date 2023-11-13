import React, { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { Admin } from 'components/Admin/Admin';

const AdminPage = () => {
  useEffect(() => {
    window.scrollTo(({ top: 0, left: 0, behavior: 'smooth' }))
  }, [])
  return (
    <>
      <SEO title="Administration" description="Page Administration" />
      <Admin />
    </>
  );
};

export default AdminPage;
