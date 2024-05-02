import { Container, MainTitle } from 'shared/components';
import { OrderHeader, OrderForm, OrderCart } from 'modules/order/components';
import s from './OrderCheckoutPage.module.scss';

const OrderCheckoutPage = ({ onClose }) => {
  return (
    <>
      <OrderHeader />
      <section className={s.orderSection}>
        <Container className={s.orderContainer}>
          <MainTitle title="Оформлення замовлення" className={s.orderTitle} />
          <div className={s.orderWrapper}>
            <OrderForm onClose={onClose} />
            <OrderCart onClose={onClose} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default OrderCheckoutPage;
