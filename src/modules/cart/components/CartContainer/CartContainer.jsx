import Product from '../Product/Product';
import { useModal } from 'hooks/useModal';
import { useCallback } from 'react';
import { OrderCheckoutPage } from 'modules/order';
import { icons as sprite } from 'shared/icons';
import s from './CartContainer.module.scss';

const CartContainer = ({
  products,
  handleBackBtn,
  totalPrice,
  handleClose,
}) => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(<OrderCheckoutPage onClose={closeModal} />);
  }, [setModal, closeModal]);

  return (
    <>
      <div className={s.listContainer}>
        <ul className={s.list}>
          {products.map((item) => {
            return (
              <li key={item.id} className={s.listItem}>
                <Product item={item} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.listBorder}></div>
      <div className={s.modalBottomWrapper}>
        <div className={s.btnWrapper}>
          <button className={s.modalBackBtn} onClick={handleBackBtn}>
            <svg className={s.backArrowIcon}>
              <use xlinkHref={`${sprite}#arrow-link`}></use>
            </svg>
            Повернутися до покупок
          </button>
        </div>
        <div className={s.modalSubmitWrapper}>
          <p className={s.totalPrice}>{totalPrice} грн</p>
          <button
            className={s.modalSubmitBtn}
            type="button"
            onClick={() => {
              handleClose();
              openModal();
            }}
          >
            Оформити замовлення
          </button>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
