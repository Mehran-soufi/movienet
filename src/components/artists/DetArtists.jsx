import React, { useState } from "react";
import defaultImg from "../../assets/default/default.jpg";

function DetArtists({ artistData }) {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="w-full h-auto my-16">
      <div className="lg:w-4/5 w-11/12 h-full py-4 mx-auto flex flex-col sm:flex-row justify-center items-center">
        <div className="sm:w-1/3 w-full h-full flex justify-center items-center">
          <div className="w-11/12 h-[50vh] rounded-md">
            <img
              src={
                loadedImages[artistData.id]
                  ? `https://image.tmdb.org/t/p/original${artistData.profile_path}`
                  : defaultImg
              }
              alt={artistData.name}
              className="w-full h-full rounded-lg"
              onLoad={() => handleImageLoad(artistData.id)}
            />
          </div>
        </div>
        <div className="sm:w-2/3 w-11/12 h-full flex justify-center items-center">
          <div className="w-full h-4/5">
            <h1 className="w-full sm:pb-2 py-2 border-b text-white lg:text-5xl text-2xl uppercase">
              {artistData.name}
            </h1>
            <p className="my-2 text-slate-200">{artistData.biography}</p>
            <p className="my-2 text-slate-300">
              Birth day:{" "}
              <span className="pl-1 text-slate-400">{artistData.birthday}</span>
            </p>
            <p className="my-2 text-slate-300">
              Death day:{" "}
              <span className="pl-1 text-slate-400">
                {artistData.deathday || "-"}
              </span>
            </p>
            <p className="my-2 text-slate-300">
              Place of birth:{" "}
              <span className="pl-1 text-slate-400">
                {artistData.place_of_birth}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetArtists;
