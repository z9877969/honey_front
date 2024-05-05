import { useCallback, useEffect, useState } from 'react';
//old
// import { ModalBackdrop } from 'shared/components';
//old
import { Cart } from 'modules/cart';
import {
  PopUpDetailedBasemet,
  PopUpDetailedDescription,
  PopUpDetailedQuantity,
  PopUpDetailedWeight,
} from 'modules/ourProducts';
import { getInitialProductVariants } from 'modules/ourProducts/service/service';
import { icons } from 'shared/icons';
import s from './PopUpDetailedInfo.module.scss';
import { useModal } from 'hooks/useModal';

const PopUpDetailedInfo = ({ product, onClose }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  const [productVariants, setProductVariants] = useState([]);

  useEffect(() => {
    setProductVariants(getInitialProductVariants(product));
  }, [product]);

  //new
  const setModal = useModal();
  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(<Cart onClose={closeModal} />);
  }, [setModal, closeModal]);
  // const handleDetailedInfo = (product) => {
  //   setProductToDetail(product);
  //   openModal();
  // };
  //new

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

  // const closeModal = () => {
  //   onClose();
  // };

  const handleOpenCart = () => {
    openModal();
    // setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      {/* {isCartOpen && (
        <ModalBackdrop>
          <Cart onClose={handleOpenCart} />
        </ModalBackdrop>
      )} */}

      <div className={s.backdrop}>
        <div className={s.modalContent}>
          <button type="button" className={s.modalCloseBtn}>
            <svg className={s.modalCloseBtnIcon} onClick={onClose}>
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
              handleOpenCart={handleOpenCart}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpDetailedInfo;
