import CustomScrollWrapper from 'shared/components/CustomScrollWrapper/CustomScrollWrapper';
import s from './PopUpDetailedDescription.module.scss';

const PopUpDetailedDescription = ({ product }) => {
  return (
    <CustomScrollWrapper>
      <div className={s.descriptionArea}>
        {product.prodName && (
          <h3 className={s.productName}>{product.prodName}</h3>
        )}
        {product.descr && <p className={s.productText}>{product.descr}</p>}
        {product.flavor && (
          <p className={s.productText}>
            <span className={s.prodDescriptionHeader}>
              Смакові особливості:
            </span>
            {` ${product.flavor}`}
          </p>
        )}
        {product.advantage && (
          <p className={s.productText}>
            <span className={s.prodDescriptionHeader}>
              Корисні властивості:
            </span>
            {` ${product.advantage}`}
          </p>
        )}
        {product.features && (
          <p className={s.productText}>
            <span className={s.prodDescriptionHeader}>Особливості:</span>
            {` ${product.features}`}
          </p>
        )}
      </div>
    </CustomScrollWrapper>
  );
};

export default PopUpDetailedDescription;
