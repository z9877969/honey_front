import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProducts,
  selectTotalPrice,
  setIsClose,
  setIsOpen,
} from '@redux/cart/cartSlice';
import CartContainer from '../CartContainer/CartContainer';
import EmptyCart from '../EmptyCartContainer/EmptyCartContainer';
import { icons as sprite } from 'shared/icons';
import s from './Cart.module.scss';

const Cart = ({ onClose }) => {
  const products = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsOpen());

    return () => {
      dispatch(setIsClose());
    };
  }, [dispatch]);

  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = (e) => {
    e.target === e.currentTarget && onClose();
  };

  const scrollToShopping = () => {
    const productsSection = document.getElementById('ourProducts');
    if (productsSection) {
      window.scrollTo({
        top: productsSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleBackBtn = () => {
    onClose();
    scrollToShopping();
  };

  return (
    <div className={s.modalBackdrop} onClick={handleBackdropClick}>
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
