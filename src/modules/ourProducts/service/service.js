import axios from 'axios';

axios.defaults.baseURL =
  'https://honey-e1eaa-default-rtdb.europe-west1.firebasedatabase.app';

export const getProducts = async () => {
  try {
    const res = await axios.get('/products.json');
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const returnCalculations = (productVariants, calcVariant) => {
  let result = '';
  const idx = productVariants.findIndex((item) => item.isActive === true);

  if (idx === -1) return result;
  if (!productVariants[idx].quantity || !productVariants[idx].price)
    return result;

  switch (calcVariant) {
    case 'qty':
      result = productVariants[idx].quantity;
      break;
    case 'total':
      result =
        (
          productVariants[idx].quantity * productVariants[idx].price
        ).toString() + ' грн';
      break;
    default:
      result = '';
      break;
  }
  return result;
};

export const getInitialProductVariants = (product) => {
  const productVariants = product.variants.reduce((accumulator, product) => {
    const { size, price, id } = product;
    let priceN = 0;
    if (price) {
      const idx = price.indexOf('грн');
      if (idx) {
        priceN = Number(price.slice(0, idx));
      }
    }
    if (!accumulator.includes(size)) {
      accumulator.push({
        id: id,
        size: size,
        price: priceN,
        quantity: 1,
        isActive: false,
      });
    }
    return accumulator;
  }, []);

  if (!productVariants.length) return [{ size: 'Товар тимчасово недоступний' }];
  productVariants[0].isActive = true;
  return productVariants;
};
