import clsx from 'clsx';
import s from './Logo.module.scss';
import LogoText from '../LogoText/LogoText';

const Logo = ({ className }) => {
  return (
    <a className={clsx(s.logo, className && className)} href="#">
      <svg width="36" height="36">
        <use href="../../icons/sprite.svg#logo" />
      </svg>
      <LogoText title={'Бджола та Шершень'} />
    </a>
  );
};

export default Logo;
