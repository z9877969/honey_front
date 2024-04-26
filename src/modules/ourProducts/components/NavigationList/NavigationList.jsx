import clsx from 'clsx';
import style from './NavigationList.module.scss';

const NavigationList = ({
  categoriseList,
  chooseCategory,
  currentCategory,
}) => {
  return (
    <ul className={style.categoriesList}>
      {categoriseList.length > 0 &&
        categoriseList.map((category) => (
          <li
            key={category.key}
            className={clsx(style.categoriesItem, {
              [style.active]: category.key === currentCategory,
            })}
          >
            <h3
              onClick={() => chooseCategory(category.key)}
              className={clsx(style.category, {
                [style.active]: category.key === currentCategory,
              })}
            >
              {category.name}
            </h3>
          </li>
        ))}
    </ul>
  );
};

export default NavigationList;
