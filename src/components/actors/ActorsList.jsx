import React from "react";
import defaultImg from "../../assets/default/default.jpg";
import { Link } from "react-router-dom";

function ActorsList({ actorData }) {
  function truncateText(text, maxLength) {
    if (!text) return "";
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  }
  return (
    <section className="w-full pt-16">
      <div className="w-4/5 mx-auto my-8">
        <div className="w-full flex justify-start items-center gap-2 border-b border-slate-400 py-1">
          <h2 className="text-slate-300 sm:text-xl text-lg">Actors</h2>
        </div>
      </div>
      <div className="w-4/5 mx-auto flex flex-wrap justify-center gap-1">
        {actorData.map((item) => (
          <Link
            to={`/artists/${item.id}/${item.name}`}
            target="_blank"
            key={item.id}
            className="lg:w-[19.5%] sm:w-[30%] sm:h-[40vh] h-[45vh] w-11/12 lg:mx-0 mx-auto my-4 rounded-md cursor-pointer transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-fuchsia-900  bg-slate-950/30"
          >
            <div className="w-full h-5/6">
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                    : defaultImg
                }
                alt={item.title || item.name}
                className="w-full h-full rounded-t-md"
              />
            </div>
            <div className="w-full h-1/6">
              <p className="w-full h-full flex justify-center items-center text-slate-300 sm:text-lg text-base">
                {truncateText(item.title || item.name, 20)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ActorsList;
