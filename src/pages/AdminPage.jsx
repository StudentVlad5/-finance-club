import React from 'react';
import { SEO } from 'utils/SEO';
import { Admin } from 'components/Admin/Admin';

const AdminPage = () => {
  return (
    <>
      <SEO title="Administration" description="Page Administration" />
      <Admin />
    </>
  );
};

export default AdminPage;
