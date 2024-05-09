import { useState } from 'react';
import s from './ThanksForOrder.module.scss';
import sprite from '../../../../shared/icons/sprite.svg';

const ThanksForOrder = ({ handleClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClickClose = () => {
    setIsOpen(false);
    if (typeof handleClose === 'function') {
      handleClose();
    }
  };

  const handleClickBackdrop = () => {
    setIsOpen(false);
    if (typeof handleClose === 'function') {
      handleClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div>
          <div className={s.modalBackdrop} onClick={handleClickBackdrop}></div>
          <div className={s.modalContainer}>
            <div className={s.closeBtn}>
              <button onClick={handleClickClose}>
                <svg className={s.closeIcon}>
                  <use xlinkHref={`${sprite}#cross-close`} />
                </svg>
              </button>
            </div>
            <div className={s.mainContent}>
              <div className={s.thanksContainer}>
                <h2 className={s.modalTitle}>Дякуємо!</h2>
                <p className={s.modalText}>
                  Ваше замовлення прийняте.
                  <br className={s.mobileBreak} /> Ми зв’яжемося з вами
                  <br /> найближчим часом для уточнення деталей.
                </p>
              </div>
              <div className={s.contacts}>
                <hr className={s.horizontalLine} />
                <ul className={s.contactsList}>
                  <li>
                    <a
                      className={s.contactsDetails}
                      href="mailto:plokhaanastasiia@gmail.com"
                    >
                      plokhaanastasiia@gmail.com
                    </a>
                  </li>
                  <li>
                    <a className={s.contactsDetails} href="tel:+380968880739">
                      +38 096 888 07 39
                    </a>
                  </li>
                  <div className={s.contactsIcons}>
                    <li>
                      <a href="https://telegram.org/" target="_blank">
                        <svg width={32} height={32} className={s.icon}>
                          <use xlinkHref={`${sprite}#telegram`}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/bdzhola_ta_shershen"
                        target="_blank"
                      >
                        <svg width={32} height={32} className={s.icon}>
                          <use xlinkHref={`${sprite}#instagram`}></use>
                        </svg>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThanksForOrder;
