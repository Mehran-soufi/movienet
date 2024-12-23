import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import InformationIndex from "./components/informationPage/InformationIndex";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<InformationIndex />} path="/:type/:id/:title" />
      </Routes>
    </>
  );
}

export default App;
