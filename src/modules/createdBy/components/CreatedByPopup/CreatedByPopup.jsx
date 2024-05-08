import { useState } from 'react';
import creatorsData from '../../data/creators.js';
import CreatorsList from '../CreatorsList/CreatorsList';
import s from './CreatedByPopup.module.scss';
import IconButton from 'shared/components/IconButton/IconButton';

const CreatedByPopup = ({ onClose }) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => onClose(), 500);
  };

  return (
    <div className={`${s.container}  ${closing ? s.closing : ''}`}>
      <h3 className={s.title}>Команда, яка створила сайт</h3>
      <IconButton
        id={'cross-close'}
        iconClassName={s.closeIcon}
        btnClassName={s.closeBtn}
        iconHeight={36}
        iconWidth={36}
        onClick={handleClose}
      />
      <CreatorsList data={creatorsData} />
    </div>
  );
};

export default CreatedByPopup;
