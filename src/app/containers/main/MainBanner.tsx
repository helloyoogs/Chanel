"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

export default function MainBanner() {
  return (
    <div className={"relative"}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: ".my-pagination",
          clickable: true,
          renderBullet: (_index, className) =>
            `<span class="${className} cursor-point inline-block w-2 h-2 rounded-full mx-1 bg-white [&.swiper-pagination-bullet-active]:bg-red-600"></span>`,
        }}
        className="h-80 "
        speed={500}
      >
        <SwiperSlide>
          <div className={"bg-pink-300 h-full"}>1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={"bg-amber-300 h-full"}>2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={"bg-sky-300 h-full"}>3</div>
        </SwiperSlide>
        <div className="my-pagination absolute z-50 top-1/2 left-1/2 flex justify-center mt-2 "></div>
      </Swiper>
    </div>
  );
}
