import { Container } from 'shared/components';
import s from './Footer.module.scss';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <h2>Footer</h2>
        <SocialIcons />
      </Container>
    </footer>
  );
};

export default Footer;
