import { MainPageHero } from 'modules/mainPageHero';
import { OurProducts } from 'modules/ourProducts';
import Reviews from 'modules/feedbacks/components/Reviews/Reviews';
import { AboutUs } from 'modules/aboutUs';

const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <AboutUs />
      <OurProducts/>
      <Reviews />
    </>
  );
};

export default MainPage;
