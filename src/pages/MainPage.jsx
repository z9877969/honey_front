import { MainPageHero } from 'modules/mainPageHero';
import { OurHoney } from 'modules/ourHoney';
import { OurProducts } from 'modules/ourProducts';
import Reviews from 'modules/feedbacks/components/Reviews/Reviews';
import { AboutUs } from 'modules/aboutUs';

import { PopUpDetailedInfo } from 'modules/ourProducts/';

const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <OurHoney />
      <OurProducts />
      <AboutUs />

      <Reviews />
      <PopUpDetailedInfo />
    </>
  );
};

export default MainPage;
