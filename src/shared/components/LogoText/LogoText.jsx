import clsx from 'clsx';
import s from './LogoText.module.scss';

const LogoText = ({ title, className, ...props }) => {
  return (
    <p className={clsx(s.title, className && className)} {...props}>
      {title}
    </p>
  );
};

export default LogoText;
