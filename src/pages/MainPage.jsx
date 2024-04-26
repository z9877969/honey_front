import { MainPageHero } from 'modules/mainPageHero';
import { OurHoney } from 'modules/ourHoney';
import { OurProducts } from 'modules/ourProducts';
import Reviews from 'modules/feedbacks/components/Reviews/Reviews';
import { AboutUs } from 'modules/aboutUs';

const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <OurHoney />
      <AboutUs />
      <OurProducts />
      <Reviews />
    </>
  );
};

export default MainPage;
