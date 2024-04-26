import sprite from '../../icons/sprite.svg';

const IconButton = ({ id, width, height, className, ...rest }) => {
  return (
    <button className={className} {...rest}>
      <svg width={width} height={height} className={`icon icon-${id}`}>
        <use xlinkHref={`${sprite}#${id}`}></use>
      </svg>
    </button>
  );
};

export default IconButton;
