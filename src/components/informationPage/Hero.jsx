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
    <div className="w-fill h-[80vh] relative">
      <div className="w-full h-4/5 hero-information">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title || name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-full h-[80vh] absolute top-0 left-0 flex justify-center items-center">
        <div className="w-1/3 h-full z-10">
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
        <div className="w-2/3 h-full">
          <div className="w-full h-4/5 flex py-8">
            <div className="w-4/5 h-full flex flex-col justify-start items-start gap-4">
              <h1 className="text-5xl font-bold text-white">{title || name}</h1>
              <p className="flex justify-center items-center gap-2 text-purple-300">
                year of production :
                <span className="text-slate-300">{year}</span>
              </p>
              <p className="flex justify-center items-center gap-2 text-purple-300">
                genre :<span className="text-slate-300">{genreNames}</span>
              </p>
              <p className="flex justify-center items-center gap-2 text-purple-300">
                Manufacturer country :
                <span className="text-slate-300">{original_language}</span>
              </p>
              <p className="flex justify-center items-center gap-2 text-purple-300">
                time :<span className="text-slate-300">{runtime} min</span>
              </p>
              <p className="flex justify-center items-center gap-2 text-purple-300">
                revenue :<span className="text-slate-300">{revenue} $</span>
              </p>
            </div>
            <div className="w-1/5 h-full flex flex-col justify-center items-start gap-4">
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
