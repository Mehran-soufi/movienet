import React, { useRef } from "react";
import MainHero from "./MainHero";
import ThumbsHero from "./ThumbsHero";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

function IndexHero({ trendingData }) {
  // swiper custom setting
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  const handleNext = () => {
    if (swiper1Ref.current && swiper2Ref.current) {
      swiper1Ref.current.swiper.slideNext();
      swiper2Ref.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper1Ref.current && swiper2Ref.current) {
      swiper1Ref.current.swiper.slidePrev();
      swiper2Ref.current.swiper.slidePrev();
    }
  };

  return (
    <div className="w-full h-screen relative">
      <MainHero swiperRef={swiper1Ref} trendingData={trendingData} />
      <ThumbsHero swiperRef={swiper2Ref} trendingData={trendingData} />
      <div className="absolute z-50 bottom-5 left-5 transform flex gap-2">
        <button
          className="text-slate-300 text-3xl outline-none border-none"
          onClick={handlePrev}
        >
          <GrFormPreviousLink />
        </button>
        <button
          className="text-slate-300 text-3xl outline-none border-none"
          onClick={handleNext}
        >
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
}

export default IndexHero;
