import clsx from 'clsx';
import s from './Logo.module.scss';

const Logo = ({ className }) => {
  return (
    <a className={clsx(s.logo, className && className)} href="#">
      Company Logo
    </a>
  );
};

export default Logo;
