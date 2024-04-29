import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '@redux/cart/cartSlice';
import {
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
} from '@redux/cart/cartSlice';
// import { Container } from "shared/components";
import CartContainer from '../CartContainer/CartContainer';
import EmptyCart from '../EmptyCartContainer/EmptyCartContainer';
import sprite from '../../../../shared/icons/sprite.svg';
import s from './Cart.module.scss';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(true);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const totalPrice = products.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleBackLink = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const handleBackButton = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <section>
        <div className={s.backdrop}>
          <div className={s.modalContainer}>
            <button
              className={s.modalCloseBtn}
              type="button"
              onClick={handleClose}
            >
              <svg className={s.modalCloseIcon}>
                <use xlinkHref={`${sprite}#cross-close`}></use>
              </svg>
            </button>
            <h2 className={s.modalTitle}>Ваш кошик</h2>
            {products.length > 0 ? (
              <CartContainer
                products={products}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                handleDelete={handleDelete}
                handleBackLink={handleBackLink}
                totalPrice={totalPrice}
              />
            ) : (
              <EmptyCart handleBackButton={handleBackButton} />
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default Cart;
