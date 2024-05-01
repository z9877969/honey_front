import creatorsData from '../../data/creators.json';
import CreatorsList from '../CreatorsList/CreatorsList';
import s from './CreatedByPopup.module.scss';
import IconButton from 'shared/components/IconButton/IconButton';

//TODO: Card images
//TODO: Check everything
//TODO: Клік по лого не перезавантажує
//DONE: Animations duration -  SocIcons, links
//DONE: put evth into components
//DONE: desc styles
//DONE: put img into div and add LI icon, style div, remove img styles
//DONE: wrap cards into links + hover effects

const CreatedByPopup = ({ onClose }) => {
  const { creators } = creatorsData;

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
      <CreatorsList data={creators} />
    </div>
  );
};

export default CreatedByPopup;
