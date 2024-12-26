import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

function TitleSimilar({ similarData, slideBtn }) {
  const nextHandle = () => {
    slideBtn.current.swiper.slideNext();
  };
  const prevHandle = () => {
    slideBtn.current.swiper.slidePrev();
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-start items-center md:gap-5 gap-2">
        <p className="sm:text-2xl text-xl text-slate-300">Similar</p>
      </div>
      {similarData && (
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

export default TitleSimilar;
