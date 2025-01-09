import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function LoadingMovie() {
  return (
    <div className="w-11/12 mx-auto h-[50vh] my-4">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={5}
        breakpoints={{
          640: {
            slidesPerView: 3.2,
            spaceBetween: 7,
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 7,
          },
          1024: {
            slidesPerView: 7.2,
            spaceBetween: 10,
          },
        }}
        modules={[]}
        className="mySwiper home-slide w-full h-full"
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index} className="w-full h-full flex flex-col">
            <Skeleton
              width="100%"
              height="90%"
              containerClassName="w-full h-[90%]"
              baseColor="#334155"
              highlightColor="#94a3b8"
            />
            <Skeleton
              width="100%"
              height="30%"
              containerClassName="w-full h-[30%]"
              baseColor="#334155"
              highlightColor="#94a3b8"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LoadingMovie;
