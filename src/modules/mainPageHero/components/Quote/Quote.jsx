import s from './Quote.module.scss';

const Quote = ({ quote, description }) => {
  return (
    <p className={s.quote}>
      <span className={s.highlighting}>&#xab;{quote}&#xbb;</span>
      &#xa0; &#x2014; &#xa0;
      {description}
    </p>
  );
};

export default Quote;
