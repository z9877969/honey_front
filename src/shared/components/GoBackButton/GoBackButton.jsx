import clsx from 'clsx';
import s from './GoBackButton.module.scss';
import sprite from '../../icons/sprite.svg';

const GoBackButton = ({
  id,
  title,
  type = 'button',
  onClick,
  className,
  iconWidth,
  iconHeight,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(s.button, className && className)}
      {...rest}
    >
      <svg
        width={iconWidth}
        height={iconHeight}
        className={`icon icon-${id}`}
        role="img"
      >
        <use xlinkHref={`${sprite}#${id}`}></use>
      </svg>
      {title}
    </button>
  );
};

export default GoBackButton;
