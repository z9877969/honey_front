import { useEffect, useState } from 'react';
import {
  PopUpDetailedBasemet,
  PopUpDetailedDescription,
  PopUpDetailedQuantity,
  PopUpDetailedWeight,
} from 'modules/ourProducts';
import { getInitialProductVariants } from 'modules/ourProducts/service/service';
import { icons } from 'shared/icons';
import s from './PopUpDetailedInfo.module.scss';

const PopUpDetailedInfo = ({ product, onClose }) => {
  const [productVariants, setProductVariants] = useState([]);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => onClose(), 500);
  };

  useEffect(() => {
    setProductVariants(getInitialProductVariants(product));
  }, [product]);

  const handleChooseVariant = (size) => {
    const locArr = productVariants.map((item) => {
      item.quantity = 1;
      if (item.size === size) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
      return item;
    });
    setProductVariants(locArr);
  };

  const handleIncrement = (direction) => {
    const locArr = productVariants.map((item) => {
      if (item.isActive === true) {
        if (direction) {
          item.quantity += 1;
        } else {
          item.quantity -= 1;
        }
        if (item.quantity < 1) {
          item.quantity = 1;
        }
        if (item.quantity > 10) {
          item.quantity = 10;
        }
      }
      return item;
    });
    setProductVariants(locArr);
  };

  return (
    <div className={s.backdrop} onClick={handleClose}>
      <div
        className={`${s.modalContent}  ${closing ? s.closing : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={s.modalCloseBtn} onClick={handleClose}>
          <svg className={s.modalCloseBtnIcon}>
            <use xlinkHref={`${icons}#cross-close`} />
          </svg>
        </button>

        <img className={s.modalImage} src={product.img} alt="Product image" />

        <div className={s.dataArea}>
          <PopUpDetailedDescription product={product} />
          <PopUpDetailedWeight
            productVariants={productVariants}
            handleChooseVariant={handleChooseVariant}
          />
          <PopUpDetailedQuantity
            productVariants={productVariants}
            handleIncrement={handleIncrement}
          />
          <PopUpDetailedBasemet
            product={product}
            productVariants={productVariants}
          />
        </div>
      </div>
    </div>
  );
};

export default PopUpDetailedInfo;
