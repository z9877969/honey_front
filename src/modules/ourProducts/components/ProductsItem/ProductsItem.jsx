import style from './ProductsItem.module.scss';
import { naturalAcaciaHoney } from '../../images/index';

const ProductItem = ({ product }) => {
  const firstWeightValue = product.variants[0].size;
  const lastWeightValue = product.variants[product.variants.length - 1].size;
  const firstPriceValue = product.variants[0].price;
  const lastpriceValue = product.variants[product.variants.length - 1].price;

  const checkLength = product.variants.length !== 1;

  return (
    <div className={style.productInfoBlock}>
      <img
        className={style.imgProduct}
        src={naturalAcaciaHoney}
        alt={product.name}
      />
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
  );
};

export default ProductItem;
