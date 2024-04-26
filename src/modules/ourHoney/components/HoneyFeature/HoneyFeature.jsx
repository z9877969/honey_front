import s from './HoneyFeature.module.scss';

import sota from '../../images/ourHoneySet.svg';

const HoneyFeature = ({ svg, firstLine, secondLine }) => {
  return (
    <div className={s.honeyFeatureThumb}>
      <svg className={s.sotaArea}>
        <use href={`${sota}#sota`} />
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
