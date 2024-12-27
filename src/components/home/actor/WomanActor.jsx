import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function WomanActor({ actorData, slideBtn }) {
  return (
    <div className="w-full my-4">
      <Swiper
        ref={slideBtn}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1}
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
        modules={[Navigation]}
        className="mySwiper home-slide w-full h-full"
      >
        {actorData.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              to="/"
              className="w-full h-full flex flex-col justify-center items-center cursor-pointer transition-all duration-75 ease-out hover:scale-95"
            >
              <div className="w-40 h-40 rounded-full relative">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                  alt={item.name}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="py-1">
                <p className="text-slate-200">{item.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WomanActor;
