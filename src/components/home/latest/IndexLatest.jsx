import React, { useEffect, useRef, useState } from "react";
import TitleTranding from "./TitleLatest";
import axios from "axios";
import Detail from "./Detail";
import Loading from "./Loading";
import MovieLatest from "./MovieLatest";
import TvLatest from "./TvLatest";

function IndexLatest({ apiKey }) {
  const [active, setActive] = useState("movie");
  const [playing, setPlayig] = useState("now_playing");
  const [detailShow, setDetailShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const slideBtn = useRef(null);

  const [latestData, setLatestData] = useState(null);
  const [latestLoading, setLatestLoading] = useState(false);
  const [latestError, setLatestError] = useState(false);

  const getLatestData = async () => {
    setLatestLoading(true);
    setLatestError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${active}/${playing}?api_key=${apiKey}&language=en&page=1`
      );
      setLatestData(data.results);
      setLatestLoading(false);
      setLatestError(false);
    } catch (err) {
      setLatestError(true);
      setLatestLoading(false);
    } finally {
      setLatestLoading(false);
    }
  };

  useEffect(() => {
    getLatestData();
  }, [active]);

  return (
    <section className="w-full h-auto py-5 flex justify-center items-center flex-col relative">
      <div className="w-11/12 mx-auto">
        <TitleTranding
          active={active}
          playing={playing}
          setPlayig={setPlayig}
          setActive={setActive}
          latestData={latestData}
          slideBtn={slideBtn}
        />

        {latestLoading || (latestError && <Loading />)}
        {latestData && active === "movie" && playing === "now_playing" ? (
          <MovieLatest
            latestData={latestData}
            slideBtn={slideBtn}
            setDetailShow={setDetailShow}
            setSelectedMovie={setSelectedMovie}
          />
        ) : latestData && active === "tv" && playing === "on_the_air" ? (
          <TvLatest
            latestData={latestData}
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

export default IndexLatest;
