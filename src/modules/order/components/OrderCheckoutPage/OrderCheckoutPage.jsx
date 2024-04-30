import OrderHeader from '../OrderHeader/OrderHeader';
import OrderForm from '../OrderForm/OrderForm';
import OrderCart from '../OrderCart/OrderCart';
import { Container, MainTitle } from 'shared/components';
import s from './OrderCheckoutPage.module.scss';

const OrderCheckoutPage = () => {
  return (
    <>
      <OrderHeader />
      <Container className={s.orderContainer}>
        <MainTitle title="Оформлення замовлення" className={s.orderTitle} />
        <div className={s.orderWrapper}>
          <OrderForm />
          <OrderCart />
        </div>
      </Container>
    </>
  );
};

export default OrderCheckoutPage;
