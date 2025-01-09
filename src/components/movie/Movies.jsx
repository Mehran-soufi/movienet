import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import TrandMovie from "./TrandMovie";
import LatestMovie from "./LatestMovie";
import PopularMovie from "./PopularMovie";
import ActionMovie from "./ActionMovie";
import AdventureMovie from "./AdventureMovie";
import AnimationMovie from "./AnimationMovie";
import ComedyMovie from "./ComedyMovie";
import CrimeMovie from "./CrimeMovie";
import DocumentaryMovie from "./DocumentaryMovie";
import DramaMovie from "./DramaMovie";
import FamilyMovie from "./FamilyMovie";
import FantasyMovie from "./FantasyMovie";
import HistoryMovie from "./HistoryMovie";
import HorrorMovie from "./HorrorMovie";
import MusicMovie from "./MusicMovie";
import MysteryMovie from "./MysteryMovie";
import RomanceMovie from "./RomanceMovie";
import ScienceFictionMovie from "./ScienceFictionMovie";
import WarMovie from "./WarMovie";
import WesternMovie from "./WesternMovie";

function Movies({ setIsLoading }) {
  const [showLoading, setShowLoading] = useState(true);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setIsLoading]);
  return (
    <>
      {showLoading && <Loading />}
      {!showLoading && (
        <div className="w-full py-16">
          <TrandMovie apiKey={apiKey} />
          <LatestMovie apiKey={apiKey} />
          <PopularMovie apiKey={apiKey} />
          <ActionMovie apiKey={apiKey} />
          <AdventureMovie apiKey={apiKey} />
          <AnimationMovie apiKey={apiKey} />
          <ComedyMovie apiKey={apiKey} />
          <CrimeMovie apiKey={apiKey} />
          <DocumentaryMovie apiKey={apiKey} />
          <DramaMovie apiKey={apiKey} />
          <FamilyMovie apiKey={apiKey} />
          <FantasyMovie apiKey={apiKey} />
          <HistoryMovie apiKey={apiKey} />
          <HorrorMovie apiKey={apiKey} />
          <MusicMovie apiKey={apiKey} />
          <MysteryMovie apiKey={apiKey} />
          <RomanceMovie apiKey={apiKey} />
          <ScienceFictionMovie apiKey={apiKey} />
          <WarMovie apiKey={apiKey} />
          <WesternMovie apiKey={apiKey} />
        </div>
      )}
    </>
  );
}

export default Movies;
