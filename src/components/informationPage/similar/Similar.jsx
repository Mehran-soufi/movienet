import React, { useEffect, useRef, useState } from "react";
import TitleSimilar from "./TitleSimilar";
import axios from "axios";
import Detail from "./Detail";
import Loading from "./Loading";
import MovieSimilar from "./MovieSimilar";

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
      setSimilarLoading(false);
      setSimilarError(false);
    } catch (err) {
      setSimilarError(true);
      setSimilarError(false);
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
      <div className="w-11/12 mx-auto">
        <TitleSimilar similarData={similarData} slideBtn={slideBtn} />

        {similarLoading || (similarError && <Loading />)}

        {similarData && (
          <MovieSimilar
            similarData={similarData}
            slideBtn={slideBtn}
            setDetailShow={setDetailShow}
            setSelectedMovie={setSelectedMovie}
          />
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
