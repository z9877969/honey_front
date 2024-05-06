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
