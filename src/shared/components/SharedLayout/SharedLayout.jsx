import { Footer } from 'modules/footer';
import { Header } from 'modules/header';
import { Toastify } from '..';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Toastify />
    </>
  );
};

export default SharedLayout;
