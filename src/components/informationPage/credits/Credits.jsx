import React, { useEffect, useState } from "react";
import Actor from "./Actor";
import axios from "axios";
import Agents from "./Agents";
import CreditsLoad from "./CreditsLoad";

function Credits({ apiKey, movieId, type }) {
  const [creditsData, setCreditsData] = useState(null);
  const [creditsLoading, setCreditsLoading] = useState(false);
  const [creditsError, setCreditsError] = useState(false);

  const getCreditsData = async () => {
    setCreditsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${movieId}/credits?api_key=${apiKey}`
      );
      setCreditsData(data);
      setCreditsError(false);
      setCreditsLoading(false);
    } catch (err) {
      setCreditsError(true);
      setCreditsLoading(false);
    } finally {
      setCreditsLoading(false);
    }
  };

  useEffect(() => {
    getCreditsData();
  }, [type, movieId]);

  return (
    <section className="w-4/5 mx-auto flex flex-col justify-center items-start my-4">
      <p className="sm:text-2xl text-xl text-slate-300 mt-8 mb-4">Actors</p>
      {creditsLoading && <CreditsLoad />}
      {creditsError && <CreditsLoad />}
      {creditsData && !creditsLoading && !creditsError && (
        <Actor creditsData={creditsData} />
      )}

      <p className="sm:text-2xl text-xl text-slate-300 mt-8 mb-4">Agents</p>
      {creditsLoading && <CreditsLoad />}
      {creditsError && <CreditsLoad />}
      {creditsData && !creditsLoading && !creditsError && (
        <Agents creditsData={creditsData} />
      )}
    </section>
  );
}

export default Credits;
