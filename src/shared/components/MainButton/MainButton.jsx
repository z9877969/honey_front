const MainButton = ({ type = 'button', title, onClick, ...rest }) => {
  return (
    <button type={type} className onClick={onClick} {...rest}>
      {title}
    </button>
  );
};

export default MainButton;
