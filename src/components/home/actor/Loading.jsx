import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Skeleton from "react-loading-skeleton";

function Loading() {
  return (
    <section className="w-full">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={5}
        navigation={{}}
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
        className="mySwiper w-full h-full"
      >
        {[...Array(8)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-40 h-40 rounded-full relative">
                <Skeleton
                  circle={true}
                  width="100%"
                  height="100%"
                  containerClassName="w-full h-full rounded-full"
                  baseColor="#334155"
                  highlightColor="#94a3b8"
                />
              </div>
            </div>
            <div className="py-1 w-full">
              <div className="py-1">
                <Skeleton
                  width="100%"
                  height="20px"
                  containerClassName="w-full h-full"
                  baseColor="#334155"
                  highlightColor="#94a3b8"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Loading;
