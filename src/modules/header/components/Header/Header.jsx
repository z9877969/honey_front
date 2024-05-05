import HeaderNav from '../HeaderNav/HeaderNav';
import { Container, Logo } from 'shared/components';
import s from './Header.module.scss';
// import ThanksForOrder from 'modules/cart/components/ThanksForOrder/ThanksForOrder';
// import { useState } from 'react';

const Header = () => {
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const handleOpenPopup = () => {
  //   setIsPopupOpen(true);
  // };

  // const handleClosePopup = () => {
  //   setIsPopupOpen(false);
  // };
  return (
    <header id="header" className={s.header}>
      <Container className={s.flex}>
        <Logo className={s.logo} />
        <HeaderNav />
        {/* <button className={s.test} onClick={handleOpenPopup}>
          Test Thanks For Order pop-up
        </button>
        {isPopupOpen && <ThanksForOrder handleClose={handleClosePopup} />}{' '} */}
      </Container>
    </header>
  );
};

export default Header;
