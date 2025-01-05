import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import ManActor from "./ManActor";
import TitleActor from "./TitleActor";
import WomanActor from "./WomanActor";

function IndexActor({ apiKey }) {
  const [gender, setGender] = useState("2");
  const slideBtn = useRef(null);

  const [actorData, setActorData] = useState(null);
  const [actorLoading, setActorLoading] = useState(false);
  const [actorError, setActorError] = useState(false);

  const getactorData = async () => {
    setActorLoading(true);
    setActorError(false);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`
      );
      setActorData(data.results);
      setActorLoading(false);
      setActorError(false);
      
    } catch (err) {
      setActorError(true);
      setActorLoading(false);
    } finally {
      setActorLoading(false);
    }
  };

  useEffect(() => {
    getactorData();
  }, []);

  const filteredActors = actorData?.filter(
    (actor) => actor.gender.toString() === gender
  );

  return (
    <section className="w-full h-auto py-5 flex justify-center items-center flex-col relative">
      <div className="md:w-4/5 w-11/12 mx-auto">
        <TitleActor
          gender={gender}
          setGender={setGender}
          actorData={actorData}
          slideBtn={slideBtn}
        />

        {actorLoading || (actorError && <Loading />)}
        {filteredActors && gender === "2" ? (
          <ManActor actorData={filteredActors} slideBtn={slideBtn} />
        ) : filteredActors && gender === "1" ? (
          <WomanActor actorData={filteredActors} slideBtn={slideBtn} />
        ) : null}
      </div>
    </section>
  );
}

export default IndexActor;
