import s from './Icon.module.scss';

const Icon = ({ icon }) => {
  return (
    <>
      <svg className={s.icon}>
        <use xlinkHref={icon} />
      </svg>
      <a className={s.iconTextLink} href="#">
        Замовити
      </a>
    </>
  );
};

export default Icon;
