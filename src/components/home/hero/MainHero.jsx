import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaImdb } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import genres from "../../../genres";

const MainHero = ({ swiperRef, trendingData }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const progressBar = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressBar.current) {
      progressBar.current.style.width = `${(1 - progress) * 100}%`;
    }
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [currentSlide]);

  const getPopularityPercentage = (popularity) => {
    const maxPopularity = 1000;
    return Math.min(Math.round((popularity / maxPopularity) * 100), 100);
    };

  return (
    <Swiper
      ref={swiperRef}
      className="mySwiper w-full h-full"
      loop={true}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={1000}
      modules={[EffectFade, Autoplay]}
      onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      allowTouchMove={false}
      allowSlideNext={true}
      allowSlidePrev={true}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      <div
        className="absolute w-full h-1 rounded-r-md top-0 left-0 z-50 bg-gradient-to-r from-purple-500 via-pink-400 to-rose-300/30"
        slot="container-end"
        ref={progressBar}
      ></div>
      {trendingData &&
        trendingData.slice(0, 5).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt={item.title}
                className="w-full h-full opacity-70"
              />
              <div className="absolute top-0 left-0 w-full h-full sm:bg-gradient-to-r bg-gradient-to-br to-transparent from-black/85">
                <motion.div
                  key={animationKey}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="w-full h-full pl-5 flex sm:justify-center justify-start sm:pt-0 pt-5 items-start flex-col gap-5"
                >
                  <h2 className="font-bold lg:text-5xl sm:text-4xl text-2xl">{item.title}</h2>
                  <p className="sm:text-lg text-base text-blue-400">
                    {item.release_date.split("-")[0]}
                  </p>
                  <p className="sm:text-lg text-base text-gray-300">
                    {item.genre_ids.map((id) => genres[id]).join(" - ")}
                  </p>
                  <p className="sm:text-lg text-base text-yellow-400 flex items-center gap-1">
                    <FaImdb /> {item.vote_average.toFixed(1)}
                  </p>
                  <p className="sm:text-lg text-base text-cyan-400 flex items-center gap-1">
                    <FaRegFaceGrinHearts />{" "}
                    {getPopularityPercentage(item.popularity)}%
                  </p>
                  <Link
                    to="/"
                    className="outline-none no-underline border-none bg-indigo-600 rounded-md py-1 px-10 text-white sm:text-lg text-base cursor-pointer transition duration-75 hover:scale-95"
                  >
                    view
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MainHero;
