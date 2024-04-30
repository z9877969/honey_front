import { Container, Logo } from 'shared/components';
import s from './OrderHeader.module.scss';

const OrderHeader = () => {
  return (
    <div className={s.orderHeader}>
      <Container className={s.orderContainer}>
        <Logo linkClassName={s.orderLogo} id="logo" />
      </Container>
    </div>
  );
};

export default OrderHeader;
