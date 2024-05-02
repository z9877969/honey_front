import s from './SocialIcons.module.scss';
import { icons as sprite } from 'shared/icons';

const SocialIcons = () => {
  return (
    <ul className={s.iconsList}>
      <li>
        <a href="#footer">
          <svg width={32} height={32} className={s.icon}>
            <use xlinkHref={`${sprite}#telegram`}></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="#footer">
          <svg width={32} height={32} className={s.icon}>
            <use xlinkHref={`${sprite}#instagram`}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

// https://telegram.org/
// https://www.instagram.com/bdzhola_ta_shershen
export default SocialIcons;
