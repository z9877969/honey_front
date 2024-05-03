import s from './SocialIcons.module.scss';
import { icons as sprite } from 'shared/icons';

const SocialIcons = () => {
  return (
    <ul className={s.iconsList}>
      <li>
        <a href="https://telegram.org/">
          <svg width={32} height={32} className={s.icon}>
            <use xlinkHref={`${sprite}#telegram`}></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/bdzhola_ta_shershen">
          <svg width={32} height={32} className={s.icon}>
            <use xlinkHref={`${sprite}#instagram`}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
