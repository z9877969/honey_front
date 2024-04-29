import s from './CreatorCard.module.scss';

const CreatorCard = ({ data }) => {
  return (
    <li className={s.card}>
      <img src={data.picture} alt="" />
      <p>{data.name}</p>
      <p>{data.position}</p>
    </li>
  );
};

export default CreatorCard;
