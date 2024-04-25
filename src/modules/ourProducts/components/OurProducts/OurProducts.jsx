import { MainTitle } from 'shared/components';
import NavigationList from '../NavigationList/NavigationList';
import ProductsList from '../ProductsList/ProductsList';
import style from './OurProducts.module.scss';
import dbCategories from 'modules/ourProducts/data/dbCategories';
import dbProducts from 'modules/ourProducts/data/dbProducts';

const OurProducts = () => {
  // const chooseCategory = (category) => {
  //   // console.log(category);
  // };

  return (
    <section>
      <MainTitle title={'Наша продукція'} className={style.ourProductsTitle} />
      <NavigationList
        categoriseList={dbCategories}
        // chooseCategory={chooseCategory}
      />
      <ProductsList productsList={dbProducts} />
    </section>
  );
};

export default OurProducts;
