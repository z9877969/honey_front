import creatorsData from '../../data/creators.js';
import CreatorsList from '../CreatorsList/CreatorsList';
import s from './CreatedByPopup.module.scss';
import IconButton from 'shared/components/IconButton/IconButton';

const CreatedByPopup = ({ onClose }) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Команда, яка створила сайт</h3>
      <IconButton
        id={'cross-close'}
        iconClassName={s.closeIcon}
        btnClassName={s.closeBtn}
        iconHeight={36}
        iconWidth={36}
        onClick={onClose}
      />
      <CreatorsList data={creatorsData} />
    </div>
  );
};

export default CreatedByPopup;
