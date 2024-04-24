import HeaderNav from '../HeaderNav/HeaderNav';
import { Container, Logo } from 'shared/components';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.flex}>
        <Logo className={s.logo} />

        <HeaderNav />
      </Container>
    </header>
  );
};

export default Header;
