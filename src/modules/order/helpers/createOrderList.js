import {
  createProductTotalPrice,
  createTotalPrice,
} from './createOrderCartElements';

export function createOrderList(productList) {
  const order = productList.map(({ title, weight, quantity, price }) => {
    return `
    - Назва товару: ${title};
      Об'єм: ${weight};
      Кількість: ${quantity};
      Вартість: ${createProductTotalPrice(quantity, price)} грн.`;
  });
  const totalPrice = createTotalPrice(productList);
  return { order, totalPrice };
}
