import React from "react";
import IndexHero from "./hero/IndexHero";
import IndexTrand from "./trading/IndexTrand";

function Home() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <IndexHero />
      <IndexTrand />
    </section>
  );
}

export default Home;
