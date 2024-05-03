/* eslint-disable no-console */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { icons } from 'shared/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchReviews } from 'modules/feedbacks/service/service';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, MainTitle } from 'shared/components';
import s from './Reviews.module.scss';
import ReviewCard from '../ReviewCard/ReviewCard';
import SectionMain from 'shared/components/SectionMain/SectionMain';

const Reviews = () => {
  const [swiper, setSwiper] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchReviews();
        setData(res);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <SectionMain id="reviews">
      <Container className={s.section}>
        <MainTitle title={'Відгуки покупців'} className={s.sectionHeader} />
        <div className={s.centerDiv}>
          <button
            className={s.prevButton}
            onClick={() => swiper && swiper.slidePrev()}
          >
            <svg className={s.svg}>
              <use xlinkHref={`${icons}#arrow-left`} />
            </svg>
          </button>
          {
            <Swiper onSwiper={setSwiper} slidesPerView={1}>
              {Array.isArray(data) &&
                data &&
                data.map((data) => (
                  <SwiperSlide key={data.id}>
                    <ReviewCard data={data} />
                  </SwiperSlide>
                ))}
            </Swiper>
          }
          <button
            className={s.nextButton}
            onClick={() => swiper && swiper.slideNext()}
          >
            <svg className={s.svg}>
              <use xlinkHref={`${icons}#arrow-right`} />
            </svg>
          </button>
        </div>
      </Container>
    </SectionMain>
  );
};

export default Reviews;
