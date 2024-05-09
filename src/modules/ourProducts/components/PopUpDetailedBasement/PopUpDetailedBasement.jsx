import { useDispatch, useSelector } from 'react-redux';
import {
  addOrUpdateProduct,
  selectProductsQuantity,
} from '@redux/cart/cartSlice';
import { BasketButton } from 'shared/components';
import { returnCalculations } from 'modules/ourProducts/service/service';
import s from './PopUpDetailedBasement.module.scss';

const PopUpDetailedBasement = ({ product, productVariants }) => {
  const qtyOfProductsInCart = useSelector(selectProductsQuantity);
  const dispach = useDispatch();

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
  };

  return (
    <div className={s.basement}>
      <span className={s.finalCountSum}>
        {returnCalculations(productVariants, 'total')}
      </span>
      <div className={s.shopCart}>
        {qtyOfProductsInCart > 0 && (
          <BasketButton classBtnSize={s.classBtnSize} />
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
