import SectionMain from 'shared/components/SectionMain/SectionMain';
import { Container, MainTitle } from 'shared/components';
import { HoneyFeature } from 'modules/ourHoney';
import { ourHoneySet } from '../../images';
import s from './OurHoney.module.scss';

const OurHoney = () => {
  return (
    <SectionMain className={s.ourHoneySectionMain}>
      <Container className={s.container}>
        <MainTitle title={'Наш мед це'} className={s.honeyTitle} />
        <div className={s.honeyArea}>
          <HoneyFeature
            svg={`${ourHoneySet}#leaves`}
            firstLine={'Цілющі властивості'}
            secondLine={'Наш мед зібраний з цвітінь кращих полів Подніпровʼя.'}
          />
          <HoneyFeature
            svg={`${ourHoneySet}#honeyCan`}
            firstLine={'Родинні традиції'}
            secondLine={'Зберігає традиції та має свою сімейну історію.'}
          />
          <HoneyFeature
            svg={`${ourHoneySet}#happyBox`}
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
