import s from './OrderCartItem.module.scss';

const OrderCartItem = ({ product }) => {
  return (
    <>
      <div className={s.imgWrapper}>
        <img src={product.image} alt={product.title} width={132} height={132} />
      </div>
      <div className={s.textWrapper}>
        <p>{product.title}</p>
        <p>
          <span>{product.weight}</span>
          <span>x{product.quantity}</span>
        </p>
        <span>{`${product.price}грн`}</span>
      </div>
    </>
  );
};

export default OrderCartItem;
