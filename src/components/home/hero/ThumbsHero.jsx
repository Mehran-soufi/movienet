import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import defaultImg from "../../../assets/default/default.jpg";
const ThumbsHero = ({ swiperRef, trendingData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="absolute sm:w-1/2 w-2/3 lg:h-1/2 h-1/3 bottom-0 z-50 right-0">
      <Swiper
        ref={swiperRef}
        loop={true}
        slidesPerView={1.1}
        spaceBetween={5}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 1.4,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 1.4,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-full flex justify-center items-center"
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        allowTouchMove={false}
        allowSlideNext={true}
        allowSlidePrev={true}
      >
        {trendingData.slice(0, 5).map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0.5, height: "80%" }}
              animate={{
                opacity: currentSlide === index ? 1 : 0.7,
                height: currentSlide === index ? "100%" : "80%",
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className={`w-full h-full p-1 flex ${
                currentSlide === index
                  ? "highlight"
                  : "items-center justify-center"
              }`}
            >
              <img
                src={
                  imageLoaded
                    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                    : defaultImg
                }
                alt={item.title}
                className="w-full h-full object-cover object-center rounded-md"
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ThumbsHero;
