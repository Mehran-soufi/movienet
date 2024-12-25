import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaImdb, FaRegGrinHearts } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";

function Hero({ informationData }) {
  if (!informationData) {
    return <div>Loading...</div>;
  }

  const {
    backdrop_path,
    poster_path,
    title,
    name,
    release_date,
    first_air_date,
    genres,
    original_language,
    runtime,
    revenue,
    vote_average,
    popularity,
  } = informationData;

  const genreNames = genres.map((genre) => genre.name).join(" - ");
  const year = (release_date || first_air_date || "").split("-")[0];

  return (
    <div className="w-fill sm:h-[80vh] h-screen relative">
      <div className="w-full sm:h-4/5 h-full hero-information">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title || name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-full sm:h-[80vh] h-full absolute top-0 left-0 flex sm:flex-row flex-col justify-center items-center">
        <div className="sm:w-1/3 w-full sm:h-full h-1/3 z-10">
          <div className="w-full h-1/4 flex justify-center items-center gap-4">
            <button
              className="outline-none border-none transition duration-75 hover:scale-90 text-xl"
              title="like"
            >
              <AiOutlineLike />
            </button>
            <button
              className="outline-none border-none transition duration-75 hover:scale-90 text-xl"
              title="dislike"
            >
              <AiOutlineDislike />
            </button>
            <button
              className="outline-none border-none transition duration-75 hover:scale-90 text-xl"
              title="share"
            >
              <FiShare2 />
            </button>
            <button
              className="outline-none border-none transition duration-75 hover:scale-90 text-xl"
              title="save"
            >
              <IoDocumentOutline />
            </button>
          </div>
          <div className="w-full h-3/4">
            <img
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={title || name}
              className="mx-auto w-4/5 h-full rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="sm:w-2/3 w-full sm:h-full h-2/3">
          <div className="w-full sm:h-4/5 h-full flex sm:flex-row flex-col lg:py-8 sm:py-6 py-4">
            <div className="sm:w-4/5 w-full sm:h-full h-3/4 flex flex-col sm:justify-start justify-center items-start gap-4">
              <h1 className="text-5xl font-bold text-white sm:w-auto w-full flex justify-center items-center">{title || name}</h1>
              <p className="flex justify-center items-center gap-2 text-purple-300 sm:pl-0 pl-4">
                year of production :
                <span className="text-slate-300">{year}</span>
              </p>
              <p className="flex justify-center items-center gap-2 text-purple-300 sm:pl-0 pl-4">
                genre :<span className="text-slate-300">{genreNames}</span>
              </p>
              <p className="flex justify-center items-center gap-2 text-purple-300 sm:pl-0 pl-4">
                Manufacturer country :
                <span className="text-slate-300">{original_language}</span>
              </p>
              <p className="flex justify-center items-center gap-2 text-purple-300 sm:pl-0 pl-4">
                time :<span className="text-slate-300">{runtime} min</span>
              </p>
              <p className="flex justify-center items-center gap-2 text-purple-300 sm:pl-0 pl-4">
                revenue :<span className="text-slate-300">{revenue} $</span>
              </p>
            </div>
            <div className="sm:w-1/5 w-full sm:h-full h-1/4 flex sm:flex-col justify-center sm:items-start items-center gap-4">
              <p className="flex justify-center items-center gap-2 text-2xl text-amber-400">
                <FaImdb />
                <span className="text-slate-300 text-xl">
                  {vote_average.toFixed(1)}
                </span>
              </p>
              <p className="flex justify-center items-center gap-2 text-2xl text-cyan-300">
                <FaRegGrinHearts />
                <span className="text-slate-300 text-xl">
                  {Math.round(popularity)}
                </span>
              </p>
              <p className="flex justify-center items-center gap-2 text-2xl text-green-600">
                <AiOutlineLike />
                <span className="text-slate-300 text-xl">63</span>
              </p>
              <p className="flex justify-center items-center gap-2 text-2xl text-rose-600">
                <AiOutlineDislike />
                <span className="text-slate-300 text-xl">63</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
