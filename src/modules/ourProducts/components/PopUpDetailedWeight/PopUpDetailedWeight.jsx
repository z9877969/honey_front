import clsx from 'clsx';
import s from './PopUpDetailedWeight.module.scss';

const PopUpDetailedWeight = ({ productVariants, handleChooseVariant }) => {
  return (
    <div className={s.weightContainer}>
      <h3 className={s.weightDescriptionHeader}>Вага</h3>
      <ul className={s.weightList}>
        {productVariants.map((variant, index) => (
          <li
            key={index}
            className={clsx(
              s.weightItem,
              variant.isActive && s.weightItemActive
            )}
            onClick={() => {
              handleChooseVariant(variant.size);
            }}
          >
            {variant.size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopUpDetailedWeight;
