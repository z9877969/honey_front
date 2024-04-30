import clsx from 'clsx';
import s from './SectionMain.module.scss';

const SectionMain = ({ children, className, ...props }) => {
  return (
    <section className={clsx(s.sectionMain, className && className)} {...props}>
      {children}
    </section>
  );
};

export default SectionMain;
