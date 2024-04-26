import s from './SectionMain.module.scss';

const SectionMain = ({ children, section }) => {
  const typeSection = ['hero', 'footer', 'main'];
  const validSection = typeSection.includes(section) ? section : 'main';
  const sectionClassName =
    s[`section${validSection.charAt(0).toUpperCase()}${validSection.slice(1)}`];

  return (
    <section className={`${s.sectionMain} ${sectionClassName}`}>
      {children}
    </section>
  );
};

export default SectionMain;
