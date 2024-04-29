import clsx from 'clsx';
import s from './GoBackButton.module.scss';
import { icons as sprite } from 'shared/icons';

const GoBackButton = ({
  id,
  title,
  type = 'button',
  onClick,
  btnClassName,
  iconClassName,
  iconWidth,
  iconHeight,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(s.button, btnClassName && btnClassName)}
      {...rest}
    >
      <svg
        width={iconWidth}
        height={iconHeight}
        className={clsx(s.icon, iconClassName && iconClassName)}
        role="img"
      >
        <use xlinkHref={`${sprite}#${id}`}></use>
      </svg>
      {title}
    </button>
  );
};

export default GoBackButton;
