import { useSelector } from 'react-redux';
import { selectProducts, selectTotalPrice } from '@redux/cart/cartSlice';
import CartContainer from '../CartContainer/CartContainer';
import EmptyCart from '../EmptyCartContainer/EmptyCartContainer';
import sprite from '../../../../shared/icons/sprite.svg';
import s from './Cart.module.scss';

const Cart = ({ onClose }) => {
  const products = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);

  const handleClose = () => {
    onClose();
  };

  const handleBackBtn = () => {
    onClose();
  };

  return (
    <div className={s.modalBackdrop}>
      <div className={s.modalContainer}>
        <button className={s.modalCloseBtn} type="button" onClick={handleClose}>
          <svg className={s.modalCloseIcon}>
            <use xlinkHref={`${sprite}#cross-close`}></use>
          </svg>
        </button>
        <h2 className={s.modalTitle}>Ваш кошик</h2>
        {products.length > 0 ? (
          <CartContainer
            products={products}
            handleBackBtn={handleBackBtn}
            handleClose={handleClose}
            totalPrice={totalPrice}
          />
        ) : (
          <EmptyCart handleBackButton={handleBackBtn} />
        )}
      </div>
    </div>
  );
};

export default Cart;
