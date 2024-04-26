import { Container, Logo } from 'shared/components';
import s from './Footer.module.scss';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.contentWrap}>
          <Logo
            id={'logo'}
            iconClassName={s.logoW}
            iconHeight={24}
            iconWidth={24}
            linkClassName={s.link}
          />
          <div className={s.socialWrap}>
            <ul className={s.contacts}>
              <li>plokhaanastasiia@gmail.com</li>
              <li>+38 096 888 07 39</li>
            </ul>
            <SocialIcons />
          </div>
        </div>
        <button type="button">Created by GoIT</button>
      </Container>
    </footer>
  );
};

export default Footer;
