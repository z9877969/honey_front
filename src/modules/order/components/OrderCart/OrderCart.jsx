import { useSelector } from 'react-redux';
import { selectProducts, selectTotalPrice } from '@redux/cart/cartSlice';
import { GoBackButton } from 'shared/components';
import OrderTitle from '../shared/OrderTitle/OrderTitle';
import OrderCartItem from '../OrderCartItem/OrderCartItem';
import s from './OrderCart.module.scss';
import CustomScrollWrapper from 'shared/components/CustomScrollWrapper/CustomScrollWrapper';

import { scrollToElementById } from 'helpers/scrollToElementById';

const OrderCart = ({ onClose }) => {
  const productList = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className={s.orderCartWrapper}>
      <GoBackButton
        id="arrow-link"
        title="Повернутися до покупок"
        className={s.orderGoBack}
        onClick={() => {
          onClose();
          scrollToElementById('ourProducts');
        }}
      />
      <OrderTitle className={s.orderCartTitle}>Ваше замовлення:</OrderTitle>
      <CustomScrollWrapper wrapClassName={s.orderCartListWrapper}>
        <ul className={s.orderCartList}>
          {productList.map((product) => {
            return (
              <li className={s.orderCartItem} key={product.id}>
                <OrderCartItem product={product} />
              </li>
            );
          })}
        </ul>
      </CustomScrollWrapper>
      <OrderTitle className={s.price}>
        <span>Вартість</span>
        {`${totalPrice} грн`}
      </OrderTitle>
    </div>
  );
};

export default OrderCart;
