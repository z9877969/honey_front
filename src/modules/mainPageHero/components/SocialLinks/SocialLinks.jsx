import s from './SocialLinks.module.scss';

const SocialLinks = ({ icon1, icon2 }) => {
  return (
    <div className={s.social}>
      <a
        className={s.link}
        href="https://t.me/anastasiia_plokha"
        target="blank"
        rel="noreferrer"
      >
        <svg className={s.icon}>
          <use xlinkHref={icon1} />
        </svg>
      </a>
      <a
        className={s.link}
        href="https://www.instagram.com/bdzhola_ta_shershen?igsh=MXY0YndodWYyM3JoYw%3D%3D&utm_source=qr"
        target="blank"
        rel="noreferrer"
      >
        <svg className={s.icon}>
          <use xlinkHref={icon2} />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
