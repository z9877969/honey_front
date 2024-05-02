export function createTgMessage(message, orderList, totalPrice) {
  const {
    firstName,
    lastName,
    number,
    deliveryType,
    location,
    address,
    comment,
  } = message;

  const addressType =
    deliveryType === 'Доставка до відділення'
      ? 'Відділення НП'
      : 'Адреса доставки';

  const tgMessage = `
    Нова заявка:
    1) Ім'я: ${firstName};
    2) Прізвище: ${lastName};
    3) Номер телефону: ${number};
    4) Тип доставки: ${deliveryType};
    5) Населений пункт: ${location.city};
    6) ${addressType}: ${address};
    7) Замовлення: ${orderList};
    8) Загальна вартість замовлення: ${totalPrice};
    ${comment ? `9) Коментар: ${comment}` : ``} `;

  return tgMessage;
}
