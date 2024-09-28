import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import OneSevice from "./OneService";

export default function Service() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <OneSevice></OneSevice>
        </SwiperSlide>
        <SwiperSlide>
          <OneSevice></OneSevice>
        </SwiperSlide>
        <SwiperSlide>
          <OneSevice></OneSevice>
        </SwiperSlide>
        <SwiperSlide>
          <OneSevice></OneSevice>
        </SwiperSlide>
        <SwiperSlide>
          <OneSevice></OneSevice>
        </SwiperSlide>
        <SwiperSlide>
          <OneSevice></OneSevice>
        </SwiperSlide>
        <SwiperSlide>
          <OneSevice></OneSevice>
        </SwiperSlide>
        <SwiperSlide>
          <OneSevice></OneSevice>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
