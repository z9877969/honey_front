export const createProductName = (name) => {
  return name.includes('натуральний')
    ? name.replace('натуральний', '')
    : name.includes('Стільники')
      ? `${name} (соти)`
      : name;
};

export const createProductQuantity = (weight) => {
  return weight === '100'
    ? `${weight} г`
    : weight === '250'
      ? `${weight} мл`
      : `${weight} л`;
};
export const createTotalPrice = (productList) => {
  return `${productList.reduce((acc, { price }) => {
    return acc + price;
  }, 0)} грн`;
};
