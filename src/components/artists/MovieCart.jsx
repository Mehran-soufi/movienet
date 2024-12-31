import React, { useState, useEffect } from "react";
import defaultImg from "../../assets/default/default.jpg";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

function MovieCart({ moArtData }) {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setItems(moArtData.slice(0, 20));
  }, [moArtData]);

  function truncateText(text, maxLength) {
    if (!text) return "";
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  }

  const fetchMoreData = () => {
    if (items.length >= moArtData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems(items.concat(moArtData.slice(items.length, items.length + 20)));
    }, 1500);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4 style={{ width: "100%" ,textAlign: "center" }} >Loading...</h4>}
      endMessage={
        <p style={{ width: "100%" ,textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      className="flex flex-wrap justify-start gap-1"
    >
      {items.map((movie) => (
        <Link
          to={`/movie/${movie.id}/${movie.title || movie.name}`}
          target="_blank"
          key={movie.id}
          className="lg:w-[14%] sm:w-[30%] sm:h-[40vh] h-[45vh] w-11/12 lg:mx-0 mx-auto my-4 rounded-md cursor-pointer transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-fuchsia-900"
        >
          <div className="w-full h-5/6">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
              className="w-full h-full rounded-t-md"
            />
          </div>
          <div className="w-full h-1/6">
            <p className="w-full h-full flex justify-center items-center text-slate-300 sm:text-lg text-base">
              {truncateText(movie.title, 20)}
            </p>
          </div>
        </Link>
      ))}
    </InfiniteScroll>
  );
}

export default MovieCart;
