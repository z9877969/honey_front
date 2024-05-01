import s from './Icon.module.scss';
import { useState } from 'react';

const Icon = ({ icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      className={s.link}
      href="#ourProducts"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg className={`${s.icon} ${isHovered ? s.hover : s.none}`}>
        <use xlinkHref={icon} />
      </svg>
      <p className={s.iconText}>Замовити</p>
    </a>
  );
};

export default Icon;
