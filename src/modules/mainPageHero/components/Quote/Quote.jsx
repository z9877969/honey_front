import s from './Quote.module.scss';

const Quote = ({ quote, description }) => {
  return (
    <p className={s.quote}>
      <span className={s.highlighting}>{quote}</span>
      {'\u00A0'}
      {'\u2013'}
      {'\u00A0'}
      {description}
    </p>
  );
};

export default Quote;
