import React, { useEffect, useRef, useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import defaultImg from "../../assets/default/default.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import LoadingMovie from "./LoadingMovie";
import Detail from "./Detail";

function TrandTv({ apiKey }) {
  const [loadedImages, setLoadedImages] = useState({});
  const slideBtn = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [detailShow, setDetailShow] = useState(false);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const nextHandle = () => {
    slideBtn.current.swiper.slideNext();
  };
  const prevHandle = () => {
    slideBtn.current.swiper.slidePrev();
  };

  function truncateText(text, maxLength) {
    if (!text) return "";
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  }

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=1`
      );
      setData(data.results);
      setLoading(false);
      setError(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full mx-auto my-8">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <Link
          to="/tv/trending"
          target="_blank"
          className="no-underline outline-none text-2xl flex items-center gap- text-slate-300 transition-all duration-200 hover:text-cyan-600"
        >
          <FaCaretRight />
          Trending
        </Link>
        <div className="flex justify-end items-center md:gap-5 gap-2">
          <button
            onClick={prevHandle}
            className="text-slate-300 md:text-3xl text-2xl cursor-pointer outline-none border-none transition duration-200 ease-in-out hover:text-fuchsia-900 "
          >
            <GrFormPreviousLink />
          </button>
          <button
            onClick={nextHandle}
            className="text-slate-300 md:text-3xl text-2xl cursor-pointer outline-none border-none transition duration-200 ease-in-out hover:text-fuchsia-900 "
          >
            <GrFormNextLink />
          </button>
        </div>
      </div>
      {loading && <LoadingMovie />}
      {error && <LoadingMovie />}
      {data && (
        <Swiper
          slidesPerView={1.1}
          spaceBetween={5}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          ref={slideBtn}
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
          className="mySwiper home-slide w-11/12 mx-auto h-[50vh] mt-2"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() => {
                  setSelectedMovie(item);
                  setDetailShow(true);
                }}
                className="bg-slate-950/30 rounded-md w-full h-full flex justify-end items-end flex-col cursor-pointer transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-fuchsia-900"
              >
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                      : defaultImg
                  }
                  alt={item.name}
                  className="w-full h-4/5 rounded-t-md"
                  onLoad={() => handleImageLoad(item.id)}
                />
                <p className="w-full h-1/5 p-1 flex justify-center items-center text-slate-300 sm:text-lg text-base">
                  {truncateText(item.name, 20)}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {detailShow && selectedMovie && (
        <Detail setDetailShow={setDetailShow} movie={selectedMovie} />
      )}
    </div>
  );
}

export default TrandTv;
