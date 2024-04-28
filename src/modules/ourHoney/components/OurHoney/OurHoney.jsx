import { Container, MainTitle } from 'shared/components';

import ourHoneySet from '../../images/ourHoneySet.svg';

import s from './OurHoney.module.scss';
import HoneyFeature from '../HoneyFeature/HoneyFeature';
const OurHoney = () => {
  return (
    <section className={s.section}>
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
    </section>
  );
};

export default OurHoney;
