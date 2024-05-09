import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import clsx from 'clsx';
import { selectProductsQuantity } from '@redux/cart/cartSlice';
import { useModal } from 'hooks/useModal';
import { Cart } from 'modules/cart';
import { icons as sprite } from 'shared/icons';
import s from './BasketButton.module.scss';

const BasketButton = ({ classBtnSize, blockOpenCart = false }) => {
  const qtyOfProductsInCart = useSelector(selectProductsQuantity);
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(<Cart onClose={closeModal} />);
  }, [setModal, closeModal]);

  const handleOpenCart = () => {
    if (blockOpenCart) return;
    openModal();
  };

  const chooseClass = () => {
    if (classBtnSize) {
      return classBtnSize;
    }
    return s.classBtnSize;
  };

  return (
    <div
      className={clsx(
        chooseClass(),
        blockOpenCart ? s.cursorDefault : s.cursorPointer
      )}
      onClick={handleOpenCart}
    >
      <div className={s.hangToBtn}>
        <svg className={s.basketCartIcon}>
          <use xlinkHref={`${sprite}#basket`} />
        </svg>
        {qtyOfProductsInCart > 0 && (
          <span className={s.basketCartCircle}>
            <span className={s.basketCartQty}>
              {qtyOfProductsInCart > 9 ? '9+' : qtyOfProductsInCart}
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default BasketButton;
