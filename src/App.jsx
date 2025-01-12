import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import InformationIndex from "./components/informationPage/InformationIndex";
import Footer from "./components/footer/Footer";
import Artists from "./components/artists/Artists";
import Search from "./components/search/Search";
import Header from "./components/header/Header";
import Tvs from "./components/tv/Tvs";
import Movies from "./components/movie/Movies";
import IndexMovie from "./components/movieCategory/IndexMovie";
import IndexTv from "./components/tvCategory/IndexTv";
import Actors from "./components/actors/Actors";
import NotFound from "./components/notFound/NotFound";
import Auth from "./components/auth/Auth";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      {!isLoading && <Header />}
      <Routes>
        <Route path="/" element={<Home setIsLoading={setIsLoading} />} />
        <Route
          path="/search"
          element={<Search setIsLoading={setIsLoading} />}
        />
        <Route
          path="/:type/:id/:title"
          element={<InformationIndex setIsLoading={setIsLoading} />}
        />
        <Route
          path="/artists/:id/:name"
          element={<Artists setIsLoading={setIsLoading} />}
        />
        <Route
          path="/movies"
          element={<Movies setIsLoading={setIsLoading} />}
        />
        <Route path="/tvs" element={<Tvs setIsLoading={setIsLoading} />} />
        <Route
          path="/movies/:category"
          element={<IndexMovie setIsLoading={setIsLoading} />}
        />{" "}
        <Route
          path="/actors"
          element={<Actors setIsLoading={setIsLoading} />}
        />
        <Route
          path="/movies/genre/:genreId"
          element={<IndexMovie setIsLoading={setIsLoading} />}
        />{" "}
        <Route
          path="/tv/:category"
          element={<IndexTv setIsLoading={setIsLoading} />}
        />{" "}
        <Route
          path="/tv/genre/:genreId"
          element={<IndexTv setIsLoading={setIsLoading} />}
        />{" "}
        <Route path="*" element={<NotFound />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {!isLoading && <Footer />}
    </>
  );
}

export default App;
