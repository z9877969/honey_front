import s from './PopUpDetailedInfo.module.scss';
import { icons } from 'shared/icons';
import { useState } from 'react';
import dbProducts from '../../data/dbProducts.js';
// import dbCategories from '../data/dbCategories';

const PopUpDetailedInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const products = dbProducts;

  const currenrProduct = products[0];

  const weightVariants = products.reduce((accumulator, currentProduct) => {
    const { weight } = currentProduct;
    if (!accumulator.includes(weight)) {
      accumulator.push(weight);
    }
    return accumulator;
  }, []);

  // const [selectedWeight, setSelectedWeight] = useState('0.25-3.0 л');
  // const [selectedQuantity, setSelectedQuantity] = useState(1);

  // const [products, setProducts] = useState([]);
  // const [currentCategory, setCurrentCategory] = useState('Мед');

  // useEffect(() => {
  //   setCurrentCategory(dbCategories[0].key);
  // }, []);

  // useEffect(() => {
  //   setProducts(() =>
  //     dbProducts.filter((product) => product.category === currentCategory)
  //   );
  // }, [currentCategory]);

  // const handleCategoryChange = (category) => {
  //   setCurrentCategory(category);
  // };

  // const handleWeightChange = (weight) => {
  //   setSelectedWeight(weight);
  // };

  // const handleQuantityChange = (type) => {
  //   if (type === 'increase' && selectedQuantity < 10) {
  //     setSelectedQuantity(selectedQuantity + 1);
  //   } else if (type === 'decrease' && selectedQuantity > 1) {
  //     setSelectedQuantity(selectedQuantity - 1);
  //   }
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const addToCart = () => {};

  return (
    <>
      {isModalOpen && (
        <div className={s.backdrop}>
          <div className={s.modalContent}>
            {/* <div className={s.modalConsistance}> */}
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
              src={currenrProduct.img}
              alt="Product image"
            />
            <div className={s.descriptionArea}>
              <h3 className={s.productName}>{currenrProduct.name}</h3>
              <p className={s.productDescription}></p>
              <h3 className={s.prodDescriptionHeader}>Вага</h3>
              <div className={s.weightContainer}>
                <ul className={s.weightList}>
                  {weightVariants.map((weight, index) => (
                    <li key={index} className={s.weightItem}>
                      {weight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={s.quantityContainer}>
                <h3 className={s.prodDescriptionHeader}>Кількість</h3>
                <button>+</button>
                <span></span>
                <button>-</button>
              </div>
              {/* <div className={s['modal-counter']}>
                <h3 className={s['counter-heading']}>Кількість</h3>
                <div className={s['counter-container']}>
                  <button type="button" className={s['counter-btn-minus']}>
                    <svg className={s['counter-icon']}>
                      <use
                        xlinkHref={`${icons}#minus`}
                        width={26.67}
                        height={26.67}
                      ></use>
                    </svg>
                  </button>
                  <button type="button" className={s['counter-btn-plus']}>
                    <svg className={s['counter-icon']}>
                      <use
                        xlinkHref={`${icons}#plus`}
                        width={26.67}
                        height={26.67}
                      ></use>
                    </svg>
                  </button>
                </div>
              </div> */}
            </div>
            {/* <div className={s['order-container']}>
              <button type="submit" className={s['order-btn']}>
                Додати в кошик
              </button>
              <svg className={s['shopping-icon']}>
                <use href=""></use>
              </svg>
              <span className={s['product-price']}>100 грн</span>
            </div> */}
            {/* </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpDetailedInfo;
