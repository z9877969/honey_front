import { Container, MainTitle } from 'shared/components';
import NavigationList from '../NavigationList/NavigationList';
import ProductsList from '../ProductsList/ProductsList';
import style from './OurProducts.module.scss';
import dbCategories from 'modules/ourProducts/data/dbCategories';
import { useEffect, useState } from 'react';
import SectionMain from 'shared/components/SectionMain/SectionMain';
import { useDispatch } from 'react-redux';
import { getProducts } from 'modules/ourProducts/service/service';

const OurProducts = () => {
  const [currentCategory, setCurrentCategory] = useState('Мед');
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <SectionMain id="ourProducts">
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
        <ProductsList currentCategory={currentCategory} />
      </Container>
    </SectionMain>
  );
};

export default OurProducts;
