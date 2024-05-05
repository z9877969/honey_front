import {
  createProductName,
  createProductTotalPrice,
} from 'modules/order/helpers';
import s from './OrderCartItem.module.scss';

const OrderCartItem = ({
  product: { image, title, weight, quantity, price },
}) => {
  return (
    <>
      <div className={s.imgWrapper}>
        <img src={image} alt={title} width={132} height={132} />
      </div>
      <div className={s.textWrapper}>
        <p>{createProductName(title)}</p>
        <p>
          <span>{weight}</span>
          <span>&#215;{quantity}</span>
        </p>
        <span>{`${createProductTotalPrice(quantity, price)} грн`}</span>
      </div>
    </>
  );
};

export default OrderCartItem;
