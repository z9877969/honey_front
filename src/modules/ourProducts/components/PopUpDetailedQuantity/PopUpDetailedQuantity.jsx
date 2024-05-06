import { returnCalculations } from 'modules/ourProducts/service/service';
import { icons } from 'shared/icons';
import s from './PopUpDetailedQuantity.module.scss';

const PopUpDetailedQuantity = ({ productVariants, handleIncrement }) => {
  return (
    <div className={s.quantityContainer}>
      <h3 className={s.prodQtyHeader}>Кількість</h3>
      <button
        type="button"
        className={s.qtyBtn}
        onClick={() => handleIncrement(false)}
      >
        <svg className={s.counterIcon}>
          <use xlinkHref={`${icons}#minus`} width="32" height="32"></use>
        </svg>
      </button>
      <span className={s.qtyView}>
        {returnCalculations(productVariants, 'qty')}
      </span>
      <button
        type="button"
        className={s.qtyBtn}
        onClick={() => handleIncrement(true)}
      >
        <svg className={s.counterIcon}>
          <use xlinkHref={`${icons}#plus`} width="32" height="32" />
        </svg>
      </button>
    </div>
  );
};

export default PopUpDetailedQuantity;
