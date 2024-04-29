import clsx from 'clsx';
import s from './CreatorCard.module.scss';

const CreatorCard = ({ data }) => {
  return (
    <li className={s.card}>
      <img className={s.cardImg} src={data.picture} alt="" />
      <div className={s.infoWrap}>
        <p className={s.cardText}>{data.name}</p>
        <p className={clsx(s.cardText, s.cardLightText)}>{data.position}</p>
      </div>
    </li>
  );
};

export default CreatorCard;
