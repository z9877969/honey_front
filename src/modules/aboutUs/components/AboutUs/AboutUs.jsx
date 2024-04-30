import { Container } from 'shared/components';
import {
  mobileGirl_1x,
  mobileGirl_2x,
  tableGirl_1x,
  tableGirl_2x,
  desktopGirl_1x,
  desktopGirl_2x,
  mobileBeekeeper_1x,
  mobileBeekeeper_2x,
  tableBeekeeper_1x,
  tableBeekeeper_2x,
  desktopBeekeeper_1x,
  desktopBeekeeper_2x,
  mobileBeekeeper2_1x,
  mobileBeekeeper2_2x,
  tableBeekeeper2_1x,
  tableBeekeeper2_2x,
  desktopBeekeeper2_1x,
  desktopBeekeeper2_2x,
  tableSeed_1x,
  tableSeed_2x,
  desktopSeed_1x,
  desktopSeed_2x,
  tableHoneycomb_1x,
  tableHoneycomb_2x,
  desktopHoneycomb_1x,
  desktopHoneycomb_2x,
  desktopHoneycomb2_1x,
  desktopHoneycomb2_2x,
} from '../../images/imageImports';
import SectionMain from 'shared/components/SectionMain/SectionMain';

import css from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <SectionMain>
      <Container className={css.container}>
        <h2 className={css.aboutUsTitle}>Про нас</h2>

        <div className={css.companyInfo}>
          <div className={css.aboutBlock1}>
            <picture>
              <source
                media="(min-width: 1440px )"
                srcSet={`${desktopGirl_1x} 1x, ${desktopGirl_2x} 2x`}
              />
              <source
                media="(min-width: 768px )"
                srcSet={`${tableGirl_1x} 1x, ${tableGirl_2x} 2x`}
              />
              <source
                media="(max-width: 767.8px )"
                srcSet={`${mobileGirl_1x} 1x, ${mobileGirl_2x} 2x`}
              />
              <img src={mobileGirl_1x} alt="Girl" className={css.girlimg} />
            </picture>

            <div className={css.aboutInfo1}>
              <p className={css.paragraphGreeting}>
                Бажаємо здоров’я! Ми невеличка українська родина, яка розвиває
                бджільництво вже у третьому поколінні.
              </p>
              <p className={`${css.paragraph} ${css.quote}`}>
                Історію своєї родини розказую вам я, Анастасія, от тут на фото
                стою в соняхах.
              </p>
              <picture>
                <source
                  media="(min-width: 1440px )"
                  srcSet={`${desktopBeekeeper_1x} 1x, ${desktopBeekeeper_2x} 2x`}
                />
                <source
                  media="(min-width: 768px )"
                  srcSet={`${tableBeekeeper_1x} 1x, ${tableBeekeeper_2x} 2x`}
                />
                <source
                  media="(max-width: 767.8px )"
                  srcSet={`${mobileBeekeeper_1x} 1x, ${mobileBeekeeper_2x} 2x`}
                />
                <img
                  src={mobileBeekeeper_1x}
                  alt="Beekeeper"
                  className={css.beekeeperImg}
                />
              </picture>
            </div>
          </div>
          <div className={css.aboutBlock2}>
            <div className={css.aboutInfo2}>
              <div className={`${css.seedImgWrapper}`}>
                <picture>
                  <source
                    media="(min-width: 1440px )"
                    srcSet={`${desktopSeed_1x} 1x, ${desktopSeed_2x} 2x`}
                  />
                  <source
                    media="(min-width: 768px )"
                    srcSet={`${tableSeed_1x} 1x, ${tableSeed_2x} 2x`}
                  />
                  <img
                    src={tableSeed_1x}
                    alt="Seed"
                    className={`${css.tableImg}  ${css.seedImg}`}
                  />
                </picture>
              </div>
              <picture>
                <source
                  media="(min-width: 1440px )"
                  srcSet={`${desktopHoneycomb2_1x} 1x, ${desktopHoneycomb2_2x} 2x`}
                />
                <img
                  src={desktopHoneycomb2_1x}
                  alt="Honey comb"
                  className={css.desktopImg}
                />
              </picture>
            </div>
            <p className={css.paragraph}>
              Це мій батько Андрій. Він обожнює бджіл, турбується про довкілля
              та зберігає всі знання, які передавав йому його батько — мій
              дідусь Гриша, які той в свою чергу отримав від свого дядька Миті —
              мого прапрадідуся.
              <br />
              <br />
              Цій родинній традиції вже більше 70 років. Це наша сродня справа,
              яку ми дуже любимо і в яку вкладаємо всю душу. В нашій колекції є
              найстаріший вулик, збережений ще з пасіки мого прапрадідуся Миті,
              та його записи з секретами і порадами бджільництва ще з тих часів.
              <br />
              <br />
              Зараз справу від мого батька переймає мій брат Назар, він також є
              на цих фото. Наша мама Наталія також задіяна у процеси, саме вона
              надійно та з любов’ю пакує і завʼязує бантики до кожної
              <br />
              баночки меду.
            </p>
          </div>
          <div className={css.aboutBlock3}>
            <div className={css.aboutInfo3}>
              <p className={css.paragraph}>
                Бджільництво — це справжнє мистецтво і традиційне ремесло для
                нашої родини.
              </p>
              <picture>
                <source
                  media="(min-width: 1440px )"
                  srcSet={`${desktopHoneycomb_1x} 1x, ${desktopHoneycomb_2x} 2x`}
                />
                <source
                  media="(min-width: 768px )"
                  srcSet={`${tableHoneycomb_1x} 1x, ${tableHoneycomb_2x} 2x`}
                />
                <img
                  src={tableHoneycomb_1x}
                  alt="Honey comb"
                  className={`${css.tableImg} ${css.seedImg}`}
                />
              </picture>
            </div>
            <picture>
              <source
                media="(min-width: 1440px )"
                srcSet={`${desktopBeekeeper2_1x} 1x, ${desktopBeekeeper2_2x} 2x`}
              />
              <source
                media="(min-width: 768px )"
                srcSet={`${tableBeekeeper2_1x} 1x, ${tableBeekeeper2_2x} 2x`}
              />
              <source
                media="(max-width: 767.8px )"
                srcSet={`${mobileBeekeeper2_1x} 1x, ${mobileBeekeeper2_2x} 2x`}
              />
              <img
                src={mobileBeekeeper2_1x}
                alt="Beekeeper"
                className={css.beekeeperImg}
              />
            </picture>
          </div>
        </div>
      </Container>
    </SectionMain>
  );
};

export default AboutUs;
