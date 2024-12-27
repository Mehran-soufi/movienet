import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Detail from "./Detail";
import Loading from "./Loading";
import TitleUpcoming from "./TitleUpcoming";
import MovieUpcoming from "./MovieUpcoming";
import TvUpcoming from "./TvUpcoming";

function IndexUpcoming({ apiKey }) {
  const [active, setActive] = useState("movie");
  const [detailShow, setDetailShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const slideBtn = useRef(null);

  const [upcomingData, setUpcomingData] = useState(null);
  const [upcomingLoading, setUpcomingLoading] = useState(false);
  const [upcomingError, setUpcomingError] = useState(false);

  const getUpcomingData = async () => {
    setUpcomingLoading(true);
    setUpcomingError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${active}/upcoming?api_key=${apiKey}&page=1`
      );
      setUpcomingData(data.results);
      setUpcomingLoading(false);
      setUpcomingError(false);
    } catch (err) {
      setUpcomingError(true);
      setUpcomingLoading(false);
    } finally {
      setUpcomingLoading(false);
    }
  };

  useEffect(() => {
    getUpcomingData();
  }, [active]);

  return (
    <section className="w-full h-auto py-5 flex justify-center items-center flex-col relative">
      <div className="md:w-4/5 w-11/12 mx-auto">
        <TitleUpcoming
          active={active}
          setActive={setActive}
          upcomingData={upcomingData}
          slideBtn={slideBtn}
        />

        {upcomingLoading || (upcomingError && <Loading />)}
        {upcomingData && active === "movie" ? (
          <MovieUpcoming
            upcomingData={upcomingData}
            slideBtn={slideBtn}
            setDetailShow={setDetailShow}
            setSelectedMovie={setSelectedMovie}
          />
        ) : upcomingData && active === "tv" ? (
          <TvUpcoming
            upcomingData={upcomingData}
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

export default IndexUpcoming;
