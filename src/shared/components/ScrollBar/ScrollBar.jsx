import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Scrollbar = ({ children }) => {
  return (
    <Swiper
      scrollbar={{ draggable: true }}
      style={{ height: '100%', width: '100%' }}
    >
      {Array.isArray(children) &&
        children &&
        children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Scrollbar;
