import GoBackButton from 'shared/components/GoBackButton/GoBackButton';
import s from './OrderCart.module.scss';

const OrderCart = () => {
  return (
    <div className={s.cartWrapper}>
      <GoBackButton
        title={'Повернутися до покупок'}
        className={s.orderGoBack}
      />
    </div>
  );
};

export default OrderCart;
