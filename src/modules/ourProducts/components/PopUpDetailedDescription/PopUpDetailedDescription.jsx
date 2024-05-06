import CustomScrollWrapper from 'shared/components/CustomScrollWrapper/CustomScrollWrapper';
import s from './PopUpDetailedDescription.module.scss';

const PopUpDetailedDescription = ({ product }) => {
  return (
    // <CustomScrollWrapper wrapClassName={s.myScroll}>
    <CustomScrollWrapper>
      <div className={s.descriptionArea}>
        <h3 className={s.productName}>{product.prodName}</h3>
        <p className={s.productText}>{product.descr}</p>
        <p className={s.productText}>
          <span className={s.prodDescriptionHeader}>Смакові особливості:</span>
          {` ${product.flavor}`}
        </p>
        <p className={s.productText}>
          <span className={s.prodDescriptionHeader}>Корисні властивості:</span>
          {` ${product.advantage}`}
        </p>
        <p className={s.productText}>
          <span className={s.prodDescriptionHeader}>Особливості:</span>
          {` ${product.features}`}
        </p>
      </div>
    </CustomScrollWrapper>
  );
};

export default PopUpDetailedDescription;
