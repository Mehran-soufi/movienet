import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import Additional from "./Additional";
import Similar from "./similar/Similar";
import axios from "axios";

function InformationIndex() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { type, id, title } = useParams();

  const [informationData, setInformationData] = useState(null);
  const [informationLoading, setInformationLoading] = useState(false);
  const [informationError, setInformationError] = useState(false);
  const [movieId, setMovieId] = useState(null);

  const getInformationData = async () => {
    setInformationLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
      );
      setInformationData(data);
      setMovieId(data.id);
    } catch (err) {
      setInformationError(true);
      console.error("Error fetching information data:", err);
    } finally {
      setInformationLoading(false);
    }
  };

  useEffect(() => {
    getInformationData();
  }, [type, id]);

  return (
    <>
      <Hero informationData={informationData} />
      <Additional
        informationData={informationData}
        apiKey={apiKey}
        type={type}
      />
      <Similar movieId={movieId} apiKey={apiKey} />
    </>
  );
}

export default InformationIndex;
