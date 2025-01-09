import React, { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import genres from "../../genres";
import defaultImg from "../../assets/default/default.jpg";

function Detail({ setDetailShow, movie }) {
  const [loaded, setLoaded] = useState(false);
  const [bgImageUrl, setBgImageUrl] = useState(defaultImg);
  const animationVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const updateBgImageUrl = () => {
      const width = window.innerWidth;
      const size = width < 640 ? "w500" : "original";
      const newBgImageUrl = movie?.backdrop_path
        ? `https://image.tmdb.org/t/p/${size}${movie.backdrop_path}`
        : defaultImg;
      setBgImageUrl(newBgImageUrl);
    };

    updateBgImageUrl();
    window.addEventListener("resize", updateBgImageUrl);

    return () => {
      window.removeEventListener("resize", updateBgImageUrl);
    };
  }, [movie]);

  return (
    <AnimatePresence mode="wait">
      {movie && (
        <motion.div
          key={movie.id}
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full sm:h-[70vh] h-[120vh] relative"
        >
          <div className="w-full h-full">
            <img
              src={bgImageUrl}
              alt={movie?.title || movie?.name || "Movie Poster"}
              className="w-full h-full object-fill"
              onLoad={() => setLoaded(true)}
              style={{ display: loaded ? "block" : "none" }}
            />
            {!loaded && (
              <img
                src={defaultImg}
                alt="Loading"
                className="w-full h-full object-fill"
              />
            )}
            <button
              onClick={() => setDetailShow(false)}
              className="absolute sm:top-[5%] top-2 right-2 sm:right-[1%] z-50 sm:text-3xl text-2xl text-rose-500 transition duration-200 ease-in-out hover:scale-90"
            >
              <IoMdCloseCircle />
            </button>
          </div>
          <div className="w-full h-full flex sm:flex-row flex-col mx-auto absolute top-0 left-0 sm:bg-gradient-to-br bg-gradient-to-b from-black to-transparent">
            <div className="sm:w-1/4 sm:h-full w-full h-2/5 flex justify-center items-center">
              <div className="w-11/12 h-[95%]">
                <img
                  src={bgImageUrl}
                  alt={movie?.title || movie?.name || "Movie Poster"}
                  className="w-full h-full rounded-md object-cover object-center mx-auto"
                  onLoad={() => setLoaded(true)}
                  style={{ display: loaded ? "block" : "none" }}
                />
                {!loaded && (
                  <img
                    src={defaultImg}
                    alt="Loading"
                    className="w-full h-full rounded-md object-cover object-center mx-auto"
                  />
                )}
              </div>
            </div>
            <div className="sm:w-3/4 sm:h-full w-full h-3/5 flex justify-center items-center px-[5%]">
              <div className="w-full h-[90%] flex flex-col justify-center items-start">
                <h2 className="text-white lg:text-5xl sm:text-4xl text-3xl mb-2">
                  {movie.title || movie.name}
                </h2>
                <p className="w-11/12 my-2 sm:text-lg text-base text-slate-300">
                  {movie.overview}
                </p>
                <p className="my-2 sm:text-lg text-base text-slate-300">
                  Country: {movie.original_language}
                </p>
                <p className="sm:text-lg text-base my-2 text-slate-300">
                  Genre: {movie.genre_ids.map((id) => genres[id]).join(" - ")}
                </p>
                <p className="my-2 sm:text-lg text-base text-slate-300">
                  Year:{" "}
                  {
                    (movie.release_date || movie.first_air_date || "").split(
                      "-"
                    )[0]
                  }
                </p>
                <p className="sm:text-lg text-base text-yellow-400 flex items-center gap-1">
                  <FaImdb /> {movie.vote_average.toFixed(1)}
                </p>
                <Link
                  to={`/movie/${movie.id}/${movie.title || movie.name}`}
                  target="_blank"
                  className="w-28 my-2 outline-none no-underline border-none bg-indigo-600 rounded-md py-1 px-10 text-white sm:text-lg text-base cursor-pointer transition duration-75 hover:scale-95"
                >
                  view
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Detail;
