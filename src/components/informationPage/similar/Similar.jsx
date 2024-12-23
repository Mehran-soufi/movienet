import React, { useEffect, useRef, useState } from "react";
import TitleSimilar from "./TitleSimilar";
import axios from "axios";
import Detail from "./Detail";
import Loading from "./Loading";
import MovieSimilar from "./MovieSimilar";
import TvTSimilar from "./TvTSimilar";

function Similar({ apiKey, movieId }) {
  const [active, setActive] = useState("movie");
  const [detailShow, setDetailShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const slideBtn = useRef(null);

  const [similarData, setSimilarData] = useState(null);
  const [similarLoading, setSimilarLoading] = useState(false);
  const [similarError, setSimilarError] = useState(false);

  const getSimilarData = async () => {
    setSimilarLoading(true);
    setSimilarError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${active}/${movieId}/similar?api_key=${apiKey}`
      );
      setSimilarData(data.results);
    } catch (err) {
      setSimilarError(true);
      console.error("Error fetching similar data:", err);
    } finally {
      setSimilarLoading(false);
    }
  };

  useEffect(() => {
    if (movieId) {
      getSimilarData();
    }
  }, [active, movieId]);

  return (
    <section className="w-full h-auto py-5 flex justify-center items-center flex-col relative">
      <div className="md:w-4/5 w-11/12 mx-auto">
        <TitleSimilar
          active={active}
          setActive={setActive}
          similarData={similarData}
          slideBtn={slideBtn}
        />

        {similarLoading || similarError ? (
          <Loading />
        ) : similarData && similarData.length > 0 ? (
          active === "movie" ? (
            <MovieSimilar
              similarData={similarData}
              slideBtn={slideBtn}
              setDetailShow={setDetailShow} 
              setSelectedMovie={setSelectedMovie}

            />
          ) : (
            <TvTSimilar
              similarData={similarData}
              slideBtn={slideBtn}
              setDetailShow={setDetailShow}
              setSelectedMovie={setSelectedMovie}
            />
          )
        ) : (
          <div className="text-gray-500">No similar content available</div>
        )}
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

export default Similar;
