import { useModal } from 'hooks/useModal';
import { useCallback } from 'react';
import creatorsData from '../../data/creators.json';
import CreatorCard from '../CreatorCard/CreatorCard';
import s from './CreatedByPopup.module.scss';
import IconButton from 'shared/components/IconButton/IconButton';

const CreatedByPopup = () => {
  const setModal = useModal();
  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const { creators } = creatorsData;

  return (
    <div className={s.container}>
      <h3 className={s.title}>
        Команда,
        <br />
        яка створила сайт
      </h3>
      <IconButton
        id={'cross-close'}
        iconClassName={s.closeIcon}
        btnClassName={s.closeBtn}
        iconHeight={32}
        iconWidth={32}
        onClick={closeModal}
      />
      {/* <button className={s.closeBtn} type="button" onClick={closeModal}>
        X
      </button> */}
      <ul className={s.cardList}>
        {creators.map((item) => {
          return <CreatorCard key={item.id} data={item} />;
        })}
      </ul>
    </div>
  );
};

export default CreatedByPopup;
