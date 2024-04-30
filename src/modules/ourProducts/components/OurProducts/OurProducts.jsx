import { Container, MainTitle } from 'shared/components';
import NavigationList from '../NavigationList/NavigationList';
import ProductsList from '../ProductsList/ProductsList';
import style from './OurProducts.module.scss';
import dbCategories from 'modules/ourProducts/data/dbCategories';
import dbProducts from 'modules/ourProducts/data/dbProducts';
import { useEffect, useState } from 'react';
import SectionMain from 'shared/components/SectionMain/SectionMain';

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('Мед');

  useEffect(() => {
    setCurrentCategory(dbCategories[0].key);
  }, []);

  useEffect(() => {
    setProducts(() =>
      dbProducts.filter((product) => product.category === currentCategory)
    );
  }, [currentCategory]);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <SectionMain id="ourProduct">
      <Container>
        <MainTitle
          title={'Наша продукція'}
          className={style.ourProductsTitle}
        />
        <NavigationList
          categoriseList={dbCategories}
          chooseCategory={handleCategoryChange}
          currentCategory={currentCategory}
        />
        <ProductsList productsList={products} />
      </Container>
    </SectionMain>
  );
};

export default OurProducts;
