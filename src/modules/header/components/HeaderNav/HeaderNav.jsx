import s from './HeaderNav.module.scss';
import sprite from '../../../../shared/icons/sprite.svg';
import { useState, useRef, useEffect } from 'react';
import { Cart } from 'modules/cart';

const HeaderNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeNav();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div className={s.desktopHeader} ref={navRef}>
      <button onClick={toggleNav}>
        <svg className={s.burgerIcon}>
          <use xlinkHref={`${sprite}#menu`} />
        </svg>
      </button>
      <ul className={`${s.navList} ${isNavOpen ? s.navListOpen : ''}`}>
        <li className={s.navListItem}>
          <a className={s.navListLink} href="#ourProducts" onClick={closeNav}>
            Каталог
          </a>
        </li>
        <li className={s.navListItem}>
          <a className={s.navListLink} href="#aboutUS" onClick={closeNav}>
            Про нас
          </a>
        </li>
        <li className={s.navListItem}>
          <a className={s.navListLink} href="#reviews" onClick={closeNav}>
            Відгуки
          </a>
        </li>
        <li className={s.navListItem}>
          <a className={s.navListLink} href="#footer" onClick={closeNav}>
            Контакти
          </a>
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
        {/* <span className={s.orderCount}>{}</span> */}
      </button>
    </div>
  );
};

export default HeaderNav;
