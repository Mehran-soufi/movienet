import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import defaultImg from "../../../assets/default/default.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function MovieLatest({
  latestData,
  slideBtn,
  setDetailShow,
  setSelectedMovie,
}) {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    // Ensure Swiper initializes navigation properly
    const nextButton = document.querySelector(".swiper-button-next");
    const prevButton = document.querySelector(".swiper-button-prev");

    if (nextButton && prevButton) {
      nextButton.classList.add("custom-next");
      prevButton.classList.add("custom-prev");
    }
  }, []);
  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  function truncateText(text, maxLength) {
    if (!text) return "";
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  }

  return (
    <div className="w-full h-[45vh] my-4">
      <Swiper
        ref={slideBtn}
        slidesPerView={1}
        spaceBetween={5}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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
        {latestData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => {
                setSelectedMovie(item);
                setDetailShow(true);
              }}
              className=" bg-slate-950/30 rounded-md w-full h-full flex justify-end items-end flex-col cursor-pointer transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-fuchsia-900"
            >
              <img
                src={
                  loadedImages[item.id]
                    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                    : defaultImg
                }
                alt={item.title}
                className="w-full h-4/5 rounded-t-md"
                onLoad={() => handleImageLoad(item.id)}
              />
              <p className="w-full h-1/5 p-1 flex justify-center items-center text-slate-300 sm:text-lg text-base">
                {truncateText(item.title, 20)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieLatest;
