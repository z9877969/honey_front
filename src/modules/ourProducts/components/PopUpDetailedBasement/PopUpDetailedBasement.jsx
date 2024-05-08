import { useDispatch, useSelector } from 'react-redux';
import {
  addOrUpdateProduct,
  selectProductsQuantity,
} from '@redux/cart/cartSlice';
import { BasketButton } from 'shared/components';
import { returnCalculations } from 'modules/ourProducts/service/service';
import s from './PopUpDetailedBasement.module.scss';
import { useModal } from 'hooks/useModal';
import { useCallback } from 'react';
import { Cart } from 'modules/cart';

const PopUpDetailedBasement = ({ product, productVariants }) => {
  const qtyOfProductsInCart = useSelector(selectProductsQuantity);
  const dispach = useDispatch();

  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(<Cart onClose={closeModal} />);
  }, [setModal, closeModal]);

  const handleAddToCart = () => {
    const idx = productVariants.findIndex((item) => item.isActive === true);

    if (idx === -1) return;
    const dataToCart = {
      id: productVariants[idx].id,
      title: product.prodName,
      image: product.img,
      weight: productVariants[idx].size,
      quantity: productVariants[idx].quantity,
      price: productVariants[idx].price,
    };
    dispach(addOrUpdateProduct(dataToCart));
    openModal();
  };

  return (
    <div className={s.basement}>
      <span className={s.finalCountSum}>
        {returnCalculations(productVariants, 'total')}
      </span>
      <div className={s.shopCart}>
        {qtyOfProductsInCart > 0 && (
          <BasketButton classBtnSize={s.classBtnSize} blockOpenCart={true} />
        )}
        <button
          type="button"
          className={s.addToCartBtn}
          onClick={handleAddToCart}
        >
          Додати в кошик
        </button>
      </div>
    </div>
  );
};

export default PopUpDetailedBasement;
