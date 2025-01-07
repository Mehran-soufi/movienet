import React, { useEffect, useState } from "react";
import DetArtists from "./DetArtists";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../informationPage/loading/Loading";
import MovieArtist from "./MovieArtist";

function Artists({ setIsLoading }) {
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;

  const [artistData, setArtistData] = useState(null);
  const [artistLoading, setArtistLoading] = useState(false);
  const [artistError, setArtistError] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  const getArtistData = async () => {
    setArtistLoading(true);
    setArtistError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
      );
      setArtistData(data);
      setArtistLoading(false);
      setArtistError(false);
    } catch (err) {
      setArtistError(true);
      setArtistLoading(false);
    } finally {
      setArtistLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getArtistData();
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [id, setIsLoading]);

  return (
    <>
      {artistLoading || artistError || showLoading ? (
        <Loading
          isLoading={artistLoading || showLoading}
          isError={artistError}
        />
      ) : (
        artistData && (
          <>
            <DetArtists artistData={artistData} />
            <MovieArtist apiKey={apiKey} id={id} />
          </>
        )
      )}
    </>
  );
}

export default Artists;
