import creatorsData from '../../data/creators.json';
import CreatorCard from '../CreatorCard/CreatorCard';
import s from './CreatedByPopup.module.scss';
import IconButton from 'shared/components/IconButton/IconButton';

//TODO: tabl and desc styles
//TODO: put evth into commponents
//TODO: Animations duration -  SocIcons, links
//TODO: Check everything
//DONE: put img into div and add LI icon, style div, remove img styles
//DONE: wrap cards into links + hover effects

const CreatedByPopup = ({ onClose }) => {
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
        onClick={onClose}
      />
      <ul className={s.cardList}>
        {creators.map((item) => {
          return <CreatorCard key={item.id} data={item} />;
        })}
      </ul>
    </div>
  );
};

export default CreatedByPopup;
