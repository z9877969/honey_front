import clsx from 'clsx';
import s from './MainButton.module.scss';

const MainButton = ({
  type = 'button',
  title,
  btnClassName,
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={clsx(s.button, btnClassName && btnClassName)}
      onClick={onClick}
      {...rest}
    >
      {title}
    </button>
  );
};

export default MainButton;
