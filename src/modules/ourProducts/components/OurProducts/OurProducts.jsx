import { Container, MainTitle } from 'shared/components';
import NavigationList from '../NavigationList/NavigationList';
import ProductsList from '../ProductsList/ProductsList';
import style from './OurProducts.module.scss';
import dbCategories from 'modules/ourProducts/data/dbCategories';
import { useEffect, useState } from 'react';
import SectionMain from 'shared/components/SectionMain/SectionMain';
import { getProducts } from 'modules/ourProducts/service/service';
import { icons as sprite } from 'shared/icons';
import { toastify } from 'helpers/tostify';

const OurProducts = () => {
  const [currentCategory, setCurrentCategory] = useState('Мед');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        toastify.error('Щось пішло не так :( Перезавантажте сторінку.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
        {loading ? (
          <div className={style.loaderContainer}>
            <svg width="48" height="48" className={style.loader}>
              <use xlinkHref={`${sprite}#logo`} />
            </svg>
          </div>
        ) : (
          <ProductsList currentCategory={currentCategory} data={products} />
        )}
      </Container>
    </SectionMain>
  );
};

export default OurProducts;
