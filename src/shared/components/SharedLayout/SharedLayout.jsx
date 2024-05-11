import { Footer } from 'modules/footer';
import { Header } from 'modules/header';
import { Toastify } from '..';
import { Suspense } from 'react';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
      <Footer />
      <Toastify />
    </>
  );
};

export default SharedLayout;
