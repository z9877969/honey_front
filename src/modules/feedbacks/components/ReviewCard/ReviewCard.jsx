import s from './ReviewCard.module.scss';
import sprite from '../../../../shared/icons/sprite.svg';

const ReviewCard = ({ data: { photo, name, review } }) => {
  return (
    <div className={s.card}>
      <div className={s.photoContainer}>
        <svg width={190} height={172}>
          <use
            xlinkHref={`${sprite}#polygon`}
            className={s.iconClassName}
          ></use>
        </svg>
        <img className={s.photo} src={photo} alt="photo" />
      </div>
      <div className={s.content}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.review}>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
