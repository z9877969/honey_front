import { useSelector } from 'react-redux';
import { selectProducts, selectTotalPrice } from '@redux/cart/cartSlice';
import CartContainer from '../CartContainer/CartContainer';
import EmptyCart from '../EmptyCartContainer/EmptyCartContainer';
import { icons as sprite } from 'shared/icons';
import s from './Cart.module.scss';
import { useState } from 'react';

const Cart = ({ onClose }) => {
  const products = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => onClose(), 500);
  };

  const handleBackBtn = () => {
    setClosing(true);
    setTimeout(() => onClose(), 500);
  };

  return (
    <div className={s.modalBackdrop} onClick={handleClose}>
      <div
        className={`${s.modalContainer} ${closing ? s.closing : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
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
