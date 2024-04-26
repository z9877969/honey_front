import { Button, Container, Logo } from 'shared/components';
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
        <Button
          type="button"
          className={s.createdByBtn}
          title={'Created by GoIT'}
          onClick={() => {}}
        />
      </Container>
    </footer>
  );
};

export default Footer;
