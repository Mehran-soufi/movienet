import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Additional({ informationData, apiKey, type }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (informationData) {
      const { id } = informationData;
      const fetchVideoUrl = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}`
          );
          const data = await response.json();
          const trailers = data.results.filter(
            (video) => video.type === "Trailer"
          );
          if (trailers.length > 0) {
            setVideoUrl(`https://www.youtube.com/embed/${trailers[0].key}`);
          }
        } catch (error) {
          console.error("Error fetching video URL:", error);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchVideoUrl();
    }
  }, [informationData, apiKey, type]);

  if (!informationData) {
    return <div>Loading...</div>;
  }

  const { overview, production_companies, tagline } = informationData;

  return (
    <div className="w-full h-[70vh]">
      <div className="w-4/5 mx-auto h-full flex justify-center items-center py-4">
        <div className="w-1/2 h-full">
          {loading ? (
            <Skeleton height="100%" width="91%" containerClassName="w-11/12 h-full"
            baseColor="#334155"
            highlightColor="#94a3b8" />
          ) : error ? (
            <div className="w-11/12 mx-0 h-full bg-black rounded-xl flex justify-center items-center text-white">
              Error loading trailer
            </div>
          ) : videoUrl ? (
            <iframe
              src={videoUrl}
              className="w-11/12 mx-0 h-full rounded-xl"
              title="Trailer"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-11/12 mx-0 h-full bg-black rounded-xl flex justify-center items-center text-white">
              No trailer available
            </div>
          )}
        </div>
        <div className="w-1/2 h-full flex flex-col justify-start items-start gap-2">
          <h2 className="text-slate-400 text-2xl">Overview:</h2>
          <p className="text-slate-200 text-justify">{overview}</p>
          <h2 className="text-slate-400 text-2xl">Production Companies:</h2>
          <ul className="flex items-center gap-2">
            {production_companies.map((company) => (
              <li key={company.id}>{company.name}</li>
            ))}
          </ul>
          <h2 className="text-slate-400 text-2xl">Tagline:</h2>
          <p className="text-slate-200">{tagline}</p>
        </div>
      </div>
    </div>
  );
}

export default Additional;
