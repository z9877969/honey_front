export const createProductName = (name) => {
  return name.includes('натуральний')
    ? name.replace('натуральний', '')
    : name.includes('Стільники')
      ? `${name} (соти)`
      : name;
};

export const createProductTotalPrice = (quantity, price) => {
  const productTotalPrice = quantity * price;
  return productTotalPrice;
};
export const createTotalPrice = (productList) => {
  return `${productList.reduce((acc, { quantity, price }) => {
    return acc + quantity * price;
  }, 0)} грн`;
};
