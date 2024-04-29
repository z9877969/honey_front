import s from './HeaderNav.module.scss';
import sprite from '../../../../shared/icons/sprite.svg';
import { useState } from 'react';

const HeaderNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <button onClick={toggleNav}>
        <svg className={s.burgerIcon}>
          <use xlinkHref={`${sprite}#menu`} />
        </svg>
      </button>
      <button>
        <svg className={s.cartIcon}>
          <use xlinkHref={`${sprite}#basket`} />
        </svg>
      </button>
      <div className={s.dropDown}>
        <ul className={`${s.navList} ${isNavOpen ? s.navListOpen : ''}`}>
          <li className={s.navListItem}>
            <a href="#">Каталог</a>
          </li>
          <li className={s.navListItem}>
            <a href="#">Про нас</a>
          </li>
          <li className={s.navListItem}>
            <a href="#">Відгуки</a>
          </li>
          <li className={s.navListItem}>
            <a href="#">Контакти</a>
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
      </div>
    </div>
  );
};

export default HeaderNav;
