import s from './Reviews.module.scss';
import ReviewCard from '../ReviewCard/ReviewCard';
import { Container, MainTitle } from 'shared/components';
import data from '../../data/data.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import { icons } from 'shared/icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchReviews } from 'modules/feedbacks/service/service';

const Reviews = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section>
      <Container className={s.section}>
        <MainTitle title={'Відгуки покупців'} className={s.sectionHeader} />

        <button
          className={s.prevButton}
          onClick={() => swiper && swiper.slidePrev()}
        >
          <svg width="48" height="48">
            <use xlinkHref={`${icons}#arrow-left`} />
          </svg>
        </button>

        <Swiper onSwiper={setSwiper} slidesPerView={1}>
          {data.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <ReviewCard data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          className={s.nextButton}
          onClick={() => swiper && swiper.slideNext()}
        >
          <svg width="48" height="48">
            <use xlinkHref={`${icons}#arrow-right`} />
          </svg>
        </button>
      </Container>
    </section>
  );
};

export default Reviews;

// const Reviews = () => {
//   const [swiper, setSwiper] = useState(null);
//   const dispatch = useDispatch();
//   const { reviews, status, error } = useSelector((state) => state.reviews);

//   useEffect(() => {
//     dispatch(fetchReviews());
//   }, [dispatch]);

//   const renderContent = () => {
//     if (status === 'loading') {
//       return <div>Loading...</div>;
//     }

//     if (status === 'failed') {
//       return <div>Error: {error}</div>;
//     }

//     return (
//       <Swiper
//        onSwiper={setSwiper}
//        slidesPerView={1}
//        >
//         {reviews.map((data) => (
//           <SwiperSlide key={data.id}>
//             <ReviewCard data={data} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     );
//   };

//   return (
//     <section>
//       <Container className={s.section}>
//         <MainTitle title={'Відгуки покупців'} className={s.sectionHeader} />
//          <button
//            className={s.prevButton}
//            onClick={() => swiper && swiper.slidePrev()}
//          >
//            <svg width="48" height="48">
//              <use xlinkHref={`${icon}#arrow-left`} />
//            </svg>
//          </button>
//            {renderContent()}
//          <button
//          className={s.nextButton}
//          onClick={() => swiper && swiper.slideNext()}
//          >
//          <svg width="48" height="48">
//            <use xlinkHref={`${icon}#arrow-right`} />
//          </svg>
//          </button>
//       </Container>
//     </section>
//   );
// };

// export default Reviews;
