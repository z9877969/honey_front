// import dbProducts from '../../data/dbProducts';

import ProductItem from '../ProductsItem/ProductsItem';

const ProductsList = ({ productsList }) => {
  return (
    <div>
      {productsList.length > 0 && (
        <ul>
          {productsList.map((product) => (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductsList;
