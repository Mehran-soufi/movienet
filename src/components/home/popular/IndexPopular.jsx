import React, { useEffect, useRef, useState } from "react";
import TitleTranding from "./TitlePopular";
import MoviePopular from "./MoviePopular";
import axios from "axios";
import Detail from "./Detail";
import Loading from "./Loading";
import TvTPopular from "./TvPopular";

function IndexPopular({ apiKey }) {
  const [active, setActive] = useState("movie");
  const [detailShow, setDetailShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const slideBtn = useRef(null);

  const [popularData, setPopularData] = useState(null);
  const [popularLoading, setpopularLoading] = useState(false);
  const [popularError, setpopularError] = useState(false);

  const getPopularData = async () => {
    setpopularLoading(true);
    setpopularError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/popular/${active}/day?api_key=${apiKey}&page=1`
      );
      setPopularData(data.results);
      setpopularLoading(false);
      setpopularError(false);
    } catch (err) {
      setpopularError(true);
      console.error("Error fetching trending data:", err);
    } finally {
      setpopularLoading(false);
    }
  };

  useEffect(() => {
    getPopularData();
  }, [active]);

  return (
    <section className="w-full h-auto py-5 flex justify-center items-center flex-col relative">
      <div className="md:w-4/5 w-11/12 mx-auto">
        <TitleTranding
          active={active}
          setActive={setActive}
          popularData={popularData}
          slideBtn={slideBtn}
        />

        {popularLoading || (popularError && <Loading />)}
        {popularData && active === "movie" ? (
          <MoviePopular
            popularData={popularData}
            slideBtn={slideBtn}
            setDetailShow={setDetailShow}
            setSelectedMovie={setSelectedMovie}
          />
        ) : popularData && active === "tv" ? (
          <TvTPopular
            popularData={popularData}
            slideBtn={slideBtn}
            setDetailShow={setDetailShow}
            setSelectedMovie={setSelectedMovie}
          />
        ) : null}
      </div>
      {detailShow && selectedMovie && (
        <Detail setDetailShow={setDetailShow} movie={selectedMovie} />
      )}
    </section>
  );
}

export default IndexPopular;
