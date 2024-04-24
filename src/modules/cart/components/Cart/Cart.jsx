import { Container } from 'shared/components';
import s from './Cart.module.scss';

const Cart = () => {
  return (
    <section>
      <Container>
        <form>
          <h2 className={s.title}>Cart Products List</h2>
        </form>
      </Container>
    </section>
  );
};

export default Cart;
