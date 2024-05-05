import { useDispatch, useSelector } from 'react-redux';
import { shopCartSet } from '../../images';
import s from './PopUpDetailedBasemet.module.scss';

import {
  addOrUpdateProduct,
  selectProductsQuantity,
} from '@redux/cart/cartSlice';
import { retCalc } from 'modules/ourProducts/service/service';

const PopUpDetailedBasemet = ({ product, productVariants, handleOpenCart }) => {
  const qtyOfProductsInCart = useSelector(selectProductsQuantity);
  const dispach = useDispatch();

  const handleAddToCart = () => {
    const idx = productVariants.findIndex((item) => item.isActive === true);
    if (idx >= 0) {
      const dataToCart = {
        id: product.id,
        title: product.prodName,
        image: product.img,
        weight: productVariants[idx].size,
        quantity: productVariants[idx].quantity,
        price: productVariants[idx].price,
      };
      dispach(addOrUpdateProduct(dataToCart));
    }
  };

  return (
    <div className={s.basement}>
      <span className={s.finalCountSum}>{retCalc(productVariants, 'sum')}</span>
      <div className={s.shopCart}>
        <div className={s.shopCartWrapper}>
          {qtyOfProductsInCart > 0 && (
            <>
              <svg className={s.shopCartIcon} onClick={handleOpenCart}>
                <use
                  className={s.shopCartIcon}
                  xlinkHref={`${shopCartSet}#shop-bag-full`}
                />
              </svg>
              <span className={s.shopCartText}>{qtyOfProductsInCart}</span>
            </>
          )}
        </div>
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

export default PopUpDetailedBasemet;
