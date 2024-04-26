import { useState } from 'react';
// import { Container } from "shared/components";
import s from './Cart.module.scss';

const cartItems = [
  {
    id: 1,
    title: 'Мед квітковий натуральний',
    image: '../../../src/assets/honey.jpg',
    weight: '0,25',
    quantity: 1,
    price: 100,
  },
  {
    id: 2,
    title: 'Мед з волоськимим горіхами',
    image: '../../../src/assets/honey.jpg',
    weight: '0,25',
    quantity: 1,
    price: 200,
  },
  {
    id: 3,
    title: 'Мед акацієвий натуральний',
    image: '../../../src/assets/honey.jpg',
    weight: '0,25',
    quantity: 1,
    price: 100,
  },
  {
    id: 4,
    title: 'Мед ріпаковий натуральний',
    image: '../../../src/assets/honey.jpg',
    weight: '0,25',
    quantity: 1,
    price: 500,
  },
  {
    id: 5,
    title: 'Мед соняшниковий натуральний',
    image: '../../../src/assets/honey.jpg',
    weight: '0,25',
    quantity: 1,
    price: 250,
  },
];

const Cart = ({ handleModal }) => {
  const [isOpen] = useState(false);
  const [items, setItems] = useState(cartItems);

  const totalPrice = items.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);

  const handleIncrease = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleDecrease = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    isOpen && (
      <section>
        {/* <Container> */}
        <div className={s.backdrop}>
          <div className={s.modalContainer}>
            <button
              className={s.modalCloseBtn}
              type="button"
              onClick={handleModal}
            >
              X
              {/* <svg className={s.modalCloseIcon} width="28" height="28">
            <use href="./images/icons.svg#icon-x-close"></use>
          </svg> */}
            </button>
            <h2 className={s.modalTitle}>Ваш кошик</h2>
            <div className={s.listContainer}>
              <div className={s.listBorderWrapper}>
                <ul className={s.list}>
                  {items.map((item) => {
                    return (
                      <li key={item.id} className={s.listItem}>
                        <div className={s.imgWrapper}>
                          <img
                            className={s.itemImg}
                            src={item.image}
                            alt={item.title}
                            width={80}
                            height={80}
                          />
                        </div>
                        <div className={s.descriptionWrapper}>
                          <h3 className={s.itemTitle}>{item.title}</h3>
                          <p className={s.itemVolume}>{item.weight} л</p>
                          <div className={s.itemQuantityWrapper}>
                            <p className={s.itemQuantityText}>Кількість</p>
                            <button
                              className={s.quantityBtn}
                              type="button"
                              onClick={() => {
                                handleDecrease(item.id);
                              }}
                            >
                              -
                            </button>
                            <p className={s.itemQuantity}>{item.quantity}</p>
                            <button
                              className={s.quantityBtn}
                              type="button"
                              onClick={() => {
                                handleIncrease(item.id);
                              }}
                            >
                              +
                            </button>
                          </div>
                          <div className={s.itemBottomWrapper}>
                            <p className={s.itemPrice}>{item.price} грн</p>
                            <button className={s.deleteBtn} type="button">
                              del
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className={s.modalBottomWrapper}>
              <div className={s.linkWrapper}>
                <a className={s.modalLink} href="">
                  Повернутися до покупок
                </a>
              </div>
              <div className={s.modalSubmitWrapper}>
                <p className={s.totalPrice}>{totalPrice} грн</p>
                <button className={s.modalSubmitBtn} type="button">
                  Оформити замовлення
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* </Container> */}
      </section>
    )
  );
};

export default Cart;
