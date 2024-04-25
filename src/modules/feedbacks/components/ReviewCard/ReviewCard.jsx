import s from './ReviewCard.module.scss';

const ReviewCard = ({ data: { photo, name, review } }) => {
  return (
    <div className={s.card}>
      <img className={s.photo} src={photo} alt="photo" />
      <div className={s.content}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.review}>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
