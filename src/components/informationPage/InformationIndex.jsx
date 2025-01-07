import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import Additional from "./Additional";
import Similar from "./similar/Similar";
import axios from "axios";
import Credits from "./credits/Credits";
import Loading from "./loading/Loading";
import Download from "./download/Download";

function InformationIndex({ setIsLoading }) {
  const [informationData, setInformationData] = useState(null);
  const [informationLoading, setInformationLoading] = useState(false);
  const [informationError, setInformationError] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [showLoading, setShowLoading] = useState(true);

  const apiKey = import.meta.env.VITE_API_KEY;
  const { type, id, title } = useParams();

  const getInformationData = async () => {
    setInformationLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
      );
      setInformationData(data);
      setMovieId(data.id);
      setInformationLoading(false);
      setInformationError(false);
    } catch (err) {
      setInformationError(true);
      setInformationLoading(false);
    } finally {
      setInformationLoading(false);
    }
  };

  useEffect(() => {
    getInformationData();
    const timer = setTimeout(() => {
      setShowLoading(false);
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [type, id, setIsLoading]);

  return (
    <>
      {informationLoading || informationError || showLoading ? (
        <Loading
          isLoading={informationLoading || showLoading}
          isError={informationError}
        />
      ) : (
        <>
          {informationData && (
            <>
              <Hero informationData={informationData} />
              <Additional
                informationData={informationData}
                apiKey={apiKey}
                type={type}
              />
              <Download />
              <Similar movieId={movieId} apiKey={apiKey} />
              <Credits apiKey={apiKey} movieId={movieId} type={type} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default InformationIndex;
