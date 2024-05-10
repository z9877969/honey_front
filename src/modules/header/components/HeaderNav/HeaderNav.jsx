import s from './HeaderNav.module.scss';
import sprite from '../../../../shared/icons/sprite.svg';
import { useState, useRef, useEffect } from 'react';
import { BasketButton } from 'shared/components';
import { scrollToElementById } from 'helpers/scrollToElementById';

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
  const handleNavLinkClick = (id) => {
    scrollToElementById(id);
    closeNav();
  };

  return (
    <div className={s.desktopHeader} ref={navRef}>
      <button onClick={toggleNav}>
        <svg className={s.burgerIcon}>
          <use xlinkHref={`${sprite}#menu`} />
        </svg>
      </button>
      <ul className={`${s.navList} ${isNavOpen ? s.navListOpen : ''}`}>
        <li className={s.navListItem}>
          <a
            className={s.navListLink}
            onClick={() => handleNavLinkClick('ourProducts')}
          >
            Каталог
          </a>
        </li>
        <li className={s.navListItem}>
          <a
            className={s.navListLink}
            onClick={() => handleNavLinkClick('aboutUS')}
          >
            Про нас
          </a>
        </li>
        <li className={s.navListItem}>
          <a
            className={s.navListLink}
            onClick={() => handleNavLinkClick('reviews')}
          >
            Відгуки
          </a>
        </li>
        <li className={s.navListItem}>
          <a
            className={s.navListLink}
            onClick={() => handleNavLinkClick('footer')}
          >
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
      <BasketButton />
    </div>
  );
};

export default HeaderNav;
