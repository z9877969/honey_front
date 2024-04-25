import s from './Reviews.module.scss';
import ReviewCard from '../ReviewCard/ReviewCard';
import { Container, MainTitle } from 'shared/components';
import { data } from '../../data/data.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Reviews = () => {
  return (
    <section>
      <Container className={s.section}>
        <MainTitle title={'Відгуки покупців'} className={s.sectionHeader} />
        <Swiper
          modules={[Navigation, Pagination]}
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
      </Container>
    </section>
  );
};

export default Reviews;
