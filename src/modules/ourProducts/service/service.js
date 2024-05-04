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

export const retCalc = (productVariants, calcVariant) => {
  let result = '';
  const idx = productVariants.findIndex((item) => item.isActive === true);
  if (idx >= 0) {
    switch (calcVariant) {
      case 'qty':
        result = productVariants[idx].quantity;
        break;
      case 'sum':
        result =
          (
            productVariants[idx].quantity * productVariants[idx].price
          ).toString() + ' грн';
        break;
      default:
        result = '';
        break;
    }
  }
  return result;
};
