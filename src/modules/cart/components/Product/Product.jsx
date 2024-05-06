import sprite from '../../../../shared/icons/sprite.svg';
import s from './Product.module.scss';

const Product = ({ item, handleIncrease, handleDecrease, handleDelete }) => {
  return (
    <>
      <div className={s.imgWrapper}>
        <img
          className={s.itemImg}
          src={item.image}
          alt={item.title}
          width={80}
          height={80}
        />
      </div>
      <div className={s.descriptionWrapper}>
        <h3 className={s.itemTitle}>{item.title}</h3>
        <p className={s.itemVolume}>{item.weight}</p>
        <div className={s.itemQuantityWrapper}>
          <p className={s.itemQuantityText}>Кількість</p>
          <button
            className={s.quantityBtn}
            type="button"
            onClick={() => {
              handleDecrease(item.id);
            }}
          >
            <svg className={s.quantityIcon}>
              <use xlinkHref={`${sprite}#minus`}></use>
            </svg>
          </button>
          <p className={s.itemQuantity}>{item.quantity}</p>
          <button
            className={s.quantityBtn}
            type="button"
            onClick={() => {
              handleIncrease(item.id);
            }}
          >
            <svg className={s.quantityIcon}>
              <use xlinkHref={`${sprite}#plus`}></use>
            </svg>
          </button>
        </div>
        <div className={s.itemBottomWrapper}>
          <p className={s.itemPrice}>{item.price * item.quantity} грн</p>
          <button
            className={s.deleteBtn}
            type="button"
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            <svg className={s.bucketIcon}>
              <use xlinkHref={`${sprite}#removal-bucket`}></use>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
