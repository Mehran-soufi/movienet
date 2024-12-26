import React, { useEffect, useState } from "react";
import axios from "axios";
import IndexHero from "./hero/IndexHero";
import IndexTrand from "./trading/IndexTrand";
import IndexLatest from "./latest/IndexLatest";
import IndexPopular from "./popular/IndexPopular";
import IndexTopRated from "./topRated/IndextopRated";
import Loading from "../loading/Loading";

function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [trendingData, setTrendingData] = useState(null);
  const [trendingLoading, setTrendingLoading] = useState(false);
  const [trendingError, setTrendingError] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  const getTrendingData = async () => {
    setTrendingLoading(true);
    setTrendingError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=1`
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
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading || trendingLoading || trendingError ? (
        <Loading
          trendingLoading={trendingLoading}
          trendingError={trendingError}
        />
      ) : (
        <>
          {trendingData && (
            <section className="w-full flex flex-col justify-center items-center">
              <IndexHero trendingData={trendingData} />
              <IndexTrand apiKey={apiKey} />
              <IndexLatest apiKey={apiKey} />
              <IndexPopular apiKey={apiKey} />
              <IndexTopRated apiKey={apiKey} />
            </section>
          )}
        </>
      )}
    </>
  );
}

export default Home;
