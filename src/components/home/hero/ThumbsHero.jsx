import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ThumbsHero = ({ swiperRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="absolute w-1/2 h-1/2 bottom-0 z-50 right-0">
      <Swiper
        ref={swiperRef}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
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
        {[...Array(6)].map((_, index) => (
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
                src={`https://picsum.photos/seed/picsum/${
                  300 + index * 10
                }/500`}
                alt=""
                className="w-full h-full rounded-md"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ThumbsHero;
