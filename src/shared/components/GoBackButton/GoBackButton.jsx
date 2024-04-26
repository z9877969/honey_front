import clsx from 'clsx';
import s from './GoBackButton.module.scss';

const GoBackButton = ({
  title,
  type = 'button',
  onClick,
  className,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(s.button, className && className)}
      {...rest}
    >
      <svg width="12" height="28">
        <use href="../../icons/sprite.svg#arrow-left"></use>
      </svg>
      {title}
    </button>
  );
};

export default GoBackButton;
