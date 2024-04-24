import s from './ReviewCard.module.scss';

const ReviewCard = ({ review: { name, review } }) => {
  return (
    <div className={s.card}>
      <img src="" alt="photo" />
      <div>
        <h3>{name}</h3>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
