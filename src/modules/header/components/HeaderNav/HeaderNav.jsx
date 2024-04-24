import s from './HeaderNav.module.scss';

const HeaderNav = () => {
  return (
    <ul className={s.navList}>
      <li className={s.navListItem}>Item-1</li>
      <li className={s.navListItem}>Item-2</li>
      <li className={s.navListItem}>Item-3</li>
    </ul>
  );
};

export default HeaderNav;
