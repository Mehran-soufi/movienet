import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import InformationIndex from "./components/informationPage/InformationIndex";
import Footer from "./components/footer/Footer";
import Artists from "./components/artists/Artists";
import Search from "./components/search/Search";
import Header from "./components/header/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {!isLoading && <Header />}
      <Routes>
        <Route path="/" element={<Home setIsLoading={setIsLoading} />} />
        <Route path="/search" element={<Search setIsLoading={setIsLoading} />} />
        <Route
          path="/:type/:id/:title"
          element={<InformationIndex setIsLoading={setIsLoading} />}
        />
        <Route
          path="/artists/:id/:name"
          element={<Artists setIsLoading={setIsLoading} />}
        />
      </Routes>
      {!isLoading && <Footer />}
    </>
  );
}

export default App;
