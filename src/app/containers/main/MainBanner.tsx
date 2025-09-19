"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import banner1 from "@/app/assets/img/banner1.png";
import banner2 from "@/app/assets/img/banner2.png";
import banner3 from "@/app/assets/img/banner3.jpg";

export default function MainBanner() {
  return (
    <div className={"relative w-[var(--banner_width)] max-w-full"}>
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
            `<span class="${className} cursor-point inline-block bg-black rounded-full w-[14px] h-[14px] [&.swiper-pagination-bullet-active]:rounded-[3px] hover:rounded-[3px] cursor-pointer mx-0"></span>`,
        }}
        speed={500}
      >
        <SwiperSlide>
          <Image src={banner1} alt={"banner1"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt={"banner2"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt={"banner3"} />
        </SwiperSlide>
        <div className="my-pagination flex justify-center gap-[25px] mt-[60px]"></div>
      </Swiper>
    </div>
  );
}
