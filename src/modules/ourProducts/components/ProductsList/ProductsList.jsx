import { useEffect, useState } from 'react';
import ProductItem from '../ProductsItem/ProductsItem';
import style from './ProductsList.module.scss';
import { icons } from 'shared/icons';

const ProductsList = ({ currentCategory, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const filteredProducts = data.filter(
    (product) => product.category === currentCategory
  );

  const showArrows = filteredProducts.length > 3;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(filteredProducts.length - 3, prevIndex + 1)
    );
  };

  if (!isDesktop) {
    return (
      <>
        {filteredProducts.length > 0 && (
          <ul className={style.productsList}>
            {filteredProducts.map((product) => (
              <li key={product.id} className={style.productItem}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }

  return (
    <div className={style.thumbList}>
      {showArrows && (
        <button
          className={style.prevButton}
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          <svg width="48" height="48">
            <use xlinkHref={`${icons}#arrow-left`} />
          </svg>
        </button>
      )}

      {filteredProducts.length > 0 && (
        <ul className={style.swiperWrapper}>
          {filteredProducts
            .slice(currentIndex, currentIndex + 3)
            .map((product) => (
              <li key={product.id} className={style.listDesctop}>
                <ProductItem product={product} />
              </li>
            ))}
        </ul>
      )}

      {showArrows && (
        <button
          className={style.nextButton}
          onClick={handleNextClick}
          disabled={currentIndex === filteredProducts.length - 3}
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
