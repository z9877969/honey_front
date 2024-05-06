import { createProductTotalPrice } from './createOrderCartElements';

export function createOrderList(productList) {
  const order = productList.map(({ title, weight, quantity, price }) => {
    return `
    &#128029; Назва товару: ${title};
      Об'єм: ${weight};
      Кількість: ${quantity};
      Вартість: ${createProductTotalPrice(quantity, price)} грн.`;
  });

  return order;
}
