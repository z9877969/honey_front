import s from './Reviews.module.scss';
import ReviewCard from '../ReviewCard/ReviewCard';
import { reviewData } from '../../service/service.js';
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Pagination]
// })

const Reviews = () => {
  return (
    <ul className={s.list}>
      {reviewData.map((review) => {
        return (
          <li key={review.id}>
            <ReviewCard review={review} />
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
