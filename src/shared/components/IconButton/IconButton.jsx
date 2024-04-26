import sprite from '../../icons/sprite.svg';

const IconButton = ({ id, iconWidth, iconHeight, className, ...rest }) => {
  return (
    <button className={className} {...rest}>
      <svg width={iconWidth} height={iconHeight} className={`icon icon-${id}`}>
        <use xlinkHref={`${sprite}#${id}`}></use>
      </svg>
    </button>
  );
};

export default IconButton;
