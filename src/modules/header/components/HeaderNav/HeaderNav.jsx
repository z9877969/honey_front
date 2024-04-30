import s from './HeaderNav.module.scss';
import sprite from '../../../../shared/icons/sprite.svg';
import { useState } from 'react';
import { Cart } from 'modules/cart';

const HeaderNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [orderCount, setOrderCount] = useState(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  // const updateOrderCount = (count) => {
  //   setOrderCount(count);
  // };

  return (
    <div className={s.desktopHeader}>
      <button onClick={toggleNav}>
        <svg className={s.burgerIcon}>
          <use xlinkHref={`${sprite}#menu`} />
        </svg>
      </button>
      <ul className={`${s.navList} ${isNavOpen ? s.navListOpen : ''}`}>
        <li className={s.navListItem}>
          <a href="#ourProducts">Каталог</a>
        </li>
        <li className={s.navListItem}>
          <a href="#aboutUS">Про нас</a>
        </li>
        <li className={s.navListItem}>
          <a href="#reviews">Відгуки</a>
        </li>
        <li className={s.navListItem}>
          <a href="#footer">Контакти</a>
        </li>
        <li>
          {isNavOpen && (
            <button onClick={closeNav}>
              <svg className={s.closeIcon}>
                <use xlinkHref={`${sprite}#cross-close`} />
              </svg>
            </button>
          )}
        </li>
      </ul>
      <button className={s.cartButton} onClick={Cart.isOpen}>
        <svg className={s.cartIcon}>
          <use xlinkHref={`${sprite}#basket`} />
        </svg>
        <span className={s.orderCount}>{}</span>
      </button>
    </div>
  );
};

export default HeaderNav;
