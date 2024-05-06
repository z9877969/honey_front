import { useState } from 'react';
import style from './ProductsItem.module.scss';
import { icons as sprite } from 'shared/icons';

const ProductItem = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(true);
  const [imageError, setImageError] = useState(false);

  const firstWeightValue = product.variants[0].size;
  const lastWeightValue = product.variants[product.variants.length - 1].size;
  const firstPriceValue = product.variants[0].price;
  const lastpriceValue = product.variants[product.variants.length - 1].price;

  const checkLength = product.variants.length !== 1;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      {imageLoaded && (
        <div className={style.productInfoBlock}>
          {!imageError ? (
            <div className={style.imgThumb}>
              <img
                className={style.imgProduct}
                src={product.img}
                alt={product.name}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
          ) : (
            <div className={style.imgThumb}>
              <svg width="100" height="100">
                <use xlinkHref={`${sprite}#logo`} />
              </svg>
            </div>
          )}
          <div className={style.productInfo}>
            <h3 className={style.nameTitle}>{product.prodName}</h3>
            <div className={style.infoThumb}>
              <h4 className={style.titleInfo}>Вага:</h4>{' '}
              <p className={style.weight}>
                <span>{firstWeightValue}</span>
                {checkLength && <span> - {lastWeightValue}</span>}
              </p>
            </div>
            <div className={style.infoThumb}>
              <h4 className={style.titleInfo}>Ціна:</h4>{' '}
              <p className={style.price}>
                <span>{firstPriceValue}</span>
                {checkLength && <span> - {lastpriceValue}</span>}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
