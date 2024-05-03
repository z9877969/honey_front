import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { icons } from 'shared/icons';

import s from './PopUpDetailedInfo.module.scss';

import acacia_honey_img from '../../images/natural-acacia-honey.jpg';

import { ModalBackdrop } from 'shared/components';
import { Cart } from 'modules/cart';
import PopUpDetailedBasemet from '../PopUpDetailedBasemet/PopUpDetailedBasemet';
import { retCalc } from 'modules/ourProducts/service/service';

const getInitialProductVariants = (product) => {
  const productVariants = product.variants.reduce((accumulator, product) => {
    const { size, price } = product;
    let priceN = 0;
    if (price) {
      const idx = price.indexOf('грн');
      if (idx) {
        priceN = Number(price.slice(0, idx));
      }
    }
    if (!accumulator.includes(size)) {
      accumulator.push({
        size: size,
        price: priceN,
        quantity: 1,
        isActive: false,
      });
    }
    return accumulator;
  }, []);

  if (productVariants.length > 0) {
    productVariants[0].isActive = true;
  }

  return productVariants;
};

const PopUpDetailedInfo = ({ product, onClose }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productVariants, setProductVariants] = useState([]);

  useEffect(() => {
    setProductVariants(getInitialProductVariants(product));
  }, [product]);
  if (product) {
    product.img = acacia_honey_img;
  }

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

  const closeModal = () => {
    onClose();
  };

  const handleOpenCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      {isCartOpen && (
        <ModalBackdrop>
          <Cart onClose={handleOpenCart} />
        </ModalBackdrop>
      )}

      <div className={s.backdrop}>
        <div className={s.modalContent}>
          <button type="button" className={s.modalCloseBtn}>
            <svg className={s.modalCloseBtnIcon} onClick={closeModal}>
              <use xlinkHref={`${icons}#cross-close`} />
            </svg>
          </button>

          <img className={s.modalImage} src={product.img} alt="Product image" />

          <div className={s.dataArea}>
            <div className={s.textArea}>
              <h3 className={s.productName}>{product.prodName}</h3>
              <p className={s.productText}>{product.descr}</p>
              <p className={s.productText}>
                <span className={s.prodDescriptionHeader}>
                  Смакові особливості:
                </span>
                {` ${product.flavor}`}
              </p>
              <p className={s.productText}>
                <span className={s.prodDescriptionHeader}>
                  Корисні властивості:
                </span>
                {` ${product.advantage}`}
              </p>
              <p className={s.productText}>
                <span className={s.prodDescriptionHeader}>Особливості:</span>
                {` ${product.features}`}
              </p>
            </div>
            <div className={s.weightContainer}>
              <h3 className={s.prodDescriptionHeader}>Вага</h3>
              <ul className={s.weightList}>
                {productVariants.map((variant, index) => (
                  <li
                    key={index}
                    className={clsx(
                      s.weightItem,
                      variant.isActive && s.weightItemActive
                    )}
                    onClick={() => {
                      handleChooseVariant(variant.size);
                    }}
                  >
                    {variant.size}
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.quantityContainer}>
              <h3 className={clsx(s.prodQtyHeader, s.mR12)}>Кількість</h3>
              <button
                type="button"
                className={s.qtyBtn}
                onClick={() => handleIncrement(false)}
              >
                <svg className={s.counterIcon}>
                  <use
                    xlinkHref={`${icons}#minus`}
                    width="32"
                    height="32"
                  ></use>
                </svg>
              </button>
              <span className={s.qtyView}>
                {retCalc(productVariants, 'qty')}
              </span>
              <button
                type="button"
                className={s.qtyBtn}
                onClick={() => handleIncrement(true)}
              >
                <svg className={s.counterIcon}>
                  <use xlinkHref={`${icons}#plus`} width="32" height="32" />
                </svg>
              </button>
            </div>
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
