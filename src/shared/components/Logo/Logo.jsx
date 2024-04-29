import clsx from 'clsx';
import s from './Logo.module.scss';
import LogoText from '../LogoText/LogoText';
import sprite from '../../icons/sprite.svg';

const Logo = ({ className }) => {
  return (
    <a className={clsx(s.logo, className && className)} href="#">
      <svg className={s.icon} width="36" height="36">
        <use xlinkHref={`${sprite}#logo`} />
      </svg>
      <LogoText title={'Бджола та Шершень'} />
    </a>
  );
};

export default Logo;
