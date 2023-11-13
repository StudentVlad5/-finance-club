import React, { useEffect } from 'react';
import { SEO } from 'utils/SEO';

const AdminUsersPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <SEO title="Administration" description="Users Administration" />
    </>
  );
};

export default AdminUsersPage;
