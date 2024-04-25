import s from './PopUpInfoProduct.module.scss';

const PopUpInfoProduct = () => {
  return (
    <div className={s.backdrop}>
      <div className={s.modalcontent}>
        <button type="button" className={s['modal-close-btn']}>
          {' '}
          <svg className={s['modal-close-btn-icon']}>
            <use href=""></use>
          </svg>
        </button>

        <h2 className={s['modal-heading']}></h2>
        <img className={s['modal-image']} src="" alt="" />
        <p className={s['modal-text']}>Text</p>
        <h3 className={s['modal-subheading']}>Вага</h3>
        <div className={s['weight-container']}>
          <ul className={s['weight-list']}>
            <li className={s['weight-item']}>
              <svg className={s['weight-icon']}>
                <use href=""></use>
              </svg>
            </li>
            <li className={s['weight-item']}>
              <svg className={s['weight-icon']}>
                <use href=""></use>
              </svg>
            </li>
            <li className={s['weight-item']}>
              <svg className={s['weight-icon']}>
                <use href=""></use>
              </svg>
            </li>
            <li className={s['weight-item']}>
              <svg className={s['weight-icon']}>
                <use href=""></use>
              </svg>
            </li>
            <li className={s['weight-item']}>
              <svg className={s['weight-icon']}>
                <use href=""></use>
              </svg>
            </li>
          </ul>
        </div>
        <div className={s['modal-counter']}>
          <h3 className={s['counter-heading']}>Кількість</h3>
          <div className={s['counter-container']}>
            <button type="button" className={s['counter-btn-minus']}>
              <svg className={s['counter-icon']}>
                <use href=""></use>
              </svg>
            </button>
            <button type="button" className={s['counter-btn-plus']}>
              <svg className={s['counter-icon']}>
                <use href=""></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={s['order-container']}>
          <button type="submit" className={s['order-btn']}>
            Додати в кошик
          </button>
          <svg className={s['shopping-icon']}>
            <use href=""></use>
          </svg>
          <span className={s['product-price']}>100 грн</span>
        </div>
      </div>
    </div>
  );
};

export default PopUpInfoProduct;
