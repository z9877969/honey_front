import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { icons } from 'shared/icons';
// import honey_db from 'shared/data/honey_db.json';
import acacia_honey_img from '../../images/natural-acacia-honey.jpg';
import s from './PopUpDetailedInfo.module.scss';

const getInitialProductVariants = (currentProduct) => {
  const currentProductVariants = currentProduct.variants.reduce(
    (accumulator, currentProduct) => {
      const { size, price } = currentProduct;
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
    },
    []
  );

  if (currentProductVariants.length > 0) {
    currentProductVariants[0].isActive = true;
  }

  return currentProductVariants;
};

const PopUpDetailedInfo = ({ product, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [productVariants, setProductVariants] = useState([]);

  // const currentProduct = honey_db[0];
  const currentProduct = product;

  useEffect(() => {
    setProductVariants(getInitialProductVariants(currentProduct));
  }, [currentProduct]);
  if (currentProduct) {
    currentProduct.img = acacia_honey_img;
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

  const retCalc = (calcVariant) => {
    let result = '';
    const idx = productVariants.findIndex((item) => item.isActive === true);
    if (idx >= 0) {
      switch (calcVariant) {
        case 'qty':
          result = productVariants[idx].quantity;
          break;
        case 'sum':
          result =
            (
              productVariants[idx].quantity * productVariants[idx].price
            ).toString() + ' грн';
          break;
        default:
          result = '';
          break;
      }
    }
    return result;
  };

  const handleIncrement = (direction) => {
    const locArr = productVariants.map((item) => {
      if (item.isActive === true) {
        if (direction) {
          item.quantity += 1;
        } else {
          item.quantity -= 1;
        }
        if (item.quantity < 0) {
          item.quantity = 0;
        }
      }
      return item;
    });
    setProductVariants(locArr);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className={s.backdrop}>
          <div className={s.modalContent}>
            <button type="button" className={s.modalCloseBtn}>
              <svg className={s.modalCloseBtnIcon} onClick={closeModal}>
                <use
                  xlinkHref={`${icons}#cross-close`}
                  width="16"
                  height="16"
                />
              </svg>
            </button>
            <img
              className={s.modalImage}
              src={currentProduct.img}
              alt="Product image"
            />
            <div className={s.descriptionArea}>
              <h3 className={s.productName}>{currentProduct.prodName}</h3>
              <p className={s.productText}>{currentProduct.descr}</p>
              <p className={s.productText}>
                <span className={s.prodDescriptionHeader}>
                  Смакові особливості:
                </span>
                {` ${currentProduct.flavor}`}
              </p>
              <p className={s.productText}>
                <span className={s.prodDescriptionHeader}>
                  Корисні властивості:
                </span>
                {` ${currentProduct.advantage}`}
              </p>
              <p className={s.productText}>
                <span className={s.prodDescriptionHeader}>Особливості:</span>
                {` ${currentProduct.features}`}
              </p>
              <h3 className={s.prodDescriptionHeader}>Вага</h3>
              <div className={s.weightContainer}>
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
                <span>{retCalc('qty')}</span>
                <button
                  type="button"
                  className={s.qtyBtn}
                  onClick={() => handleIncrement(true)}
                >
                  <svg className={s.counterIcon}>
                    <use
                      xlinkHref={`${icons}#plus`}
                      width="32"
                      height="32"
                    ></use>
                  </svg>
                </button>
              </div>
              <div className={s.basement}>
                <span>{retCalc('sum')}</span>

                <div className={s.orderContainer}>
                  {/* <svg className={s['shopping-icon']}>
                  <use href=""></use>
                </svg> */}
                  <button type="button" className={s.addToCartBtn}>
                    Додати в кошик
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpDetailedInfo;
