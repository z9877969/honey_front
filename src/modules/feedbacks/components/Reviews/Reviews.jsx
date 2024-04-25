// import s from './Reviews.module.scss';
import ReviewCard from '../ReviewCard/ReviewCard';
import { reviewData } from '../../service/service.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Reviews = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: false }}
    >
      {reviewData.map((review) => {
        return (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Reviews;
