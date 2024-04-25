import s from './Reviews.module.scss';
import ReviewCard from '../ReviewCard/ReviewCard';
import { data } from '../../data/data.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Reviews = () => {
  return (
    <section className={s.section}>
      <h2 className={s.sectionHeader}>Відгуки покупців</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
      >
        {data.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <ReviewCard data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Reviews;
