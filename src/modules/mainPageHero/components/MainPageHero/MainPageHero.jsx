import { Container } from 'shared/components';
import { icons } from 'shared/icons';
import HeroTitle from 'modules/mainPageHero/components/HeroTitle/HeroTitle.jsx';
import Quote from '../Quote/Quote.jsx';
import Icon from '../Icon/Icon.jsx';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import images from '../../images/';

import s from './MainPageHero.module.scss';

const MainPageAbout = () => {
  return (
    <section className={s.section}>
      <Container className={s.container}>
        <HeroTitle title={'Натуральний мед \n з сімейною історією'} />
        <div className={s.wrapper}>
          <Quote
            quote={'Видно, що ви без пуття закохані в той мед'}
            description={
              'Григорій Сковорода, байка «Бджола та Шершень». Точніше нашу сімейну любов до цієї справи не описати!'
            }
          />
          <div className={s.imagesBlock}>
            <div className={s.iconsBlock}>
              <Icon icon={`${icons}#polygon`} />
              <SocialLinks
                icon1={`${icons}#telegram`}
                icon2={`${icons}#instagram`}
              />
            </div>
            <picture>
              <source
                media="(min-width: 1440px )"
                srcSet={`${images.honeycombDesktop} 1x,
            ${images.honeycombDesktop2x} 2x`}
              />
              <source
                media="(min-width: 768px )"
                srcSet={`${images.honeycombTablet} 1x,
                ${images.honeycombTablet2x} 2x`}
              />
              <source
                media="(max-width: 767.98px )"
                srcSet={`${images.honeycombMobile} 1x,
                ${images.honeycombMobile2x} 2x`}
              />
              <img
                src={images.honeycombDesktop}
                alt="Honeycomb with honey flowing out"
                className={s.mainPicture}
              />
            </picture>
            <picture>
              <source
                media="(min-width: 1440px )"
                srcSet={`${images.honeyDesktop} 1x, ${images.honeyDesktop2x} 2x`}
              />
              <img
                src={images.honeyDesktop}
                alt="A jar of honey is on the table"
                className={s.secondaryPicture}
              />
            </picture>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageAbout;
