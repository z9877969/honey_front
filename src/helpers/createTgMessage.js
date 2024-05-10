export function createTgMessage(message) {
  const { values, order, totalPrice } = message;
  const {
    firstName,
    lastName,
    number,
    deliveryType,
    location,
    address,
    comment,
  } = values;

  const addressType =
    deliveryType === 'Доставка до відділення'
      ? 'Відділення НП'
      : 'Адреса доставки';

  const tgMessage = `
    Нова заявка:
    <b>1) Ім'я:</b> ${firstName};
    <b>2) Прізвище:</b> ${lastName};
    <b>3) Номер телефону:</b> ${number};
    <b>4) Тип доставки:</b> ${deliveryType};
    <b>5) Населений пункт:</b> ${location.city};
    <b>6) ${addressType}:</b> ${address};
    <b>7) Замовлення:</b> ${order};
    <b>8) Загальна вартість замовлення:</b> ${totalPrice} грн;
    ${comment ? `<b>9) Коментар:</b> ${comment}` : ``}`;

  return tgMessage;
}
