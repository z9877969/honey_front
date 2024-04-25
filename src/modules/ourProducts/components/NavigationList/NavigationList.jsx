import style from './NavigationList.module.scss';

const NavigationList = ({
  categoriseList,
  chooseCategory,
  // currentCategory,
}) => {
  return (
    <ul className={style.categoriesList}>
      {categoriseList.length > 0 &&
        categoriseList.map((category) => (
          <li key={category.key}>
            <h3 onClick={() => chooseCategory(category.key)}>
              {category.name}
            </h3>
          </li>
        ))}
    </ul>
  );
};

export default NavigationList;
