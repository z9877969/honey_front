import Product from '../Product/Product';
import sprite from '../../../../shared/icons/sprite.svg';
import s from './CartContainer.module.scss';

const CartContainer = ({
  products,
  handleIncrease,
  handleDecrease,
  handleDelete,
  handleBackLink,
  totalPrice,
}) => {
  return (
    <>
      <div className={s.listContainer}>
        <ul className={s.list}>
          {products.map((item) => {
            return (
              <li key={item.id} className={s.listItem}>
                <Product
                  item={item}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                  handleDelete={handleDelete}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.listBorder}></div>
      <div className={s.modalBottomWrapper}>
        <div className={s.linkWrapper}>
          <a className={s.modalLink} href="/" onClick={handleBackLink}>
            <svg className={s.backArrowIcon}>
              <use xlinkHref={`${sprite}#arrow-link`}></use>
            </svg>
            Повернутися до покупок
          </a>
        </div>
        <div className={s.modalSubmitWrapper}>
          <p className={s.totalPrice}>{totalPrice} грн</p>
          <button className={s.modalSubmitBtn} type="button">
            Оформити замовлення
          </button>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
