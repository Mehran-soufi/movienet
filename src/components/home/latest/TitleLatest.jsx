import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

function TitleLatest({
  latestData,
  slideBtn,
  active,
  setActive,
  setPlayig,
  playing,
}) {
  const nextHandle = () => {
    slideBtn.current.swiper.slideNext();
  };
  const prevHandle = () => {
    slideBtn.current.swiper.slidePrev();
  };

  const handleMovie = () => {
    setPlayig("now_playing");
    setActive("movie");
  };
  const handleTv = () => {
    setPlayig("on_the_air");
    setActive("tv");
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-start items-center md:gap-5 gap-2">
        <p className="sm:text-2xl text-xl text-slate-300">Latest</p>
        <div className="relative md:w-32 w-28 rounded flex justify-between items-center border border-cyan-600">
          <span
            className={`w-1/2 h-full bg-cyan-600 -z-10 absolute transition-all duration-300 ease-out ${
              active === "movie" ? "left-0" : "left-1/2"
            }`}
          ></span>
          <div className="w-1/2 flex justify-center items-center cursor-pointer">
            <span
              className={`w-full h-full flex justify-center items-center ${
                active === "movie"
                  ? "text-cyan-300"
                  : "bg-transparent text-slate-300"
              }`}
              onClick={handleMovie}
            >
              Movie
            </span>
          </div>
          <div className="w-1/2 flex justify-center items-center cursor-pointer">
            <span
              className={`w-full h-full flex justify-center items-center ${
                active === "tv"
                  ? "text-cyan-300"
                  : "bg-transparent text-slate-300"
              }`}
              onClick={handleTv}
            >
              TV
            </span>
          </div>
        </div>
      </div>
      {latestData && (
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
      )}
    </div>
  );
}

export default TitleLatest;
