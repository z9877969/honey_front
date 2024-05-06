import SectionMain from 'shared/components/SectionMain/SectionMain';
import { Container, MainTitle } from 'shared/components';
import { HoneyFeature } from 'modules/ourHoney';
import s from './OurHoney.module.scss';
import { icons as sprite } from 'shared/icons';

const OurHoney = () => {
  return (
    <SectionMain className={s.ourHoneySectionMain}>
      <Container className={s.container}>
        <MainTitle title={'Наш мед це'} className={s.honeyTitle} />
        <div className={s.honeyArea}>
          <HoneyFeature
            svg={`${sprite}#leaves`}
            firstLine={'Цілющі властивості'}
            secondLine={'Наш мед зібраний з цвітінь кращих полів Подніпровʼя.'}
          />
          <HoneyFeature
            svg={`${sprite}#honeyCan`}
            firstLine={'Родинні традиції'}
            secondLine={'Зберігає традиції та має свою сімейну історію.'}
          />
          <HoneyFeature
            svg={`${sprite}#happyBox`}
            firstLine={'Чудовий подарунок'}
            secondLine={
              'Для близьких людей, адже цей мед про турботу та любов!'
            }
          />
        </div>
      </Container>
    </SectionMain>
  );
};

export default OurHoney;
