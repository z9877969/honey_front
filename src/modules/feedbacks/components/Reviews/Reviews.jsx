import s from './Reviews.module.scss';
import ReviewCard from '../ReviewCard/ReviewCard';
import { Container, MainTitle } from 'shared/components';
import data from '../../data/data.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import icon from '../../../../shared/icons/sprite.svg';
import { useState } from 'react';
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
            <use xlinkHref={`${icon}#arrow-left`} />
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
            <use xlinkHref={`${icon}#arrow-right`} />
          </svg>
        </button>
      </Container>
    </section>
  );
};

export default Reviews;

// const Reviews = () => {
//   const [swiper, setSwiper] = useState(null);
//   const [data, seData] = useState(null)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//           const res = fetchReviews()
//           setData(res)

//     } catch (error) {
//           setError(error.message)
//         }
//       }

//       fetchData()
//     }, [])

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
//            {(
//            <Swiper
//              onSwiper={setSwiper}
//              slidesPerView={1}
//              >
//              {data.map((data) => (
//                <SwiperSlide key={data.id}>
//                  <ReviewCard data={data} />
//                </SwiperSlide>
//              ))}
//            </Swiper>
//            )}
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
