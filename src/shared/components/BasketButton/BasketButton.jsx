import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { selectProductsQuantity } from '@redux/cart/cartSlice';
import { useModal } from 'hooks/useModal';
import { Cart } from 'modules/cart';
import { icons as sprite } from 'shared/icons';
import s from './BasketButton.module.scss';

const BasketButton = () => {
  const qtyOfProductsInCart = useSelector(selectProductsQuantity);
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(<Cart onClose={closeModal} />);
  }, [setModal, closeModal]);

  const handleOpenCart = () => {
    openModal();
  };

  return (
    <button type="button" className={s.hangToButton} onClick={handleOpenCart}>
      <svg className={s.basketCartIcon}>
        <use xlinkHref={`${sprite}#basket`} />
      </svg>
      <span className={s.basketCartCircle}>
        <span className={s.basketCartQty}>{qtyOfProductsInCart}</span>
      </span>
    </button>
  );
};

export default BasketButton;
