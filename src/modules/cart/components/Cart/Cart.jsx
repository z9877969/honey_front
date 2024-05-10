import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProducts,
  selectTotalPrice,
  setIsClose,
  setIsOpen,
} from '@redux/cart/cartSlice';
import { icons as sprite } from 'shared/icons';
import { ANIMATION } from 'shared/constants';
import { scrollToElementById } from 'helpers/scrollToElementById';
import CartContainer from '../CartContainer/CartContainer';
import EmptyCart from '../EmptyCartContainer/EmptyCartContainer';
import s from './Cart.module.scss';

const Cart = ({ onClose }) => {
  const products = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    dispatch(setIsOpen());

    return () => {
      dispatch(setIsClose());
    };
  }, [dispatch]);

  const handleClose = () => {
    onClose();
  };

  const handleBackBtn = () => {
    onClose();
    scrollToElementById('ourProducts');
  };

  const handleCloseBackdrop = (e) =>
    e.target === e.currentTarget && handleCloseAnimation();

  const handleCloseAnimation = () => {
    setClosing(true);
    const id = setTimeout(() => {
      onClose();
      clearTimeout(id);
    }, ANIMATION.DURATION);
  };

  return (
    <div className={s.modalBackdrop} onClick={handleCloseBackdrop}>
      <div className={`${s.modalContainer} ${closing ? s.closing : ''}`}>
        <button
          className={s.modalCloseBtn}
          type="button"
          onClick={handleCloseAnimation}
        >
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
