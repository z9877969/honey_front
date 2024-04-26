import clsx from 'clsx';
import s from './SectionMain.module.scss';

const SectionMain = ({ children, sectionStyles }) => {
  return (
    <section className={clsx(sectionStyles ? sectionStyles : s.sectionMain)}>
      {children}
    </section>
  );
};

export default SectionMain;
