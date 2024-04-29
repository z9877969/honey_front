import s from './EmptyCartContainer.module.scss';

const EmptyCart = ({ handleBackButton }) => {
  return (
    <>
      <div className={s.backgroundWrapper}></div>
      <p className={s.emptyCartTitle}>Кошик порожній</p>
      <p className={s.emptyCartText}>
        Дивись наш каталог та обирай смачний та корисний мед
      </p>
      <div className={s.borderWrapper}>
        <div className={s.emptyCartBorder}></div>
      </div>
      <div className={s.emptyCartBottomWrapper}>
        <button
          className={s.emptyModalBtn}
          type="button"
          onClick={handleBackButton}
        >
          Купити мед
        </button>
      </div>
    </>
  );
};

export default EmptyCart;
