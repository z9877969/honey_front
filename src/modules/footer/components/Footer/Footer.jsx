import { Container, Logo } from 'shared/components';
import s from './Footer.module.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
import Contacts from '../Contacts/Contacts';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container className={s.container}>
        <div className={s.contentWrap}>
          <Logo
            id={'logo'}
            iconClassName={s.logoW}
            iconHeight={24}
            iconWidth={24}
            linkClassName={s.logo}
          />
          <div className={s.socialWrap}>
            <Contacts />
            <SocialIcons />
          </div>
        </div>
        {/* add Button component */}
        <button type="button" className={s.footBtn}>
          Created by GoIT
        </button>
      </Container>
    </footer>
  );
};

export default Footer;
