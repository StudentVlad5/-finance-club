import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderComp } from 'components/Header/Header';
// import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={'Loading...'}>
        <HeaderComp />
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </Suspense>
    </>
  );
};
