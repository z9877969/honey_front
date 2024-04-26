import clsx from 'clsx';
import sprite from '../../icons/sprite.svg';
import s from './IconButton.module.scss';

const IconButton = ({ id, iconWidth, iconHeight, className, ...rest }) => {
  return (
    <button className={clsx(s.button, className && className)} {...rest}>
      <svg
        width={iconWidth}
        height={iconHeight}
        className={clsx(s.icon, className && className)}
      >
        <use xlinkHref={`${sprite}#${id}`}></use>
      </svg>
    </button>
  );
};

export default IconButton;
