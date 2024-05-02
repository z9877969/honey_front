import clsx from 'clsx';
import s from './Logo.module.scss';
import LogoText from '../LogoText/LogoText';

import { icons as sprite } from 'shared/icons';

const Logo = ({ iconWidth, iconHeight, iconClassName, linkClassName }) => {
  return (
    <a className={clsx(s.link, linkClassName && linkClassName)} href="/">
      <svg
        width={iconWidth}
        height={iconHeight}
        className={clsx(s.icon, iconClassName && iconClassName)}
        role="img"
      >
        <use xlinkHref={`${sprite}#logo`} />
      </svg>
      <LogoText title={'Бджола та Шершень'} />
    </a>
  );
};

export default Logo;
