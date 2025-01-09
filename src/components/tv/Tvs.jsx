import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import TrandTv from "./TrandTv";
import LatestTv from "./LatestTv";
import PopularTv from "./PopularTv";
import ActionTv from "./ActionTv";
import AnimationTv from "./AnimationTv";
import ComedyTv from "./ComedyTv";
import CrimeTv from "./CrimeTv";
import DocumentaryTv from "./DocumentaryTv";
import DramaTv from "./DramaTv";
import FamilyTv from "./FamilyTv";
import FantasyTv from "./FantasyTv";
import HistoryTv from "./HistoryTv";
import MysteryTv from "./MysteryTv";
import RomanceTv from "./RomanceTv";
import WarTv from "./WarTv";
import WesternTv from "./WesternTv";

function Tvs({ setIsLoading }) {
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
          <TrandTv apiKey={apiKey} />
          <LatestTv apiKey={apiKey} />
          <PopularTv apiKey={apiKey} />
          <ActionTv apiKey={apiKey} />
          <AnimationTv apiKey={apiKey} />
          <ComedyTv apiKey={apiKey} />
          <CrimeTv apiKey={apiKey} />
          <DocumentaryTv apiKey={apiKey} />
          <DramaTv apiKey={apiKey} />
          <FamilyTv apiKey={apiKey} />
          <FantasyTv apiKey={apiKey} />
          <HistoryTv apiKey={apiKey} />
          <MysteryTv apiKey={apiKey} />
          <RomanceTv apiKey={apiKey} />
          <WarTv apiKey={apiKey} />
          <WesternTv apiKey={apiKey} />
        </div>
      )}
    </>
  );
}

export default Tvs;
