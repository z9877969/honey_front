import { MainPageHero } from 'modules/mainPageHero';
import { OurProducts } from 'modules/ourProducts';
import Reviews from 'modules/feedbacks/components/Reviews/Reviews';
import { AboutUs } from 'modules/aboutUs';
import PopUpDetailedInfo from 'modules/ourProducts/PopUpDetailedInfo/PopUpDetailedInfo';
const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <AboutUs />
      <OurProducts />
      <PopUpDetailedInfo />
      <Reviews />
    </>
  );
};

export default MainPage;
