import React, { useEffect, useState } from "react";
import DetArtists from "./DetArtists";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../home/actor/Loading";
import MovieArtist from "./MovieArtist";

function Artists() {
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;

  const [artistData, setArtistData] = useState(null);
  const [artistLoading, setArtistLoading] = useState(false);
  const [artistError, setArtistError] = useState(false);

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
    }
  };

  useEffect(() => {
    getArtistData();
  }, [id]);

  return (
    <>
      {artistLoading || (artistError && <Loading />)}
      {artistData && (
        <>
          <DetArtists artistData={artistData} />
          <MovieArtist apiKey={apiKey} id={id} />
        </>
      )}
    </>
  );
}

export default Artists;
