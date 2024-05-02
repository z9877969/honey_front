import CreatorCard from '../CreatorCard/CreatorCard';
import s from './CreatorsList.module.scss';

const CreatorsList = ({ data }) => {
  return (
    <ul className={s.cardList}>
      {data.map((item) => {
        return <CreatorCard key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default CreatorsList;
