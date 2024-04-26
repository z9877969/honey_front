import clsx from 'clsx';
import s from './Logo.module.scss';
import LogoText from '../LogoText/LogoText';
import sprite from '../../icons/sprite.svg';

const Logo = ({ id, iconWidth, iconHeight, className }) => {
  return (
    <a className={clsx(s.logo, className && className)} href="#">
      <svg
        width={iconWidth}
        height={iconHeight}
        className={`icon icon-${id}`}
        role="img"
      >
        <use xlinkHref={`${sprite}#${id}`} />
      </svg>
      <LogoText title={'Бджола та Шершень'} />
    </a>
  );
};

export default Logo;
