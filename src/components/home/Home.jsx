import React from "react";
import Index from "./hero/Index";

function Home() {
  // const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <Index/>
    </section>
  );
}

export default Home;
