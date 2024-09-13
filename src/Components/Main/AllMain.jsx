// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import wave from "../../assets/wave.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MainSection from "./Main";

export default function AllMain() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <MainSection></MainSection>
        </SwiperSlide>
        <SwiperSlide>
          <MainSection></MainSection>
        </SwiperSlide>
        <SwiperSlide>
          <MainSection></MainSection>
        </SwiperSlide>
        <SwiperSlide>
          <MainSection></MainSection>
        </SwiperSlide>
      </Swiper>
      <img src={wave} />
    </>
  );
}
