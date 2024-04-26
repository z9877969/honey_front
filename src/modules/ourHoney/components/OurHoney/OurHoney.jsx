import { Container, MainTitle } from 'shared/components';

import leaves from '../../images/leaves.svg';
import honeyCan from '../../images/honeyCan.svg';
import happyBox from '../../images/happyBox.svg';

import s from './OurHoney.module.scss';
const OurHoney = () => {
  return (
    <Container>
      <MainTitle title={'Наш мед це'} className={s.honeyTitle} />
      <div className={s.honeyArea}>
        <div className={s.honeyFeatureThumb}>
          <div className={s.sotaArea}>
            <img src={leaves} width="43.73" height="48" alt="leaves" />
          </div>
          <div className={s.honeyText}>
            <p className={s.firstLine}>Цілющі властивості</p>
            <p className={s.secondLine}>
              Наш мед зібраний з цвітінь кращих полів Подніпровʼя.{' '}
            </p>
          </div>
        </div>

        <div className={s.honeyFeatureThumb}>
          <div className={s.sotaArea}>
            <img src={honeyCan} width="43.73" height="48" alt="Honey can" />
          </div>
          <div className={s.honeyText}>
            <p className={s.firstLine}>Родинні традиції</p>
            <p className={s.secondLine}>
              Зберігає традиції та має свою сімейну історію.
            </p>
          </div>
        </div>

        <div className={s.honeyFeatureThumb}>
          <div className={s.sotaArea}>
            <img src={happyBox} width="43.73" height="48" alt="Honey can" />
          </div>
          <div className={s.honeyText}>
            <p className={s.firstLine}>Чудовий подарунок</p>
            <p className={s.secondLine}>
              Для близьких людей, адже цей мед про турботу та любов!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurHoney;
