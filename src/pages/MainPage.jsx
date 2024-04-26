import { MainPageHero } from 'modules/mainPageHero';
import { OurProducts } from 'modules/ourProducts';
import Reviews from 'modules/feedbacks/components/Reviews/Reviews';

const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <OurProducts/>
      <Reviews />
    </>
  );
};

export default MainPage;
