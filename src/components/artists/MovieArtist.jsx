import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCart from "./MovieCart";
import TvCart from "./TvCart";
import TitleCart from "./TitleCart";

function MovieArtist({ apiKey, id }) {
  const [active, setActive] = useState("movie");
  const [moArtData, setMoArtData] = useState([]);
  const [moArtLoading, setMoArtLoading] = useState(false);
  const [moArtError, setMoArtError] = useState(false);

  const getMoArtData = async () => {
    setMoArtLoading(true);
    setMoArtError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${id}/${active}_credits?api_key=${apiKey}`
      );
      setMoArtData(data.cast);
      setMoArtLoading(false);
    } catch (err) {
      setMoArtError(true);
      setMoArtLoading(false);
    }
  };

  useEffect(() => {
    getMoArtData();
  }, [active]);

  return (
    <section className="w-full h-auto my-4">
      <div className="w-4/5 mx-auto flex justify-start items-center flex-wrap my-4 gap-1">
        <TitleCart
          active={active}
          setActive={setActive}
          moArtData={moArtData}
        />
        {moArtLoading && <p>Loading...</p>}
        {moArtError && <p>Error loading data.</p>}

        {moArtData && active === "movie" ? (
          <MovieCart
            moArtData={moArtData}
            active={active}
          />
        ) : moArtData && active === "tv" ? (
          <TvCart
            moArtData={moArtData}
            active={active}
          />
        ) : null}
      </div>
    </section>
  );
}

export default MovieArtist;
