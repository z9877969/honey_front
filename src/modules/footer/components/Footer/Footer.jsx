import { Button, Container, Logo } from 'shared/components';
import s from './Footer.module.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
import Contacts from '../Contacts/Contacts';
import { useModal } from 'hooks/useModal';
import { useCallback } from 'react';
import CreatedByPopup from 'modules/createdBy/components/CreatedByPopup/CreatedByPopup';

const Footer = () => {
  const setModal = useModal();
  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);
  const openModal = useCallback(() => {
    setModal(<CreatedByPopup onClose={closeModal} />);
  }, [setModal, closeModal]);

  return (
    <footer className={s.footer} id="footer">
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
          onClick={openModal}
        />
      </Container>
    </footer>
  );
};

export default Footer;
