import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import MainHero from "./MainHero";
import ThumbsHero from "./ThumbsHero";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

function Index() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [trendingData, setTrendingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getTrendingData = async () => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=1`
      );
      setTrendingData(data.results);
    } catch (err) {
      setError(true);
      console.error("Error fetching trending data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTrendingData();
  }, []);

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
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data.</p>}
      {trendingData && (
        <>
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
        </>
      )}
    </div>
  );
}

export default Index;
