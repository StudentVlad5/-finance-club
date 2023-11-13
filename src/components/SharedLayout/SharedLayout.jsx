import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderComp } from 'components/Header/Header';
import { Main } from './SharedLayout.styled';
import { Footer } from 'components/Footer/Footer';



export const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={'Loading...'}>
        <HeaderComp />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Suspense>
    </>
  );
};
