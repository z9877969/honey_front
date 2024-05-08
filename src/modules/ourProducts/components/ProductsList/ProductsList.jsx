import { useCallback, useEffect, useState } from 'react';
import ProductItem from '../ProductsItem/ProductsItem';
import style from './ProductsList.module.scss';
import { icons } from 'shared/icons';
import { PopUpDetailedInfo } from 'modules/ourProducts/';
import { useModal } from 'hooks/useModal';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductsList = ({ currentCategory, data }) => {
  const [swiper, setSwiper] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1440);

  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(
    (product) => {
      setModal(<PopUpDetailedInfo product={product} onClose={closeModal} />);
    },
    [setModal, closeModal]
  );
  const handleDetailedInfo = (productToDetail) => {
    openModal(productToDetail);
  };

  const filteredProducts = data.filter(
    (product) => product.category === currentCategory
  );
  const showArrows = filteredProducts.length > 3;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isDesktop) {
    return (
      <>
        {filteredProducts.length > 0 && (
          <ul className={style.productsList}>
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className={style.productItem}
                onClick={() => handleDetailedInfo(product)}
              >
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }

  return (
    <>
      <div className={style.thumbList}>
        {showArrows && (
          <button
            className={style.prevButton}
            onClick={() => swiper && swiper.slidePrev()}
          >
            <svg width="48" height="48">
              <use xlinkHref={`${icons}#arrow-left`} />
            </svg>
          </button>
        )}

        {filteredProducts.length > 0 && (
          <Swiper
            rewind={true}
            onSwiper={setSwiper}
            slidesPerView={3}
            className={style.swiperWrapper}
          >
            {filteredProducts.map((product) => (
              <SwiperSlide
                key={product.id}
                className={style.listDesctop}
                onClick={() => handleDetailedInfo(product)}
              >
                <ProductItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {showArrows && (
          <button
            className={style.nextButton}
            onClick={() => swiper && swiper.slideNext()}
          >
            <svg width="48" height="48">
              <use xlinkHref={`${icons}#arrow-right`} />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default ProductsList;
