import clsx from 'clsx';
import s from './Logo.module.scss';
import LogoText from '../LogoText/LogoText';
import sprite from '../../icons/sprite.svg';

const Logo = ({ id, iconWidth, iconHeight, iconClassName, linkClassName }) => {
  return (
    <a className={clsx(s.link, linkClassName && linkClassName)} href="#">
      <svg
        width={iconWidth}
        height={iconHeight}
        className={clsx(s.icon, iconClassName && iconClassName)}
        role="img"
      >
        <use xlinkHref={`${sprite}#${id}`} />
      </svg>
      <LogoText title={'Бджола та Шершень'} />
    </a>
  );
};

export default Logo;
