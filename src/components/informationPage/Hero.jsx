import React, { useState, useEffect } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaImdb, FaRegGrinHearts } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { IoCopyOutline, IoDocumentOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import defaultImg from "../../assets/default/default.jpg";

function Hero({ informationData, type }) {
  const [backdropLoaded, setBackdropLoaded] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [backdropUrl, setBackdropUrl] = useState(defaultImg);
  const [posterUrl, setPosterUrl] = useState(defaultImg);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState(null);

  const pageUrl = window.location.href;

  useEffect(() => {
    const updateImageUrls = () => {
      const width = window.innerWidth;
      const size = width < 640 ? "w500" : "original";
      if (informationData) {
        setBackdropUrl(
          `https://image.tmdb.org/t/p/${size}${informationData.backdrop_path}`
        );
        setPosterUrl(
          `https://image.tmdb.org/t/p/${size}${informationData.poster_path}`
        );
      }
    };

    updateImageUrls();
    window.addEventListener("resize", updateImageUrls);

    return () => {
      window.removeEventListener("resize", updateImageUrls);
    };
  }, [informationData]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title:
          informationData?.title || informationData?.name || "Check this out!",
        text: `Enjoy watching this ${type}! ${
          informationData?.title || informationData?.name
        } \n`,
        url: pageUrl,
      });
    } else {
      toast.error("Sharing is not supported on this device!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(pageUrl)
      .then(() => {
        toast.success("Link copied to clipboard!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
        });
      })
      .catch(() => {
        toast.error("Failed to copy the link!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
        });
      });
  };

  const {
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

  useEffect(() => {
    if (informationData) {
      const calculatedLikes = Math.floor(
        ((informationData.vote_average || 5) * 100) / 2
      );
      const calculatedDislikes = Math.floor(
        (informationData.popularity || 100) / 80
      );

      setLikes(calculatedLikes);
      setDislikes(calculatedDislikes);
    }
  }, [informationData]);

  const handleLike = () => {
    if (userReaction === "like") {
      return; 
    }

    setLikes(likes + 1);
    if (userReaction === "dislike") {
      setDislikes(dislikes - 1); 
    }
    setUserReaction("like"); 
    toast.success(`You liked this ${type}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
    });
  };

  const handleDislike = () => {
    if (userReaction === "dislike") {
      return; 
    }

    setDislikes(dislikes + 1);
    if (userReaction === "like") {
      setLikes(likes - 1); 
    }
    setUserReaction("dislike"); 
    toast.error(`You disliked this ${type}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
    });
  };

  return (
    <div className="w-fill sm:h-[80vh] h-[120vh] relative">
      <div className="w-full sm:h-4/5 h-full hero-information">
        <img
          src={backdropLoaded ? backdropUrl : defaultImg}
          alt={title || name}
          className="w-full h-full object-cover object-top"
          onLoad={() => setBackdropLoaded(true)}
        />
      </div>
      <div className="w-full sm:h-[80vh] h-full absolute top-0 left-0 flex sm:flex-row flex-col justify-center items-center">
        <div className="sm:w-1/3 w-full sm:h-full h-1/3 z-10">
          <div className="w-full sm:h-1/4 h-auto flex justify-center items-end pb-4 gap-4 sm:relative absolute bottom-0">
            <button
              className={`outline-none border-none transition duration-75 hover:scale-90 text-xl ${
                userReaction === "like" ? "text-green-500" : "text-white"
              }`}
              title="like"
              onClick={handleLike}
              disabled={userReaction === "like"}
            >
              <AiOutlineLike />
            </button>
            <button
              className={`outline-none border-none transition duration-75 hover:scale-90 text-xl ${
                userReaction === "dislike" ? "text-red-500" : "text-white"
              }`}
              title="dislike"
              onClick={handleDislike}
              disabled={userReaction === "dislike"}
            >
              <AiOutlineDislike />
            </button>
            {isMobile ? (
              <button
                onClick={handleShare}
                className="outline-none border-none transition duration-75 hover:scale-90 text-xl"
                title="Share"
              >
                <FiShare2 />
              </button>
            ) : (
              <button
                onClick={handleCopy}
                className="outline-none border-none transition duration-75 hover:scale-90 text-xl"
                title="Copy"
              >
                <IoCopyOutline />
              </button>
            )}
            <button
              className="outline-none border-none transition duration-75 hover:scale-90 text-xl"
              title="save"
            >
              <IoDocumentOutline />
            </button>
          </div>
          <div className="w-full sm:h-3/4 h-full sm:my-0 my-[25%] ">
            <img
              src={posterLoaded ? posterUrl : defaultImg}
              alt={title || name}
              className="mx-auto w-4/5 h-full rounded-xl object-cover"
              onLoad={() => setPosterLoaded(true)}
            />
          </div>
        </div>
        <div className="sm:w-2/3 w-full sm:h-full h-2/3">
          <div className="w-full sm:h-4/5 h-full flex sm:flex-row flex-col lg:py-8 sm:py-6 py-4">
            <div className="sm:w-4/5 w-full sm:h-full h-3/4 flex flex-col justify-end sm:justify-center items-start gap-4">
              <h1 className="text-5xl font-bold text-white sm:w-auto w-full flex justify-center items-center px-1">
                {title || name}
              </h1>
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
                <span className="text-slate-300 text-xl">{likes}</span>
              </p>
              <p className="flex justify-center items-center gap-2 text-2xl text-rose-600">
                <AiOutlineDislike />
                <span className="text-slate-300 text-xl">{dislikes}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
