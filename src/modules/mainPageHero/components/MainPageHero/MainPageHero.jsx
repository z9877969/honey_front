import { Container, MainTitle } from 'shared/components';
import s from './MainPageHero.module.scss';

const MainPageAbout = () => {
  return (
    <section className={s.section}>
      <Container className={s.container}>
        <MainTitle title={'Some title'} className={s.mainHeroTitle} />
      </Container>
    </section>
  );
};

export default MainPageAbout;
