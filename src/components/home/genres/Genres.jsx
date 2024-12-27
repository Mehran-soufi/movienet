import React from "react";
import { Link } from "react-router-dom";

import genres from "../../../genres";
import genreImages from "../../../genreImages";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


function Genres() {
  return (
    <section className="w-full sm:h-[50vh] h-[40vh] p-4">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={5}
        centeredSlides={true}
        loop={true}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2.1,
            spaceBetween: 7,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 7,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
        }}
        className="mySwiper home-slide w-full h-full"
      >
        {Object.keys(genres).map((id) => (
          <SwiperSlide key={id}>
            <Link
              to="/"
              className="relative w-full h-full flex justify-center items-center cursor-pointer rounded-lg transition-all duration-200 ease-out  genre"
            >
              <img
                src={genreImages[id]}
                alt={genres[id]}
                className="w-full h-full rounded-lg opacity-80"
              />
              <p className="absolute lg:text-4xl sm:text-2xl text-xl  rounded-lg uppercase text-white w-full h-full flex justify-center items-center bg-black/30">
                {genres[id]}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Genres;
