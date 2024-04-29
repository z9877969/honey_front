import s from './PopUpDetailedInfo.module.scss';
import { icons } from 'shared/icons';
import { useState } from 'react';
// import dbProducts from '../../../modules/ourProducts/data/dbProducts';
// import dbCategories from '../data/dbCategories';

const PopUpDetailedInfo = () => {
  const [selectedWeight, setSelectedWeight] = useState('0.25-3.0 л');
  // const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(true);
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

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
  };

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
          <div className={s.modalcontent}>
            <div className={s['modal-consistance']}>
              <button type="button" className={s['modal-close-btn']}>
                {' '}
                <svg className={s['modal-close-btn-icon']} onClick={closeModal}>
                  <use
                    xlinkHref={`${icons}#cross-close`}
                    width={16}
                    height={16}
                  />
                </svg>
              </button>
              <img className={s['modal-image']} src="" alt="" />
              <div className={s.maincontext}>
                <h2 className={s['modal-heading']}>Мед акацієвий</h2>
                <p className={s['modal-text']}></p>

                <h3 className={s['modal-subheading']}>Вага</h3>
                <div className={s['weight-container']}>
                  <ul className={s['weight-list']}>
                    <li
                      className={`${s['weight-item']} ${selectedWeight === '0.25-3.0 л' ? s.selected : ''}`}
                      onClick={() => handleWeightChange('0.25-3.0 л')}
                    >
                      <svg className={s['weight-icon']}>
                        <use href=""></use>
                      </svg>
                    </li>
                    <li
                      className={`${s['weight-item']} ${selectedWeight === '0.25-3.0 л' ? s.selected : ''}`}
                      onClick={() => handleWeightChange('0.25-3.0 л')}
                    >
                      <svg className={s['weight-icon']}>
                        <use href=""></use>
                      </svg>
                    </li>
                    <li
                      className={`${s['weight-item']} ${selectedWeight === '0.25-3.0 л' ? s.selected : ''}`}
                      onClick={() => handleWeightChange('0.25-3.0 л')}
                    >
                      <svg className={s['weight-icon']}>
                        <use href=""></use>
                      </svg>
                    </li>
                    <li
                      className={`${s['weight-item']} ${selectedWeight === '0.25-3.0 л' ? s.selected : ''}`}
                      onClick={() => handleWeightChange('0.25-3.0 л')}
                    >
                      <svg className={s['weight-icon']}>
                        <use href=""></use>
                      </svg>
                    </li>
                    <li
                      className={`${s['weight-item']} ${selectedWeight === '0.25-3.0 л' ? s.selected : ''}`}
                      onClick={() => handleWeightChange('0.25-3.0 л')}
                    >
                      <svg className={s['weight-icon']}>
                        <use href=""></use>
                      </svg>
                    </li>
                  </ul>
                </div>
                <div className={s['modal-counter']}>
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
                </div>
              </div>
              <div className={s['order-container']}>
                <button type="submit" className={s['order-btn']}>
                  Додати в кошик
                </button>
                <svg className={s['shopping-icon']}>
                  <use href=""></use>
                </svg>
                <span className={s['product-price']}>100 грн</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpDetailedInfo;
