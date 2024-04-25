const IconButton = ({ width, height, className, ...rest }) => {
  return (
    <button width={width} height={height} className={className} {...rest}>
      <svg>
        <use href=""></use>
      </svg>
    </button>
  );
};

export default IconButton;
