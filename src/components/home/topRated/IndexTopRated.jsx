import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Detail from "./Detail";
import Loading from "./Loading";
import TitleTopRated from "./TitleTopRated";
import MovieTopRated from "./MovieTopRated";
import TvTopRated from "./TvTopRated";

function IndexTopRated({ apiKey }) {
  const [active, setActive] = useState("movie");
  const [detailShow, setDetailShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const slideBtn = useRef(null);

  const [topRatedData, setTopRatedData] = useState(null);
  const [topRatedLoading, setTopRatedLoading] = useState(false);
  const [topRatedError, setTopRatedError] = useState(false);

  const getTopRatedData = async () => {
    setTopRatedLoading(true);
    setTopRatedError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${active}/top_rated?api_key=${apiKey}&page=1`
      );
      setTopRatedData(data.results);
      setTopRatedLoading(false);
      setTopRatedError(false);
    } catch (err) {
      setTopRatedError(true);
      setTopRatedLoading(false);
    } finally {
      setTopRatedLoading(false);
    }
  };

  useEffect(() => {
    getTopRatedData();
  }, [active]);

  return (
    <section className="w-full h-auto py-5 flex justify-center items-center flex-col relative">
      <div className="w-11/12 mx-auto">
        <TitleTopRated
          active={active}
          setActive={setActive}
          topRatedData={topRatedData}
          slideBtn={slideBtn}
        />

        {topRatedLoading || (topRatedError && <Loading />)}
        {topRatedData && active === "movie" ? (
          <MovieTopRated
            topRatedData={topRatedData}
            slideBtn={slideBtn}
            setDetailShow={setDetailShow}
            setSelectedMovie={setSelectedMovie}
          />
        ) : topRatedData && active === "tv" ? (
          <TvTopRated
            topRatedData={topRatedData}
            slideBtn={slideBtn}
            setDetailShow={setDetailShow}
            setSelectedMovie={setSelectedMovie}
          />
        ) : null}
      </div>
      {detailShow && selectedMovie && (
        <Detail
          setDetailShow={setDetailShow}
          movie={selectedMovie}
          active={active}
        />
      )}
    </section>
  );
}

export default IndexTopRated;
