import s from './OrderCartItem.module.scss';

const OrderCartItem = ({
  product: { image, title, weight, quantity, price },
}) => {
  const productName = title.includes('натуральний')
    ? title.replace('натуральний', '')
    : title.includes('Стільники')
      ? `${title} (соти)`
      : title;

  const productQuantity =
    weight === '100'
      ? `${weight} г`
      : weight === '250'
        ? `${weight} мл`
        : `${weight} л`;

  const productTotalPrice = `${price * quantity} грн`;

  return (
    <>
      <div className={s.imgWrapper}>
        <img src={image} alt={title} width={132} height={132} />
      </div>
      <div className={s.textWrapper}>
        <p>{productName}</p>
        <p>
          <span>{productQuantity}</span>
          <span>&#215;{quantity}</span>
        </p>
        <span>{productTotalPrice}</span>
      </div>
    </>
  );
};

export default OrderCartItem;
