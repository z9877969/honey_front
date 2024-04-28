import s from './HeroTitle.module.scss';

const HeroTitle = ({ title }) => {
  return <h1 className={s.title}>{title}</h1>;
};

export default HeroTitle;
