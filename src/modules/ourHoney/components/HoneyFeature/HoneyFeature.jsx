import { icons as sprite } from 'shared/icons';
import s from './HoneyFeature.module.scss';

const HoneyFeature = ({ svg, firstLine, secondLine }) => {
  return (
    <div className={s.honeyFeatureThumb}>
      <svg className={s.sotaArea}>
        <use href={`${sprite}#sota`} />
        <use className={s.svgArea} href={svg} />
      </svg>
      <div className={s.honeyText}>
        <p className={s.firstLine}>{firstLine}</p>
        <p className={s.secondLine}>{secondLine}</p>
      </div>
    </div>
  );
};

export default HoneyFeature;
