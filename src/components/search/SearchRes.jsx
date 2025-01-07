import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import defaultImg from "../../assets/default/default.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function SearchRes({ searchText, searchData, searchItem }) {
  const [loadedImages, setLoadedImages] = useState({});
  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  function truncateText(text, maxLength) {
    if (!text) return "";
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  }

  function getLink(item) {
    if (searchItem === "multi") {
      switch (item.media_type) {
        case "person":
          return `/artists/${item.id}/${item.name}`;
        case "tv":
          return `/tv/${item.id}/${item.title || item.name}`;
        case "movie":
          return `/movie/${item.id}/${item.title || item.name}`;
        default:
          return "#";
      }
    } else {
      switch (searchItem) {
        case "person":
          return `/artists/${item.id}/${item.name}`;
        case "tv":
          return `/tv/${item.id}/${item.title || item.name}`;
        case "movie":
          return `/movie/${item.id}/${item.title || item.name}`;
        default:
          return "#";
      }
    }
  }

  return (
    <div className="w-full h-1/2">
      {searchData ? (
        <div className="w-11/12 h-full flex justify-center items-center mx-auto">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={5}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
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
            className="mySwiper w-full h-full"
          >
            {searchData.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  to={getLink(item)}
                  target="_blank"
                  className="w-full h-[90%] flex justify-between items-center flex-col cursor-pointer bg-slate-950/30 rounded-md transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-fuchsia-900 relative"
                  data-media-type={item.media_type}
                >
                  <img
                    src={
                      item.profile_path || item.poster_path
                        ? `https://image.tmdb.org/t/p/original${
                            item.profile_path || item.poster_path
                          }`
                        : defaultImg
                    }
                    alt={item.title || item.name}
                    className="w-full h-4/5 rounded-t-md"
                    onLoad={() => handleImageLoad(item.id)}
                  />

                  <p className="w-full h-1/5 p-1 flex justify-center items-center text-slate-300 sm:text-lg text-base">
                    {truncateText(item.title || item.name, 20)}
                  </p>
                  <span className="absolute top-1 left-1 bg-cyan-600 px-2 py-1 rounded text-white">
                    {searchItem === "multi" ? item.media_type : searchItem}
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-lg text-rose-400">
            No results found for "{searchText}"
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchRes;
