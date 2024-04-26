import { useEffect, useState } from 'react';
import ProductItem from '../ProductsItem/ProductsItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './ProductsList.module.scss';
import icons from '../../../../shared/icons/sprite.svg';

const ProductsList = ({ productsList }) => {
  const [swiper, setSwiper] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const showArrows = productsList.length > 3;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isDesktop) {
    return (
      <div>
        {productsList.length > 0 && (
          <ul>
            {productsList.map((product) => (
              <li key={product.id} className={style.productItem}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
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

      {productsList.length > 0 && (
        <Swiper
          onSwiper={setSwiper}
          slidesPerView={3}
          className={style.swiperWrapper}
        >
          {productsList.map((product) => (
            <SwiperSlide key={product.id} className={style.swiperSlide}>
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
  );
};

export default ProductsList;
