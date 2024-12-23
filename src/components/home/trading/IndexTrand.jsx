import React, { useEffect, useRef, useState } from "react";
import TitleTranding from "./TitleTranding";
import MovieTrand from "./MovieTrand";
import TvTrand from "./TvTrand";
import axios from "axios";
import Detail from "./Detail";
import Loading from "./Loading";

function IndexTrand({ apiKey }) {
  const [active, setActive] = useState("movie");
  const [detailShow, setDetailShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const slideBtn = useRef(null);

  const [trendingData, setTrendingData] = useState(null);
  const [trendingLoading, setTrendingLoading] = useState(false);
  const [trendingError, setTrendingError] = useState(false);

  const getTrendingData = async () => {
    setTrendingLoading(true);
    setTrendingError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${active}/day?api_key=${apiKey}&page=1`
      );
      setTrendingData(data.results);
      setTrendingLoading(false);
      setTrendingError(false);
    } catch (err) {
      setTrendingError(true);
      console.error("Error fetching trending data:", err);
    } finally {
      setTrendingLoading(false);
    }
  };

  useEffect(() => {
    getTrendingData();
  }, [active]);

  return (
    <section className="w-full h-auto py-5 flex justify-center items-center flex-col relative">
      <div className="md:w-4/5 w-11/12 mx-auto">
        <TitleTranding
          active={active}
          setActive={setActive}
          trendingData={trendingData}
          slideBtn={slideBtn}
        />

        {trendingLoading || (trendingError && <Loading />)}
        {trendingData && active === "movie" ? (
          <MovieTrand
            trendingData={trendingData}
            slideBtn={slideBtn}
            setDetailShow={setDetailShow}
            setSelectedMovie={setSelectedMovie}
          />
        ) : trendingData && active === "tv" ? (
          <TvTrand
            trendingData={trendingData}
            slideBtn={slideBtn}
            setDetailShow={setDetailShow}
            setSelectedMovie={setSelectedMovie}
          />
        ) : null}
      </div>
      {detailShow && selectedMovie && (
        <Detail setDetailShow={setDetailShow} movie={selectedMovie} active={active} />
      )}
    </section>
  );
}

export default IndexTrand;
