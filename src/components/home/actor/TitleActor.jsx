import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

function TitleActor({ actorData, slideBtn, gender, setGender }) {
  const nextHandle = () => {
    slideBtn.current.swiper.slideNext();
  };
  const prevHandle = () => {
    slideBtn.current.swiper.slidePrev();
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-start items-center md:gap-5 gap-2">
        <p className="sm:text-2xl text-xl text-slate-300">Actors</p>
        <div className="relative md:w-32 w-28 rounded flex justify-between items-center border border-cyan-600">
          <span
            className={`w-1/2 h-full bg-cyan-600 -z-10 absolute transition-all duration-300 ease-out ${
              gender === "2" ? "left-0" : "left-1/2"
            }`}
          ></span>
          <div className="w-1/2 flex justify-center items-center cursor-pointer">
            <span
              className={`w-full h-full flex justify-center items-center ${
                gender === "2"
                  ? "text-cyan-300"
                  : "bg-transparent text-slate-300"
              }`}
              onClick={() => setGender("2")}
            >
              Man
            </span>
          </div>
          <div className="w-1/2 flex justify-center items-center cursor-pointer">
            <span
              className={`w-full h-full flex justify-center items-center ${
                gender === "1"
                  ? "text-cyan-300"
                  : "bg-transparent text-slate-300"
              }`}
              onClick={() => setGender("1")}
            >
              Woman
            </span>
          </div>
        </div>
      </div>
      {actorData && (
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

export default TitleActor;
