import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import OneSevice from "./OneService";
import { useState, useEffect } from "react";
import "./Services.css";

export default function Service() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 392) {
        setSlidesPerView(1);
      }
      else if(window.innerWidth < 500){
        setSlidesPerView(2);
      }
      else {
        setSlidesPerView(3);
      }
    };

    // Call the function initially to set the correct slidesPerView
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <OneSevice />
      </SwiperSlide>
      <SwiperSlide>
        <OneSevice />
      </SwiperSlide>
      <SwiperSlide>
        <OneSevice />
      </SwiperSlide>
      <SwiperSlide>
        <OneSevice />
      </SwiperSlide>
      <SwiperSlide>
        <OneSevice />
      </SwiperSlide>
      <SwiperSlide>
        <OneSevice />
      </SwiperSlide>
      <SwiperSlide>
        <OneSevice />
      </SwiperSlide>
      <SwiperSlide>
        <OneSevice />
      </SwiperSlide>
    </Swiper>
  );
}
