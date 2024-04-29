import { useModal } from 'hooks/useModal';
import { useCallback } from 'react';
import creatorsData from '../../data/creators.json';
import CreatorCard from '../CreatorCard/CreatorCard';
import s from './CreatedByPopup.module.scss';

const CreatedBy = () => {
  const setModal = useModal();
  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const { creators } = creatorsData;

  return (
    <div className={s.container}>
      <h3>Команда, яка створила сайт</h3>
      <button type="button" onClick={closeModal}>
        Close Modal
      </button>
      <ul>
        {creators.map((item) => {
          return <CreatorCard key={item.id} data={item} />;
        })}
      </ul>
    </div>
  );
};

export default CreatedBy;
