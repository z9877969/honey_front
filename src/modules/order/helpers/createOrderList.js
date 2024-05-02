import {
  createProductQuantity,
  createTotalPrice,
} from './createOrderCartElements';

export function createOrderList(productList) {
  const order = productList.map(({ title, weight, quantity, price }) => {
    return `
    - Назва товару: ${title};
      Об'єм: ${createProductQuantity(weight)};
      Кількість: ${quantity};
      Вартість: ${price} грн.`;
  });
  const totalPrice = createTotalPrice(productList);
  return { order, totalPrice };
}
