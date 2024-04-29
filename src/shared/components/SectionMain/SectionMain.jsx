import clsx from 'clsx';
import s from './SectionMain.module.scss';

const SectionMain = ({ children, sectionStyles }) => {
  return (
    <section className={clsx(s.sectionMain, sectionStyles && sectionStyles)}>
      {children}
    </section>
  );
};

export default SectionMain;
