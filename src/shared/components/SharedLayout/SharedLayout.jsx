import { Cart } from 'modules/cart';
import { Footer } from 'modules/footer';
import { Header } from 'modules/header';
import { Toastify } from '..';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Cart />
      <Toastify />
    </>
  );
};

export default SharedLayout;
