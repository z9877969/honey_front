import { Container, MainTitle } from 'shared/components';
import css from './AboutUs.module.scss';
const AboutUs = () => {
  return (
    <section className={css.section}>
      <Container>
        <MainTitle title={'Про нас'} />
      </Container>
    </section>
  );
};

export default AboutUs;
