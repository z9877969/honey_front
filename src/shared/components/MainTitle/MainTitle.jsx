import clsx from 'clsx';
import s from './MainTitle.module.scss';

const MainTitle = ({ title, className, ...props }) => {
  return (
    <h2
      className={clsx(s.title, className && className)}
      {...props}
    >
      {title}
    </h2>
  );
};

export default MainTitle;
