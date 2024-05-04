import CreatorCard from '../CreatorCard/CreatorCard';
import s from './CreatorsList.module.scss';
import CustomScrollWrapper from 'shared/components/CustomScrollWrapper/CustomScrollWrapper';

const CreatorsList = ({ data }) => {
  return (
    <CustomScrollWrapper wrapClassName={s.wrapper}>
      <ul className={s.cardList}>
        {data.map((item) => {
          return <CreatorCard key={item.id} data={item} />;
        })}
      </ul>
    </CustomScrollWrapper>
  );
};

export default CreatorsList;
