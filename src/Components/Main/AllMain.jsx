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
import "./Main.css";
import Doctor from "../../assets/doctor2.webp";
import Doctor2 from "../../assets/doctor3.webp";
import Doctor3 from "../../assets/h3-banner-003.webp";

export default function AllMain() {
  return (
    <>
      <div className="Main">
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
            <MainSection
              image={Doctor}
              title="Protect Your Health And Take Care To Of Your Health"
            ></MainSection>
          </SwiperSlide>
          <SwiperSlide>
            <MainSection
              image={Doctor2}
              title="Look after your health and keep yourself in good condition"
            ></MainSection>
          </SwiperSlide>
          <SwiperSlide>
            <MainSection
              image={Doctor3}
              title="Preserve your well-being and prioritize your health"
            ></MainSection>
          </SwiperSlide>
        </Swiper>
        <img src={wave} />
      </div>
    </>
  );
}
