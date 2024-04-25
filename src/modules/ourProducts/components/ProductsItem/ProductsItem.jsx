import style from './ProductsItem.module.scss';
const ProductItem = ({ product }) => {
  return (
    <>
      <img className={style.imgProduct} src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <h4>Вага</h4> <p>{product.weight}</p>
      <h4>Ціна</h4> <p>{product.price}</p>
    </>
  );
};

export default ProductItem;
