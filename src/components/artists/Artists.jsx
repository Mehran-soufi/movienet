import React, { useEffect, useState } from "react";
import DetArtists from "./DetArtists";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      console.log(data);
    } catch (err) {
      setArtistError(true);
      setArtistLoading(false);
    }
  };

  useEffect(() => {
    getArtistData();
  }, [id]);

  if (artistLoading) return <div>Loading...</div>;
  if (artistError) return <div>Error loading data</div>;

  return <>{artistData && <DetArtists artistData={artistData} />}</>;
}

export default Artists;
