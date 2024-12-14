import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function MovieLatest({ latestData, slideBtn, setDetailShow,setSelectedMovie }) {
  useEffect(() => {

    // Ensure Swiper initializes navigation properly
    const nextButton = document.querySelector(".swiper-button-next");
    const prevButton = document.querySelector(".swiper-button-prev");

    if (nextButton && prevButton) {
      nextButton.classList.add("custom-next");
      prevButton.classList.add("custom-prev");
    }
  }, []);

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
        {latestData.slice(0, 20).map((item) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => {
                setSelectedMovie(item);
                setDetailShow(true);
              }}
              className="w-full h-full flex justify-end items-end flex-col cursor-pointer transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-fuchsia-900"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
                className="w-full h-4/5 rounded-t-md"
              />
              <p className="w-full h-1/5 p-1 flex justify-center items-center text-slate-300 sm:text-lg text-base">
                {item.title} 
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieLatest;
