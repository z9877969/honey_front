import style from './ProductsItem.module.scss';
const ProductItem = ({ product }) => {
  return (
    <div>
      <img className={style.imgProduct} src={product.img} alt={product.name} />
      <div className={style.productInfo}>
        <h3 className={style.nameTitle}>{product.name}</h3>
        <div className={style.infoThumb}>
          <h4 className={style.titleInfo}>Вага:</h4>{' '}
          <p className={style.weight}>{product.weight}</p>
        </div>
        <div className={style.infoThumb}>
          <h4 className={style.titleInfo}>Ціна:</h4>{' '}
          <p className={style.price}>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
