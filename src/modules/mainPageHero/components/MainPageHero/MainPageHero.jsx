import { Container } from 'shared/components';
import { icons } from 'shared/icons';
import HeroTitle from 'modules/mainPageHero/components/HeroTitle/HeroTitle.jsx';
import s from './MainPageHero.module.scss';
import Quote from '../Quote/Quote.jsx';
import Icon from '../Icon/Icon.jsx';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import images from '../../images/';

const MainPageAbout = () => {
  return (
    <section className={s.section}>
      <Container>
        <HeroTitle title={'Натуральний мед з сімейною історією'} />
        <div className={s.wrapper}>
          <Quote
            quote={`«Видно, що ви без пуття закохані в той мед»`}
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
            <img
              className={s.mainPicture}
              srcSet={`${images.honeycombMobile}  279w,
            ${images.honeycombMobile2x}      558w,
            ${images.honeycombDesktop}        416w,
            ${images.honeycombDesktop2x}     832w,
            ${images.honeycombTablet}          576w,
            ${images.honeycombTablet2x}       1152w
          `}
              sizes="(min-width: 1440px) 416px, (min-width: 768px) 576px, (max-width: 767.98px) 279px"
              src={images.honeycombDesktop}
              alt="Honeycomb with honey flowing out"
            />
            <img
              srcSet={`${images.honeyDesktop} 1x, ${images.honeyDesktop2x} 2x`}
              src={images.honeyDesktop}
              width="592"
              height="440"
              alt="A jar of honey is on the table"
              className={s.secondaryPicture}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageAbout;
